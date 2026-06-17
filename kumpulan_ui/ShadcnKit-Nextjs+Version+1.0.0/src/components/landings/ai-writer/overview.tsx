import { nanoid } from "nanoid";
import { Button } from "@/components/ui/button";
import Database from "@/components/icons/database";
import Collection from "@/components/icons/collection";
import ColorSwatch from "@/components/icons/color-swatch";
import DocumentTextSolid from "@/components/icons/document-text-solid";

const Overview = () => {
  return (
    <div className="bg-card py-16">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-[592px]">
          <h4 className="font-bold">
            7,000+ professionals & teams choose AI Writer
          </h4>
          <p className="font-medium text-secondary-foreground my-[30px]">
            Experience the full power of an AI content generator that delivers
            premium results in seconds.
          </p>
          <Button className="h-14 px-6">Get Started</Button>
        </div>

        <div className="w-full md:max-w-[394px] grid grid-cols-2 gap-y-6 gap-x-4 md:mr-20">
          {overviews.map(({ id, title, count, subTitle, Icon }) => (
            <div key={id} className="p-5 shadow rounded-2xl">
              <div className="w-[22px] h-[22px] mx-auto md:mx-0 rounded bg-card-hover flex items-center justify-center">
                <Icon className="text-icon-active" />
              </div>
              <p className="text-xs font-medium mb-7 mt-4">{title}</p>
              <p className="text-2xl font-bold">{count}</p>
              <p className="text-xs text-secondary-foreground">{subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const overviews = [
  {
    id: nanoid(),
    title: "Generated Prompts",
    count: "12,398",
    subTitle: "Current Month",
    Icon: ColorSwatch,
  },
  {
    id: nanoid(),
    title: "New Registered Users",
    count: "5,635",
    subTitle: "Current Month",
    Icon: Collection,
  },
  {
    id: nanoid(),
    title: "Saved Documents",
    count: "368",
    subTitle: "Current Month",
    Icon: DocumentTextSolid,
  },
  {
    id: nanoid(),
    title: "New Subscribers",
    count: "3,468",
    subTitle: "Current Month",
    Icon: Database,
  },
];

export default Overview;
