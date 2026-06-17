"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { UpdateModalAccordion } from "./accordion";
import { AdvancedUpdateEventModal } from "./advanced-event";
import { DefaultUpdateModal } from "./default";
import { UpdateEventModal } from "./event";
import { UpdateProductModal } from "./product";
import { UpdateUserModal } from "./user";
import { UpdateUserModalFileUpload } from "./user-file-upload";

export default function AllUpdateModals() {
  return (
    <>
      <BlockBreadcrumb
        title="Update Modals (CRUD)"
        description="Get started with a collection of modal components based on the CRUD layout to update an existing set of data from the database built with Tailwind CSS."
      />
      <BlockSection
        title="Default modal"
        description="Use this free example of a modal component to update an existing data entry inside the database featuring text field inputs, selects, and a textarea."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultUpdateModal />
      </BlockSection>
      <BlockSection
        title="Update product modal"
        description="Use this example to show multiple advanced fields to update an existing product data entry inside your application including file uploads, text input fields, and number metrics."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <UpdateProductModal />
      </BlockSection>
      <BlockSection
        title="Update user modal"
        description="Use this modal component to update existing users from your database featuring text input fields and passwords."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <UpdateUserModal />
      </BlockSection>
      <BlockSection
        title="Update user modal with file upload"
        description="Use this modal component to update user data based on form elements like text inputs, WYSIWYG editors, file uploads, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <UpdateUserModalFileUpload />
      </BlockSection>
      <BlockSection
        title="Update modal with accordion"
        description="Use this example of a modal to update an advanced data set split by an accordion component to organize data in a more efficient way."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <UpdateModalAccordion />
      </BlockSection>
      <BlockSection
        title="Update event modal"
        description="This example of a modal CRUD component can be used to update an existing event featuring a date picker, color tag picker, input text fields, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <UpdateEventModal />
      </BlockSection>
      <BlockSection
        title="Advanced update event modal"
        description="Use this example of a modal component to edit an event data entry from the database based on text input fields, date pickers, text area fields, and more."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <AdvancedUpdateEventModal />
      </BlockSection>
    </>
  );
}
