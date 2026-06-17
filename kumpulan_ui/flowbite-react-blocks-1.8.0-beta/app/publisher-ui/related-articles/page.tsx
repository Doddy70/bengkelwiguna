import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import CarouselSliderCardsRelatedArticles from "./carousel-slider-cards";
import DefaultRelatedArticle from "./default";
import GridLayoutCardsRelatedArticles from "./grid-layout-cards";
import HorizontalCardWithImageRelatedArticles from "./horizontal-card-image";
import RoundedListOfBlogPostsRelatedArticles from "./rounded-list-blog-posts";

export default function AllRelatedArticles() {
  return (
    <>
      <BlockBreadcrumb
        title="Related Articles"
        description="Use these components to show a list of related and recommended blog posts and articles at the bottom of the main content area of an article or blog post page."
      />
      <BlockSection
        title="Default related articles"
        description="Use this example to show a list of related articles after the main content of a blog post to engage users and decrease the bounce rate."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultRelatedArticle />
      </BlockSection>
      <BlockSection
        title="Rounded list of blog posts"
        description="This example can also be used to show a list of recommended blog posts with a rounded style for the image preview."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/search-bar-card-links.tsx"
      >
        <RoundedListOfBlogPostsRelatedArticles />
      </BlockSection>
      <BlockSection
        title="Horizontal card with image"
        description="Use this example to show a list of related articles based on a two-column layout with horizontal alignment."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/illustration-links.tsx"
      >
        <HorizontalCardWithImageRelatedArticles />
      </BlockSection>
      <BlockSection
        title="Carousel slider cards"
        description="This example can be used to show a list of related articles in cards within a carousel slider shown after the main blog post content."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <CarouselSliderCardsRelatedArticles />
      </BlockSection>
      <BlockSection
        title="Grid layout cards"
        description="Use this example to show three cards on a row based on a grid layout to encourage users to read another article."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/search-bar-card-links.tsx"
      >
        <GridLayoutCardsRelatedArticles />
      </BlockSection>
    </>
  );
}
