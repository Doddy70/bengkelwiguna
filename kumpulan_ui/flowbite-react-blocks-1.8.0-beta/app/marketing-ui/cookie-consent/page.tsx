"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CookieBanner } from "./banner";
import { GDPRCookieConsentNotice } from "./gdpr-notice";
import { CookieConsentModal } from "./modal";
import { CookieConsentPopup } from "./popup";

export default function AllCookieConsent() {
  return (
    <>
      <BlockBreadcrumb
        title="Cookie Consent"
        description="Get started with the cookie banner component to interact with the website visitor and enable them to decide whether you can collect their personal data or not."
      />
      <BlockSection
        title="Cookie banner"
        description="This banner positioned at the bottom of the page can be used as an example to quickly ask for permission to store third-party cookies and collect personal information from your website visitors."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cookie-consent/banner.tsx"
      >
        <CookieBanner />
      </BlockSection>
      <BlockSection
        title="Cookie popup"
        description="Use this simple cookie consent popup component on the bottom right part of your website to ask for permission to apply third-party cookies and collect personal information about your visitor."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cookie-consent/popup.tsx"
      >
        <CookieConsentPopup />
      </BlockSection>
      <BlockSection
        title="Cookie consent modal"
        description="This modal can be used to show more information about the privacy and cookie policy before you ask the website visitors to allow the storage of third-party cookies."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cookie-consent/modal.tsx"
      >
        <CookieConsentModal />
      </BlockSection>
      <BlockSection
        title="GDPR notice"
        description="Use this modal to show extended data about the cookies used on your website and allow your users to choose which privacy data to share for GDPR compliance."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/cookie-consent/gdpr-notice.tsx"
      >
        <GDPRCookieConsentNotice />
      </BlockSection>
    </>
  );
}
