"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { ProjectPortfolioAlternateSections } from "./alternate-sections";
import { ProjectPortfolioCarousel } from "./carousel";
import { DefaultProjectPortfolio } from "./default";
import { ProjectPortfolioFeaturedImage } from "./featured-image";
import { GridLayoutImageCTAPreviewProjectPortfolio } from "./grid-layout";

export default function AllProjectPortfolio() {
  return (
    <>
      <BlockBreadcrumb
        title="Portfolio"
        description="Get started with the project portfolio components to showcase your personal or company client's project specifications, previews and results coded with Tailwind CSS."
      />
      <BlockSection
        title="Default portfolio example"
        description="Use this example to show a list of company clients and case study previews inside a website section featuring the client, title of the project, a description and CTA button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/project-portfolio/default.tsx"
      >
        <DefaultProjectPortfolio />
      </BlockSection>
      <BlockSection
        title="Portfolio alternate sections"
        description="Use this example to show alternating website sections featuring client work with case studies, a featured image, description, technologies used, and CTA buttons."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/project-portfolio/default.tsx"
      >
        <ProjectPortfolioAlternateSections />
      </BlockSection>
      <BlockSection
        title="Grid layout with image and CTA and preview"
        description="This example can be used to show three projects on a row featuring an image, title, description, and two CTA buttons for the project case study and live preview of the website."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/project-portfolio/default.tsx"
      >
        <GridLayoutImageCTAPreviewProjectPortfolio />
      </BlockSection>
      <BlockSection
        title="Project portfolio with carousel"
        description="This example can be used to show a list of clients and case studies inside a carousel slider component featuring client logo, project name, description, technologies used and a CTA button."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/project-portfolio/default.tsx"
      >
        <ProjectPortfolioCarousel />
      </BlockSection>
      <BlockSection
        title="Project portfolio with featured image"
        description="This example can be used to show large featured images as screenshots for the client work together with a title, description, technologies that have been used and a CTA button to the case study page."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/project-portfolio/default.tsx"
      >
        <ProjectPortfolioFeaturedImage />
      </BlockSection>
    </>
  );
}
