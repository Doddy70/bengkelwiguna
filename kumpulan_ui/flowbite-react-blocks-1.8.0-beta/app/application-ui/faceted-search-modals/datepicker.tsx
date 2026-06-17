import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Modal,
  ToggleSwitch,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function FacetedSearchModalWithDatepicker() {
  const [showModal, setShowModal] = useState(false);
  const [isGoogleMeet, setGoogleMeet] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Toggle modal
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="lg"
        theme={{
          header: {
            popup: twMerge(
              theme.modal.header.base,
              "rounded-t-lg border-0 bg-white px-6 py-4 dark:bg-gray-800",
            ),
            title: "text-lg font-normal text-gray-500 dark:text-gray-400",
          },
          body: {
            base: twMerge(
              theme.modal.body.base,
              "rounded-b-lg bg-white dark:bg-gray-800",
            ),
          },
        }}
      >
        <Modal.Header>Filter by date</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="start"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </Label>
              <div className="flex w-full items-center">
                <Datepicker defaultValue="Select start date" />
                <span className="mx-4 text-gray-500">to</span>
                <Datepicker defaultValue="Select end date" />
              </div>
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Duration
              </Label>
              <ul className="grid w-full grid-cols-3 gap-3">
                <li>
                  <Checkbox
                    id="hours-1"
                    name="duration"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="hours-1"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    1 hour
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="hours-2"
                    name="duration"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="hours-2"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    <div className="block">
                      <div className="w-full text-sm">2 hours</div>
                    </div>
                  </Label>
                </li>
                <li>
                  <Checkbox
                    defaultChecked
                    id="hours-3"
                    name="duration"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="hours-3"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    <div className="block">
                      <div className="w-full text-sm">3 hours</div>
                    </div>
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="hours-4"
                    name="duration"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="hours-4"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    <div className="block">
                      <div className="w-full text-sm">4 hours</div>
                    </div>
                  </Label>
                </li>
                <li>
                  <Checkbox
                    defaultChecked
                    id="hours-57"
                    name="duration"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="hours-57"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    <div className="block">
                      <div className="w-full text-sm">5-7 hours</div>
                    </div>
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="hours-all"
                    name="duration"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="hours-all"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    <div className="block">
                      <div className="w-full text-sm">All day</div>
                    </div>
                  </Label>
                </li>
              </ul>
              <ToggleSwitch
                checked={isGoogleMeet}
                id="google_meet"
                label="Google Meet"
                name="google_meet"
                onChange={() => setGoogleMeet(!isGoogleMeet)}
                className="mt-4"
              />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Event type
              </Label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="industry-conferences"
                    name="industry-conferences"
                  />
                  <Label
                    htmlFor="industry-conferences"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Industry Conferences
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="webinars" name="webinars" />
                  <Label
                    htmlFor="webinars"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Webinars
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    defaultChecked
                    id="sales-kick-offs"
                    name="sales-kick-offs"
                  />
                  <Label
                    htmlFor="sales-kick-offs"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sales Kick-Offs
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="user-conferences" name="user-conferences" />
                  <Label
                    htmlFor="user-conferences"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    User Conferences
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    defaultChecked
                    id="private-events"
                    name="private-events"
                  />
                  <Label
                    htmlFor="private-events"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Private Events
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="field-marketing-events"
                    name="field-marketing-events"
                  />
                  <Label
                    htmlFor="field-marketing-events"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Field Marketing Events
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center space-x-4 rounded-b dark:border-gray-600">
            <Button type="submit">Apply filters</Button>
            <Button color="gray" type="reset">
              Reset
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
