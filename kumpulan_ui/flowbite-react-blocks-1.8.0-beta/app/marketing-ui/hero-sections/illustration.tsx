import { Button, Label, TextInput } from "flowbite-react";

export function IllustrationWithEmailSignupHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Building digital products &amp; brands.
          </h1>
          <p className="mb-6 max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Here at flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <form action="#" className="">
            <div className="mb-3 flex items-center">
              <div className="relative mr-3">
                <Label htmlFor="email" className="sr-only">
                  Email address
                </Label>
                <TextInput
                  icon={() => (
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  )}
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  className="[&_input]:w-full [&_input]:py-3 [&_input]:md:w-80"
                />
              </div>
              <div>
                <Button type="submit" className="[&>span]:py-3">
                  Try for free
                </Button>
              </div>
            </div>
            <div className="text-left text-sm text-gray-500 dark:text-gray-300">
              Instant signup. No credit card required.&nbsp;
              <a
                href="#"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                Terms of Service
              </a>
              &nbsp;and&nbsp;
              <a
                className="text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex xl:col-span-4">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg"
            alt="phone illustration"
          />
        </div>
      </div>
    </section>
  );
}
