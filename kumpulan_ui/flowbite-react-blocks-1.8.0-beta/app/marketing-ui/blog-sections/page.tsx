"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CardWithImageBlogSection } from "./card-with-image";
import { CenteredPostsBlogSection } from "./centered-posts";
import { DefaultBlogSection } from "./default";
import { FeaturedPostBlogSection } from "./featured-post";
import { ListWithHeadingBlogSection } from "./list-with-heading";

export default function AllBlogSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Blog Sections"
        description="Get started with a collection of website sections related to the blog area of your website including blog posts, article pages, comments, categories, and more."
      />
      <BlockSection
        title="Default blog card"
        description="Use this example to show a preview of a blog post including the title, description, category, author, publication date, and CTA link."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/blog-sections/default.tsx"
      >
        <DefaultBlogSection />
      </BlockSection>
      <BlockSection
        title="Blog post list with heading"
        description="This example can be used to show a list of blog posts alongside a heading with a paragraph."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/blog-sections/list-with-heading.tsx"
      >
        <ListWithHeadingBlogSection />
      </BlockSection>
      <BlockSection
        title="Centered blog posts"
        description="Use this centered style of blog posts list showing only the title, author, publication date, and the number of social media shares."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/blog-sections/centered-posts.tsx"
      >
        <CenteredPostsBlogSection />
      </BlockSection>
      <BlockSection
        title="Blog card with image"
        description="Use this example to also show a visual image next to the title, description, author, publication date, and category of the blog post."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/blog-sections/card-with-image.tsx"
      >
        <CardWithImageBlogSection />
      </BlockSection>
      <BlockSection
        title="Featured blog post"
        description="Use this website section to highlight one of the featured blog posts alongside the other blog post previews with CTA links."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/blog-sections/featured-post.tsx"
      >
        <FeaturedPostBlogSection />
      </BlockSection>
    </>
  );
}
