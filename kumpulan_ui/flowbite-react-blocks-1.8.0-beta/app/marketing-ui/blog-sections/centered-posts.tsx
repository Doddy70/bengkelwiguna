import { Badge } from "flowbite-react";

export function CenteredPostsBlogSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="mx-auto max-w-screen-sm divide-y divide-gray-200 dark:divide-gray-700">
          <article className="pb-6 text-center">
            <Badge color="info" className="inline-flex">
              <svg
                className="mr-1 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </Badge>
            <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              <a href="#">How to quickly deploy a static website</a>
            </h2>
            <div className="flex items-center justify-center space-x-4 text-gray-500 sm:space-x-6">
              <div className="flex items-center space-x-3">
                <img
                  alt="Jese portrait"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Jese Leos
                </span>
              </div>
              <span>March 26</span>
              <span>178 shares</span>
            </div>
          </article>
          <article className="py-6 text-center">
            <Badge color="info" className="inline-flex">
              <svg
                className="mr-1 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              Article
            </Badge>
            <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              <a href="#">
                Short-Form vs. Long-Form Content: Which Is Better for SEO?
              </a>
            </h2>
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-3">
                <img
                  alt="Karen portrait"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Karen Nelson
                </span>
              </div>
              <span>March 26</span>
              <span>178 shares</span>
            </div>
          </article>
          <article className="pt-6 text-center">
            <Badge color="info" className="inline-flex">
              <svg
                className="mr-1 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              Article
            </Badge>
            <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              <a href="#">
                5 Powerful Marketing Activities: Lessons From Successful Brands
              </a>
            </h2>
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-3">
                <img
                  alt="Thomas portrait"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Thomas Lean
                </span>
              </div>
              <span>March 26</span>
              <span>178 shares</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
