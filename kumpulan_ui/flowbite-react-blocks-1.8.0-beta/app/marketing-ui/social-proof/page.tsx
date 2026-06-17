"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CardsWithStatisticsSocialProof } from "./card-statistics";
import { CarouselSliderSocialProof } from "./carousel-slider";
import { DefaultSocialProof } from "./default";
import { HeadingWithStatisticsSocialProof } from "./heading-statistics";
import { StatisticsWithIconsAndCTASocialProof } from "./icon-statistics";
import { IllustrationWithStatisticsSocialProof } from "./illustration";

export default function AllSocialProofs() {
  return (
    <>
      <BlockBreadcrumb
        title="Social Proof"
        description="Get started with this website section to offer social proof to your website visitors by providing statistical numbers about your product's usage worldwide."
      />
      <BlockSection
        title="Default example"
        description="Use this example of statistical numbers that you can use to showcase the adoption rate of your product by the community."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/social-proof/default.tsx"
      >
        <DefaultSocialProof />
      </BlockSection>
      <BlockSection
        title="Cards with statistics"
        description="Use this example to show statistics inside cards as social proof with a secondary helper description text."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/social-proof/card-statistics.tsx"
      >
        <CardsWithStatisticsSocialProof />
      </BlockSection>
      <BlockSection
        title="Illustration with statistics"
        description="Showcase a visual illustration next to the statistical numbers that provide social proof to the visitors browsing your website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/social-proof/illustration.tsx"
      >
        <IllustrationWithStatisticsSocialProof />
      </BlockSection>
      <BlockSection
        title="Heading with statistics"
        description="Use this section to show a heading with a description complementary to the statistical information that you can use up to four items per row."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/social-proof/heading-statistics.tsx"
      >
        <HeadingWithStatisticsSocialProof />
      </BlockSection>
      <BlockSection
        title="Carousel slider"
        description="Use this carousel slider component from the Flowbite library next to the statistical numbers below to provide a visual impact."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/social-proof/carousel-slider.tsx"
      >
        <CarouselSliderSocialProof />
      </BlockSection>
      <BlockSection
        title="Statistics with icons and CTA"
        description="Get started with this advanced example where you show icons with the statistical numbers and CTAs below the heading element."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/social-proof/icon-statistics.tsx"
      >
        <StatisticsWithIconsAndCTASocialProof />
      </BlockSection>
    </>
  );
}
