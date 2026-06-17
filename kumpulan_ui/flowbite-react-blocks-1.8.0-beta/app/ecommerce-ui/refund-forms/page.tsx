"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import RefundFormPaymentOptions from "./payment-options";
import ProductRefundSelectionForm from "./product-selection";
import RefundFormReasonSelection from "./reason-selection";
import RefundFormShipmentMethod from "./shipment-method";
import RefundFormRequestSuccess from "./success";

export default function AllPaymentForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Refund Forms"
        description={`Choose from a collection of 404 "not found" landing pages coded with Tailwind CSS to show your website visitors when a page is unavailable or doesn't exist.`}
      />
      <BlockSection
        title="Product refund selection form"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <ProductRefundSelectionForm />
      </BlockSection>
      <BlockSection
        title="Refund reason selection"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <RefundFormReasonSelection />
      </BlockSection>
      <BlockSection
        title="Refund shipment method"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <RefundFormShipmentMethod />
      </BlockSection>
      <BlockSection
        title="Refund payment options"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <RefundFormPaymentOptions />
      </BlockSection>
      <BlockSection
        title="Refund request success"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <RefundFormRequestSuccess />
      </BlockSection>
    </>
  );
}
