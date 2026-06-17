import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  RangeSlider,
  Select,
  TextInput,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function AdvancedFacetedSearchModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Toggle modal
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="3xl"
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
        <Modal.Header>Advanced filters</Modal.Header>
        <Modal.Body>
          <form action="#" method="get" className="space-y-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label
                    htmlFor="min-age"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Min Age
                  </Label>
                  <RangeSlider
                    defaultValue="18"
                    id="min-age"
                    max="100"
                    min="1"
                    name="min-age"
                    step="1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="max-age"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Max Age
                  </Label>
                  <RangeSlider
                    defaultValue="45"
                    id="max-age"
                    max="100"
                    min="1"
                    name="min-age"
                    step="1"
                  />
                </div>
                <div className="col-span-2 flex items-center justify-between space-x-3">
                  <div className="w-full">
                    <Label
                      htmlFor="min-age-text"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      From
                    </Label>
                    <TextInput
                      defaultValue="18"
                      id="min-age-text"
                      max="100"
                      min="1"
                      name="min-age"
                      required
                      type="number"
                    />
                  </div>
                  <div className="w-full">
                    <Label
                      htmlFor="max-age-text"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      To
                    </Label>
                    <TextInput
                      defaultValue="45"
                      id="max-age-text"
                      max="100"
                      min="1"
                      name="min-age"
                      required
                      type="number"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label
                    htmlFor="min-experience"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Min Experience
                  </Label>
                  <RangeSlider
                    defaultValue="5"
                    id="min-experience"
                    max="30"
                    min="1"
                    name="min-experience"
                    step="1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="max-experience"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Max Experience
                  </Label>
                  <RangeSlider
                    defaultValue="45"
                    id="max-experience"
                    max="100"
                    min="1"
                    name="max-experience"
                    step="1"
                  />
                </div>
                <div className="col-span-2 flex items-center justify-between space-x-3">
                  <div className="w-full">
                    <Label
                      htmlFor="min-experience-input"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      From
                    </Label>
                    <TextInput
                      defaultValue="18"
                      id="min-experience-input"
                      max="100"
                      min="1"
                      name="min-experience-input"
                      placeholder=""
                      required
                      type="number"
                    />
                  </div>
                  <div className="w-full">
                    <Label
                      htmlFor="max-experience-input"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      To
                    </Label>
                    <TextInput
                      defaultValue="45"
                      id="max-experience-input"
                      max="100"
                      min="1"
                      name="max-experience-input"
                      placeholder=""
                      required
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                Account type
              </h6>
              <ul className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:flex-row">
                <li className="w-full border-b border-gray-200 dark:border-gray-600 md:border-b-0 md:border-r">
                  <div className="flex items-center pl-3">
                    <Radio defaultChecked id="account-all" name="list-radio" />
                    <Label
                      htmlFor="account-all"
                      className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      All
                    </Label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 dark:border-gray-600 md:border-b-0 md:border-r">
                  <div className="flex items-center pl-3">
                    <Radio id="account-administrator" name="list-radio" />
                    <Label
                      htmlFor="account-administrator"
                      className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Administrator
                    </Label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 dark:border-gray-600 md:border-b-0 md:border-r">
                  <div className="flex items-center pl-3">
                    <Radio id="account-moderator" name="list-radio" />
                    <Label
                      htmlFor="account-moderator"
                      className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Moderator
                    </Label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <Radio id="account-viewer" name="list-radio" />
                    <Label
                      htmlFor="account-viewer"
                      className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Viewer
                    </Label>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Job title
              </Label>
              <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-3">
                <li>
                  <Checkbox
                    id="frontend-developer"
                    name="job_title"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="frontend-developer"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    Frontend developer
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="ui-ux-designer"
                    name="job_title"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="ui-ux-designer"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    UI/UX Designer
                  </Label>
                </li>
                <li>
                  <Checkbox
                    defaultChecked
                    id="react-developer"
                    name="job_title"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="react-developer"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    React Developer
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="php-developer"
                    name="job_title"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="php-developer"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    PHP Developer
                  </Label>
                </li>
                <li>
                  <Checkbox
                    defaultChecked
                    id="engineer"
                    name="job_title"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="engineer"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    Engineer
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="marketing"
                    name="job_title"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="marketing"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                  >
                    Marketing
                  </Label>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <Label className="block text-sm font-medium text-gray-900 dark:text-white">
                Properties
              </Label>
              <div className="flex items-center space-x-3 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                <div className="grid w-full gap-3 md:grid-cols-3">
                  <Select id="country-0" name="country-0">
                    <option value="" disabled>
                      Country
                    </option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                  <Select id="state-0" name="state-0">
                    <option value="" disabled>
                      State
                    </option>
                    <option>Californa</option>
                    <option>Oregon</option>
                    <option>New York</option>
                    <option>Florida</option>
                  </Select>
                  <Select id="city-0" name="city-0">
                    <option value="" disabled>
                      City
                    </option>
                    <option>Sacramento</option>
                    <option>Los Angeles</option>
                    <option>San Francisco</option>
                    <option>San Diego</option>
                  </Select>
                </div>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg
                    aria-hidden
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Delete</span>
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                <div className="grid w-full gap-3 md:grid-cols-3">
                  <Select id="country-1" name="country-1">
                    <option value="" selected disabled>
                      Country
                    </option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                  <Select id="state-1" name="state-1">
                    <option value="" selected disabled>
                      State
                    </option>
                    <option>Californa</option>
                    <option>Oregon</option>
                    <option>New York</option>
                    <option>Florida</option>
                  </Select>
                  <Select id="city-1" name="city-1">
                    <option value="" selected disabled>
                      City
                    </option>
                    <option>Sacramento</option>
                    <option>Los Angeles</option>
                    <option>San Francisco</option>
                    <option>San Diego</option>
                  </Select>
                </div>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg
                    aria-hidden
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Delete</span>
                </button>
              </div>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Property
              </a>
            </div>
            <div className="flex items-center space-x-4 rounded-b pt-2 dark:border-gray-600">
              <Button type="submit">Show 32 Results</Button>
              <Button color="gray" type="reset">
                Reset
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
