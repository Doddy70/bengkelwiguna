import { Button } from "flowbite-react";

export function DefaultCTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Let's find more that brings us together.
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups, Watch and Marketplace.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button color="info" href="#" size="lg">
              Get started
            </Button>
            <Button
              color="gray"
              outline
              size="lg"
              className="[&>span]:border-gray-300 hover:[&>span]:text-gray-900 dark:hover:[&>span]:text-white"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              View more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
