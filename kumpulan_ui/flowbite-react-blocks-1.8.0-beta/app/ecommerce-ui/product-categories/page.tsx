"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import AdvancedProductCategoriesList from "./advanced-list";
import ProductCategoriesWithCards from "./cards";
import DefaultProductCategories from "./default";
import FeaturedProductCategories from "./featured";
import ProductCategoriesWithIcons from "./icons";
import ProductCategoriesWithLinks from "./links";

export default function AllProductCategories() {
  return (
    <>
      <BlockBreadcrumb
        title="Product Categories"
        description="Get started with a collection of e-commerce website sections to showcase all product categories using cards, lists, and images on your homepage coded with Tailwind CSS."
      />
      <BlockSection
        title="Default product categories"
        description="Use this example to show a list of all categories within your website using small cards with icons and text that are anchor links and a CTA button to show all categories on a dedicated page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultProductCategories />
      </BlockSection>
      <BlockSection
        title="Featured product categories"
        description="This example can be used to show three or more featured product categories in between product listings and categories on your homepage or as related content when showing product pages."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <FeaturedProductCategories />
      </BlockSection>
      <BlockSection
        title="Product categories with icons"
        description="Use this example to show a larger list of product categories where you show a custom SVG icon and the title of the category on two or more rows and circular cards."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ProductCategoriesWithIcons />
      </BlockSection>
      <BlockSection
        title="Product categories with cards"
        description="Use this example to show a list of product categories inside cards with SVG icons and a title and a CTA button to view all categories for your e-commerce website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ProductCategoriesWithCards />
      </BlockSection>
      <BlockSection
        title="Advanced product categories list"
        description="Use this example to show an advanced list of product categories within cards that can feature subcategories divided with grid layouts and show an information alert component for additional context."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <AdvancedProductCategoriesList />
      </BlockSection>
      <BlockSection
        title="Categories with links"
        description="Use this example to show a list of headers and links as text on multiple columns within a grid layout to showcase all categories and subcategories of an e-commerce store."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ProductCategoriesWithLinks />
      </BlockSection>
    </>
  );
}
