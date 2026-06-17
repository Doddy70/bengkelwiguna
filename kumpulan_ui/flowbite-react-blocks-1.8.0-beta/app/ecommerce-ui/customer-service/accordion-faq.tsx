"use client";

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Label,
  Radio,
  theme,
} from "flowbite-react";
import { twMerge } from "tailwind-merge";

export default function CustomerServiceAccordionWithFAQ() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl space-y-6 px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          General questions
        </h2>
        <Accordion flush className="mt-6">
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              What is an iMac, and how does it differ from other computers?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Shop
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                The iMac is a line of all-in-one desktop computers designed and
                produced by Apple Inc. It sets itself apart by integrating the
                display, processing unit, and other components into a single
                sleek enclosure, minimizing cable clutter and providing a
                seamless user experience.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-1" name="general-radio" />
                  <Label
                    htmlFor="general-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 9
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-2" name="general-radio" />
                  <Label
                    htmlFor="general-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              What are the key features of the latest iMac models?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-3" name="general-radio-2" />
                  <Label
                    htmlFor="general-radio-3"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-4" name="general-radio-2" />
                  <Label
                    htmlFor="general-radio-4"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              What is the Retina display on an iMac, and why is it significant?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-5" name="general-radio-3" />
                  <Label
                    htmlFor="general-radio-5"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-6" name="general-radio-3" />
                  <Label
                    htmlFor="general-radio-6"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              How is the performance of an iMac for tasks like video editing,
              graphic design, and gaming?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-7" name="general-radio-4" />
                  <Label
                    htmlFor="general-radio-7"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-8" name="general-radio-4" />
                  <Label
                    htmlFor="general-radio-8"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              Can I upgrade the components of my iMac, such as RAM or storage?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-9" name="general-radio-5" />
                  <Label
                    htmlFor="general-radio-9"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-10" name="general-radio-5" />
                  <Label
                    htmlFor="general-radio-10"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              What is the role of Thunderbolt ports on an iMac?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-11" name="general-radio-6" />
                  <Label
                    htmlFor="general-radio-11"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-12" name="general-radio-6" />
                  <Label
                    htmlFor="general-radio-12"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              How does the macOS operating system differ from Windows?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-13" name="general-radio-6" />
                  <Label
                    htmlFor="general-radio-13"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-14" name="general-radio-6" />
                  <Label
                    htmlFor="general-radio-14"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              What security features does the iMac offer?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-15" name="general-radio-7" />
                  <Label
                    htmlFor="general-radio-15"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-16" name="general-radio-7" />
                  <Label
                    htmlFor="general-radio-16"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              Can I use my iMac with other Apple devices, such as iPhone and
              iPad?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-17" name="general-radio-8" />
                  <Label
                    htmlFor="general-radio-17"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-18" name="general-radio-8" />
                  <Label
                    htmlFor="general-radio-18"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle
              theme={{
                base: twMerge(
                  theme.accordion.title.base,
                  "px-0 text-lg font-bold",
                ),
                open: {
                  on: twMerge(
                    theme.accordion.title.open.on,
                    "bg-transparent dark:bg-transparent",
                  ),
                },
              }}
            >
              What support options are available for iMac users?
            </AccordionTitle>
            <AccordionContent className="space-y-3 px-0">
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Experts
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Apple Silicon:&nbsp;
                </span>
                Apple has transitioned its Mac lineup from Intel processors to
                custom-designed Apple Silicon chips. The latest iMac models
                might feature the latest iterations of these chips, offering
                improved performance and efficiency.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Slimmer Design:&nbsp;
                </span>
                Apple often focuses on making its products thinner and lighter.
                Recent iMac models might feature a slimmer profile compared to
                their predecessors.
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Vivid Retina Display:&nbsp;
                </span>
                iMacs typically feature high-resolution Retina displays with
                vibrant colors and excellent contrast. The latest models might
                offer improvements in display technology for even better image
                quality.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="general-radio-19" name="general-radio-9" />
                  <Label
                    htmlFor="general-radio-19"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 16
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="general-radio-20" name="general-radio-9" />
                  <Label
                    htmlFor="general-radio-20"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 3
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <div className="mt-6 sm:mt-8">
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            Didn't find the answer?&nbsp;
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Ask a question
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
