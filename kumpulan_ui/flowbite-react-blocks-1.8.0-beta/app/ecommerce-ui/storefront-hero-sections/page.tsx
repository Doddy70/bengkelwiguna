"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import StorefrontHeroSectionWithBackgroundImage from "./background-image";
import StorefrontHeroSectionWithCarouselAndSearch from "./carousel-search";
import StorefrontHeroSectionWithCategories from "./categories";
import StorefrontHeroSectionWithCTAAndCategoriesList from "./cta-categories-list";
import DefaultStorefrontHeroSection from "./default";
import FullSliderStorefrontHeroSection from "./full-slider";
import StorefrontHeroSectionCategoriesGridView from "./grid-view";

export default function AllStorefrontHeroSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Storefront Hero Sections"
        description="Use these hero sections built for e-commerce websites as the storefront part of your homepage where you can add CTA sections and show promotions to increase conversion rates"
      />
      <BlockSection
        title="Default hero section"
        description="Use this section to show a hero section as the storefront page of your e-commerce website featuring a heading, description, CTA button, an illustration and a list of logos of the products that your store is selling."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultStorefrontHeroSection />
      </BlockSection>
      <BlockSection
        title="Storefront hero section with categories"
        description="This section can be used as the first section of your e-commerce websites by showing the most popular product categories using cards alongside a heading with two CTA buttons and brand logos below."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <StorefrontHeroSectionWithCategories />
      </BlockSection>
      <BlockSection
        title="Storefront categories grid view"
        description="Use this example to show a complex grid view of the primary and secondary highlighted categories from your e-commerce website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <StorefrontHeroSectionCategoriesGridView />
      </BlockSection>
      <BlockSection
        title="Storefront hero with background image"
        description="This section can be used as the hero section of an e-commerce website with a full background image where you show a heading, paragraph, CTA button and a list of the primary categories."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <StorefrontHeroSectionWithBackgroundImage />
      </BlockSection>
      <BlockSection
        title="Storefront with CTA and categories list"
        description="Use this section to show a list of categories in a sidebar and a hero section with a heading, description and CTA button to increase sales and conversion rates."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <StorefrontHeroSectionWithCTAAndCategoriesList />
      </BlockSection>
      <BlockSection
        title="Storefront hero with carousel and search"
        description="Use this example to show an advanced storefront hero section with a carousel component featuring limited deals and a search bar for your e-commerce website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <StorefrontHeroSectionWithCarouselAndSearch />
      </BlockSection>
      <BlockSection
        title="Full slider hero section"
        description="Use this section as a full slider hero component to show campaigns and special sale events for your e-commerce store based on the carousel components from Flowbite."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <FullSliderStorefrontHeroSection />
      </BlockSection>
    </>
  );
}
