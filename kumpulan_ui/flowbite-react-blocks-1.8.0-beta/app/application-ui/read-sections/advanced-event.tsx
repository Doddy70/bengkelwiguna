import { Avatar, Button } from "flowbite-react";
import {
  HiCalendar,
  HiLocationMarker,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";

export function AdvancedReadEventSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl py-8 lg:py-16">
        <div className="mb-4 grid gap-4 px-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
          <div className="sm:col-span-2">
            <h2 className="mb-4 flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:mb-5 sm:text-2xl">
              The 4th Digital Transformation
            </h2>
            <dl className="mb-4 flex items-center space-x-4 sm:mb-5">
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="flex items-center text-gray-900 dark:text-white">
                  <HiCalendar className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="font-semibold">26th of November, 2022</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center text-gray-900 dark:text-white">
                  <HiLocationMarker className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="font-semibold">California, USA</span>
                </dd>
              </div>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details:
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                USA enterprises and governments have committed to a
                technology-driven future, making USA one of the fastest-growing
                markets for digital technologies. This has also increased the
                exposure to the risk of cyber-attacks as businesses continue to
                progress toward being more digital in areas such as the
                workplace, which requires more security measures.
              </dd>
            </dl>
          </div>
          <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Participants
            </dt>
            <dd className="mb-4 flex -space-x-4 sm:mb-5">
              <Avatar.Group className="[&_*]:ring-gray-100 [&_*]:dark:ring-gray-700">
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
                <Avatar.Counter total={9} className="h-8 w-8 bg-gray-600" />
              </Avatar.Group>
            </dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Online
            </dt>
            <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">
              Google Meet
            </dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Duration
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white">
              All day
            </dd>
          </dl>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <Button size="lg" className="[&>span]:text-sm">
            <HiPencilAlt className="-ml-1 mr-1 h-5 w-5" />
            Edit
          </Button>
          <Button
            color="gray"
            size="lg"
            className="dark:bg-gray-800 [&>span]:text-sm"
          >
            Preview
          </Button>
          <Button color="failure" size="lg" className="[&>span]:text-sm">
            <HiTrash className="-ml-1 mr-1.5 h-5 w-5" />
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}
