"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { AdvancedReadEventModal } from "./advanced-event";
import { AdvancedUserReadModal } from "./advanced-user";
import { DefaultReadModal } from "./default";
import { ReadEventModal } from "./event";
import { ReadProductModal } from "./product";
import { ReadUserModal } from "./user";

export default function AllReadModals() {
  return (
    <>
      <BlockBreadcrumb
        title="Read Modals (CRUD)"
        description="Use this collection of CRUD modal components to show information about a data entry from your database and show a list of actions based."
      />
      <BlockSection
        title="Default modal"
        description="Use this free modal component to show a list of data entries from the database based on the CRUD layout system."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/default.tsx"
      >
        <DefaultReadModal />
      </BlockSection>
      <BlockSection
        title="Read product modal"
        description="Use this modal component to show images, colors, cards, and text data for an existing product from the database."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/alert-info.tsx"
      >
        <ReadProductModal />
      </BlockSection>
      <BlockSection
        title="Read user modal"
        description="This example can be used to show the information about a user from the database inside a responsive modal component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-profile.tsx"
      >
        <ReadUserModal />
      </BlockSection>
      <BlockSection
        title="Advanced user read modal"
        description="Use this modal component to show detailed information about a user from your database including the profile picture, name, biography, and CRUD action buttons."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/user-switch.tsx"
      >
        <AdvancedUserReadModal />
      </BlockSection>
      <BlockSection
        title="Read event modal"
        description="Use this modal component to show the title, date, location, and details of an event from the database."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/notifications.tsx"
      >
        <ReadEventModal />
      </BlockSection>
      <BlockSection
        title="Advanced read event modal"
        description="This example can be used to show the details of an event inside a responsive modal component coded with Tailwind CSS."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/application-ui/side-navigation/projects-team-switch.tsx"
      >
        <AdvancedReadEventModal />
      </BlockSection>
    </>
  );
}
