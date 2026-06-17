"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { ResetPasswordFormWithBackgroundImage } from "./background-image";
import { DefaultResetPasswordForm } from "./default";
import { ResetPasswordFormWithDescription } from "./description";
import { ResetPasswordFormWithFeaturesList } from "./features-list";
import { ResetPasswordFormWithIllustration } from "./illustration";

export default function AllResetPasswordForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Reset Password Forms"
        description="Use a collection of reset password forms based on multiple layouts to let your users change their password after going through the account recovery email."
      />
      <BlockSection
        title="Default reset password page"
        description="Use this example with an email input and two password input fields to let the user change their password after receiving the account recovery email."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/reset-password-forms/default.tsx"
      >
        <DefaultResetPasswordForm />
      </BlockSection>
      <BlockSection
        title="Reset password form with features list"
        description="Use this example to also show a list of features about your website next to the reset password form."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/reset-password-forms/features-list.tsx"
      >
        <ResetPasswordFormWithFeaturesList />
      </BlockSection>
      <BlockSection
        title="Reset password page with illustration"
        description="Use this example to also show a visually impactful illustration image next to the reset password form."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/reset-password-forms/illustration.tsx"
      >
        <ResetPasswordFormWithIllustration />
      </BlockSection>
      <BlockSection
        title="Reset password page with background image"
        description="This example can be used to apply a background image to the whole page and position the forgot password form in the center of it."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/reset-password-forms/background-image.tsx"
      >
        <ResetPasswordFormWithBackgroundImage />
      </BlockSection>
      <BlockSection
        title="Reset password page with description"
        description="Use this example to also show a heading with description next to the reset password form."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/reset-password-forms/description.tsx"
      >
        <ResetPasswordFormWithDescription />
      </BlockSection>
    </>
  );
}
