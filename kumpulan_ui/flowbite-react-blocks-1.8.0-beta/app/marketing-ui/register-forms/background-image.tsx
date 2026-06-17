import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { FlowbiteLogo } from "~/components/flowbite-logo";

export function BackgroundImageRegisterForm() {
  return (
    <section className="bg-gray-700/60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-white"
        >
          <FlowbiteLogo />
          Flowbite
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h2 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create your Free Account
            </h2>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email" className="dark:text-white">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="username" className="dark:text-white">
                  Password
                </Label>
                <TextInput
                  id="username"
                  name="username"
                  placeholder="••••••••"
                  required
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
              <div className="grid grid-cols-1 gap-2">
                <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Birth Date
                </p>
                <div className="flex items-center">
                  <div className="mr-4 w-full">
                    <Label htmlFor="day" className="sr-only dark:text-white">
                      Day
                    </Label>
                    <Select id="day">
                      <option selected>Day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </Select>
                  </div>
                  <div className="mr-4 w-full">
                    <Label htmlFor="month" className="sr-only">
                      Month
                    </Label>
                    <Select id="month">
                      <option selected>Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="year" className="sr-only">
                      Year
                    </Label>
                    <Select id="year">
                      <option selected>Year</option>
                      <option value="1990">1990</option>
                      <option value="1991">1991</option>
                      <option value="1992">1992</option>
                      <option value="1993">1993</option>
                      <option value="1994">1994</option>
                      <option value="1995">1995</option>
                      <option value="1996">1996</option>
                      <option value="1997">1997</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <Checkbox
                    aria-describedby="terms-background"
                    id="terms-background"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="terms-background"
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
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <p className="text-center text-sm font-medium text-gray-900 dark:text-white">
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Already have an account?
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
