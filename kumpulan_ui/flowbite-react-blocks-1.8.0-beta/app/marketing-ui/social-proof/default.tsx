export function DefaultSocialProof() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <dl className="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">73M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">developers</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">1B+</dt>
            <dd className="text-gray-500 dark:text-gray-400">contributors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">4M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">organizations</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
