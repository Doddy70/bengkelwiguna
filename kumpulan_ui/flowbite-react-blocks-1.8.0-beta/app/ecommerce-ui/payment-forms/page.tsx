"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import PaymentFormWithCopyToClipboardInputs from "./copy-to-clipboard-inputs";
import DefaultPaymentForm from "./default";
import PaymentFormWithDrawer from "./drawer";
import PaymentFormWithModal from "./modal";
import PaymentFormWithOptions from "./options";
import PaymentFormWithStepper from "./stepper";
import PaymentFormWithTabs from "./tabs";
import PaymentFormWithWireTransfer from "./wire-transfer";

export default function AllPaymentForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Payment Forms"
        description={`Choose from a collection of 404 "not found" landing pages coded with Tailwind CSS to show your website visitors when a page is unavailable or doesn't exist.`}
      />
      <BlockSection
        title="Default payment form"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultPaymentForm />
      </BlockSection>
      <BlockSection
        title="Payment form with stepper"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithStepper />
      </BlockSection>
      <BlockSection
        title="Payment form with options"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithOptions />
      </BlockSection>
      <BlockSection
        title="Payment form with tabs"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithTabs />
      </BlockSection>
      <BlockSection
        title="Payment form with wire transfer"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithWireTransfer />
      </BlockSection>
      <BlockSection
        title="Payment form with copy to clipboard inputs"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithCopyToClipboardInputs />
      </BlockSection>
      <BlockSection
        title="Payment form with drawer"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithDrawer />
      </BlockSection>
      <BlockSection
        title="Payment form with modal"
        description={`Use this free example of a 404 "not found" page coded with Tailwind CSS and Flowbite when a user visits a page that doesn't exist with a button back to the homepage.`}
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <PaymentFormWithModal />
      </BlockSection>
    </>
  );
}
