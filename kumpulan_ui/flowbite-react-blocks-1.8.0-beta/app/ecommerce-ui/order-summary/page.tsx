"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import DefaultOrderSummary from "./default";
import OrderSummaryWithDrawer from "./drawer";
import OrderSummaryWithEditModals from "./edit-modals";
import OrderSummaryWithModal from "./modal";
import OrderSummaryWithStepperAndSidebar from "./stepper-sidebar";

export default function AllOrderSummarys() {
  return (
    <>
      <BlockBreadcrumb
        title="Order Summary"
        description="Get started with a collection of e-commerce pages to show the summary of an order which includes the list of products, shipping details and payment methods."
      />
      <BlockSection
        title="Default order summary"
        description="Use this example to show a list of selected products, billing information, shipping details and a payment method before sending the order."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultOrderSummary />
      </BlockSection>
      <BlockSection
        title="Order summary with edit modals"
        description="Use this example to show the summary of the order inside cards and also allow the user to edit the details using modals."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderSummaryWithEditModals />
      </BlockSection>
      <BlockSection
        title="Order summary with stepper and sidebar"
        description="Use this example to show the final step of an e-commerce purchase using a stepper and a sidebar layout to provide all shipping details and the order amount."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderSummaryWithStepperAndSidebar />
      </BlockSection>
      <BlockSection
        title="Order summary with drawer"
        description="This example can be used to add all order summary information inside of a drawer component that can be shown or dismissed off-canvas."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderSummaryWithDrawer />
      </BlockSection>
      <BlockSection
        title="Order summary with modal"
        description="Use this component show the order summary and selected products to be purchased inside of a modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <OrderSummaryWithModal />
      </BlockSection>
    </>
  );
}
