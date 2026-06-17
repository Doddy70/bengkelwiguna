"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BackgroundImage500Page } from "./background-image";
import { Default500Page } from "./default";
import { Illustration500Page } from "./illustration";

export default function All500Pages() {
  return (
    <>
      <BlockBreadcrumb
        title="500 Pages"
        description="Get started with a collection of 500 status code pages coded with Tailwind CSS to show when a server error is being triggered."
      />
      <BlockSection
        title="Default 500 page"
        description="Use this example of a page to show when an internal server error has happened and a 500 status code has to be shown."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/500-pages/default.tsx"
      >
        <Default500Page />
      </BlockSection>
      <BlockSection
        title="Background image"
        description="Use this example of a 500 server error page with a background image to show more visually impactful content."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/500-pages/illustration.tsx"
      >
        <BackgroundImage500Page />
      </BlockSection>
      <BlockSection
        title="Illustration 500 page"
        description="Use this example of a 500 status code page together with a descriptive illustration."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/500-pages/background-image.tsx"
      >
        <Illustration500Page />
      </BlockSection>
    </>
  );
}
