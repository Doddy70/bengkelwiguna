import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="container px-4 mt-[140px] md:mt-[200px]">
      <div className="max-w-[1040px] mx-auto text-center flex flex-col items-center gap-[30px]">
        <h3 className="font-bold">The Future of Writing is Here</h3>
        <p className="max-w-[600px] text-secondary-foreground">
          Discover Our AI-Driven Website Template for Scalable, High-Quality
          Content Creation and Take Your Business to the Next Level.
        </p>
        <Button className="h-16 px-7">
          Get Started for Free{" "}
          <ArrowRight className="w-[18px] h-[18px] ml-2.5" />
        </Button>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="flex items-center">
            <CheckCircle className="mr-2 w-5 h-5" />
            <span>No credit card required</span>
          </p>
          <p className="flex items-center">
            <CheckCircle className="mr-2 w-5 h-5" />
            <span>2,000 free words per month</span>
          </p>
          <p className="flex items-center">
            <CheckCircle className="mr-2 w-5 h-5" />
            <span>90+ content types to explore</span>
          </p>
        </div>

        <div className="bg-card rounded-[40px] p-5 mt-20">
          <Image
            width={995}
            height={528}
            src="/assets/images/ai-content-landing/banner.png"
            alt="shadcnkit"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
