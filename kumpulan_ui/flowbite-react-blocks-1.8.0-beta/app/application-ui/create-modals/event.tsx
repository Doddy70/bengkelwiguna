import {
  Avatar,
  Button,
  Datepicker,
  Label,
  Modal,
  TextInput,
  Textarea,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import { useState } from "react";
import {
  HiCalendar,
  HiCode,
  HiCog,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
  HiX,
} from "react-icons/hi";

export function CreateEventModal() {
  const [showModal, setShowModal] = useState(false);
  const [allDay, setAllDay] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Create event
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="xl"
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
            <div className="mb-4 grid gap-4">
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
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </Label>
                <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                  <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPaperClip className="h-5 w-5" />
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiLocationMarker className="h-5 w-5" />
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPhotograph className="h-5 w-5" />
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCode className="h-5 w-5" />
                          <span className="sr-only">Format code</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiEmojiHappy className="h-5 w-5" />
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Add list</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCog className="h-5 w-5" />
                          <span className="sr-only">Settings</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCalendar className="h-5 w-5" />
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiDownload className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <Tooltip content="Show full screen">
                      <button
                        data-tooltip-target="tooltip-fullscreen"
                        className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
                      >
                        <svg
                          aria-hidden
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
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
                  <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Write a description here"
                      required
                      rows={8}
                      className="border-0 bg-white px-0 text-sm focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label
                  htmlFor="event-date"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Date
                </Label>
                <Datepicker id="event-date" name="event-date" />
              </div>
              <div>
                <ToggleSwitch
                  checked={allDay}
                  id="all-day"
                  name="all-day"
                  label="All day"
                  onChange={() => setAllDay(!allDay)}
                />
              </div>
              <div className="flex items-center gap-x-3">
                <Avatar.Group className="[&_img]:ring-white [&_img]:dark:ring-gray-800">
                  <Avatar
                    alt="Helene Engles"
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
                  size="sm"
                  className="inline-flex dark:border-gray-600 [&>span]:text-xs dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400"
                >
                  <svg
                    aria-hidden
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-1 h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add guests
                </Button>
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
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                type="submit"
                className="inline-flex w-full [&>span]:text-sm"
              >
                <HiPlus className="mr-2 h-4 w-4" />
                Add event
              </Button>
              <Button
                color="gray"
                onClick={() => setShowModal(false)}
                outline
                size="lg"
                className="inline-flex w-full [&>span]:text-sm [&>span]:text-gray-500 hover:[&>span]:text-gray-900 [&>span]:dark:bg-gray-700 dark:[&>span]:enabled:hover:bg-gray-600"
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
