"use client";

import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import { BlockquoteTestimonial } from "./blockquote";
import { CarouselSliderTestimonial } from "./carousel-slider";
import { GridLayoutTestimonialCards } from "./grid-layout-cards";
import { TestimonialCards } from "./testimonial-cards";
import { TestimonialTabs } from "./testimonial-tabs";

export default function AllTestimonials() {
  return (
    <>
      <BlockBreadcrumb
        title="Testimonials"
        description="Get started with a collection of testimonial sections built with Tailwind CSS to show a statement from a customer as an endorsement to other potential clients."
      />
      <BlockSection
        title="Blockquote example"
        description="Use this simple example of a testimonial based on a blockquote element and show the text, customer avatar, name, and occupation."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/testimonials/blockquote.tsx"
      >
        <BlockquoteTestimonial />
      </BlockSection>
      <BlockSection
        title="Testimonial cards"
        description="You can use this example of testimonial cards up to two items on a row and show the title, description, avatar, name, and occupation."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/testimonials/testimonial-cards.tsx"
      >
        <TestimonialCards />
      </BlockSection>
      <BlockSection
        title="Testimonial tabs"
        description="Get started with an interactive section of testimonials where you can click on the tabs on the left side and show the testimonial text on the right side."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/testimonials/testimonial-tabs.tsx"
      >
        <TestimonialTabs />
      </BlockSection>
      <BlockSection
        title="Carousel slider"
        description="Show more testimonial items inside a carousel slider component from the Flowbite library and showcase a text, avatar, name, and occupation."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/testimonials/carousel-slider.tsx"
      >
        <CarouselSliderTestimonial />
      </BlockSection>
      <BlockSection
        title="Grid layout testimonial cards"
        description="Showcase up to three testimonial cards for every row and show a title, description, avatar, name, and occupation of the customer making the statement."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/testimonials/grid-layout-cards.tsx"
      >
        <GridLayoutTestimonialCards />
      </BlockSection>
    </>
  );
}
