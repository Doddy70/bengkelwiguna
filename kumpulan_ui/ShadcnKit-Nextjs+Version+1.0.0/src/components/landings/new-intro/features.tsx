import ChartPie from "@/components/icons/chart-pie";
import Cloud from "@/components/icons/cloud";
import Collection from "@/components/icons/collection";
import CollectionOutline from "@/components/icons/collection-outline";
import ColorWatchOutline from "@/components/icons/color-swatch-outline";
import Cube from "@/components/icons/cube";
import Database from "@/components/icons/database";
import DatabaseOutline from "@/components/icons/database-outline";
import DocumentTextOutline from "@/components/icons/document-text-outline";
import Pencil from "@/components/icons/pencil";
import PencilOutline from "@/components/icons/pencil-outline";
import Refresh from "@/components/icons/refresh";
import VectorDown from "@/components/icons/vector-down";
import VectorUp from "@/components/icons/vector-up";
import ViewBoards from "@/components/icons/view-boards";

const Features = () => {
  return (
    <div className="container px-4 mb-[100px] md:mb-[160px]">
      <div className="max-w-[600px] mx-auto text-center mb-[60px]">
        <h4 className="font-bold mb-4">Stop wasting your time</h4>
        <p className="font-medium text-secondary-foreground">
          AI writers analyze text and generate content using NLP and machine
          learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {features.map((feature, ind) => (
          <div key={ind} className="bg-card py-14 px-6 rounded-2xl text-center">
            <feature.Icon className="mx-auto mb-6" />
            <p className="text-lg font-semibold mb-3">{feature.title}</p>
            <p className="text-secondary-foreground">{feature.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    Icon: CollectionOutline,
    title: "8 Dashboards",
    details: "Unique dashboard templates.",
  },
  {
    Icon: Cube,
    title: "Light/Dark theme",
    details: "Dark and light theme integrated.",
  },
  {
    Icon: ChartPie,
    title: "Charts/Table",
    details: "Feature reach charts & tables yet easy to use.",
  },
  {
    Icon: DatabaseOutline,
    title: "200+ Components",
    details: "Carefully designed 200+ reusable components.",
  },
  {
    Icon: ColorWatchOutline,
    title: "35+ Pages",
    details: "We have 35+ templates pages to build any project.",
  },
  {
    Icon: PencilOutline,
    title: "Easy to Customize",
    details: "You can easily customize this template.",
  },
  {
    Icon: Refresh,
    title: "Lifetime Update",
    details: "We provide lifetime update for all user.",
  },
  {
    Icon: DocumentTextOutline,
    title: "Well Documentation",
    details: "Detail documentation to help you get started fast.",
  },
];

export default Features;
