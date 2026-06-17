import { Button } from "@/components/ui/button";
import Image from "next/image";

const Demos = () => {
  return (
    <div className="container px-4 py-[120px] md:py-[200px]">
      <div className="text-center mb-14">
        <h5 className="font-bold mb-4">Demos</h5>
        <p className="text-lg font-medium text-secondary-foreground">
          <span className="p-1 text-xs rounded-md bg-emerald-500 text-primary-foreground">
            200+
          </span>{" "}
          Clean pages and components
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {demos.map((demo, ind) => (
          <div key={ind}>
            <div className="max-w-[584px] mx-auto relative rounded-lg overflow-hidden group">
              <Image
                width={584}
                height={584}
                src={demo.image}
                alt="shadcnkit"
              />
              <div className="absolute top-0 left-0 h-full w-full transition-all duration-300 invisible group-hover:visible group-hover:bg-[#0f172a33] flex justify-center items-center">
                <Button className="transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Live Preview
                </Button>
              </div>
            </div>

            <p className="text-center mt-6 font-medium">{demo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const demos = [
  {
    title: "React (CRA)",
    image: "/assets/images/new-intro-landing/demo-1.png",
  },
  { title: "Next.js", image: "/assets/images/new-intro-landing/demo-2.png" },
];

export default Demos;
