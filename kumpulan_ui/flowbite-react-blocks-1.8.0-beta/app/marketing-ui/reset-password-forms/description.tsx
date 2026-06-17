import { Avatar, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FlowbiteLogo } from "~/components/flowbite-logo";

export function ResetPasswordFormWithDescription() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
          <form className="w-full max-w-md xl:max-w-xl" action="#">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-2xl">
              Reset your password
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Your new password must be different from previous used passwords.
            </p>
            <div className="my-4 grid grid-cols-1 gap-3">
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
            <div className="my-4 grid grid-cols-1 gap-3">
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
            <div className="my-4 grid grid-cols-1 gap-3">
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
            <div className="mb-4 flex items-start md:mb-5">
              <div className="flex h-5 items-center">
                <Checkbox
                  aria-describedby="terms-description"
                  id="terms-description"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="terms-description"
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
            <Button type="submit" className="w-full">
              Reset password
            </Button>
          </form>
        </div>
        <div className="flex items-center justify-center bg-primary-600 px-4 py-6 sm:px-0 lg:py-0">
          <div className="max-w-md xl:max-w-xl">
            <a
              href="#"
              className="mb-4 flex items-center text-2xl font-semibold text-white"
            >
              <FlowbiteLogo />
              Flowbite
            </a>
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white xl:text-5xl">
              Explore the world’s leading design portfolios.
            </h1>
            <p className="mb-4 text-primary-200 lg:mb-8">
              Millions of designers and agencies around the world showcase their
              portfolio work on Flowbite - the home to the world’s best design
              and creative professionals.
            </p>
            <div className="flex items-center divide-x divide-primary-500">
              <Avatar.Group className="pr-6">
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  rounded
                  stacked
                />
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  rounded
                  stacked
                />
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  rounded
                  stacked
                />
                <Avatar
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                  rounded
                  stacked
                />
              </Avatar.Group>
              <a href="#" className="pl-3 text-white dark:text-white sm:pl-5">
                <span className="text-sm text-primary-200">
                  Over <span className="font-medium text-white">15.7k</span>
                  &nbsp;Happy Customers
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
