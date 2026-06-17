import {
  Avatar,
  Button,
  Checkbox,
  Datepicker,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
  Tooltip,
} from "flowbite-react";
import { useState } from "react";
import { HiClock, HiLocationMarker, HiPlus, HiX } from "react-icons/hi";

export function AdvancedCreateEventModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Create event
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="5xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-2 flex items-center justify-between pb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add new event
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-4 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <HiX className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:mb-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </Label>
                  <TextInput
                    id="title"
                    name="title"
                    placeholder="Add title here"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </Label>
                  <TextInput
                    icon={() => (
                      <HiLocationMarker className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                    id="location"
                    name="location"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Date
                  </Label>
                  <Datepicker id="location" name="location" />
                </div>
                <time
                  dateTime="2022-04-22 04:30"
                  className="flex text-sm text-gray-500 dark:text-gray-400"
                >
                  Thursday, April 22
                  <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                    04:30 - 05:30
                  </span>
                </time>
                <div className="items-center sm:flex sm:space-x-4">
                  <Avatar.Group className="mb-4 sm:mb-0 [&_img]:ring-white dark:[&_img]:ring-0">
                    <Avatar
                      alt="Helene Engels"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                      rounded
                      size="sm"
                      stacked
                    />
                    <Avatar
                      alt="Robert Brown"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                      rounded
                      size="sm"
                      stacked
                    />
                    <Avatar
                      alt="Bonnie Green"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      rounded
                      size="sm"
                      stacked
                    />
                    <Avatar.Counter
                      total={9}
                      className="h-8 w-8 ring-white dark:ring-gray-800"
                    />
                  </Avatar.Group>
                  <Button
                    color="gray"
                    outline
                    className="mr-3 inline-flex dark:border-gray-600 sm:mr-0 [&>span]:text-xs [&>span]:text-gray-400 hover:[&>span]:text-gray-900 [&>span]:dark:bg-gray-800 dark:[&>span]:text-gray-400 dark:[&>span]:enabled:hover:bg-gray-700"
                  >
                    <HiPlus className="-ml-1 mr-1 h-4 w-4" />
                    Add member
                  </Button>
                  <Button
                    color="gray"
                    outline
                    className="mr-3 inline-flex dark:border-gray-600 sm:mr-0 [&>span]:text-xs [&>span]:text-gray-400 hover:[&>span]:text-gray-900 [&>span]:dark:bg-gray-800 dark:[&>span]:text-gray-400 dark:[&>span]:enabled:hover:bg-gray-700"
                  >
                    <HiClock className="-ml-1 mr-1 h-4 w-4" />
                    Find a time
                  </Button>
                </div>
                <div>
                  <Label
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="guest-permission-checkbox"
                  >
                    Guest Permissions
                  </Label>
                  <div className="space-y-4 sm:flex sm:space-y-0">
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="inline-checkbox"
                        name="guest-permission-checkbox"
                      />
                      <Label
                        htmlFor="inline-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Modify event
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="inline-2-checkbox"
                        name="guest-permission-checkbox"
                      />
                      <Label
                        htmlFor="inline-2-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Invite others
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        defaultChecked
                        id="inline-checked-checkbox"
                        name="guest-permission-checkbox"
                      />
                      <Label
                        htmlFor="inline-checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        See guest list
                      </Label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <button className="rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50">
                      Add Google Meet video conference
                    </button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Tag Color
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="h-6 w-6 rounded-sm bg-purple-500"></button>
                    <button className="h-6 w-6 rounded-sm bg-indigo-500"></button>
                    <button className="h-6 w-6 rounded-sm bg-primary-600"></button>
                    <button className="h-6 w-6 rounded-sm bg-pink-500"></button>
                    <button className="h-6 w-6 rounded-sm bg-teal-400"></button>
                    <button className="h-6 w-6 rounded-sm bg-green-400"></button>
                    <button className="h-6 w-6 rounded-sm bg-yellow-300"></button>
                    <button className="h-6 w-6 rounded-sm bg-orange-400"></button>
                    <button className="h-6 w-6 rounded-sm bg-red-500"></button>
                  </div>
                </div>
              </div>
              <div>
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </Label>
                <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-600">
                  <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Format code</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <Tooltip content="Show full screen">
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                        <svg
                          aria-hidden
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Full screen</span>
                      </button>
                    </Tooltip>
                  </div>
                  <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Write a description here"
                      required
                      rows={8}
                      className="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Reminder
                  </div>
                  <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <div className="w-full">
                      <Label htmlFor="reminder-type" className="sr-only">
                        Reminder type
                      </Label>
                      <Select id="reminder-type" name="reminder-type">
                        <option selected>Notification</option>
                        <option value="AL">Alarm</option>
                        <option value="EM">Email</option>
                        <option value="SM">SMS</option>
                      </Select>
                    </div>
                    <div className="w-full">
                      <Label htmlFor="reminder-counter" className="sr-only">
                        Counter
                      </Label>
                      <TextInput
                        id="reminder-counter-days"
                        name="reminder-counter"
                        placeholder="1"
                        required
                        type="number"
                      />
                    </div>
                    <div className="w-full">
                      <Label htmlFor="reminder-length-type" className="sr-only">
                        Length
                      </Label>
                      <Select
                        id="reminder-length-type"
                        name="reminder-length-type"
                      >
                        <option selected>Days</option>
                        <option value="WE">Weeks</option>
                        <option value="MO">Months</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" type="submit" className="[&>span]:text-sm">
                <HiPlus className="mr-2 h-4 w-4" />
                Add event
              </Button>
              <Button
                color="gray"
                onClick={() => setShowModal(false)}
                outline
                size="lg"
                className="[&>span]:text-sm [&>span]:text-gray-500 hover:[&>span]:text-gray-900 [&>span]:dark:bg-gray-700 dark:[&>span]:enabled:hover:bg-gray-600"
              >
                Discard
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
