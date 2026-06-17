import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import ThemeBasedImage from "@/components/theme-based-image";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const Header = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "container px-4 flex flex-col md:flex-row items-center gap-20 my-[100px] md:my-[160px]",
        className
      )}
      {...props}
    >
      <div className="w-full md:max-w-[500px] text-center md:text-start">
        <span className="px-3 py-1.5 rounded-full bg-card text-sm font-medium">
          Deal Flow CRM Software
        </span>
        <h4 className="mt-4 font-bold text-secondary-foreground">
          Start Your Sales Process with Our{" "}
          <span className="text-primary">SaaS CRM</span> Tool
        </h4>
        <p className="text-lg font-medium text-secondary-foreground my-7">
          Our cloud-based CRM tool is designed to help you & your team manage
          your sales pipeline more efficiently.
        </p>

        <Button className="py-3.5 px-6 h-14">Try for Free</Button>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <p className="flex items-center font-medium">
            <CheckCircle className="mr-2" />
            <span>No Credit required</span>
          </p>
          <p className="flex items-center font-medium">
            <CheckCircle className="mr-2" />
            <span>Real-time insights</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <ThemeBasedImage
          width={625}
          height={464}
          lightSrc="/assets/images/crm-landing/banner-light.png"
          darkSrc="/assets/images/crm-landing/banner-dark.png"
          alt="shadcnkit"
        />
      </div>
    </div>
  );
};

export default Header;
