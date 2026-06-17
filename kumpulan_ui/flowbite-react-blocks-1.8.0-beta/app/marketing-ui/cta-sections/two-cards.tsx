import { Button, Card, Progress } from "flowbite-react";

export function TwoCardsAndImagesCTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Fundraising events
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-12">
          <Card>
            <img
              alt=""
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    $376,856
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    of 400k goal
                  </span>
                </div>
                <span className="text-right text-xs font-normal text-gray-500 dark:text-gray-400">
                  2,756 donors
                </span>
              </div>
              <Progress progress={85} className="mt-1" />
            </div>
            <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
              Thank you for supporting in planting trees work.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Our fundraisers are a creative bunch when it comes to taking on
              challenges, from beard shaves and bake sales to stand-up comedy
              and streaming marathons. There is something for everyone.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
              <Button
                color="info"
                href="#"
                className="[&>span]:px-5 [&>span]:py-2.5"
              >
                Donate now
              </Button>
              <Button
                color="gray"
                href="#"
                className="border-gray-300 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-white [&>span]:px-5 [&>span]:py-2.5"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share this Fundraiser
              </Button>
            </div>
          </Card>
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800 lg:p-8">
            <img
              className="w-full rounded-lg object-cover shadow-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-2.png"
              alt=""
            />
            <div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    $75,856
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    of 150k goal
                  </span>
                </div>
                <span className="text-right text-xs font-normal text-gray-500 dark:text-gray-400">
                  568 donors
                </span>
              </div>
              <Progress progress={50} className="mt-1" />
            </div>
            <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
              Thank you for supporting our lifesaving work.
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Our fundraisers are a creative bunch when it comes to taking on
              challenges, from beard shaves and bake sales to stand-up comedy
              and streaming marathons. There is something for everyone.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
              <Button
                color="info"
                href="#"
                className="[&>span]:px-5 [&>span]:py-2.5"
              >
                Donate now
              </Button>
              <Button
                color="gray"
                href="#"
                className="border-gray-300 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-white [&>span]:px-5 [&>span]:py-2.5"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share this Fundraiser
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            title=""
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            View all fundraising events
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
    </section>
  );
}
