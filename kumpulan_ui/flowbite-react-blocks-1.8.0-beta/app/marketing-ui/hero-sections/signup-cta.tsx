import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function SignUpFormWithCTAHero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mb-10 mr-auto place-self-center lg:col-span-7 xl:col-span-8 xl:mb-0">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Discover new product and best possibilities
          </h1>
          <p className="mb-6 max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <Button className="w-fit [&>span]:items-center" size="lg">
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Watch video
          </Button>
          <ul className="mx-auto mt-14 hidden justify-between border-t border-gray-300 pt-12 dark:border-gray-700 dark:text-white xl:flex">
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">42k</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Our Active</div>
                <div>Users</div>
              </div>
            </li>
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">3k</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Professional</div>
                <div>Creators</div>
              </div>
            </li>
            <li className="flex">
              <span className="text-4xl font-extrabold lg:text-5xl">560k</span>
              <div className="block pl-4 text-xl text-gray-500 dark:text-gray-400">
                <div>Weekly</div>
                <div>Downloads</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="max-w-screen-sm justify-center rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 xl:col-span-4">
          <form className="space-y-6" action="#">
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              Join over 3,000 creators
            </h2>
            <div className="flex items-center space-x-4">
              <Button
                href="#"
                className="w-full bg-[#4284F4] hover:bg-[#3372df] focus:outline-none focus:ring-primary-300 dark:bg-[#4284F4] dark:hover:bg-[#3372df] dark:focus:ring-[#0f53c9]"
              >
                Google
              </Button>
              <Button
                href="#"
                className="w-full bg-[#EA4C89] hover:bg-[#d8437c] focus:outline-none focus:ring-[#f39cbe] dark:bg-[#EA4C89] dark:hover:bg-[#d8437c] dark:focus:ring-[#9c0c43]"
              >
                Dribbble
              </Button>
            </div>
            <div className="flex items-center">
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                or
              </div>
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div>
              <Label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </Label>
              <TextInput
                id="email"
                placeholder="name@flowbite.com"
                required
                type="email"
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </Label>
              <TextInput
                id="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <Checkbox id="remember" required />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </Label>
                </div>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
              >
                Lost Password?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-primary-700 hover:underline dark:text-primary-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
