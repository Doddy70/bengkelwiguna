import { Timeline } from "flowbite-react";

export function DefaultEventSchedule() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Schedule
          </h2>

          <div className="mt-4">
            <a
              href="#"
              title=""
              className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Learn more about our agenda
              <svg
                aria-hidden="true"
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 flow-root max-w-3xl sm:mt-12 lg:mt-16">
          <Timeline
            theme={{
              root: {
                direction: {
                  vertical: "",
                },
              },
            }}
          >
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  08:00 - 09:00
                </Timeline.Time>
                <Timeline.Title>Opening remarks</Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  09:00 - 10:00
                </Timeline.Time>
                <Timeline.Title>
                  Bergside LLC: Controlling the video traffic flows
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  10:00 - 11:00
                </Timeline.Time>
                <Timeline.Title>
                  Flowbite - An Open Framework for Forensic Watermarking
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  11:00 - 12:00
                </Timeline.Time>
                <Timeline.Title>Coffee Break</Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  12:00 - 13:00
                </Timeline.Time>
                <Timeline.Title>
                  Scaling your brand from €0 to multimillion euros
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  13:00 - 14:00
                </Timeline.Time>
                <Timeline.Title>
                  Updates from the Open Source Multimedia community
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  14:00 - 15:00
                </Timeline.Time>
                <Timeline.Title>
                  Exploring the balance between customer acquisition and
                  retention
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  15:00 - 16:00
                </Timeline.Time>
                <Timeline.Title>
                  Flowbite - An Open Framework for Forensic Watermarking
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mb-4 ml-0 border-b border-gray-200 pb-4 dark:border-gray-700">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  16:00 - 14:00
                </Timeline.Time>
                <Timeline.Title>
                  Scaling your brand from €0 to multimillion euros
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="ml-0">
              <Timeline.Content className="items-center gap-5 md:flex">
                <Timeline.Time className="mb-0 text-lg text-gray-500">
                  17:00 - 14:00
                </Timeline.Time>
                <Timeline.Title>Drinks &amp; networking</Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </section>
  );
}
