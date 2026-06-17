"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CreateModalWithAccordion } from "./accordion";
import { AdvancedCreateEventModal } from "./advanced-event";
import { AdvancedCreateUserModal } from "./advanced-user";
import { DefaultCreateModal } from "./default";
import { CreateEventModal } from "./event";
import { CreateProductModal } from "./product";
import { CreateUserModal } from "./user";

export default function AllCreateModals() {
  return (
    <>
      <BlockBreadcrumb
        title="Create Modals (CRUD)"
        description="Get started with a collection of modal components with form input elements to create new data models inside your dashboard based on Tailwind CSS."
      />
      <BlockSection
        title="Default modal"
        description="Use this free example to show a modal component with a form inside when creating a new instance of a product inside your application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultCreateModal />
      </BlockSection>
      <BlockSection
        title="Create product modal"
        description="Use this advanced modal to create a new product item inside your database featuring text input fields, dropzone file uploads, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <CreateProductModal />
      </BlockSection>
      <BlockSection
        title="Create user modal"
        description="This example can be used to create a basic user with a modal component including the username, email, and password."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <CreateUserModal />
      </BlockSection>
      <BlockSection
        title="Advanced create user modal"
        description="This example can be used to create a user with more advanced details such as permissions, avatar, user role, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedCreateUserModal />
      </BlockSection>
      <BlockSection
        title="Create modal with accordion"
        description="Use this example to show an advanced layout of a create type of modal component with an accordion separating two types of forms."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <CreateModalWithAccordion />
      </BlockSection>
      <BlockSection
        title="Create event modal"
        description="Use this example to create an event item inside a modal featuring text input fields, a datepicker, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <CreateEventModal />
      </BlockSection>
      <BlockSection
        title="Advanced create event modal"
        description="Use this example to show advanced input fields when creating an event type inside a modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <AdvancedCreateEventModal />
      </BlockSection>
    </>
  );
}
