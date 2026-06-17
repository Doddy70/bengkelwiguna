"use client";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  Textarea,
  theme,
  Tooltip,
} from "flowbite-react";
import {
  Close,
  CreditCard,
  QuestionCircle,
  Truck,
  Upload,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function CustomerServicePage() {
  const [isAskAQuestionModalOpen, setAskAQuestionModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl space-y-6 px-4 2xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="w-full lg:sticky lg:top-4 lg:max-w-xs">
              <div className="rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-4 p-4">
                  <ul className="space-y-2 text-gray-900 dark:text-white">
                    <li>
                      <a
                        href="#general"
                        title=""
                        className="group flex w-full items-center rounded-lg px-3 py-1.5 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <QuestionCircle className="me-2 h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        General questions
                      </a>
                    </li>

                    <li>
                      <a
                        href="#technical"
                        title=""
                        className="group flex w-full items-center rounded-lg px-3 py-1.5 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <svg
                          className="me-2 h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                          />
                        </svg>
                        Technical questions
                      </a>
                    </li>

                    <li>
                      <a
                        href="#payment"
                        title=""
                        className="group flex w-full items-center rounded-lg px-3 py-1.5 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <CreditCard className="me-2 h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Payment questions
                      </a>
                    </li>

                    <li>
                      <a
                        href="#technical"
                        title=""
                        className="group flex w-full items-center rounded-lg px-3 py-1.5 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <Truck className="me-2 h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Delivery questions
                      </a>
                    </li>
                  </ul>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">
                      Didn't find the answer?
                    </span>
                    <Button
                      onClick={() => setAskAQuestionModalOpen(true)}
                      className="mt-4 w-full"
                    >
                      Ask a question
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="flex border-b border-t py-4 text-lg font-bold text-gray-900 dark:border-gray-700 dark:text-white md:text-xl xl:items-center">
                <QuestionCircle className="me-2 mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-white" />
                How does the fusion drive technology in the iMac work, and what
                benefits does it offer?
              </h3>
              <div className="my-4 flex items-center text-gray-500 dark:text-gray-400">
                Updated November 20 2023{" "}
                <div className="mx-2 h-1.5 w-1.5 rounded-full bg-gray-500"></div>{" "}
                <div>12:45</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Fusion Drive technology in the iMac combines the benefits of
                both traditional hard disk drives (HDDs) and solid-state drives
                (SSDs) into a single storage solution. Here's how it works and
                the advantages it offers:
              </p>
              <ol className="my-4 list-outside list-decimal space-y-2.5 pl-5 text-gray-500 dark:text-gray-400 md:my-6">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Hybrid Storage Architecture:
                  </span>{" "}
                  Fusion Drive combines a large-capacity HDD with a smaller SSD
                  into a single logical volume. The macOS operating system
                  manages this hybrid storage architecture intelligently,
                  ensuring that frequently accessed files and applications are
                  stored on the faster SSD portion, while less frequently
                  accessed data resides on the HDD.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Automatic Data Tiering:
                  </span>{" "}
                  The macOS operating system continuously monitors the usage
                  patterns of files and applications. Frequently accessed data,
                  such as system files, frequently used applications, and
                  often-used documents, are automatically moved to the SSD
                  portion of the Fusion Drive for faster access.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Improved Performance:
                  </span>{" "}
                  By prioritizing frequently accessed data on the SSD portion,
                  Fusion Drive delivers faster read and write speeds compared to
                  traditional HDDs alone. This results in quicker boot times,
                  faster application launches, and smoother overall system
                  performance.
                </li>
              </ol>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Overall, Fusion Drive technology in the iMac offers a balanced
                combination of speed, capacity, and affordability, making it an
                ideal solution for users who need fast access to frequently used
                data without sacrificing storage space or breaking the bank.
              </p>
              <h3
                id="general"
                className="flex border-b border-t py-4 text-lg font-bold text-gray-900 dark:border-gray-700 dark:text-white md:text-xl xl:items-center"
              >
                <QuestionCircle className="me-2 mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-white" />
                Can you explain the differences between the various display
                options available for the iMac?
              </h3>
              <div className="my-4 flex items-center text-gray-500 dark:text-gray-400">
                Updated November 20 2023{" "}
                <div className="mx-2 h-1.5 w-1.5 rounded-full bg-gray-500"></div>{" "}
                <div>12:45</div>
              </div>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The 27-inch iMac's 5K Retina display has a higher pixel density
                compared to the 21.5-inch models, resulting in sharper text,
                images, and graphics. This higher pixel density provides more
                detail and clarity, making it ideal for tasks such as photo and
                video editing, graphic design, and content creation.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The Retina displays models offer excellent color accuracy and
                wide color gamut support, making them suitable for professional
                applications that require precise color reproduction, such as
                graphic design, photography, and video editing.
              </p>
              <h3 className="flex border-b border-t py-4 text-lg font-bold text-gray-900 dark:border-gray-700 dark:text-white md:text-xl xl:items-center">
                <QuestionCircle className="me-2 mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-white" />
                Can you describe the Thunderbolt and USB connectivity options in
                the iMac?
              </h3>
              <div className="my-4 flex items-center text-gray-500 dark:text-gray-400">
                Updated November 20 2023{" "}
                <div className="mx-2 h-1.5 w-1.5 rounded-full bg-gray-500"></div>{" "}
                <div>12:45</div>
              </div>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The iMac typically offers a range of Thunderbolt and USB
                connectivity options, providing users with versatile
                connectivity for various peripherals and accessories.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Thunderbolt ports are high-speed data and video connectivity
                ports that offer lightning-fast data transfer speeds and support
                for various peripherals, displays, and storage devices.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                USB-C ports on the iMac may support USB 3.1 Gen 2 or USB 4
                standards, offering higher data transfer speeds of up to 10 Gbps
                or 20 Gbps, respectively. USB-C ports may also support power
                delivery (PD) for charging compatible devices.
              </p>
              <h3
                id="technical"
                className="flex border-b border-t py-4 text-lg font-bold text-gray-900 dark:border-gray-700 dark:text-white md:text-xl xl:items-center"
              >
                <QuestionCircle className="me-2 mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-white" />
                How does the cooling system in the iMac function, especially in
                high-performance models?
              </h3>
              <div className="my-4 flex items-center text-gray-500 dark:text-gray-400">
                Updated November 20 2023{" "}
                <div className="mx-2 h-1.5 w-1.5 rounded-full bg-gray-500"></div>{" "}
                <div>12:45</div>
              </div>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The iMac's cooling system is designed to efficiently dissipate
                heat generated by its components, particularly in
                high-performance models where intensive tasks like video
                editing, gaming, or running demanding software can lead to
                increased heat production.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The cooling system in the iMac is a crucial component that helps
                to ensure reliable performance and longevity, particularly in
                high-performance models where heat dissipation is a critical
                consideration. Through a combination of efficient airflow
                design, fan control algorithms, and thermal management
                solutions, the iMac's cooling system effectively regulates
                temperatures to keep the system running smoothly under various
                workloads.
              </p>
              <h3
                id="payment"
                className="flex border-b border-t py-4 text-lg font-bold text-gray-900 dark:border-gray-700 dark:text-white md:text-xl xl:items-center"
              >
                <QuestionCircle className="me-2 mt-1 h-5 w-5 shrink-0 text-gray-900 dark:text-white" />
                What are the key features of the latest generation of iMac's
                processors?
              </h3>
              <div className="my-4 flex items-center text-gray-500 dark:text-gray-400">
                Updated November 20 2023{" "}
                <div className="mx-2 h-1.5 w-1.5 rounded-full bg-gray-500"></div>{" "}
                <div>12:45</div>
              </div>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                As of my last update in January 2022, the latest generation of
                iMac processors could vary depending on when they were released.
                However, I can provide you with an overview of the typical key
                features found in the latest generation of iMac processors up to
                that point:
              </p>
              <ol className="my-4 list-outside list-decimal space-y-2.5 pl-5 text-gray-500 dark:text-gray-400 md:my-6">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Apple Silicon:
                  </span>{" "}
                  Fusion Drive combines a large-capacity HDD with a smaller SSD
                  into a single logical volume. The macOS operating system
                  manages this hybrid storage architecture intelligently,
                  ensuring that frequently accessed files and applications are
                  stored on the faster SSD portion, while less frequently
                  accessed data resides on the HDD.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Unified Memory Architecture:
                  </span>{" "}
                  Apple has transitioned its Mac lineup, including the iMac, to
                  its custom-designed Apple Silicon processors. These chips,
                  based on ARM architecture, offer significant performance and
                  efficiency improvements compared to previous Intel-based
                  processors.
                </li>

                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Integrated Graphics:
                  </span>{" "}
                  Apple Silicon processors integrate powerful graphics
                  processing units (GPUs) directly onto the same chip. These
                  integrated GPUs deliver impressive graphics performance for
                  tasks such as gaming, video editing, and 3D rendering, without
                  the need for a discrete graphics card.
                </li>
              </ol>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                These key features represent the advancements brought about by
                the latest generation of iMac processors, offering improved
                performance, efficiency, and integration compared to previous
                generations.
              </p>
              <div className="mt-4 flex w-full justify-center md:mt-8">
                <button
                  type="button"
                  className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Show more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setAskAQuestionModalOpen(false)}
        popup
        show={isAskAQuestionModalOpen}
        theme={{
          content: {
            inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
          },
        }}
      >
        <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ask a question
          </h3>
          <button
            onClick={() => setAskAQuestionModalOpen(false)}
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Close className="h-3 w-3" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="p-4 md:p-5">
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
              <Textarea id="question" name="question" required rows={6} />
            </div>
            <div className="col-span-2 grid gap-4 md:grid-cols-2">
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    name="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </Label>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center">
                <Checkbox id="link-checkbox" name="link-checkbox" />
                <Label
                  htmlFor="link-checkbox"
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
          </div>
          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <Button
              size="lg"
              type="submit"
              className="me-3 inline-flex [&>span]:text-sm"
            >
              Submit question
            </Button>
            <button
              onClick={() => setAskAQuestionModalOpen(false)}
              className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
