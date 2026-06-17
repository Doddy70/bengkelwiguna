"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";

export default function AllPaymentForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Discount Popups"
        description="Get started with a collection of discount and promotional popups using banners, modals, and other overlay elements anywhere on your website to promote product sales and increase conversion rates."
      />
      <BlockSection
        title="Default discount banner"
        description="Use this example to show a basic promotional message with a link to the discount page using a sticky banner to the top or bottom side of your website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/discount-popups/default"
          width="100%"
          className="min-h-48 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Discount banner with illustration"
        description="This example can be used as another sticky banner to promote campaigns and discount codes by using an illustration and a button as CTA elements."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/discount-popups/illustration"
          width="100%"
          className="min-h-48 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Floating discount banner"
        description="Use this sticky banner example with floating styles to show a discount icon, promotional text and a CTA link to the campaign page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/discount-popups/floating"
          width="100%"
          className="min-h-48 w-full"
        />
      </BlockSection>
      <BlockSection
        title="Discount with modal and email signup"
        description="Use this example to show a promotional discount inside a modal component and an email signup form to create a list of audience."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/discount-popups/modal-email-signup"
          width="100%"
          className="min-h-[40rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Pricing plan modal"
        description="This example can be used to promote a subscription plan for your e-commerce store or website inside of a modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/discount-popups/pricing-plan-modal"
          width="100%"
          className="min-h-[40rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Discount corner popup"
        description="This example can be used to show an offcanvas popup component on any corner side of your website to indicate an ongoing promotion and discount campaign."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <iframe
          src="/ecommerce-ui/discount-popups/corner"
          width="100%"
          className="min-h-[40rem] w-full"
        />
      </BlockSection>
    </>
  );
}
