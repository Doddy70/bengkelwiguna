"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { Default404Page } from "./default";
import { IllustrationLinks404Page } from "./illustration-links";
import { SearchBarCardLinks404Page } from "./search-bar-card-links";

export default function All404Pages() {
  return (
    <>
      <BlockBreadcrumb
        title="404 Pages"
        description={`Choose from a collection of 404 "not found" landing pages coded with Tailwind CSS to show your website visitors when a page is unavailable or doesn't exist.`}
      />
      <BlockSection
        title="Default 404 page"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <Default404Page />
      </BlockSection>
      <BlockSection
        title="Search bar with card links"
        description="This example of a 404 page can be used to attempt to convince the user that couldn't find a page to keep searching for other resources before leaving your website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/search-bar-card-links.tsx"
      >
        <SearchBarCardLinks404Page />
      </BlockSection>
      <BlockSection
        title="Illustration with links"
        description="Use this example to also show a beautiful illustration or image when a user can't find a page on your website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/illustration-links.tsx"
      >
        <IllustrationLinks404Page />
      </BlockSection>
    </>
  );
}
