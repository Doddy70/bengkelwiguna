"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BackgroundImageAccountRecovery } from "./background-image";
import { DefaultAccountRecovery } from "./default";
import { DescriptionAccountRecovery } from "./description";
import { FeatureListAccountRecovery } from "./feature-list";
import { IllustrationAccountRecovery } from "./illustration";

export default function AllAccountRecovery() {
  return (
    <>
      <BlockBreadcrumb
        title="Account Recovery"
        description="Get started with account recovery (aka. forgot password) pages to allow users to reset their password using an email based on multiple layouts and styles."
      />
      <BlockSection
        title="Default forgot password page"
        description="Use this example for users who forgot their password and send a recovery email to their address featuring the logo, email input, and submit button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/account-recovery/default.tsx"
      >
        <DefaultAccountRecovery />
      </BlockSection>
      <BlockSection
        title="Forgot password form with feature list"
        description="Use this example of a forgot password page to show the account recovery form and a list of features on the left side of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/account-recovery/feature-list.tsx"
      >
        <FeatureListAccountRecovery />
      </BlockSection>
      <BlockSection
        title="Recover account with illustration"
        description="Use this example of an account recovery form with an illustration on the right side for a visual impact."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/account-recovery/illustration.tsx"
      >
        <IllustrationAccountRecovery />
      </BlockSection>
      <BlockSection
        title="Forgot password with background image"
        description="Use this example of a forgot password form with a background image applied to the whole page for a more immersive look."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/account-recovery/background-image.tsx"
      >
        <BackgroundImageAccountRecovery />
      </BlockSection>
      <BlockSection
        title="Account recovery with description"
        description="Use this example of an account recovery form with a description on the right side of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/account-recovery/description.tsx"
      >
        <DescriptionAccountRecovery />
      </BlockSection>
    </>
  );
}
