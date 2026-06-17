import { Button } from "flowbite-react";

export function CoverImageWithCTAsHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl gap-8 px-4 py-8 lg:py-16 xl:grid xl:grid-cols-12">
        <div className="col-span-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Discover new product and best possibilities
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="items-center gap-16 sm:flex">
            <div className="mb-8 text-gray-500 dark:text-gray-400 sm:mb-0">
              <svg
                className="mb-3 h-7 w-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                28 November 2021
              </h2>
              <p className="mb-4 font-light">
                Join us at Flowbite 2021 to understand what’s next as the global
                tech and startup ecosystem, rethinks the future of everything.
              </p>
              <Button href="#" className="w-fit">
                Conference
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <svg
                className="mb-3 h-7 w-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                25+ top notch speakers
              </h2>
              <p className="mb-4 font-light">
                Here you will find keynote speakers, who all are able to talk
                about Recruiting. Click on the individual keynote speakers and
                read more about them and their keynotes.
              </p>
              <Button color="gray" outline className="w-fit">
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                View list
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden h-full w-1/3 xl:block">
          <img
            className="h-full w-full object-cover"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/conference-speaker.jpg"
            alt="Conference speaker"
          />
        </div>
      </div>
    </section>
  );
}
