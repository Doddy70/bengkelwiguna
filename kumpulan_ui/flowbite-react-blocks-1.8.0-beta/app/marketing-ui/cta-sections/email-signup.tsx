import { Button, Label, TextInput } from "flowbite-react";

export function EmailSignUpCTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Get started with Flowbite today
          </h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
            Connecting with your audience has never been easier with Flowbite
            straightforward email marketing and automation tools.
          </p>
          <form action="#" className="mx-auto max-w-screen-sm">
            <div className="mb-3 flex items-center">
              <div className="relative mr-3 w-full">
                <Label htmlFor="member_email" className="sr-only">
                  Email address
                </Label>
                <TextInput
                  icon={EnvelopeIconSVG}
                  id="member_email"
                  name="member_email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  className="[&_input]:p-3 [&_input]:pl-10 [&_input]:placeholder:text-gray-400"
                />
              </div>
              <Button
                color="info"
                type="submit"
                className="[&>span]:px-5 [&>span]:py-3"
              >
                Subscribe
              </Button>
            </div>
            <div className="text-left text-sm font-medium text-gray-500 dark:text-gray-300">
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
      </div>
    </section>
  );
}

const EnvelopeIconSVG = () => (
  <svg
    className="h-5 w-5 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);
