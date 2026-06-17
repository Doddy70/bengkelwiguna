"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import DefaultShoppingCart from "./default";
import ShoppingCartWithDrawer from "./drawer";
import ShoppingCartWithModal from "./modal";
import ShoppingCartWithSidebar from "./sidebar";
import ShoppingCartWithTable from "./table";

export default function AllShoppingCarts() {
  return (
    <>
      <BlockBreadcrumb
        title="Shopping Cart"
        description="Get started with the shopping cart examples to manage and view the selected products and proceed to the checkout system for your e-commerce website."
      />
      <BlockSection
        title="Default shopping cart"
        description="Use this component to show all the selected products including their price, quantity, title and image and manage the order summary before checkout."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultShoppingCart />
      </BlockSection>
      <BlockSection
        title="Shopping cart with table"
        description="Use this component to show a list of products in your shopping cart inside a table with quantity selectors, and order summary and CTA buttons for purchase."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ShoppingCartWithTable />
      </BlockSection>
      <BlockSection
        title="Shopping cart with sidebar"
        description="This example can be used to show the order summary inside of a sidebar and also add a coupon code for a discount next to the shopping cart."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ShoppingCartWithSidebar />
      </BlockSection>
      <BlockSection
        title="Shopping cart with drawer"
        description="Use this example to show the shopping cart details and order summary inside of a drawer component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ShoppingCartWithDrawer />
      </BlockSection>
      <BlockSection
        title="Shopping cart with modal"
        description="This example can be used to show the shopping cart details and selected products inside of a modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ShoppingCartWithModal />
      </BlockSection>
    </>
  );
}
