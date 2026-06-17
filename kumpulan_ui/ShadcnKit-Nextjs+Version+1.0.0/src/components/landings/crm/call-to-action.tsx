import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeBasedImage from "@/components/theme-based-image";

const CallToAction = () => {
  return (
    <div className="bg-card">
      <div className="max-w-[1480px] mx-auto py-[75px] bg-[url('/assets/images/management-landing/analytics-bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="max-w-[1040px] mx-auto flex flex-col md:flex-row items-center gap-20 justify-between px-4">
          <div className="max-w-[400px] flex flex-col gap-[30px]">
            <h4 className="font-bold">Get started with onion today</h4>
            <p className="font-medium text-secondary-foreground">
              Our cloud-based task management tool is designed to help you and
              your team get more done.
            </p>

            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="shadow"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>

          <div>
            <ThemeBasedImage
              width={500}
              height={382}
              lightSrc="/assets/images/crm-landing/cta-light.svg"
              darkSrc="/assets/images/crm-landing/cta-dark.svg"
              alt="shadcnkit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
