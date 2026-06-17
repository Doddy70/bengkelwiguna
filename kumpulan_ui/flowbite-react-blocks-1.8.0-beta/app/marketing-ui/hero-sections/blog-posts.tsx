import { Badge } from "flowbite-react";

export function BlogPostsWithFeaturedImageHero() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <article>
            <a href="#" title="">
              <img
                className="w-full rounded-lg object-cover"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/blog-featured.png"
                alt=""
              />
            </a>
            <div className="mt-5 space-y-3">
              <Badge className="w-fit px-3">
                <svg
                  aria-hidden="true"
                  className="mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Programming
              </Badge>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline" title="">
                  Releasing code in large corporations is slow - and there is a
                  good reason for it
                </a>
              </h2>
              <div className="flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt=""
                />
                <div className="font-medium leading-tight text-gray-900 dark:text-white">
                  <div>Michael Gough</div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Posted on Jan 31
                  </div>
                </div>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                One of the things I always loved about the web is its immediacy.
                You write a piece of code, publish it somewhere and people can
                access it.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
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
              </a>
            </div>
          </article>
          <div className="space-y-8">
            <article>
              <div className="space-y-3">
                <Badge color="indigo" className="w-fit px-3">
                  <svg
                    aria-hidden="true"
                    className="mr-1 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tutorial
                </Badge>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline" title="">
                    How to rank higher on Google (6 easy steps)
                  </a>
                </h2>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="ml-2 h-4 w-4"
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
                </a>
              </div>
            </article>
            <article>
              <div className="space-y-3">
                <Badge color="failure" className="w-fit px-3">
                  <svg
                    aria-hidden="true"
                    className="mr-1 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Interview
                </Badge>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline" title="">
                    How to schedule your tweets to send later
                  </a>
                </h2>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="ml-2 h-4 w-4"
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
                </a>
              </div>
            </article>
            <article>
              <div className="space-y-3">
                <Badge color="success" className="w-fit px-3">
                  <svg
                    aria-hidden="true"
                    className="mr-1 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Marketing
                </Badge>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline" title="">
                    12 SEO best practices that everyone should follow
                  </a>
                </h2>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="ml-2 h-4 w-4"
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
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
