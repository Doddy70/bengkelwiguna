import { Badge, Button, Modal } from "flowbite-react";
import { useState } from "react";

export function PromotionalPopup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Preview promotional popup</Button>
      <Modal
        show={show}
        size="2xl"
        theme={{
          content: {
            inner:
              "relative flex max-h-[90vh] flex-col rounded-lg bg-white shadow dark:bg-gray-800",
          },
        }}
      >
        <Modal.Body>
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/pop-up/banner.png"
            className="mb-4 rounded"
          />
          <div className="mb-2.5 flex items-center gap-2">
            <Badge color="success">
              <svg
                className="-ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              New Feature
            </Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              November 09, 2022
            </span>
          </div>
          <div className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Private Release Notes
            </h3>
            <p className="mb-2">
              Flowbite is an open-source library of UI components based on the
              utility-first Tailwind CSS framework featuring dark mode support,
              a Figma design system, and more.
            </p>
            <p>
              To find out more about the different types of cookies, as well as
              who sends them on our website, please visit our&nbsp;
              <a
                href="#"
                className="font-semibold text-gray-900 underline dark:text-white"
              >
                dedicated dashboard
              </a>
              .
            </p>
          </div>
          <div className="flex items-center space-x-4 pt-0">
            <Button onClick={() => setShow(false)}>Sign In</Button>
            <Button
              color="gray"
              onClick={() => setShow(false)}
              outline
              className="dark:bg-gray-700 dark:enabled:hover:bg-gray-600 [&>span]:dark:bg-gray-700 [&>span]:dark:enabled:hover:bg-gray-600"
            >
              I'm not interested
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
