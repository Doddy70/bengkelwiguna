"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { DefaultFooterSection } from "./default";
import { FlowbiteFooterSection } from "./flowbite-footer";
import { NewsletterSignUpFooterSection } from "./newsletter-footer";
import { PreFooterCTASection } from "./pre-footer";
import { SitemapLinksFooterSection } from "./sitemap-links";
import { SitemapLogoFooterSection } from "./sitemap-logo";
import { SocialMediaIconsFooterSection } from "./social-media";

export default function AllFooterSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Footer Sections"
        description="Get started with footer sections coded in Tailwind CSS to use at the bottom of every page of your website and showcase your logo, sitemap links, and more."
      />
      <BlockSection
        title="Default footer section"
        description="Use this example of a footer section to show the logo of your brand, a description, links, and the copyright notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/default.tsx"
      >
        <DefaultFooterSection />
      </BlockSection>
      <BlockSection
        title="Sitemap with logo and social media"
        description="Use this footer section to show the logo of your brand, the sitemap, social media accounts, and the copyright notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/sitemap-logo.tsx"
      >
        <SitemapLogoFooterSection />
      </BlockSection>
      <BlockSection
        title="Newsletter sign-up and address location"
        description="Use this example to first show multiple address locations of your company, a newsletter sign-up form, the logo of your brand, language selector, and copyright notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/newsletter-footer.tsx"
      >
        <NewsletterSignUpFooterSection />
      </BlockSection>
      <BlockSection
        title="Pre-footer CTA"
        description="Get started with this example with a CTA section before the footer, a sitemap, the logo of your brand, a language selector, and the copyright notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/pre-footer.tsx"
      >
        <PreFooterCTASection />
      </BlockSection>
      <BlockSection
        title="Sitemap links"
        description="Use this example to show a large sitemap link area with a centered logo, copyright notice, and social media profiles."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/sitemap-links.tsx"
      >
        <SitemapLinksFooterSection />
      </BlockSection>
      <BlockSection
        title="Original footer of Flowbite"
        description="Use this website section to replicate the footer that we also use on Flowbite's website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/flowbite-footer.tsx"
      >
        <FlowbiteFooterSection />
      </BlockSection>
      <BlockSection
        title="Social media icons"
        description="Use this example to feature your social media accounts, the logo of your brand, a small newsletter sign-up form, links, and the copyright notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/footer-sections/social-media.tsx"
      >
        <SocialMediaIconsFooterSection />
      </BlockSection>
    </>
  );
}
