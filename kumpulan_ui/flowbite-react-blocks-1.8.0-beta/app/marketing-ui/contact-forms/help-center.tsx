import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

export function ContactFormWithHelpCenter() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
            How can we help you?
          </h2>
          <Label htmlFor="search-faq" className="sr-only">
            Your Email
          </Label>
          <TextInput
            icon={() => (
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            id="search-faq"
            placeholder="Type keywords to find answers"
            className="[&_input]:py-4 [&_input]:pl-12"
          />
        </div>
        <div className="my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:gap-16">
          <Card>
            <h3 className="text-xl font-extrabold dark:text-white">
              Billing &amp; Plans
            </h3>
            <ul className="mb-4 space-y-3 text-primary-600 dark:text-primary-500">
              <li>
                <a href="#" className="hover:underline">
                  Flowbite plans &amp; prices
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Switch plans and add-ons
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  I can't log in to Flowbite
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  The Disney Bundle
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Discount on Flowbite
                </a>
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-extrabold dark:text-white">
              Using Flowbite
            </h3>
            <ul className="mb-4 space-y-3 text-primary-600 dark:text-primary-500">
              <li>
                <a href="#" className="hover:underline">
                  Parental Controls
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Devices to watch Flowbite
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Home location for Live TV
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Live TV Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fix buffering issues
                </a>
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-extrabold dark:text-white">
              What’s on Flowbite
            </h3>
            <ul className="mb-4 space-y-3 text-primary-600 dark:text-primary-500">
              <li>
                <a href="#" className="hover:underline">
                  NEW this month!
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sports Add-on for Live TV
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Watch live sports
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FX shows &amp; movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Super Bowl 2022
                </a>
              </li>
            </ul>
          </Card>
        </div>
        <div className="mb-8 items-center justify-between sm:mb-24 sm:flex">
          <div className="mb-4 sm:mb-0">
            <h3 className="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white">
              Not what you were looking for?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
              Browse through all of our Help Center articles
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="hidden lg:block">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Points of contact
            </h3>
            <h4 className="mb-1 font-medium text-gray-900 dark:text-white">
              U.S. Flowbite
            </h4>
            <address className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11350 McCormick Rd, EP III, Suite 200,
              <br />
              Hunt Valley, MD 21031
            </address>
            <h4 className="mb-1 mt-4 font-medium text-gray-900 dark:text-white">
              Information &amp; Sales
            </h4>
            <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              <a href="#">sales@flowbite.com</a>
            </p>
            <h4 className="mb-1 mt-4 font-medium text-gray-900 dark:text-white">
              Support
            </h4>
            <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              <a href="#">support@flowbite.com</a>
            </p>
            <h4 className="mb-1 mt-4 font-medium text-gray-900 dark:text-white">
              Verification of Employment
            </h4>
            <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
              <a href="#">hr@flowbite.com</a>
            </p>
            <h3 className="mb-4 mt-5 text-lg font-semibold text-gray-900 dark:text-white">
              Our offices around the world
            </h3>
            <h4 className="mb-1 mt-4 font-medium text-gray-900 dark:text-white">
              Canada
            </h4>
            <address className="text-sm font-normal text-gray-500 dark:text-gray-400">
              5333 Avenue Casgrain #1201,
              <br />
              Montréal, QC H2T 1X3
            </address>
            <h4 className="mb-1 mt-4 font-medium text-gray-900 dark:text-white">
              Germany
            </h4>
            <address className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Neue Schönhauser Str. 3-5,
              <br />
              10178 Berlin
            </address>
            <h4 className="mb-1 mt-4 font-medium text-gray-900 dark:text-white">
              France
            </h4>
            <address className="text-sm font-normal text-gray-500 dark:text-gray-400">
              266 Place Ernest Granier,
              <br />
              34000 Montpellier
            </address>
          </div>
          <div className="col-span-2">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">
              Still need help?
            </h2>
            <form action="#" className="space-y-8">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email" className="dark:text-white">
                  Your email address&nbsp;
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    (So we can reply to you)
                  </span>
                </Label>
                <TextInput
                  id="email"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="topic" className="dark:text-white">
                  Topic
                </Label>
                <Select id="topic">
                  <option selected>Select a topic</option>
                  <option value="US">Switch plans and add-ons</option>
                  <option value="CA">Billing &amp; Invoice</option>
                  <option value="FR">I can't log in to Flowbite</option>
                  <option value="DE">Parental controls</option>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="subject" className="dark:text-white">
                  Subject
                </Label>
                <TextInput
                  id="subject"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-2 sm:col-span-2">
                <Label htmlFor="message" className="dark:text-white">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Leave a comment..."
                  className="text-sm"
                  rows={6}
                />
                <div className="mt-2 flex items-center gap-2">
                  <Checkbox id="default-checkbox" value="" />
                  <Label
                    htmlFor="default-checkbox"
                    className="text-gray-500 dark:text-gray-400"
                  >
                    By submitting this form, you confirm that you have read and
                    agree to our&nbsp;
                    <a
                      className="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                      href="#"
                    >
                      Terms of Service
                    </a>
                    &nbsp;and&nbsp;
                    <a
                      className="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                      href="#"
                    >
                      Privacy Statement
                    </a>
                    .
                  </Label>
                </div>
              </div>
              <Button type="submit" className="[&>span]:px-5 [&>span]:py-3">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
