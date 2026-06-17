export function Illustration500Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl grid-cols-2 content-center gap-8 px-4 py-8 md:grid lg:px-6 lg:py-16">
        <div className="self-center">
          <h1 className="mb-4 text-2xl font-bold text-primary-600 dark:text-primary-500">
            500 Internal Error
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-10">
            Whoops! That page doesn’t exist.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Here are some helpful links:
          </p>
          <ul className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Support
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
          </ul>
        </div>
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg"
          className="mx-auto mb-4 hidden md:flex"
        />
      </div>
    </section>
  );
}
