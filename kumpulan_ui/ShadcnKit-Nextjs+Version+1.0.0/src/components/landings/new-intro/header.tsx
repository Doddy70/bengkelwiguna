import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeBasedImage from "@/components/theme-based-image";
import CollectionOutline from "@/components/icons/collection-outline";

const Header = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-20 md:mt-[100px] flex flex-col md:flex-row gap-20 md:gap-10">
      <div className="max-w-[574px] mx-auto md:mx-0">
        <p className="flex items-center justify-center md:justify-start font-medium text-secondary-foreground">
          <CollectionOutline className="mr-2 w-5 h-5 text-icon-active" />
          <span>Easily generate reports and share.</span>
        </p>
        <h4 className="mt-7 font-bold">
          Developer Friendly{" "}
          <span className="text-secondary-foreground">
            React Admin Template
          </span>
        </h4>
        <p className="text-lg text-secondary-foreground mt-6 mb-12">
          Choose from React CRA or Next.js versions, with both RTL support and
          Dark/Light themes included.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mb-12">
          <Button className="h-12">Buy Now</Button>
          <Button variant="outline" className="h-12">
            View Demo
          </Button>
        </div>

        <div className="max-w-[220px] mx-auto md:mx-0 flex items-center justify-between gap-5">
          {technologies.map((tech, ind) => (
            <Image
              key={ind}
              width={28}
              height={28}
              src={tech}
              alt="shadcnkit"
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <ThemeBasedImage
          width={650}
          height={570}
          lightSrc="/assets/images/new-intro-landing/header-light.png"
          darkSrc="/assets/images/new-intro-landing/header-dark.png"
          alt="shadcnkit"
        />
      </div>
    </div>
  );
};

const technologies = [
  "/assets/icons/react.png",
  "/assets/icons/nextjs.png",
  "/assets/icons/typescript.png",
  "/assets/icons/javascript.png",
  "/assets/icons/figma.png",
];

export default Header;
