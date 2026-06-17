"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { DefaultEventSchedule } from "./default";
import { EventScheduleSpeakersSponsors } from "./speakers-sponsors";
import { EventScheduleTabs } from "./tabs";
import { EventScheduleTimelineThreeColumns } from "./three-columns";

export default function AllEventSchedule() {
  return (
    <>
      <BlockBreadcrumb
        title="Event Schedule"
        description="Get started with a collection of website sections coded with Tailwind CSS to show the schedule of an event inside a timeline featuring a title, speaker, and description."
      />
      <BlockSection
        title="Default event schedule"
        description="Use this free example to show a list of workshops for an event using a timeline component and featuring the time and title of the presentation."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/event-schedule/default.tsx"
      >
        <DefaultEventSchedule />
      </BlockSection>
      <BlockSection
        title="Event schedule with speakers and sponsors"
        description="This example can be used to show two columns of a timeline presenting the workshop title, a short description, the speakers, and even the sponsors of the event."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/event-schedule/centered.tsx"
      >
        <EventScheduleSpeakersSponsors />
      </BlockSection>
      <BlockSection
        title="Event schedule timeline three columns"
        description="Use this example to show the schedule of the event based on a timeline for each day featuring the timing, title, speakers, and sponsors of the workshop."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/event-schedule/dropdown.tsx"
      >
        <EventScheduleTimelineThreeColumns />
      </BlockSection>
      <BlockSection
        title="Event schedule with tabs"
        description="Use this advanced example to break up the schedule of the days using the tab component and feature the timeline of the event showing the title, speakers, and sponsors."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/event-schedule/sub-navbar.tsx"
      >
        <EventScheduleTabs />
      </BlockSection>
    </>
  );
}
