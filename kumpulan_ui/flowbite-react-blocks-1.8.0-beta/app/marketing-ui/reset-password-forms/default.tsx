import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function DefaultResetPasswordForm() {
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
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Change Password
          </h2>
          <form className="mt-4 space-y-4 md:space-y-5 lg:mt-5" action="#">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email" className="dark:text-white">
                Your email
              </Label>
              <TextInput
                name="email"
                id="email"
                placeholder="name@company.com"
                required
                type="email"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="password" className="dark:text-white">
                New Password
              </Label>
              <TextInput
                name="password"
                id="password"
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
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                required
                type="confirm-password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox aria-describedby="terms" id="terms" required />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="terms"
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
            <Button type="submit">Reset passwod</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
