"use client";

import { DarkThemeToggle } from "flowbite-react";
import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";

export default function AllApplicationShells() {
  return (
    <>
      <BlockBreadcrumb
        title="Application Shells"
        description="Get started with a collection of drawer components to create new data models in your application by including form elements."
      />
      <DarkThemeToggle />
      <BlockSection
        title="Application shell with sidebar and navbar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          src="/application-ui/application-shells/sidebar-navbar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Stacked layout with multiple navbars"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/stacked-layout-multiple-navbars"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Double sidebar layout with navbar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/double-sidebar-layout-navbar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Stacked layout with tabs and navbar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/stacked-layout-tabs-navbar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Stacked layout with secondary navbar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/stacked-layout-secondary-navbar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Advanced layout with collapsable sidebar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/advanced-layout-collapsable-sidebar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Shell layout with user profile sidebar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/layout-user-profile-sidebar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
      <BlockSection
        title="Shell layout for e-commerce with sidebar"
        description="Use this free example of a drawer component to show a list of input field items to create a data entry inside your dashboard application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <iframe
          height="450px"
          src="/application-ui/application-shells/layout-e-commerce-sidebar"
          width="100%"
          className="min-h-[56rem] w-full"
        />
      </BlockSection>
    </>
  );
}
