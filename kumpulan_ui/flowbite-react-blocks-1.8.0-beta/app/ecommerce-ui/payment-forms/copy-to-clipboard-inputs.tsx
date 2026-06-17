import { Button, Label, TextInput, theme, Tooltip } from "flowbite-react";
import { Check } from "flowbite-react-icons/outline";
import { Clipboard } from "flowbite-react-icons/solid";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function PaymentFormWithCopyToClipboardInputs() {
  function copyToClipboardTooltip(
    action: Dispatch<SetStateAction<boolean>>,
    content: string,
  ) {
    return (
      <Tooltip content="Copy to clipboard" className="w-36">
        <button
          onClick={() => copyToClipboard(action, content)}
          type="button"
          className="rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <Clipboard className="h-4 w-4" />
        </button>
      </Tooltip>
    );
  }

  const copiedToClipboardTooltip = (
    <Tooltip content="Copied!">
      <span className="rounded-lg px-2 py-1.5 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-800">
        <Check className="h-4 w-4" />
      </span>
    </Tooltip>
  );

  const [isAmountDueCopied, setAmountDueCopied] = useState(false);
  const [isCurrencyCopied, setCurrencyCopied] = useState(false);
  const [isBeneficiaryCopied, setBeneficiaryCopied] = useState(false);
  const [isAccountNumberCopied, setAccountNumberCopied] = useState(false);
  const [isBankCodeCopied, setBankCodeCopied] = useState(false);
  const [isBankAddressCopied, setBankAddressCopied] = useState(false);

  function copyToClipboard(
    callback: Dispatch<SetStateAction<boolean>>,
    content: string,
  ) {
    callback(true);

    navigator.clipboard.writeText(content);

    setTimeout(() => {
      callback(false);
    }, 2000);
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">
          Payment details
        </h2>
        <form action="#" className="mx-auto space-y-6">
          <div className="space-y-4">
            <div className="items-end sm:flex sm:space-x-4">
              <div className="mb-4 w-full sm:mb-0 sm:w-64">
                <Label
                  htmlFor="amount"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount due
                </Label>
                <TextInput
                  id="amount"
                  name="amount"
                  readOnly
                  rightIcon={() =>
                    isAmountDueCopied
                      ? copiedToClipboardTooltip
                      : copyToClipboardTooltip(setAmountDueCopied, "$149")
                  }
                  theme={{
                    field: {
                      rightIcon: {
                        base: twMerge(
                          theme.textInput.field.rightIcon.base,
                          "pointer-events-auto py-3",
                        ),
                      },
                    },
                  }}
                  value="$149"
                />
              </div>
              <div className="flex w-full items-center space-x-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m2.665 9H6.647A1.647 1.647 0 0 1 5 15.353v-1.706A1.647 1.647 0 0 1 6.647 12h1.018M16 12l1.443 4.773L19 12m-6.057-.152-.943-.02a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"
                    />
                  </svg>
                  Download CSV
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                    />
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>
            <div>
              <Label
                htmlFor="currency"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Currency
              </Label>
              <TextInput
                id="currency"
                name="currency"
                readOnly
                rightIcon={() =>
                  isCurrencyCopied
                    ? copiedToClipboardTooltip
                    : copyToClipboardTooltip(setCurrencyCopied, "USD")
                }
                theme={{
                  field: {
                    rightIcon: {
                      base: twMerge(
                        theme.textInput.field.rightIcon.base,
                        "pointer-events-auto py-3",
                      ),
                    },
                  },
                }}
                value="USD"
              />
            </div>
            <div>
              <Label
                htmlFor="beneficiary"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Beneficiary
              </Label>
              <TextInput
                id="beneficiary"
                name="beneficiary"
                readOnly
                rightIcon={() =>
                  isBeneficiaryCopied
                    ? copiedToClipboardTooltip
                    : copyToClipboardTooltip(
                        setBeneficiaryCopied,
                        "Flowbite LLC",
                      )
                }
                theme={{
                  field: {
                    rightIcon: {
                      base: twMerge(
                        theme.textInput.field.rightIcon.base,
                        "pointer-events-auto py-3",
                      ),
                    },
                  },
                }}
                value="Flowbite LLC"
              />
            </div>
            <div>
              <Label
                htmlFor="account-number"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Account number
              </Label>
              <TextInput
                id="account-number"
                name="account-number"
                readOnly
                rightIcon={() =>
                  isAccountNumberCopied
                    ? copiedToClipboardTooltip
                    : copyToClipboardTooltip(
                        setAccountNumberCopied,
                        "FB00 1234 5678 91011",
                      )
                }
                theme={{
                  field: {
                    rightIcon: {
                      base: twMerge(
                        theme.textInput.field.rightIcon.base,
                        "pointer-events-auto py-3",
                      ),
                    },
                  },
                }}
                value="FB00 1234 5678 91011"
              />
            </div>
            <div>
              <Label
                htmlFor="swift-code"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                SWIFT/BIC code
              </Label>
              <TextInput
                id="swift-code"
                name="swift-code"
                readOnly
                rightIcon={() =>
                  isBankCodeCopied
                    ? copiedToClipboardTooltip
                    : copyToClipboardTooltip(setBankCodeCopied, "FBU345SS")
                }
                theme={{
                  field: {
                    rightIcon: {
                      base: twMerge(
                        theme.textInput.field.rightIcon.base,
                        "pointer-events-auto py-3",
                      ),
                    },
                  },
                }}
                value="FBU345SS"
              />
            </div>
            <div>
              <Label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Bank address:
              </Label>
              <TextInput
                id="address"
                name="address"
                readOnly
                rightIcon={() =>
                  isBankAddressCopied
                    ? copiedToClipboardTooltip
                    : copyToClipboardTooltip(
                        setBankAddressCopied,
                        "62 Miles Drive St, Newark, NJ 07103, California",
                      )
                }
                theme={{
                  field: {
                    rightIcon: {
                      base: twMerge(
                        theme.textInput.field.rightIcon.base,
                        "pointer-events-auto py-3",
                      ),
                    },
                  },
                }}
                value="62 Miles Drive St, Newark, NJ 07103, California"
              />
            </div>
          </div>
          <Button type="button" className="flex w-full">
            Confirm payment
          </Button>
          <p className="mt-6 text-center text-base font-normal text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
            Payment processed by&nbsp;
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Paddle
            </a>
            &nbsp;for&nbsp;
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Flowbite LLC
            </a>
            &nbsp;- United States Of America
          </p>
        </form>
      </div>
    </section>
  );
}
