import { Button } from "@/components/ui/button";
import CircleProgress from "@/components/circle-progress";
import ThemeBasedImage from "@/components/theme-based-image";

const Demos = () => {
  return (
    <div className="container px-4 my-[120px] md:my-[200px]">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="max-w-[476px] flex flex-col gap-12">
          <h4 className="font-bold">Who we are?</h4>
          <p className="font-medium text-secondary-foreground">
            Onion is a pre-designed UI used to build web app front-ends. It
            includes ready-to-use components like menus, charts, tables, and
            forms for efficient UI design and development.
          </p>

          <div className="w-full md:max-w-[325px] flex items-center justify-between">
            <div className="flex flex-col items-center">
              <CircleProgress size={70} percentage={70} strokeWidth={5} />
              <p className="text-sm font-medium mt-3">Design</p>
            </div>
            <div className="flex flex-col items-center">
              <CircleProgress size={70} percentage={56} strokeWidth={5} />
              <p className="text-sm font-medium mt-3">Development</p>
            </div>
            <div className="flex flex-col items-center">
              <CircleProgress size={70} percentage={30} strokeWidth={5} />
              <p className="text-sm font-medium mt-3">Marketing</p>
            </div>
          </div>

          <div>
            <Button className="h-14 px-6">Get Started</Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ThemeBasedImage
            width={686}
            height={422}
            lightSrc="/assets/images/about-us-landing/demo-light.png"
            darkSrc="/assets/images/about-us-landing/demo-dark.png"
            alt="shadcnkit"
          />
        </div>
      </div>
    </div>
  );
};

export default Demos;
