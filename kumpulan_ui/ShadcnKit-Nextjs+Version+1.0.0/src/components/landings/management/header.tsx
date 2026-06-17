import { Button } from "@/components/ui/button";
import ThemeBasedImage from "@/components/theme-based-image";

const Header = () => {
  return (
    <div className="container px-4 flex flex-col md:flex-row gap-20 my-[100px] md:my-[160px]">
      <div className="w-full md:max-w-[575px] text-center md:text-start">
        <span className="px-3 py-1.5 rounded-full bg-card text-sm font-medium">
          Certified Digital Marketing Professional
        </span>
        <h4 className="mb-6 mt-[30px] font-bold">
          Start your project management with Onion
        </h4>
        <p className="text-lg font-medium text-secondary-foreground mb-12">
          Onion is a cloud-based project management tool designed to help you
          and your team stay organized and productive.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <Button className="py-3.5 px-6 h-14">Try for Free</Button>
          <Button variant="outline" className="py-3.5 px-6 h-14">
            Book Demo
          </Button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <ThemeBasedImage
          priority
          width={536}
          height={350}
          darkSrc="/assets/images/management-landing/banner-dark.png"
          lightSrc="/assets/images/management-landing/banner-light.png"
          alt="shadcnkit"
        />
      </div>
    </div>
  );
};

export default Header;
