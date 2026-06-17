"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { ContentCardImagesSection } from "./card-images";
import { LogoCTALinksImageFeatureListContentSection } from "./feature-list";
import { HeadingWithDescriptionContentSection } from "./heading-description";
import { ImagesWithHeadingAndDescriptionContentSection } from "./heading-images";
import { ImageGalleryContentSection } from "./image-gallery";
import { SocialProofContentSection } from "./social-proof";
import { TableOfContentsCardContentSection } from "./table-contents";
import { HeadingWithDescriptionTwoColumnsContentSection } from "./two-columns";
import { VideoEmbedContentSection } from "./video-embed";

export default function AllContentSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Content Sections"
        description="Choose one of these website sections to show extra content relative to the other sections on the page such as a gallery of images, description texts, and more."
      />
      <BlockSection
        title="Heading with description"
        description="Use this example to show a heading with a paragraph and a CTA link anywhere on your page relative to other sections."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/default.tsx"
      >
        <HeadingWithDescriptionContentSection />
      </BlockSection>
      <BlockSection
        title="Images with heading and description"
        description="Use this example to show a couple of images next to a heading and paragraph to provide visual impact to your users."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/heading-description.tsx"
      >
        <ImagesWithHeadingAndDescriptionContentSection />
      </BlockSection>
      <BlockSection
        title="Video embed content"
        description="Use this website section to show a video embedded from YouTube (or another platform) next to the content area of the heading and paragraphs."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/video-embed.tsx"
      >
        <VideoEmbedContentSection />
      </BlockSection>
      <BlockSection
        title="Image gallery"
        description="Use this example of an image gallery coded with Tailwind CSS to provide a strong visual impact between the website sections on your page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/image-gallery.tsx"
      >
        <ImageGalleryContentSection />
      </BlockSection>
      <BlockSection
        title="Heading with description (two columns)"
        description="This example can be used to show another block of text next to the classic heading with the paragraph and CTA link version."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/two-columns.tsx"
      >
        <HeadingWithDescriptionTwoColumnsContentSection />
      </BlockSection>
      <BlockSection
        title="Social proof content"
        description="Use this example to show a set of statistical numbers that provide social proof to your users next to the heading and paragraphs."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/social-proof.tsx"
      >
        <SocialProofContentSection />
      </BlockSection>
      <BlockSection
        title="Content card images"
        description="Get started with this website section to show at least three cards with images relative to the descriptive heading and paragraphs."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/card-images.tsx"
      >
        <ContentCardImagesSection />
      </BlockSection>
      <BlockSection
        title="Table of contents card"
        description="Use this example to show the table of contents of a book or online course based on chapters and description with a CTA button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/table-contents.tsx"
      >
        <TableOfContentsCardContentSection />
      </BlockSection>
      <BlockSection
        title="Content section with logo, CTA links, image, and feature list"
        description="This example can be used to show the logo, a couple of links, a featured image, text, and a feature list as a content section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/content-sections/feature-list.tsx"
      >
        <LogoCTALinksImageFeatureListContentSection />
      </BlockSection>
    </>
  );
}
