import Collection from "@/components/icons/collection";
import CollectionOutline from "@/components/icons/collection-outline";
import ColorSwatch from "@/components/icons/color-swatch";
import ColorWatchOutline from "@/components/icons/color-swatch-outline";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Component, Map } from "lucide-react";
import { nanoid } from "nanoid";
import React from "react";

const Features = () => {
  return (
    <div className="container px-4 ">
      <div className="max-w-[644px] mx-auto text-center mb-12">
        <span className="px-4 py-2 text-white rounded-full text-xl transitiona-all duration-1000-inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 font-bold bg-card-hover">
          Loves From the Community
        </span>
        {/* <h4 className="font-semibold mt-2">
          Fantastic UI elements prepared for release
        </h4> */}
      </div>

      <div
        className="senja-embed"
        data-id="036ef432-3578-4aa6-a853-8ea2ab7f2fd1"
        data-lazyload="false"
      ></div>
      <script
        async
        type="text/javascript"
        src="https://static.senja.io/dist/platform.js"
      ></script>
      <div className="relative mt-8 antialiased">
        <div className="max-w-[644px] mx-auto text-center mb-10">
          <span className="px-4 py-2 text-white rounded-full text-xl -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 font-bold bg-card-hover">
            Save Time & Launch Fast
          </span>
          {/* <h4 className="font-semibold mt-2">
          Fantastic UI elements prepared for release
        </h4> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {features.map(({ id, Icon, title, details }) => (
            <Card
              key={id}
              className="p-10 flex flex-col items-center gap-2 text-center hover:bg-card-hover"
            >
              <Button
                size="icon"
                variant="secondary"
                className="h-9 w-9 rounded-full"
              >
                <Icon className="w-7 h-7" />
              </Button>
              <h6 className="font-semibold">{title}</h6>
              <p className="text-xl text-secondary-foreground">{details}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    id: nanoid(),
    Icon: Component,
    title: "Components",
    details:
      "Save design time by accessing a vast library of finely created components.",
  },
  {
    id: nanoid(),
    Icon: Component,
    title: "Figma Ready",
    details:
      "Access to Fully organiged Figma design file and customize the way you want ",
  },

  {
    id: nanoid(),
    Icon: Component,
    title: "NextJs Ready",
    details: "Browse Components by page and copy to your project Thats it ",
  },

  {
    id: nanoid(),
    Icon: Map,
    title: "Auto-layout",
    details: "Auto layout is a property you can add to frames and components.",
  },
  {
    id: nanoid(),
    Icon: ColorWatchOutline,
    title: "Color variable",
    details:
      "A color variable is a visual variable that defines the color of a symbol.",
  },
  {
    id: nanoid(),
    Icon: CollectionOutline,
    title: "And more",
    details: "500+ components 500+ components 500+ components",
  },
];

export default Features;
