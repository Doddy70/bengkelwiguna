"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BackgroundImageRegisterForm } from "./background-image";
import { DefaultRegisterForm } from "./default";
import { RegisterFormWithDescription } from "./description";
import { RegisterFormWithIllustration } from "./illustration";
import { SocialMediaAuthenticationRegisterForm } from "./social-media-auth";

export default function AllRegisterForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Register Form"
        description="Use a collection of register pages to let your users create an account on your website based on multiple layouts, social media authentication, and more."
      />
      <BlockSection
        title="Default register page"
        description="This example can be used to allow users to create an account on your website using their email address and password and also a checkbox with the terms and conditions as a requirement."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/register-forms/default.tsx"
      >
        <DefaultRegisterForm />
      </BlockSection>
      <BlockSection
        title="Social media authentication"
        description="Use this example to allow users to authenticate using their social media accounts such as Google or Apple and also a list of features on the left side of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/register-forms/social-media-auth.tsx"
      >
        <SocialMediaAuthenticationRegisterForm />
      </BlockSection>
      <BlockSection
        title="Register with illustration"
        description="Get started with this example of a registration form with multiple data, social media authentication, and a visually impactful 3D illustration on the right side of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/register-forms/illustration.tsx"
      >
        <RegisterFormWithIllustration />
      </BlockSection>
      <BlockSection
        title="Background image"
        description="Use this register form example to show a background image on the whole page to create an immersive look."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/register-forms/background-image.tsx"
      >
        <BackgroundImageRegisterForm />
      </BlockSection>
      <BlockSection
        title="Register form with description"
        description="Use this registration form to also show a description of your website on the right side of the page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/register-forms/description.tsx"
      >
        <RegisterFormWithDescription />
      </BlockSection>
    </>
  );
}
