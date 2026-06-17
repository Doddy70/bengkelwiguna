"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import DefaultOrderList from "./default";
import OrderListWithDrawer from "./drawer";
import OrderListWithModal from "./modal";
import OrderListWithSidebar from "./sidebar";
import OrderListWithTable from "./table";

export default function AllOrdersOverview() {
  return (
    <>
      <BlockBreadcrumb
        title="Orders Overview"
        description="Get started with a collection of pages to show a list of all orders created by the user inside tables with detailed information, products purchased and more."
      />
      <BlockSection
        title="Default order list"
        description="Use this example to show a list of all orders including information like the ID, date, price, status and actions to order again or cancel the order."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultOrderList />
      </BlockSection>
      <BlockSection
        title="Order list with table"
        description="This example can be used to show a list of all recent orders inside of a table together with marketing cards for vouchers and loyalty benefits points."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderListWithTable />
      </BlockSection>
      <BlockSection
        title="Order list with sidebar"
        description="Use this example to show an overview of the orders inside a page with a sidebar and show detailed information about each order and the ability to filter and sort them using dropdowns."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderListWithSidebar />
      </BlockSection>
      <BlockSection
        title="Order list with drawer"
        description="This example can be used to show the latest orders inside of a drawer component with the option to order again, cancel the order or view more details."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderListWithDrawer />
      </BlockSection>
      <BlockSection
        title="Order list with modal"
        description="Use this component to show a list of all orders inside of a modal component with search, filtering and sorting options using dropdown menus."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderListWithModal />
      </BlockSection>
    </>
  );
}
