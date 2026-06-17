import { Tabs, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function TabsSelectorPricingCards() {
  const [activeTab, setActiveTab] = useState("Standard");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="divide-y divide-gray-200 rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-800 lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="col-span-2 p-6 lg:p-8">
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
              Choose a pricing plan:
            </h3>
            <Tabs
              onClick={() => {
                window.setTimeout(() => {
                  setActiveTab(
                    document.querySelector("[aria-selected=true]")?.innerHTML ??
                      "",
                  );
                }, 50);
              }}
              variant="fullWidth"
              theme={{
                tablist: {
                  variant: {
                    fullWidth:
                      "grid w-full grid-flow-col divide-x divide-gray-200 rounded-lg text-sm font-medium shadow dark:divide-gray-500 dark:text-gray-400",
                  },
                  tabitem: {
                    base: twMerge(
                      theme.tabs.tablist.tabitem.base,
                      "dark:focus:ring-0",
                    ),
                    variant: {
                      fullWidth: {
                        active: {
                          on: "active rounded-none border border-gray-200 bg-gray-100 p-4 text-gray-900 first:rounded-l-lg last:rounded-r-lg dark:border-gray-500 dark:bg-gray-600 dark:text-white",
                          off: "rounded-none border border-gray-200 bg-white first:rounded-l-lg last:rounded-r-lg hover:bg-gray-50 hover:text-gray-700 dark:border-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <Tabs.Item title="Starter">
                <div className="mb-2 mt-6 font-medium text-gray-900 dark:text-white">
                  Starter details:
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Plan pricing starts at 250 contacts. Select your audience size
                  to calculate your price. The monthly email send limit for
                  Standard plans is 12 times your maximum contact count.*.
                </p>
              </Tabs.Item>
              <Tabs.Item active title="Standard">
                <div className="mb-2 mt-6 font-medium text-gray-900 dark:text-white">
                  Standard details:
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Plan pricing starts at 500 contacts. Select your audience size
                  to calculate your price. The monthly email send limit for
                  Standard plans is 12 times your maximum contact count.*.
                </p>
              </Tabs.Item>
              <Tabs.Item title="Premium">
                <div className="mb-2 mt-6 font-medium text-gray-900 dark:text-white">
                  Premium details:
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Plan pricing starts at 1000 contacts. Select your audience
                  size to calculate your price. The monthly email send limit for
                  Standard plans is 12 times your maximum contact count.*.
                </p>
              </Tabs.Item>
              <Tabs.Item title="Enterprise">
                <div className="mb-2 mt-6 font-medium text-gray-900 dark:text-white">
                  Enterprise details:
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Plan pricing starts at unlimited contacts. Select your
                  audience size to calculate your price. The monthly email send
                  limit for Standard plans is 12 times your maximum contact
                  count.*.
                </p>
              </Tabs.Item>
            </Tabs>
          </div>
          <div className="flex p-6 lg:p-8">
            <div
              className={`w-full self-center ${
                activeTab === "Starter" ? "" : "hidden"
              }`}
            >
              <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Starter plan
              </div>
              <div className="text-gray-500 dark:text-gray-400">Starts at</div>
              <div className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                $49
              </div>
              <a
                href="#"
                className="mb-4 flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900"
              >
                Buy now
              </a>
              <a
                href="#"
                className="mb-4 flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                View team pricing
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                *To see the monthly email send limit included with your specific
                plan, click Calculate my price. If your plan's contact or email
                send limit is exceeded, you will be charged for overages.
              </p>
            </div>
            <div
              id="standard-plan"
              className={`w-full self-center ${
                activeTab === "Standard" ? "" : "hidden"
              }`}
            >
              <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Standard plan
              </div>
              <div className="text-gray-500 dark:text-gray-400">Starts at</div>
              <div className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                $99
              </div>
              <a
                href="#"
                className="mb-4 flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900"
              >
                Buy now
              </a>
              <a
                href="#"
                className="mb-4 flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                View team pricing
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                *To see the monthly email send limit included with your specific
                plan, click Calculate my price. If your plan's contact or email
                send limit is exceeded, you will be charged for overages.
              </p>
            </div>
            <div
              className={`w-full self-center ${
                activeTab === "Premium" ? "" : "hidden"
              }`}
            >
              <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Premium plan
              </div>
              <div className="text-gray-500 dark:text-gray-400">Starts at</div>
              <div className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                $149
              </div>
              <a
                href="#"
                className="mb-4 flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900"
              >
                Buy now
              </a>
              <a
                href="#"
                className="mb-4 flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                View team pricing
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                *To see the monthly email send limit included with your specific
                plan, click Calculate my price. If your plan's contact or email
                send limit is exceeded, you will be charged for overages.
              </p>
            </div>
            <div
              className={`w-full self-center ${
                activeTab === "Enterprise" ? "" : "hidden"
              }`}
            >
              <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Enterprise plan
              </div>
              <div className="text-gray-500 dark:text-gray-400">Starts at</div>
              <div className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                $249
              </div>
              <a
                href="#"
                className="mb-4 flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-primary-900"
              >
                Buy now
              </a>
              <a
                href="#"
                className="mb-4 flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
              >
                View team pricing
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                *To see the monthly email send limit included with your specific
                plan, click Calculate my price. If your plan's contact or email
                send limit is exceeded, you will be charged for overages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
