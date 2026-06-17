import Play from "@/components/icons/play";
import { Button } from "@/components/ui/button";
import ThemeBasedImage from "@/components/theme-based-image";

const Analytics = () => {
  return (
    <div className="max-w-[1480px] mx-auto bg-[url('/assets/images/management-landing/analytics-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="container px-4 pt-20 flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="max-w-[450px] text-center md:text-start">
          <h4 className="font-bold">Get started with onion today</h4>
          <p className="font-medium text-secondary-foreground my-9">
            Our cloud-based task management tool is designed to help you and
            your team get more done.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="h-14 px-6">Start Request Demo</Button>
            <Button variant="outline" className="h-14 px-6">
              <Play className="w-5 h-5 mr-2.5" /> Watch Video
            </Button>
          </div>
        </div>

        <ThemeBasedImage
          width={618}
          height={450}
          lightSrc="/assets/images/management-landing/analytics-light.png"
          darkSrc="/assets/images/management-landing/analytics-dark.png"
          alt="shadcnkit"
        />
      </div>
    </div>
  );
};

export default Analytics;
