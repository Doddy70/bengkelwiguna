import React from "react";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import CenteredNavbar from "./centered-navbar";
import ScrollingBanner from "./scrolling-banner";
import AppScreenshotLight from "./app-screenshot-light";
import {Logo1, Logo10, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9} from "./logos";

const logos = [
  {
    key: "logo-1",
    logo: Logo1,
  },
  {
    key: "logo-2",
    logo: Logo2,
  },
  {
    key: "logo-3",
    logo: Logo3,
  },
  {
    key: "logo-4",
    logo: Logo4,
  },
  {
    key: "logo-5",
    logo: Logo5,
  },
  {
    key: "logo-6",
    logo: Logo6,
  },
  {
    key: "logo-7",
    logo: Logo7,
  },
  {
    key: "logo-8",
    logo: Logo8,
  },
  {
    key: "logo-9",
    logo: Logo9,
  },
  {
    key: "logo-10",
    logo: Logo10,
  },
];

export default function Component() {
  return (
    <div className="relative flex h-screen min-h-dvh w-full flex-col gap-9 overflow-y-auto bg-background p-4 md:gap-12 md:px-10 md:py-[34px]">
      <main className="flex flex-col items-center rounded-2xl bg-hero-section-centered-navbar px-3 md:rounded-3xl md:px-0">
        <section className="my-14 mt-16 flex flex-col items-center justify-center gap-6">
          <CenteredNavbar />
          <Button
            className="h-9 bg-background px-[18px] text-default-500 shadow-[0_2px_15px_0_rgba(0,0,0,0.05)]"
            endContent={
              <Icon
                className="pointer-events-none flex-none outline-none [&>path]:stroke-[1.5]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
          >
            New onboarding experience
          </Button>
          <h1 className="text-center text-[clamp(2.125rem,1.142rem+3.659vw,4rem)] font-bold leading-none text-foreground">
            Easiest way to <br /> power global teams.
          </h1>
          <p className="text-center text-base text-default-600 sm:w-[466px] md:text-lg md:leading-6">
            Acme makes running global teams simple. HR, Payroll, International Employment,
            contractor management and more.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Button className="w-[163px] bg-foreground font-medium text-background" radius="full">
              Get Started
            </Button>
            <Button
              className="w-[163px] border-1 border-white/40 font-medium text-default-foreground"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-background">
                  <Icon
                    className="text-default-500 transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[1.5]"
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
        <div className="mt-auto w-[calc(100%-calc(theme(spacing.4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-white/25 bg-white/40 px-2 pt-3 md:px-4 md:pt-6">
          <AppScreenshotLight />
        </div>
      </main>
      <div className="mx-auto w-full max-w-6xl px-3 lg:px-6">
        <ScrollingBanner hideScrollBar shouldPauseOnHover gap="40px" size={40}>
          {logos.map(({key, logo}) => (
            <div key={key} className="flex items-center justify-center text-default-500">
              {logo}
            </div>
          ))}
        </ScrollingBanner>
      </div>
    </div>
  );
}
