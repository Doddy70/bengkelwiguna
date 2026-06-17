export function HeadingWithStatisticsSocialProof() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p className="max-w-2xl text-gray-500 dark:text-gray-400 sm:text-xl">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
        <dl className="mt-8 grid gap-8 text-gray-900 dark:text-white sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-20">
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              $76 bilion
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              24h trading volume on Flowbite exchange
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">600+</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Cryptocurrencies listed on our platform
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              90 milion
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Registered users who trust Flowbite&nbsp;
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              &lt;0.10%
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Lowest transaction fees
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
