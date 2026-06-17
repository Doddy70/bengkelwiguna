"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BackgroundImageLoginForm } from "./background-image";
import { DefaultLoginForm } from "./default";
import { LoginFormWithDescription } from "./description";
import { LoginFormWithIllustration } from "./illustration";
import { SocialMediaLoginForm } from "./social-media";

export default function AllLoginForms() {
  return (
    <>
      <BlockBreadcrumb
        title="Login Form"
        description="The login page can be used to allow users to authenticate inside your application based on a collection of templates from Flowbite and coded with Tailwind CSS."
      />
      <BlockSection
        title="Default login page"
        description="This example includes a form with an email and password input accompanied by the logo and other helper texts and links to other authentication pages."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/login-forms/default.tsx"
      >
        <DefaultLoginForm />
      </BlockSection>
      <BlockSection
        title="Social media login"
        description="Use this example to alternatively allow users to authenticate using their social media accounts such as with Google, Apple, GitHub or Twitter."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/login-forms/social-media.tsx"
      >
        <SocialMediaLoginForm />
      </BlockSection>
      <BlockSection
        title="Login form with illustration"
        description="Use this example to complement the login form with a visually impactful 3D illustration."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/login-forms/illustration.tsx"
      >
        <LoginFormWithIllustration />
      </BlockSection>
      <BlockSection
        title="Background image"
        description="Use this example to show a background image on the whole page with the login form in the center of it."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/login-forms/background-image.tsx"
      >
        <BackgroundImageLoginForm />
      </BlockSection>
      <BlockSection
        title="Login form with description"
        description="Use this example of a page layout with two columns where on one side there is a login form and the other side a description of the website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/login-forms/description.tsx"
      >
        <LoginFormWithDescription />
      </BlockSection>
    </>
  );
}
