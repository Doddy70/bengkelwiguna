"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { CarouselSliderTeamSection } from "./carousel-slider";
import { CardsWithGridLayoutAndCTATeamSection } from "./cta";
import { TeamMemberCardsSection } from "./default";
import { GeneralDescriptionWithTeamMembersSection } from "./description";
import { FourColumnGridLayoutSocialMediaCTATeamSection } from "./four-columns";
import { GridLayoutCardsTeamSection } from "./grid-cards";
import { GridLayoutCleanTeamSection } from "./grid-clean";
import { OverlayCardsWithZoomEffectTeamSection } from "./overlay-zoom";

export default function AllTeamSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Team Sections"
        description="Get started with a collection of team sections built with Tailwind CSS and Flowbite to showcase your organization's team members based on multiple layouts."
      />
      <BlockSection
        title="Team member cards"
        description="Use this example to show information about your team members such as the name, occupation, picture, and social media accounts inside a card component."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/default.tsx"
      >
        <TeamMemberCardsSection />
      </BlockSection>
      <BlockSection
        title="Grid layout clean"
        description="This example can be used to showcase up to four team members on a single row based on a clean appearance without any background or card."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/grid-clean.tsx"
      >
        <GridLayoutCleanTeamSection />
      </BlockSection>
      <BlockSection
        title="General description with team members"
        description="Use this example to show additional information about the organization's team on the left side and showcase the team members on the right side."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/.tsx"
      >
        <GeneralDescriptionWithTeamMembersSection />
      </BlockSection>
      <BlockSection
        title="Carousel slider"
        description="Use this example to show information about your team members such as a picture, name, and social media accounts inside a carousel slider."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/default.tsx"
      >
        <CarouselSliderTeamSection />
      </BlockSection>
      <BlockSection
        title="Grid layout cards"
        description="This example can be used to show up to four team members on a single row inside cards and showcase a picture, name, occupation, and social media accounts."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/default.tsx"
      >
        <GridLayoutCardsTeamSection />
      </BlockSection>
      <BlockSection
        title="Overlay cards with zoom effect"
        description="Use this example to show a list of your team members with cards featuring the profile picture of a team member with overlayed text and a zoom effect."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/default.tsx"
      >
        <OverlayCardsWithZoomEffectTeamSection />
      </BlockSection>
      <BlockSection
        title="Cards with grid layout and CTA"
        description="This example can be used to show a larger team using a grid layout with overlayed cards and show a CTA card to encourage others to join your team."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/default.tsx"
      >
        <CardsWithGridLayoutAndCTATeamSection />
      </BlockSection>
      <BlockSection
        title="Four column grid layout with social media and CTA"
        description="Use this example to show your team members in a four column grid layout with social media accounts and a CTA banner to let others sign up for a job."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/team-sections/default.tsx"
      >
        <FourColumnGridLayoutSocialMediaCTATeamSection />
      </BlockSection>
    </>
  );
}
