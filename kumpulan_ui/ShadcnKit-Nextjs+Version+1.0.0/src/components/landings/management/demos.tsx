import ThemeBasedImage from "@/components/theme-based-image";
import { Button } from "@/components/ui/button";

const Demos = () => {
  return (
    <div className="container px-4 py-[100px] md:py-[160px]">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="max-w-[436px]">
          <p className="font-semibold">DATA MANAGEMENT</p>
          <h4 className="font-bold mt-[30px] mb-6">Powerful Data Management</h4>
          <p className="font-medium text-secondary-foreground">
            Our cloud-based project management tool provides you and your team
            with real-time data and updates.
          </p>
          <Button className="h-14 px-6 mt-9">Start Request Demo</Button>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <ThemeBasedImage
            width={562}
            height={564}
            lightSrc="/assets/images/management-landing/demo-light-1.png"
            darkSrc="/assets/images/management-landing/demo-dark-1.png"
            alt="shadcnkit"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20 my-[100px] md:my-[160px]">
        <div className="w-full flex justify-center md:justify-start">
          <ThemeBasedImage
            width={600}
            height={490}
            lightSrc="/assets/images/management-landing/demo-light-2.png"
            darkSrc="/assets/images/management-landing/demo-dark-2.png"
            alt="shadcnkit"
          />
        </div>

        <div className="max-w-[450px]">
          <p className="font-semibold">STATISTICS</p>
          <h4 className="font-bold mt-[30px] mb-6">Our Project Statistics</h4>
          <p className="font-medium text-secondary-foreground">
            Our SaaS tool streamlines all your analytical tasks, making it
            easier for you and your team to track and analyze data.
          </p>
          <Button className="h-14 px-6 mt-9">Start Request Demo</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="max-w-[360px]">
          <p className="font-semibold">REVIEWS</p>
          <h4 className="font-bold mt-[30px] mb-6">Customer Reviews</h4>
          <p className="font-medium text-secondary-foreground">
            Discover what our customer says about us and why they are coming
            back!
          </p>
          <Button className="h-14 px-6 mt-9">Start Request Demo</Button>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <ThemeBasedImage
            width={576}
            height={528}
            lightSrc="/assets/images/management-landing/demo-light-3.png"
            darkSrc="/assets/images/management-landing/demo-dark-3.png"
            alt="shadcnkit"
          />
        </div>
      </div>
    </div>
  );
};

export default Demos;
