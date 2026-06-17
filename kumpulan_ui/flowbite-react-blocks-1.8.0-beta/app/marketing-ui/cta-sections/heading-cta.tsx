import { Button } from "flowbite-react";

export function HeadingWithCTAButtonSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
            Try Flowbite Platform for 30 days. No credit card required.
          </p>
          <Button color="info" href="#" className="w-fit">
            Free trial for 30 days
          </Button>
        </div>
      </div>
    </section>
  );
}
