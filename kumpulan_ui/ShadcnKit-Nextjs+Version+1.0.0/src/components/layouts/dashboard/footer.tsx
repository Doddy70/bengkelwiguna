import Dribble from "@/components/icons/dribble";
import Facebook from "@/components/icons/facebook";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Twitter from "@/components/icons/twitter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { DivProps } from "react-html-props";

const Footer = ({ className, ...props }: DivProps) => {
  return (
    <div
      className={cn(
        "shadow border border-border rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 gap-10",
        className
      )}
      {...props}
    >
      <div>
        <p className="text-xl font-semibold">ShadcnKit Admin Template</p>
        <p className="text-sm text-secondary-foreground">
          Clean UI design & Well documentation
        </p>
        <Button className="px-7 mt-4">Buy Now</Button>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row items-center justify-between gap-7 text-sm font-medium text-secondary-foreground">
          <li>About</li>
          <li>Support</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="flex items-center justify-center md:justify-end gap-4 mt-5">
          <Twitter className="w-4 h-4 text-icon-muted hover:text-primary" />
          <Linkedin className="w-4 h-4 text-icon-muted hover:text-primary" />
          <Facebook className="w-4 h-4 text-icon-muted hover:text-primary" />
          <Dribble className="w-4 h-4 text-icon-muted hover:text-primary" />
          <Github className="w-4 h-4 text-icon-muted hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
