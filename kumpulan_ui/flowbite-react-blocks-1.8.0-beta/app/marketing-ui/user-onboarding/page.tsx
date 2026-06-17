"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AccountDetailsUserOnboarding } from "./account-details";
import { ChooseAccountTypeUserOnboarding } from "./account-type";
import { EmailVerificationSixDigitCode } from "./email-verification";
import { SuccessMessageUserOnboarding } from "./success-message";

export default function AllUserOnboarding() {
  return (
    <>
      <BlockBreadcrumb
        title="User Onboarding"
        description="Use a collection of user onboarding pages to increase the chances of the adoption of your software by improving the introduction phase of your product."
      />
      <BlockSection
        title="Choose account type"
        description="Use this example as the first step of the user onboarding process to ask what type of account would your user like to create (ie. business or individual)."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/default.tsx"
      >
        <ChooseAccountTypeUserOnboarding />
      </BlockSection>
      <BlockSection
        title="Account details"
        description="Use this step from the user onboarding process to ask for details such as the email address, full name, password, country and phone number."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/centered.tsx"
      >
        <AccountDetailsUserOnboarding />
      </BlockSection>
      <BlockSection
        title="Email verification with 6-digit code"
        description="Use this page to verify the email address of the user by sending a 6-digit code that has to be applied to this page before the account can be activated."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/dropdown.tsx"
      >
        <EmailVerificationSixDigitCode />
      </BlockSection>
      <BlockSection
        title="Success message"
        description="Use the success message page as the last step of the onboarding process before the user can access their application dashboard interface and log into their account."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/headers/sub-navbar.tsx"
      >
        <SuccessMessageUserOnboarding />
      </BlockSection>
    </>
  );
}
