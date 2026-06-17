import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
  Tooltip,
} from "flowbite-react";

export function ContactFormWithCompanyInformation() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          <div>
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white">
              <svg
                aria-hidden="true"
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Company information:
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                Flowbite LLC
                <br />
                Tax id: USXXXXXX
              </p>
            </div>
          </div>
          <div>
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white">
              <svg
                aria-hidden="true"
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Address:
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                SILVER LAKE, United States
                <br />
                1941 Late Avenue
                <br />
                Zip Code/Postal code: 03875
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white">
              <svg
                aria-hidden="true"
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Contact us:
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                Email us for general queries, including marketing and
                partnership opportunities.
              </p>
              <a
                href="#"
                title=""
                className="mt-1 block text-base font-semibold text-gray-900 hover:underline dark:text-white"
              >
                hello@flowbite.com
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-3xl lg:mt-24">
          <form
            action="#"
            className="mx-auto grid max-w-screen-md grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="first-name" className="dark:text-white">
                First name
              </Label>
              <TextInput
                id="first-name"
                placeholder="Bonnie"
                required
                className="[&_input]:p-3"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="last-name" className="dark:text-white">
                Last name
              </Label>
              <TextInput
                id="last-name"
                placeholder="Green"
                required
                className="[&_input]:p-3"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email" className="dark:text-white">
                Your email
              </Label>
              <TextInput
                id="email"
                placeholder="name@flowbite.com"
                required
                type="email"
                className="[&_input]:p-3"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="phone-number" className="dark:text-white">
                Phone number
              </Label>
              <TextInput
                id="phone-number"
                placeholder="+(12) 345 6789"
                required
                type="number"
                className="[&_input]:p-3"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="grid grid-cols-1 gap-2">
                <Label
                  htmlFor="country"
                  className="flex items-center gap-1 dark:text-white"
                >
                  Country
                  <Tooltip
                    content={
                      <div className="w-72 space-y-2 py-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Country based on fiscal residency
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Report helps navigate cumulative growth of community
                          activities. Ideally, the chart should have a growing
                          trend, as stagnating chart signifies a significant
                          decrease of community activity.
                        </p>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Double citizenship
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          For each date bucket, the all-time volume of
                          activities is calculated. This means that activities
                          in period n contain all activities up to period n,
                          plus the activities generated by your community in
                          period.
                        </p>
                        <a
                          href="#"
                          className="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600"
                        >
                          Read more&nbsp;
                          <svg
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    }
                    placement="top"
                    style="light"
                    theme={{
                      arrow: {
                        base: "absolute z-10 h-2 w-2 rotate-45 border-b border-r border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800",
                      },
                    }}
                    className=" dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  >
                    <button className="h-4 w-4">
                      <svg
                        aria-hidden="true"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Show information</span>
                    </button>
                  </Tooltip>
                </Label>
              </div>
              <Select id="country">
                <option>Select a country</option>
                <option value="US" selected>
                  United States
                </option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="GB">United Kingdom</option>
                <option value="ES">Spain</option>
                <option value="CA">Canada</option>
                <option value="JP">Japan</option>
                <option value="CN">People's Republic of China</option>
              </Select>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-2">
                <Label
                  htmlFor="language"
                  className="flex items-center gap-1 dark:text-white"
                >
                  Language
                  <Tooltip
                    content={
                      <div className="w-72 space-y-2 py-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Choosing an international language
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Report helps navigate cumulative growth of community
                          activities. Ideally, the chart should have a growing
                          trend, as stagnating chart signifies a significant
                          decrease of community activity.
                        </p>
                        <a
                          href="#"
                          className="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600"
                        >
                          Read more&nbsp;
                          <svg
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    }
                    placement="top"
                    style="light"
                    theme={{
                      arrow: {
                        base: "absolute z-10 h-2 w-2 rotate-45 border-b border-r border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800",
                      },
                    }}
                    className="dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  >
                    <button className="h-4 w-4">
                      <svg
                        aria-hidden="true"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Show information</span>
                    </button>
                  </Tooltip>
                </Label>
                <Select id="language">
                  <option>Select a language</option>
                  <option value="US" selected>
                    English (US)
                  </option>
                  <option value="DE">German</option>
                  <option value="FR">French</option>
                  <option value="ES">Spanish</option>
                  <option value="JP">Japanese</option>
                  <option value="NL">Dutch</option>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:col-span-2">
              <Label htmlFor="message" className="text-sm dark:text-white">
                Your message
              </Label>
              <Textarea id="message" placeholder="" rows={6} />
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" value="" />
                <Label
                  htmlFor="terms"
                  className="text-gray-500 dark:text-gray-400"
                >
                  I confirm that you have read and agreed to&nbsp;
                  <a
                    href="#"
                    title=""
                    className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    Flowbite's Terms of Service
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    href="#"
                    title=""
                    className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    Privacy Statement
                  </a>
                  .
                </Label>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-3"
              >
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
