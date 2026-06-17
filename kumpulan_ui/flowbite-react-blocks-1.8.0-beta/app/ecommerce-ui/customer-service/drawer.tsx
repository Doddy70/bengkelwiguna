"use client";

import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Label,
  Pagination,
  Radio,
  Select,
  Textarea,
  TextInput,
  Tooltip,
} from "flowbite-react";
import { Check, Search, Upload } from "flowbite-react-icons/outline";
import { QuestionCircle } from "flowbite-react-icons/solid";
import { useState } from "react";

export default function CustomerServiceWithDrawer() {
  const [isAskAQuestionDrawerOpen, setAskAQuestionDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-lg space-y-6 px-4 2xl:px-0">
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-4">
            <h2 className="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl lg:flex-1">
              Questions (147)
            </h2>
            <div className="mt-4 sm:flex sm:items-center sm:justify-end sm:gap-4 lg:mt-0">
              <form className="mt-4 w-full shrink-0 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:gap-4">
                <div className="mb-4 shrink-0 sm:mb-0">
                  <Label
                    htmlFor="reviews"
                    className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select question type
                  </Label>
                  <Select id="reviews" name="reviews">
                    <option selected>Most helpful</option>
                    <option value="recend">Most recent</option>
                  </Select>
                </div>
                <Label htmlFor="simple-search" className="sr-only">
                  Search
                </Label>
                <TextInput
                  icon={() => (
                    <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  )}
                  id="simple-search"
                  name="simple-search"
                  placeholder="Search Questions & Answers"
                  required
                  size={36}
                  type="search"
                />
                <button
                  onClick={() => setAskAQuestionDrawerOpen(true)}
                  className="mt-4 w-full shrink-0 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
                >
                  Ask a question
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-base font-semibold text-gray-900 hover:underline dark:text-white"
                >
                  Michael Gough
                </a>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:40
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                The specs say this model has 2 USB ports. The one I received has
                none. Are they hidden somewhere?
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  I have the same question
                </p>
                <div className="flex items-center">
                  <Radio id="answer-radio-1" name="answer-radio" />
                  <Label
                    htmlFor="answer-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 8
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="answer-radio-2" name="answer-radio" />
                  <Label
                    htmlFor="answer-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:pl-12">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Badge color="green" className="w-fit">
                <Check className="me-1.5 h-3 w-3" />
                Answer
              </Badge>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
                >
                  James Way
                </a>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 20 2023 • 12:45
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                It’s a USB-C port it’s a smaller port. Not the regular size USB
                port. See the picture below. It fits the newer Apple chargers.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="answer-radio-3" name="answer-radio-2" />
                  <Label
                    htmlFor="answer-radio-3"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 8
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="answer-radio-4" name="answer-radio-2" />
                  <Label
                    htmlFor="answer-radio-4"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-base font-semibold text-gray-900 hover:underline dark:text-white"
              >
                Jese Leos
              </a>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                November 18 2023 • 09:12
              </p>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Is this just the monitor?
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                I have the same question
              </p>
              <div className="flex items-center">
                <Radio id="answer-radio-5" name="answer-radio-3" />
                <Label
                  htmlFor="answer-radio-5"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Yes: 8
                </Label>
              </div>
              <div className="flex items-center">
                <Radio id="answer-radio-6" name="answer-radio-3" />
                <Label
                  htmlFor="answer-radio-6"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No: 0
                </Label>
              </div>
            </div>
          </div>

          <div className="sm:pl-12">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Badge color="green" className="w-fit">
                <Check className="me-1.5 h-3 w-3" />
                Answer
              </Badge>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
                >
                  Bonnie Green
                </a>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 18 2023 • 09:24
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                It's an all-in-one (AIO). Which means everything in one
                structure. So it's not just a monitor it uses Apple's operating
                System, macOS and it has storage, CPU, GPU etc.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="answer-radio-7" name="answer-radio-4" />
                  <Label
                    htmlFor="answer-radio-7"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 8
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="answer-radio-8a" name="answer-radio-4" />
                  <Label
                    htmlFor="answer-radio-8a"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
              >
                Roberta Casas
              </a>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                November 18 2023 • 16:02
              </p>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I just brought home the Imac 24". It says the mouse and Keyboard
              are wireless. Where do I install the power for them?
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                I have the same question
              </p>
              <div className="flex items-center">
                <Radio id="answer-radio-8b" name="answer-radio-5" />
                <Label
                  htmlFor="answer-radio-8b"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Yes: 8
                </Label>
              </div>
              <div className="flex items-center">
                <Radio id="answer-radio-9" name="answer-radio-5" />
                <Label
                  htmlFor="answer-radio-9"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No: 0
                </Label>
              </div>
            </div>
          </div>

          <div className="sm:pl-12">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Badge color="green" className="w-fit">
                <Check className="me-1.5 h-3 w-3" />
                Answer
              </Badge>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
                >
                  James Way
                </a>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 18 2023 • 09:24
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                You can charge the mouse and keyboard with a lightning charger.
                Once charged, they last months before having to charge again.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="answer-radio-10" name="answer-radio-6" />
                  <Label
                    htmlFor="answer-radio-10"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 8
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="answer-radio-11" name="answer-radio-6" />
                  <Label
                    htmlFor="answer-radio-11"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
              >
                Joseph McFallen
              </a>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                November 16 2023 • 13:00
              </p>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              For an inexpert 85-year-old general user with a ten-year old iMac
              (OSX Yosemite version 10.10.5), is this latest model 24" iMac with
              Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent
              upgrade?
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                I have the same question
              </p>
              <div className="flex items-center">
                <Radio id="answer-radio-12" name="answer-radio-7" />
                <Label
                  htmlFor="answer-radio-12"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Yes: 8
                </Label>
              </div>
              <div className="flex items-center">
                <Radio id="answer-radio-13" name="answer-radio-7" />
                <Label
                  htmlFor="answer-radio-13"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No: 0
                </Label>
              </div>
            </div>
          </div>

          <div className="sm:pl-12">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Badge color="green" className="w-fit">
                <Check className="me-1.5 h-3 w-3" />
                Answer
              </Badge>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
                >
                  Bonnie Green
                </a>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 16 2023 • 13:44
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Hello Joseph, it's basically the same system as your older
                machine, but bigger, lighter and faster. There is no disc drive
                and it has fewer ports.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="answer-radio-14" name="answer-radio-8" />
                  <Label
                    htmlFor="answer-radio-14"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 8
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="answer-radio-15" name="answer-radio-8" />
                  <Label
                    htmlFor="answer-radio-15"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-base font-semibold text-gray-900 hover:underline dark:text-white"
              >
                Neil Sims
              </a>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                November 06 2023 • 17:37
              </p>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Does this include the keyboard and mouse?
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                I have the same question
              </p>
              <div className="flex items-center">
                <Radio id="answer-radio-16" name="answer-radio-9" />
                <Label
                  htmlFor="answer-radio-16"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Yes: 8
                </Label>
              </div>
              <div className="flex items-center">
                <Radio id="answer-radio-17" name="answer-radio-9" />
                <Label
                  htmlFor="answer-radio-17"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No: 0
                </Label>
              </div>
            </div>
          </div>

          <div className="sm:pl-12">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Badge color="green" className="w-fit">
                <Check className="me-1.5 h-3 w-3" />
                Answer
              </Badge>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-base font-semibold text-gray-900 hover:underline  dark:text-white"
                >
                  James Way
                </a>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  November 06 2023 • 18:07
                </p>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Yes it does, color matched to the Mac. And the keyboard has
                Touch ID.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Was it helpful to you?
                </p>
                <div className="flex items-center">
                  <Radio id="answer-radio-18" name="answer-radio-10" />
                  <Label
                    htmlFor="answer-radio-18"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes: 8
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="answer-radio-19" name="answer-radio-10" />
                  <Label
                    htmlFor="answer-radio-19"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No: 0
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center overflow-x-auto">
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
          />
        </div>
      </section>
      <Drawer
        onClose={() => setAskAQuestionDrawerOpen(false)}
        open={isAskAQuestionDrawerOpen}
        position="right"
        className="w-full max-w-md"
      >
        <DrawerHeader title="ASK A QUESTION" titleIcon={() => <></>} />
        <DrawerItems className="mt-5">
          <form action="#">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label
                  htmlFor="question"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your question&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">
                    (150-1000 characters)
                  </span>
                </Label>
                <Textarea id="question" name="question" rows={6} required />
              </div>
              <div className="col-span-2 grid gap-4">
                <div>
                  <Label
                    htmlFor="question-type"
                    className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="me-1">Question type</span>
                    <Tooltip content="Choose your question type to get a faster answer.">
                      <QuestionCircle className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                    </Tooltip>
                  </Label>
                  <Select id="question-type" name="question-type">
                    <option value="technical">Technical Question</option>
                    <option value="shipment">Shipment Question</option>
                    <option value="payment">Payment Issue</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="priority-type"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Priority
                  </Label>
                  <Select id="priority-type" name="priority-type">
                    <option value="very-high">Very High</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Select>
                </div>
              </div>
              <div className="col-span-2">
                <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Upload files&nbsp;
                  <span className="text-gray-500 dark:text-gray-400">
                    (Optional)
                  </span>
                </p>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <Upload className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </Label>
                </div>
              </div>

              <div className="col-span-2">
                <div className="flex items-center">
                  <Checkbox id="drawer-checkbox" name="drawer-checkbox" />
                  <Label
                    htmlFor="drawer-checkbox"
                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    I have read and agree with the&nbsp;
                    <a
                      href="#"
                      className="text-primary-600 hover:underline dark:text-primary-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </Label>
                </div>
              </div>
              <div className="col-span-2">
                <Button
                  size="lg"
                  type="submit"
                  className="w-full [&>span]:text-sm"
                >
                  Submit question
                </Button>
              </div>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </>
  );
}
