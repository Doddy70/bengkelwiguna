import React from "react";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import BasicNavbar from "./basic-navbar";
import FadeInImage from "./fade-in-image";
import AppScreenshot from "./app-screenshot";

export default function Component() {
  return (
    <div className="relative flex h-screen min-h-dvh w-full flex-col overflow-hidden overflow-y-auto bg-background">
      <BasicNavbar />
      <main className="flex flex-col items-center rounded-2xl px-3 md:rounded-3xl md:px-0">
        <section className="z-20 my-14 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            New onboarding experience
          </Button>
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
              Easiest way to <br /> power global teams.
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            Acme makes running global teams simple. HR, Payroll, International Employment,
            contractor management and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <Button
              className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
              radius="full"
            >
              Get Started
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              See our plans
            </Button>
          </div>
        </section>
        <div className="z-20 mt-auto w-[calc(100%-calc(theme(spacing.4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-b-0 border-[#FFFFFF1A] bg-background bg-opacity-0 p-4">
          <AppScreenshot />
        </div>
      </main>
      <div className="pointer-events-none inset-0 top-[-25%] z-10 scale-150 select-none sm:absolute sm:scale-125">
        <FadeInImage
          fill
          priority
          alt="Gradient background"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
        />
      </div>
    </div>
  );
}
