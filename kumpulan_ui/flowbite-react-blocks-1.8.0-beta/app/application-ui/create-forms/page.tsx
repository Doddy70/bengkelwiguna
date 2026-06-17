"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CreateFormWithAccordion } from "./accordion";
import { AdvancedCreateUserForm } from "./advanced";
import { DefaultCreateForm } from "./default";
import { CreateEventForm } from "./event";
import { CreateUserForm } from "./user";

export default function AllSideNavigation() {
  return (
    <>
      <BlockBreadcrumb
        title="Create Forms (CRUD)"
        description={`Get started with a collection of forms crafted for the "create" action from the CRUD layouts featuring form elements coded in Tailwind CSS.`}
      />
      <BlockSection
        title="Default form"
        description="Use this free example of a form based on the CRUD layouts where you can create a new data entry inside your dashboard."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultCreateForm />
      </BlockSection>
      <BlockSection
        title="Create event form"
        description="Use this example of an advanced CRUD form to create an event data entry featuring date range picker input fields, WYSIWYG editors, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <CreateEventForm />
      </BlockSection>
      <BlockSection
        title="Create user form"
        description="This example of a CRUD form can be used to create a user in the database featuring the first name, last name, password, and biography as text input fields."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <CreateUserForm />
      </BlockSection>
      <BlockSection
        title="Create form with accordion"
        description="Use this CRUD form with accordions to separate the content inside when creating new advanced data entries with multiple text input fields, date pickers, dropzone upload input fields, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <CreateFormWithAccordion />
      </BlockSection>
      <BlockSection
        title="Advanced create user form"
        description="Use this example to create a user data entry inside your dashboard based on this advanced CRUD create form layout featuring multiple text, select, email, search, and file upload input fields."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <AdvancedCreateUserForm />
      </BlockSection>
    </>
  );
}
