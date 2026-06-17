import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import ArticleWithBackgroundImageBlogTemplate from "./article-background-image";
import CommunityBlogPostsBlogTemplate from "./community-blog-posts";
import DefaultBlogTemplate from "./default";
import FeaturedArticleWithHeaderBlogTemplate from "./featured-article-header";
import LiveBloggingBlogTemplate from "./live-blogging";
import RightSidebarArticleBlogTemplate from "./right-sidebar-article";

export default function AllBlogTemplates() {
  return (
    <>
      <BlockBreadcrumb
        title="Blog Templates"
        description="Get started with a collection of Tailwind CSS blog templates, themes, and article layouts to publish content crafted with built-in SEO optimization."
      />
      <BlockSection
        title="Default blog template"
        description="Use this free blog template to show the content of an article using the Flowbite Typography plugin including the author, post date, and a comments section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultBlogTemplate />
      </BlockSection>
      <BlockSection
        title="Article with background image"
        description="Get started with this article layout with a featured background image, author, post category, comments section, and a right sidebar with widgets."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/search-bar-card-links.tsx"
      >
        <ArticleWithBackgroundImageBlogTemplate />
      </BlockSection>
      <BlockSection
        title="Community blog posts"
        description="Use this blog template to show an article with post reactions, comments section, author details, post date, post category, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/illustration-links.tsx"
      >
        <CommunityBlogPostsBlogTemplate />
      </BlockSection>
      <BlockSection
        title="Featured article with header"
        description="Use this blog post layout to show a featured title with a lead paragraph, social media share icons, and a comments section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <FeaturedArticleWithHeaderBlogTemplate />
      </BlockSection>
      <BlockSection
        title="Live blogging"
        description="Use this example for live blogging by posting new content entries for reporting live events similar to large news outlets such as CNN."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/search-bar-card-links.tsx"
      >
        <LiveBloggingBlogTemplate />
      </BlockSection>
      <BlockSection
        title="Right sidebar article"
        description="This example can be used as a standard article layout where the main content is on the left side and a sidebar with widgets on the right similar to WordPress."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/illustration-links.tsx"
      >
        <RightSidebarArticleBlogTemplate />
      </BlockSection>
    </>
  );
}
