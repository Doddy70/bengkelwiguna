import CheckCircle from "@/components/icons/check-circle";
import ThemeBasedImage from "@/components/theme-based-image";
import { Button } from "@/components/ui/button";

const Demos = () => {
  return (
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="text-start max-w-[496px] flex flex-col gap-[30px]">
          <h4 className="font-bold">Track and analyze sales in real time</h4>
          <p className="font-medium text-secondary-foreground">
            Our cloud-based CRM tool is designed to help you & your team manage
            your sales pipeline more efficiently.
          </p>

          <div>
            <p className="flex items-center font-medium">
              <CheckCircle className="mr-3" />
              <span>Get the insight you need to make a decision.</span>
            </p>
            <p className="flex items-center font-medium my-3">
              <CheckCircle className="mr-3" />
              <span>Stay connected to your customers.</span>
            </p>
            <p className="flex items-center font-medium">
              <CheckCircle className="mr-3" />
              <span>Easily generate reports and share.</span>
            </p>
          </div>

          <div>
            <Button className="h-14 px-6">Get Started</Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ThemeBasedImage
            width={700}
            height={466}
            lightSrc="/assets/images/crm-landing/demo-light-1.png"
            darkSrc="/assets/images/crm-landing/demo-dark-1.png"
            alt="shadcnkit"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-20 my-[100px] md:my-[160px]">
        <div>
          <ThemeBasedImage
            width={616}
            height={585}
            lightSrc="/assets/images/crm-landing/demo-light-2.png"
            darkSrc="/assets/images/crm-landing/demo-dark-2.png"
            alt="shadcnkit"
          />
        </div>

        <div className="text-start max-w-[420px] flex flex-col gap-[30px]">
          <h4 className="font-bold">Manage sales in one Dashboard</h4>
          <p className="font-medium text-secondary-foreground">
            The real-time sales tracking has been a game-changer for us,
            allowing us to make our sales process.
          </p>

          <div>
            <p className="flex items-center font-medium">
              <CheckCircle className="mr-3" />
              <span>Real-Time Sales Tracking.</span>
            </p>
            <p className="flex items-center font-medium my-3">
              <CheckCircle className="mr-3" />
              <span>Sales Reporting.</span>
            </p>
            <p className="flex items-center font-medium">
              <CheckCircle className="mr-3" />
              <span>Customer Communication.</span>
            </p>
          </div>

          <div>
            <Button className="h-14 px-6 w-auto">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
