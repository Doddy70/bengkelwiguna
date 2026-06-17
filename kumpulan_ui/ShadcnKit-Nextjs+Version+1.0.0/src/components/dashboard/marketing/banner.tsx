import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";
import Twitter from "@/components/icons/twitter";
import Linkedin from "@/components/icons/linkedin";
import Dribble from "@/components/icons/dribble";
import Facebook from "@/components/icons/facebook";
import Github from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import ThemeBasedImage from "@/components/theme-based-image";

type Props = HTMLAttributes<HTMLDivElement>;

const Banner = ({ className, ...props }: Props) => {
  return (
    <Card
      className={cn("px-6 py-8 flex flex-col items-center", className)}
      {...props}
    >
      <ThemeBasedImage
        width={216}
        height={190}
        lightSrc="/assets/svg/announcement-light.svg"
        darkSrc="/assets/svg/announcement-dark.svg"
        alt="shadcnkit"
      />

      <p className=" max-w-[200px] text-xl font-semibold text-center mt-6 mb-5">
        We have big update for you!
      </p>

      <Button className="h-12 px-7">Check Update</Button>
    </Card>
  );
};

// CUSTOM DUMMY DATA SET
const DATA = [
  {
    value: 4.67,
    id: nanoid(),
    title: "Twitter",
    subtitle: "Social Media",
    Icon: Twitter,
  },
  {
    value: 3.37,
    error: true,
    id: nanoid(),
    title: "Linked In",
    subtitle: "Social Media",
    Icon: Linkedin,
  },
  {
    value: 2.19,
    id: nanoid(),
    title: "Dribble",
    subtitle: "Community",
    Icon: Dribble,
  },
  {
    value: 2.68,
    error: true,
    id: nanoid(),
    title: "Facebook",
    subtitle: "Social Media",
    Icon: Facebook,
  },
  {
    value: 3.33,
    id: nanoid(),
    title: "Instagram",
    subtitle: "Community",
    Icon: Github,
  },
];

export default Banner;
