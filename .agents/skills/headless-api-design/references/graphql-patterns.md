# GraphQL Patterns for Headless CMS

## Hot Chocolate Setup (.NET)

### Basic Configuration

```csharp
// Program.cs
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddSubscriptionType<Subscription>()
    .AddType<ArticleType>()
    .AddType<PageType>()
    .AddType<MediaItemType>()
    .AddFiltering()
    .AddSorting()
    .AddProjections()
    .AddAuthorization();

app.MapGraphQL();
```

### Query Implementation

```csharp
public class Query
{
    [UseDbContext(typeof(ContentDbContext))]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Article> GetArticles(
        [ScopedService] ContentDbContext context)
    {
        return context.Articles.Where(a => a.Status == ContentStatus.Published);
    }

    [UseDbContext(typeof(ContentDbContext))]
    public async Task<Article?> GetArticle(
        [ScopedService] ContentDbContext context,
        Guid id)
    {
        return await context.Articles
            .Include(a => a.Author)
            .FirstOrDefaultAsync(a => a.Id == id);
    }

    [UseDbContext(typeof(ContentDbContext))]
    public async Task<ContentItem?> GetContentByPath(
        [ScopedService] ContentDbContext context,
        string path)
    {
        return await context.ContentItems
            .FirstOrDefaultAsync(c => c.Slug == path);
    }
}
```

### Type Definitions

```csharp
public class ArticleType : ObjectType<Article>
{
    protected override void Configure(IObjectTypeDescriptor<Article> descriptor)
    {
        descriptor.Name("Article");
        descriptor.Implements<ContentItemType>();

        descriptor.Field(a => a.Id).Type<NonNullType<IdType>>();
        descriptor.Field(a => a.Title).Type<NonNullType<StringType>>();
        descriptor.Field(a => a.Body).Type<NonNullType<StringType>>();

        descriptor.Field(a => a.Author)
            .ResolveWith<ArticleResolvers>(r => r.GetAuthor(default!, default!))
            .UseDbContext<ContentDbContext>();

        descriptor.Field(a => a.Categories)
            .ResolveWith<ArticleResolvers>(r => r.GetCategories(default!, default!))
            .UseDbContext<ContentDbContext>();

        descriptor.Field("readingTime")
            .Type<IntType>()
            .Resolve(context =>
            {
                var article = context.Parent<Article>();
                var wordCount = article.Body.Split(' ').Length;
                return wordCount / 200; // ~200 words per minute
            });
    }
}

public class ArticleResolvers
{
    public async Task<Author?> GetAuthor(
        [Parent] Article article,
        [ScopedService] ContentDbContext context)
    {
        return await context.Authors
            .FirstOrDefaultAsync(a => a.Id == article.AuthorId);
    }

    public async Task<IEnumerable<Category>> GetCategories(
        [Parent] Article article,
        [ScopedService] ContentDbContext context)
    {
        return await context.Categories
            .Where(c => article.CategoryIds.Contains(c.Id))
            .ToListAsync();
    }
}
```

## DataLoader Pattern

### Batch Loading Related Data

```csharp
public class AuthorBatchDataLoader : BatchDataLoader<Guid, Author>
{
    private readonly IDbContextFactory<ContentDbContext> _contextFactory;

    public AuthorBatchDataLoader(
        IBatchScheduler batchScheduler,
        IDbContextFactory<ContentDbContext> contextFactory,
        DataLoaderOptions? options = null)
        : base(batchScheduler, options)
    {
        _contextFactory = contextFactory;
    }

    protected override async Task<IReadOnlyDictionary<Guid, Author>> LoadBatchAsync(
        IReadOnlyList<Guid> keys,
        CancellationToken cancellationToken)
    {
        await using var context = await _contextFactory.CreateDbContextAsync(cancellationToken);

        return await context.Authors
            .Where(a => keys.Contains(a.Id))
            .ToDictionaryAsync(a => a.Id, cancellationToken);
    }
}

// Usage in resolver
public class ArticleResolvers
{
    public async Task<Author?> GetAuthor(
        [Parent] Article article,
        AuthorBatchDataLoader dataLoader)
    {
        return await dataLoader.LoadAsync(article.AuthorId);
    }
}
```

## Relay Connection Pattern

### Cursor-Based Pagination

```csharp
public class Query
{
    [UsePaging(MaxPageSize = 100, DefaultPageSize = 20, IncludeTotalCount = true)]
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Article> GetArticles(
        [ScopedService] ContentDbContext context)
    {
        return context.Articles
            .Where(a => a.Status == ContentStatus.Published)
            .OrderByDescending(a => a.PublishedUtc);
    }
}
```

### Custom Cursor Implementation

```csharp
public class ArticleCursorPaginationHandler
{
    public async Task<Connection<Article>> GetArticlesAsync(
        ContentDbContext context,
        int? first,
        string? after,
        int? last,
        string? before,
        ArticleFilter? filter)
    {
        var query = context.Articles.AsQueryable();

        // Apply filter
        if (filter != null)
        {
            query = ApplyFilter(query, filter);
        }

        // Decode cursor
        Guid? afterId = after != null ? DecodeCursor(after) : null;
        Guid? beforeId = before != null ? DecodeCursor(before) : null;

        // Apply cursor-based filtering
        if (afterId.HasValue)
        {
            var afterItem = await context.Articles.FindAsync(afterId.Value);
            if (afterItem != null)
            {
                query = query.Where(a => a.PublishedUtc < afterItem.PublishedUtc ||
                    (a.PublishedUtc == afterItem.PublishedUtc && a.Id.CompareTo(afterItem.Id) > 0));
            }
        }

        // Get items
        var items = await query
            .OrderByDescending(a => a.PublishedUtc)
            .ThenBy(a => a.Id)
            .Take((first ?? 20) + 1)
            .ToListAsync();

        // Build connection
        var hasNextPage = items.Count > (first ?? 20);
        if (hasNextPage) items = items.Take(first ?? 20).ToList();

        return new Connection<Article>
        {
            Edges = items.Select(a => new Edge<Article>
            {
                Node = a,
                Cursor = EncodeCursor(a.Id)
            }).ToList(),
            PageInfo = new PageInfo
            {
                HasNextPage = hasNextPage,
                HasPreviousPage = afterId.HasValue,
                StartCursor = items.FirstOrDefault() != null ? EncodeCursor(items.First().Id) : null,
                EndCursor = items.LastOrDefault() != null ? EncodeCursor(items.Last().Id) : null
            }
        };
    }

    private string EncodeCursor(Guid id) =>
        Convert.ToBase64String(Encoding.UTF8.GetBytes(id.ToString()));

    private Guid? DecodeCursor(string cursor)
    {
        try
        {
            var decoded = Encoding.UTF8.GetString(Convert.FromBase64String(cursor));
            return Guid.Parse(decoded);
        }
        catch
        {
            return null;
        }
    }
}
```

## Filtering and Sorting

### Custom Filter Types

```csharp
public class ArticleFilterType : FilterInputType<Article>
{
    protected override void Configure(IFilterInputTypeDescriptor<Article> descriptor)
    {
        descriptor.Name("ArticleFilter");

        descriptor.Field(a => a.Status);
        descriptor.Field(a => a.Title).Type<StringOperationFilterInputType>();
        descriptor.Field(a => a.PublishedUtc);
        descriptor.Field(a => a.AuthorId);

        // Custom filter for tags
        descriptor.Field("tags")
            .Type<ListFilterInputType<StringOperationFilterInputType>>();

        // Full-text search
        descriptor.Field("search")
            .Type<StringType>()
            .Description("Full-text search across title and body");
    }
}
```

### Custom Sort Types

```csharp
public class ArticleSortType : SortInputType<Article>
{
    protected override void Configure(ISortInputTypeDescriptor<Article> descriptor)
    {
        descriptor.Name("ArticleSort");

        descriptor.Field(a => a.Title);
        descriptor.Field(a => a.PublishedUtc);
        descriptor.Field(a => a.CreatedUtc);

        // Computed field sorting
        descriptor.Field("readingTime")
            .Type<SortEnumType>();
    }
}
```

## Schema Stitching for Multi-Service

```csharp
// Gateway service
builder.Services
    .AddGraphQLServer()
    .AddRemoteSchema("content")
    .AddRemoteSchema("media")
    .AddRemoteSchema("users")
    .AddTypeExtensionsFromFile("./stitching.graphql");

// stitching.graphql
extend type Article {
    author: User @delegate(schema: "users", path: "user(id: $fields:authorId)")
    featuredImage: MediaItem @delegate(schema: "media", path: "mediaItem(id: $fields:featuredImageId)")
}
```

## Subscriptions for Real-Time Updates

```csharp
public class Subscription
{
    [Subscribe]
    [Topic]
    public Article OnArticlePublished(
        [EventMessage] Article article)
    {
        return article;
    }

    [Subscribe]
    [Topic("{contentType}")]
    public ContentItem OnContentUpdated(
        string contentType,
        [EventMessage] ContentItem content)
    {
        return content;
    }
}

// Publishing events
public class ArticleService
{
    private readonly ITopicEventSender _eventSender;

    public async Task PublishAsync(Article article)
    {
        article.Status = ContentStatus.Published;
        await _repository.UpdateAsync(article);

        // Send subscription event
        await _eventSender.SendAsync(
            nameof(Subscription.OnArticlePublished),
            article);

        await _eventSender.SendAsync(
            article.ContentType,
            (ContentItem)article);
    }
}
```

## Persisted Queries

```csharp
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .UsePersistedQueryPipeline()
    .AddReadOnlyFileSystemQueryStorage("./persisted-queries");

// Client sends hash instead of query
// POST /graphql
// {
//   "id": "abc123",
//   "variables": { "first": 10 }
// }
```

## Error Handling

```csharp
public class ContentNotFoundError : IError
{
    public string Message => $"Content with ID '{ContentId}' was not found.";
    public string Code => "CONTENT_NOT_FOUND";
    public Guid ContentId { get; }

    public ContentNotFoundError(Guid contentId)
    {
        ContentId = contentId;
    }
}

public class Query
{
    public async Task<Article> GetArticle(
        [ScopedService] ContentDbContext context,
        Guid id)
    {
        var article = await context.Articles.FindAsync(id);

        if (article == null)
        {
            throw new GraphQLException(
                ErrorBuilder.New()
                    .SetMessage($"Article with ID '{id}' not found.")
                    .SetCode("ARTICLE_NOT_FOUND")
                    .SetExtension("articleId", id)
                    .Build());
        }

        return article;
    }
}
```
