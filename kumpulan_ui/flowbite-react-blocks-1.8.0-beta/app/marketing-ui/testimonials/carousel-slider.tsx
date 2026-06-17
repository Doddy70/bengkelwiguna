import { Carousel } from "flowbite-react";

export function CarouselSliderTestimonial() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="h-80 py-4 2xl:h-96">
          <Carousel
            leftControl={
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden">Previous</span>
              </span>
            }
            rightControl={
              <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden">Next</span>
              </span>
            }
            theme={{
              root: {
                base: "relative h-72 md:mx-auto md:h-64 md:w-2/3",
                leftControl:
                  "absolute bottom-0 right-1/2 flex items-center justify-center px-4 focus:outline-none",
                rightControl:
                  "absolute bottom-0 left-1/2 flex items-center justify-center px-4 focus:outline-none",
              },
              indicators: {
                base: "hidden",
              },
              scrollContainer: {
                base: "flex h-72 snap-mandatory overflow-y-visible overflow-x-scroll scroll-smooth rounded-lg md:h-64",
              },
            }}
          >
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Web developer at Google
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with Flowbite my mind was blown and became so productive."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Helene Engels
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Creative designer at Adobe
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with Flowbite my mind was blown and became so productive."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-1 md:space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Helene Engels
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Creative designer at Adobe
                  </div>
                </div>
              </figcaption>
            </div>
            <div>
              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-white sm:text-2xl">
                  "Flowbite has code in one place and I'm not joking when I say
                  it took me a matter of minutes to copy the code, customise it
                  and integrate within a Laravel + Vue application."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <img
                  alt=""
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                  className="h-6 w-6 rounded-full"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Neil Sims
                  </div>
                  <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CTO at Microsoft
                  </div>
                </div>
              </figcaption>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
