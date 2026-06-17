import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export function BannerEmailSignUpNewsletterSection() {
  return (
    <Banner>
      <div className="flex w-full items-start border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:justify-between">
        <div className="w-full items-center justify-center sm:flex">
          <p className="mb-4 font-medium text-gray-500 dark:text-white sm:mb-0 md:mb-0">
            Subscribe to get updates!
          </p>
          <form action="#" className="sm:pl-10">
            <div className="flex items-center sm:space-y-0 md:mx-auto">
              <div className="relative mr-3 w-full">
                <Label
                  htmlFor="email"
                  className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </Label>
                <TextInput
                  id="email"
                  icon={HiMail}
                  placeholder="Your email"
                  required
                  type="email"
                  className="[&_input]:w-full [&_input]:py-3 [&_input]:md:w-80"
                />
              </div>
              <div>
                <Button type="submit" className="[&>span]:py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </form>
        </div>
        <Banner.CollapseButton
          color="gray"
          className=" absolute right-1 top-1 border-0 bg-transparent text-gray-400 sm:relative md:flex [&>span]:p-1.5 hover:[&>span]:bg-gray-200 hover:[&>span]:text-gray-900 dark:hover:[&>span]:bg-gray-600 dark:hover:[&>span]:text-white"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
