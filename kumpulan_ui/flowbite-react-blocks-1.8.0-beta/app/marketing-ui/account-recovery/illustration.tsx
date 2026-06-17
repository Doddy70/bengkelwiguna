import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function IllustrationAccountRecovery() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
        <div className="w-full place-self-center lg:col-span-6">
          <div className="mx-auto rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
            <a
              href="#"
              className="mb-4 inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                alt="logo"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                className="mr-2 h-8 w-8"
              />
              Flowbite
            </a>
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-2xl">
              Reset your password
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We’ll email you instructions to reset your password. If you can't
              access your email, you can try&nbsp;
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                account recovery
              </a>
              .
            </p>
            <form action="#" className="mt-4 space-y-4 md:space-y-5 lg:mt-5">
              <div>
                <Label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <Checkbox
                    aria-describedby="terms-illustration"
                    id="terms-illustration"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="terms-illustration"
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
              <Button color="info" type="submit" className="w-full">
                Reset password
              </Button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                If you still need help, contact&nbsp;
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Flowbite support
                </a>
                .
              </p>
            </form>
          </div>
        </div>
        <div className="mr-auto place-self-center lg:col-span-6">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            className="mx-auto hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}
