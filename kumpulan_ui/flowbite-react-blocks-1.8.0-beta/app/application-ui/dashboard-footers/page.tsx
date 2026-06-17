"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { FooterWithActionSelect } from "./action-select";
import { FooterWithCTAAndLinks } from "./cta-links";
import { DefaultDashboardFooter } from "./default";
import { FooterWithLanguageSelectorAndOptions } from "./language-selector";
import { FooterWithPagination } from "./pagination";
import { FooterWithProgressBar } from "./progress-bar";
import { FooterWithSitemapLinksAndLanguageSelector } from "./sitemap-links";

export default function AllDashboardFooters() {
  return (
    <>
      <BlockBreadcrumb
        title="Dashboard Footers"
        description="Get started with a collection of responsive footer components specially crafted for admin dashboard layouts and applications based on Tailwind CSS."
      />
      <BlockSection
        title="Default dashboard footer"
        description="This free example can be used to show a copyright notice text with social media links using SVG icons and tooltips."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultDashboardFooter />
      </BlockSection>
      <BlockSection
        title="Footer with language selector and options"
        description="Use this example to show a footer inside an admin dashboard with a copyright notice, sitemap links, language selector, and options buttons."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <FooterWithLanguageSelectorAndOptions />
      </BlockSection>
      <BlockSection
        title="Footer with CTA and links"
        description="This footer component can be used to show a CTA link with a copyright notice and a list of sitemap link items."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <FooterWithCTAAndLinks />
      </BlockSection>
      <BlockSection
        title="Footer with pagination"
        description="This example of a footer can be used to use pagination for tables inside and admin dashboard layout together with a copyright notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <FooterWithPagination />
      </BlockSection>
      <BlockSection
        title="Footer with progress bar"
        description="Use this example to show a progress bar in the footer alongside a copyright notice and helper text with a link."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <FooterWithProgressBar />
      </BlockSection>
      <BlockSection
        title="Footer with action select"
        description="This example can be used to show a dropdown select to create bulk actions to table data within an admin dashboard interface."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <FooterWithActionSelect />
      </BlockSection>
      <BlockSection
        title="Footer with sitemap links and language selector"
        description="Use this example to show a longer list of sitemap links, a copyright notice, and a language selector for your admin dashboard."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <FooterWithSitemapLinksAndLanguageSelector />
      </BlockSection>
    </>
  );
}
