"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AlternateImageWithFeatureListSection } from "./alternate";
import { FeatureListCardsSection } from "./card-list";
import { ComparisonCardsFeatureSection } from "./comparison";
import { FeatureListWithCTAsSection } from "./cta-list";
import { DefaultFeatureListSection } from "./default";
import { DescriptionWithFeatureListIconsSection } from "./description-icon-list";
import { FeatureIconsAndCTASection } from "./icon-list-cta";
import { FeatureListWithIconsSection } from "./icons-list";
import { ImageWithFeatureListAndCTAsSection } from "./image-list";
import { RoundedIconsFeatureSection } from "./rounded-icons";

export default function AllFeatureSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Feature Sections"
        description="Get started with a collection of responsive website sections built with Tailwind CSS to showcase a list of features that your product or company offers."
      />
      <BlockSection
        title="Default feature list"
        description="Get started with this default example of feature items based on a grid layout where you can show up to three items on a row featuring an icon, title and description."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/default.tsx"
      >
        <DefaultFeatureListSection />
      </BlockSection>
      <BlockSection
        title="Image with feature list and CTAs"
        description="This example can be used if you also want to show a visual image and a CTA link below each feature list item."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/image-list.tsx"
      >
        <ImageWithFeatureListAndCTAsSection />
      </BlockSection>
      <BlockSection
        title="Feature list with CTAs"
        description="Get started with this example to show a CTA link after each feature item including an icon, title and description."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/cta-list.tsx"
      >
        <FeatureListWithCTAsSection />
      </BlockSection>
      <BlockSection
        title="Feature list with icons"
        description="Use this example if you want to create a sub-list of feature items using the check icon and increase the conversion rate of your website visitors."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/icons-list.tsx"
      >
        <FeatureListWithIconsSection />
      </BlockSection>
      <BlockSection
        title="Feature icons and CTA"
        description="This example can be used to show two feature items with a heading and description and a CTA link below."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/icon-list-cta.tsx"
      >
        <FeatureIconsAndCTASection />
      </BlockSection>
      <BlockSection
        title="Description with feature list icons"
        description="Use this example if you also want to show a heading and description next to a list of feature list items with an icon, title, and description."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/description-icon-list.tsx"
      >
        <DescriptionWithFeatureListIconsSection />
      </BlockSection>
      <BlockSection
        title="Feature list cards"
        description="Use this example to showcase a list of features with an icon box, heading and description inside a card with up to four items on a row."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/card-list.tsx"
      >
        <FeatureListCardsSection />
      </BlockSection>
      <BlockSection
        title="Alternate image with feature list"
        description="Get started with this example if you want to alternate an image and feature list next to each other and improve the visual attractiveness of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/alternate.tsx"
      >
        <AlternateImageWithFeatureListSection />
      </BlockSection>
      <BlockSection
        title="Comparison cards"
        description="Get started with this example of feature list cards where you can compare your website's features with a competitor's one."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/comparison.tsx"
      >
        <ComparisonCardsFeatureSection />
      </BlockSection>
      <BlockSection
        title="Feature section with rounded icons"
        description="Use this example to show a list of features with rounded background icons, a title, a description, and a CTA button at the end of the section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/feature-sections/rounded-icons.tsx"
      >
        <RoundedIconsFeatureSection />
      </BlockSection>
    </>
  );
}
