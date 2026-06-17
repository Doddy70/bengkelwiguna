export function IllustrationLinks404Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
            className="mx-auto mb-4"
          />
          <h1 className="mb-4 text-2xl font-extrabold text-primary-600 dark:text-primary-500">
            404 Not Found
          </h1>
          <p className="mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Whoops! That page doesn’t exist.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Here are some helpful links instead:
          </p>
          <ul className="flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="#"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
