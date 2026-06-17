import { Button, Modal, Table, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { FlowbiteLogo } from "~/components/flowbite-logo";

export function GDPRCookieConsentNotice() {
  const [show, setShow] = useState(false);
  const [showEssentialCookies, setShowEssentialCookies] = useState(false);
  const [showMarketingCookies, setShowMarketingCookies] = useState(false);
  const [isMarketingCookies, setMarketingCookies] = useState(false);
  const [showFunctionalCookies, setShowFunctionalCookies] = useState(false);
  const [isFunctionalCookies, setFunctionalCookies] = useState(false);
  const [showPerformanceCookies, setShowPerformanceCookies] = useState(false);
  const [isPerformanceCookies, setPerformanceCookies] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        Show GDPR cookie consent notice
      </Button>
      <Modal
        popup
        show={show}
        theme={{
          content: {
            inner:
              "relative flex max-h-[90vh] flex-col rounded-lg bg-white shadow dark:bg-gray-800",
          },
        }}
      >
        <Modal.Body>
          <a
            href="#"
            className="my-8 flex items-center justify-center text-xl font-semibold text-gray-900 dark:text-white"
          >
            <FlowbiteLogo />
            Flowbite
          </a>
          <div className="space-y-4 divide-y divide-gray-200 text-gray-500 dark:divide-gray-700 dark:text-gray-400">
            <div>
              <p className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Cookie Settings
              </p>
              <p className="mb-2">
                To use these Services, we need your consent. By clicking on
                “Accept all”, you declare your consent to the use of all
                Services. You can also declare your consent by individually
                clicking on the sliders for each category of cookies and save.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Learn more
                <svg
                  className="ml-1 h-4 w-4"
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
            </div>
            <div className="pt-4">
              <p className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Essential cookies
              </p>
              <p className="mb-2">
                To use these Services, we need your consent. By clicking on
                “Accept all”, you declare your consent to the use of all
                Services. You can also declare your consent by individually
                clicking on the sliders for each category of cookies and save.
              </p>
              <a
                href="#"
                onClick={() => setShowEssentialCookies(!showEssentialCookies)}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                View Cookies
                <svg
                  className="ml-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div
                hidden={!showEssentialCookies}
                className="relative mt-4 overflow-x-auto bg-gray-100 sm:rounded-lg"
              >
                <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <Table.Head className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <Table.HeadCell className="px-6 py-3">Name</Table.HeadCell>
                    <Table.HeadCell className="px-6 py-3">
                      Provider
                    </Table.HeadCell>
                    <Table.HeadCell className="px-6 py-3">
                      Expiration
                    </Table.HeadCell>
                    <Table.HeadCell className="px-6 py-3">
                      Purpose
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row className="bg-gray-100 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                        _cfduid
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        CloudFlare Inc
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">1 Year</Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        Static file delivery
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-gray-100 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                        _cfruid
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">Hubspot Inc</Table.Cell>
                      <Table.Cell className="px-6 py-4">Session</Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        Web page delivery
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-gray-100 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                        _lidc
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">Linkedin</Table.Cell>
                      <Table.Cell className="px-6 py-4">1 Day</Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        Marketing tracking
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-start">
                <div>
                  <p className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                    Marketing cookies
                  </p>
                  <p className="mb-2">
                    To use these Services, we need your consent. By clicking on
                    “Accept all”, you declare your consent to the use of all
                    Services. You can also declare your consent by individually
                    clicking on the sliders for each category of cookies and
                    save.
                  </p>
                  <a
                    href="#"
                    onClick={() =>
                      setShowMarketingCookies(!showMarketingCookies)
                    }
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    View Cookies
                    <svg
                      className="ml-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <ToggleSwitch
                  checked={isMarketingCookies}
                  label="Toggle marketing cookies"
                  onChange={() => setMarketingCookies(!isMarketingCookies)}
                  theme={{
                    root: {
                      label: "hidden",
                    },
                  }}
                />
              </div>
              <div
                hidden={!showMarketingCookies}
                className="relative mt-4 overflow-x-auto bg-gray-100 sm:rounded-lg"
              >
                <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <Table.Head className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <Table.HeadCell className="px-6 py-3">Name</Table.HeadCell>
                    <Table.HeadCell className="px-6 py-3">
                      Provider
                    </Table.HeadCell>
                    <Table.HeadCell className="px-6 py-3">
                      Expiration
                    </Table.HeadCell>
                    <Table.HeadCell className="px-6 py-3">
                      Purpose
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row className="bg-gray-100 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                        _cfduid
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        CloudFlare Inc
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">1 Year</Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        Static file delivery
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-gray-100 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                        _cfruid
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">Hubspot Inc</Table.Cell>
                      <Table.Cell className="px-6 py-4">Session</Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        Web page delivery
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-gray-100 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                        _lidc
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">Linkedin</Table.Cell>
                      <Table.Cell className="px-6 py-4">1 Day</Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        Marketing tracking
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
            <div className="flex items-start pt-4">
              <div>
                <p className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                  Functional cookies
                </p>
                <p className="mb-2">
                  To use these Services, we need your consent. By clicking on
                  “Accept all”, you declare your consent to the use of all
                  Services. You can also declare your consent by individually
                  clicking on the sliders for each category of cookies and save.
                </p>
                <a
                  href="#"
                  onClick={() =>
                    setShowFunctionalCookies(!showFunctionalCookies)
                  }
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  View Cookies
                  <svg
                    className="ml-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <ToggleSwitch
                checked={isFunctionalCookies}
                label="Toggle functional cookies"
                onChange={() => setFunctionalCookies(!isFunctionalCookies)}
                theme={{
                  root: {
                    label: "hidden",
                  },
                }}
              />
            </div>
            <div
              hidden={!showFunctionalCookies}
              className="relative mt-4 overflow-x-auto bg-gray-100 sm:rounded-lg"
            >
              <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <Table.Head className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <Table.HeadCell className="px-6 py-3">Name</Table.HeadCell>
                  <Table.HeadCell className="px-6 py-3">
                    Provider
                  </Table.HeadCell>
                  <Table.HeadCell className="px-6 py-3">
                    Expiration
                  </Table.HeadCell>
                  <Table.HeadCell className="px-6 py-3">Purpose</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row className="bg-gray-100 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      _cfduid
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      CloudFlare Inc
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">1 Year</Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      Static file delivery
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-gray-100 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      _cfruid
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">Hubspot Inc</Table.Cell>
                    <Table.Cell className="px-6 py-4">Session</Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      Web page delivery
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-gray-100 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      _lidc
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">Linkedin</Table.Cell>
                    <Table.Cell className="px-6 py-4">1 Day</Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      Marketing tracking
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <div className="flex items-start pt-4">
              <div>
                <p className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                  Performance cookies
                </p>
                <p className="mb-2">
                  To use these Services, we need your consent. By clicking on
                  “Accept all”, you declare your consent to the use of all
                  Services. You can also declare your consent by individually
                  clicking on the sliders for each category of cookies and save.
                </p>
                <a
                  href="#"
                  onClick={() =>
                    setShowPerformanceCookies(!showPerformanceCookies)
                  }
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  View Cookies
                  <svg
                    className="ml-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <ToggleSwitch
                checked={isPerformanceCookies}
                label="Toggle performance cookies"
                onChange={() => setPerformanceCookies(!isPerformanceCookies)}
                theme={{
                  root: {
                    label: "hidden",
                  },
                }}
              />
            </div>
            <div
              hidden={!showPerformanceCookies}
              className="relative mt-4 overflow-x-auto bg-gray-100 sm:rounded-lg"
            >
              <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <Table.Head className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <Table.HeadCell className="px-6 py-3">Name</Table.HeadCell>
                  <Table.HeadCell className="px-6 py-3">
                    Provider
                  </Table.HeadCell>
                  <Table.HeadCell className="px-6 py-3">
                    Expiration
                  </Table.HeadCell>
                  <Table.HeadCell className="px-6 py-3">Purpose</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row className="bg-gray-100 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      _cfduid
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      CloudFlare Inc
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">1 Year</Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      Static file delivery
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-gray-100 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      _cfruid
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">Hubspot Inc</Table.Cell>
                    <Table.Cell className="px-6 py-4">Session</Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      Web page delivery
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-gray-100 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap px-6 py-4 text-gray-500 dark:text-gray-400">
                      _lidc
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">Linkedin</Table.Cell>
                    <Table.Cell className="px-6 py-4">1 Day</Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      Marketing tracking
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="mt-5 items-center justify-between space-y-4 sm:flex sm:space-y-0">
            <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <Button
                color="gray"
                className="w-full dark:border-gray-500 sm:w-fit [&>span]:px-5 [&>span]:py-2.5 [&>span]:text-gray-500 hover:[&>span]:text-gray-900 dark:[&>span]:bg-gray-700 dark:[&>span]:text-gray-300 dark:hover:[&>span]:bg-gray-600 dark:hover:[&>span]:text-white"
              >
                Customize
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <Button
                onClick={() => setShow(false)}
                className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-2.5"
              >
                Accept all
              </Button>
              <Button
                onClick={() => setShow(false)}
                className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-2.5"
              >
                Reject all
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
