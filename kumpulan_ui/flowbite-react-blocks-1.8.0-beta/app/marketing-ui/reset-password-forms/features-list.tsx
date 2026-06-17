import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function ResetPasswordFormWithFeaturesList() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid lg:grid-cols-12 lg:gap-20 lg:py-16">
        <div className="col-span-6 mr-auto hidden flex-col justify-between lg:flex xl:mb-0">
          <div>
            <a
              href="#"
              className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white lg:mb-10"
            >
              <img
                className="mr-2 h-8 w-8"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Flowbite
            </a>
            <div className="flex">
              <svg
                className="mr-2 h-5 w-5 shrink-0 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Get started quickly
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Integrate with developer-friendly APIs or choose low-code.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <svg
                className="mr-2 h-5 w-5 shrink-0 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Support any business model
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Host code that you don't want to share with the world in
                  private.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <svg
                className="mr-2 h-5 w-5 shrink-0 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Join millions of businesses
                </h3>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is trusted by ambitious startups and enterprises of
                  every size.
                </p>
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  Term &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-6 text-center lg:hidden">
          <a
            href="#"
            className="inline-flex items-center text-2xl font-semibold text-gray-900 dark:text-white lg:hidden"
          >
            <img
              className="mr-2 h-8 w-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
        </div>
        <div className="col-span-6 mx-auto w-full rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:max-w-lg sm:p-8 md:mt-0">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            Create new password
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Your new password must be different from previous used passwords.
          </p>
          <form className="mt-4 space-y-4 lg:mt-5 lg:space-y-5">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email" className="dark:text-white">
                Email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="password" className="dark:text-white">
                New Password
              </Label>
              <TextInput
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="confirm-password" className="dark:text-white">
                Confirm password
              </Label>
              <TextInput
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required
                type="confirm-password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox
                  aria-describedby="terms-features"
                  id="terms-features"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="terms-features"
                  className="text-gray-500 dark:text-gray-300"
                >
                  I agree to Flowbite’s&nbsp;
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Terms of Use
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button type="submit">Reset Password</Button>
              <a
                href="#"
                className="text-sm text-primary-600 hover:underline dark:text-primary-500"
              >
                Return to login
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
