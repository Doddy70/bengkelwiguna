"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CardCTAsWithIconsSection } from "./cards-icons";
import { DefaultCTASection } from "./default";
import { EmailSignUpCTASection } from "./email-signup";
import { FinancialTradingCTASection } from "./finance-trading";
import { HeadingWithCTAButtonSection } from "./heading-cta";
import { ImageWithCTAButtonSection } from "./image-cta-button";
import { MobileAppDownloadCTASection } from "./mobile-app";
import { QRCodeCTASection } from "./qr-code";
import { CTASectionWithTabsAndMobileApp } from "./tabs";
import { TwoCardsAndImagesCTASection } from "./two-cards";

export default function AllCTASections() {
  return (
    <>
      <BlockBreadcrumb
        title="CTA Sections"
        description="The CTA (call to action) website sections can be used anywhere on your website to encourage your users to take any action, such as creating a new account."
      />
      <BlockSection
        title="Default CTA section"
        description="Use this example to show a simple heading, paragraph, and a couple of CTA buttons to encourage users to take action."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/default.tsx"
      >
        <DefaultCTASection />
      </BlockSection>
      <BlockSection
        title="Image with CTA button"
        description="Use this example to show an image or app screenshot next to the CTA button to provide additional visual impact."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/image-cta-button.tsx"
      >
        <ImageWithCTAButtonSection />
      </BlockSection>
      <BlockSection
        title="Heading with CTA button"
        description="Use this simple yet effective CTA section with a heading, short paragraph, and a button to encourage users to start a free trial."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/heading-cta.tsx"
      >
        <HeadingWithCTAButtonSection />
      </BlockSection>
      <BlockSection
        title="QR code CTA"
        description="Use this example to show a QR (quick response) code that your users can scan with their device and interact with another page or application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/qr-code.tsx"
      >
        <QRCodeCTASection />
      </BlockSection>
      <BlockSection
        title="Card CTAs with icons"
        description="Use this website section to show multiple cards CTA elements with icons alongside a heading and paragraphs."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/cards-icons.tsx"
      >
        <CardCTAsWithIconsSection />
      </BlockSection>
      <BlockSection
        title="Financial trading CTA"
        description="Use this data-rich section with financial information for stock or crypto exchanges and encourage users to sign up for a trading account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/finance-trading.tsx"
      >
        <FinancialTradingCTASection />
      </BlockSection>
      <BlockSection
        title="Email sign-up CTA"
        description="Use this example to let users sign up for your newsletter or application by providing their email using the sign-up form and privacy notice."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/email-signup.tsx"
      >
        <EmailSignUpCTASection />
      </BlockSection>
      <BlockSection
        title="Mobile app download"
        description="Use this section to encourage users to download your mobile application by providing two CTA buttons for App Store and Google Play."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/mobile-app.tsx"
      >
        <MobileAppDownloadCTASection />
      </BlockSection>
      <BlockSection
        title="CTA with two cards and images"
        description="This example can be used to show a couple of cards with an image, description, progress bar, and CTA button for detailed information."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/two-cards.tsx"
      >
        <TwoCardsAndImagesCTASection />
      </BlockSection>
      <BlockSection
        title="CTA section with tabs and mobile app"
        description="Use this component to show a CTA section with tabs and a preview of the mobile application inside a phone mockup frame."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cta-sections/tabs.tsx"
      >
        <CTASectionWithTabsAndMobileApp />
      </BlockSection>
    </>
  );
}
