import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { Laptop, Layers, LayoutPanelTop } from "lucide-react";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h5>Welcome to components exploring</h5>
      <p className="mt-8 mb-16">
        Where functionality meets elegance, explore essential UI elements for
        seamless integration, elevating your design with versatile components.
        Dive in to discover the building blocks for a stunning interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {elements.map(({ id, title, Icon }) => (
          <Card key={id} className="p-5 flex flex-col items-center gap-5">
            <span className="p-2.5 rounded-md bg-card-hover">
              <Icon strokeWidth={3} className="w-5 h-5" />
            </span>
            <p className="text-xl">
              <span className="font-semibold">{title}</span> Components
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const elements = [
  {
    id: nanoid(),
    title: "Layout",
    Icon: Layers,
  },
  {
    id: nanoid(),
    title: "Landing",
    Icon: Laptop,
  },
  {
    id: nanoid(),
    title: "Dashboard",
    Icon: LayoutPanelTop,
  },
];

export default Page;
