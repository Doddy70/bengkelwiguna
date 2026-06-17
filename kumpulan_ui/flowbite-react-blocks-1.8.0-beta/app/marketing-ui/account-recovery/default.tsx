import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function DefaultAccountRecovery() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            alt="logo"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            className="mr-2 h-8 w-8"
          />
          Flowbite
        </a>
        <div className="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8 md:mt-0">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Forgot your password?
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <form action="#" className="mt-4 space-y-4 md:space-y-5 lg:mt-5">
            <div>
              <Label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
                className="block w-full"
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox
                  aria-describedby="terms-default"
                  id="terms-default"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="terms-default"
                  className="text-gray-500 dark:text-gray-300"
                >
                  I accept the&nbsp;
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </Label>
              </div>
            </div>
            <Button color="info" type="submit" className="w-full">
              Reset password
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
