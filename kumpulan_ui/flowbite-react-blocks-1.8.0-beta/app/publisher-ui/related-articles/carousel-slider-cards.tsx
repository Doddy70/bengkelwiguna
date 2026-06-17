"use client";

import { Avatar, Carousel } from "flowbite-react";

export default function CarouselSliderCardsRelatedArticles() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Trending on Flowbite
        </h2>
        <div className="h-[32rem]">
          <Carousel
            indicators={false}
            leftControl={
              <span className="group mr-4 flex h-full cursor-pointer items-center justify-center focus:outline-none">
                <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  <span className="hidden">Previous</span>
                </span>
              </span>
            }
            rightControl={
              <span className="group flex h-full cursor-pointer items-center justify-center focus:outline-none">
                <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <span className="hidden">Next</span>
                </span>
              </span>
            }
            theme={{
              root: {
                leftControl: "mx-auto inline",
                rightControl: "mx-auto inline",
              },
            }}
            className="text-center first:[&>div]:text-left"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <article className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                    alt="office laptop working"
                  />
                </a>
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  rounded
                  size="sm"
                  className="mb-3 justify-start"
                >
                  <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </Avatar>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">Our first office</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
              <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 sm:block">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                    alt="google hq"
                  />
                </a>
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  rounded
                  size="sm"
                  className="mb-3 justify-start"
                >
                  <div className="font-medium dark:text-white">
                    <div>Roberta Casas</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </Avatar>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">We partnered up with Google</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
              <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 xl:block">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                    alt="office laptop working"
                  />
                </a>
                <div className="mb-3 flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <div>Sofia McGuire</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">Our first project with React</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <article className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                    alt="office laptop working"
                  />
                </a>
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  rounded
                  size="sm"
                  className="mb-3 justify-start"
                >
                  <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </Avatar>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">Our first office</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
              <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 sm:block">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                    alt="google hq"
                  />
                </a>
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  rounded
                  size="sm"
                  className="mb-3 justify-start"
                >
                  <div className="font-medium dark:text-white">
                    <div>Roberta Casas</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </Avatar>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">We partnered up with Google</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
              <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 xl:block">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                    alt="office laptop working"
                  />
                </a>
                <div className="mb-3 flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <div>Sofia McGuire</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">Our first project with React</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <article className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                    alt="office laptop working"
                  />
                </a>
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  rounded
                  size="sm"
                  className="mb-3 justify-start"
                >
                  <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </Avatar>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">Our first office</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
              <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 sm:block">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                    alt="google hq"
                  />
                </a>
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  rounded
                  size="sm"
                  className="mb-3 justify-start"
                >
                  <div className="font-medium dark:text-white">
                    <div>Roberta Casas</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </Avatar>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">We partnered up with Google</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
              <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 xl:block">
                <a href="#">
                  <img
                    className="mb-5 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                    alt="office laptop working"
                  />
                </a>
                <div className="mb-3 flex items-center space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt=""
                  />
                  <div className="font-medium dark:text-white">
                    <div>Sofia McGuire</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Aug 15, 2021 · 16 min read
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                  <a href="#">Our first project with React</a>
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation and some hard work, we moved to our new
                  office.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                >
                  Read more{" "}
                  <svg
                    className="ml-1 mt-px h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </article>
            </div>
          </Carousel>
        </div>
      </div>
    </aside>
  );
}
