import { Button } from "@/components/ui/button";
import ThemeBasedImage from "@/components/theme-based-image";

const Demos = () => {
  return (
    <div className="container px-4 py-[100px] md:py-[160px]">
      <div className="max-w-[1026px] mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="max-w-[440px] flex flex-col gap-[30px]">
          <p className="font-semibold">FEATURES</p>
          <h4 className="font-bold">Powerful Features</h4>
          <p className="font-medium text-secondary-foreground">
            Explore our core and powerful AI writer features. It’s save your
            time and reduce cost.
          </p>

          <div>
            <Button className="h-14 px-6">Get Started</Button>
          </div>
        </div>

        <div className="relative">
          <div className="after:content-[''] after:absolute after:right-0 after:top-1/2 after:transform after:-translate-x-1/2 after:w-[102px] sm:after:w-[102px] after:h-[102px] sm:after:h-[102px] after:blur-[120px] sm:after:blur-[140px] after:rounded-full after:pointer-events-none after:bg-[#EAB308]"></div>

          <ThemeBasedImage
            width={514}
            height={488}
            lightSrc="/assets/images/ai-content-landing/demo-light.png"
            darkSrc="/assets/images/ai-content-landing/demo-dark.png"
            alt="shadcnkit"
          />
        </div>
      </div>
    </div>
  );
};

export default Demos;
