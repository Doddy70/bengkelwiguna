import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export function DefaultNewsletterSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="flex w-full">
                <TextInput
                  icon={() => (
                    <HiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-full [&_input]:rounded-r-none [&_input]:py-3"
                />
                <Button className="rounded-l-none [&>span]:px-5">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
              We care about the protection of your data.&nbsp;
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
