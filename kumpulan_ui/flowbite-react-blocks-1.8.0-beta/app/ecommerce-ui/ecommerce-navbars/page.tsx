"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";

export default function AllPaymentForms() {
  return (
    <>
      <BlockBreadcrumb
        title="E-commerce Navbars"
        description="Get started with a collection of navbars components built for e-commerce websites that include responsive hamburger menus, shopping cart dropdowns, user account options, and more."
      />
      <BlockSection
        title="Default e-commerce navbar"
        description="Use this example to show a navigation bar for e-commerce websites including a list of menu items, a shopping cart dropdown, a my account dropdown and a hamburger menu."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/ecommerce-navbars/default"
          width="100%"
          className="min-h-96 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Centered e-commerce navbar"
        description="Use this example to show a double layered navigation bar with the logo centered and with a secondary menu, shopping cart dropdown and user account menu."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/ecommerce-navbars/centered"
          width="100%"
          className="min-h-96 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Navbar with modal search"
        description="Use this example to show an advanced search modal for e-commerce products inside of a navbar with a mega menu, shopping cart and user dropdown."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/ecommerce-navbars/modal-search"
          width="100%"
          className="min-h-96 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Navbar with search bar and submenu"
        description="Use this example to show a navbar for e-commerce websites with a search bar, dropdown menus, delivery location selectors, language selectors and a submenu list."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/ecommerce-navbars/search-bar-submenu"
          width="100%"
          className="min-h-96 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Navbar with advanced user dropdown"
        description="Use this example to show three levels inside of a navbar component including a promotional banner, shopping cart and user dropdowns, a search bar and a mega menu with categories."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/ecommerce-navbars/advanced-user-dropdown"
          width="100%"
          className="min-h-96 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Advanced navigation bar with mega menu"
        description="Use this example to show a four layered navigation that includes an announcement banner, dropdown menus for language, shopping cart, user settings, a search bar and a mega menu."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/ecommerce-navbars/advanced-mega-menu"
          width="100%"
          className="min-h-96 w-full"
        />
      </BlockSection>
    </>
  );
}
