"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BlogPostsWithFeaturedImageHero } from "./blog-posts";
import { HeroSectionWithBookCover } from "./book-cover";
import { HeroSectionWithCarouselSlider } from "./carousel";
import { FinancialExchangeCryptoHero } from "./crypto";
import { AppScreenshotWithCTAsHero } from "./cta-app-preview";
import { BackgroundCoverImageWithCTAsHero } from "./cta-background-cover";
import { InformationalCTAWithAppScreenshotHero } from "./cta-screenshot-download";
import { SearchBarDatepickerHeroSection } from "./datepicker";
import { DefaultHero } from "./default";
import { EmailSignUpWithVideoHero } from "./email-signup-video";
import { BackgroundImageCardsHero } from "./grid-cards";
import { IllustrationWithEmailSignupHero } from "./illustration";
import { CoverImageWithCTAsHero } from "./image-cover";
import { PhoneMockupWithAppDownloadHero } from "./phone-mockup";
import { HeroSectionWithSearchBar } from "./search-bar";
import { SignUpFormWithCTAHero } from "./signup-cta";
import { VideoEmbedWithCTAHero } from "./video-embed-cta";
import { VisualImageWithHeadingHero } from "./video-image-heading";

export default function AllHeroSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Hero Sections"
        description="Get started with a collection of hero sections coded with Tailwind CSS to showcase the most important parts of your website based on multiple styles and layouts."
      />
      <BlockSection
        title="Default hero section"
        description="Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/default.tsx"
      >
        <DefaultHero />
      </BlockSection>
      <BlockSection
        title="Visual image with heading"
        description="Use this example to show an image next to the heading and CTA buttons to improve the visual impact of the website's first visit."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/video-image-heading.tsx"
      >
        <VisualImageWithHeadingHero />
      </BlockSection>
      <BlockSection
        title="Search bar with datepicker"
        description="This example can be used to provide a search and booking functionality based on the datepicker plugin from the Flowbite library."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/video-image-heading.tsx"
      >
        <SearchBarDatepickerHeroSection />
      </BlockSection>
      <BlockSection
        title="Email sign-up with video"
        description="Use this website section to let website visitors sign up with their email and also showcase a video about your product to increase the conversion rate."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/email-signup-video.tsx"
      >
        <EmailSignUpWithVideoHero />
      </BlockSection>
      <BlockSection
        title="Illustration with email sign-up"
        description="This section can be used to allow your users to sign up for an upcoming launch of a product with a visual impact of an illustration next to it."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/illustration.tsx"
      >
        <IllustrationWithEmailSignupHero />
      </BlockSection>
      <BlockSection
        title="Cover image with CTAs"
        description="This example can be used if you want to highlight a large image and two separate CTA buttons often used for conference websites."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/image-cover.tsx"
      >
        <CoverImageWithCTAsHero />
      </BlockSection>
      <BlockSection
        title="Informational CTA with app screenshot"
        description="Get started with this hero section to use a CTA component with multiple helper descriptions and a screenshot of your application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/cta-screenshot-download.tsx"
      >
        <InformationalCTAWithAppScreenshotHero />
      </BlockSection>
      <BlockSection
        title="Hero section with search bar"
        description="Use this example if you want to highlight the search functionality of your website and allow your users to query for page results based on the search input interaction."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/search-bar.tsx"
      >
        <HeroSectionWithSearchBar />
      </BlockSection>
      <BlockSection
        title="Video embed with CTA"
        description="This website section can be used to highlight the video part of the hero section alongside a couple of CTA buttons and reviews from Trustpilot."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/video-embed-cta.tsx"
      >
        <VideoEmbedWithCTAHero />
      </BlockSection>
      <BlockSection
        title="Sign-up form with CTA"
        description="This example can be used to directly let your website visitors sign up or login to your platform without having to redirect them by providing a functional form directly inside the hero section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/signup-cta.tsx"
      >
        <SignUpFormWithCTAHero />
      </BlockSection>
      <BlockSection
        title="App screenshot with CTAs"
        description="Use this example to show a screenshot of your SaaS application and a couple of CTA buttons to provide a visual demo."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/cta-app-preview.tsx"
      >
        <AppScreenshotWithCTAsHero />
      </BlockSection>
      <BlockSection
        title="Background image with CTAs"
        description="This example can be used to show multiple CTA buttons inside a hero section that has a faded background image for a more immersive look."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/cta-background-cover.tsx"
      >
        <BackgroundCoverImageWithCTAsHero />
      </BlockSection>
      <BlockSection
        title="Financial exchange (crypto)"
        description="Use this example if you want to allow your website visitors to directly convert currency (crypto included) in the hero section alongside statistical numbers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/crypto.tsx"
      >
        <FinancialExchangeCryptoHero />
      </BlockSection>
      <BlockSection
        title="Background image cards"
        description="Use this example to show cards with a faded background image for visually important products often used by carmakers such as BMW or Mercedes."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/grid-cards.tsx"
      >
        <BackgroundImageCardsHero />
      </BlockSection>
      <BlockSection
        title="Hero section with carousel slider"
        description="Use this example to show a hero section with a carousel slider with images together with a main heading, description, two CTA buttons and a list of company logos."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/carousel.tsx"
      >
        <HeroSectionWithCarouselSlider />
      </BlockSection>
      <BlockSection
        title="Hero section with book cover"
        description="This example can be used to showcase a book cover or an e-book presentation featuring a title, description, CTA buttons, and reviews from customers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/book-cover.tsx"
      >
        <HeroSectionWithBookCover />
      </BlockSection>
      <BlockSection
        title="Blog posts with featured image"
        description="This hero section can be used to feature a blog post with an image, author, title, category, and description with three other secondary blog posts."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/blog-posts.tsx"
      >
        <BlogPostsWithFeaturedImageHero />
      </BlockSection>
      <BlockSection
        title="Phone mockup with app download"
        description="Use this component to show a preview of a mobile application inside a frame coded with Tailwind CSS and the mobile app download buttons for AppStore and Google Play."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/phone-mockup.tsx"
      >
        <PhoneMockupWithAppDownloadHero />
      </BlockSection>
    </>
  );
}
