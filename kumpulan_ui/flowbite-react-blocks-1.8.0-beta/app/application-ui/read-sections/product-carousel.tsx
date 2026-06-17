import { Badge, Button, Carousel, theme } from "flowbite-react";
import { HiPencilAlt, HiStar, HiTrash } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function ReadProductSectionWithCarousel() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:py-16">
        <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 dark:text-white md:text-2xl">
          Apple iMac 25"
        </h2>
        <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 dark:text-white md:text-2xl">
          $2999
        </p>
        <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
          <div className="sm:col-span-2">
            <Carousel
              indicators={false}
              theme={{
                control: {
                  base: twMerge(
                    theme.carousel.control.base,
                    "bg-gray-200 group-hover:bg-gray-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-600 dark:group-hover:bg-gray-500 dark:group-focus:ring-gray-800/70",
                  ),
                  icon: twMerge(
                    theme.carousel.control.icon,
                    "text-gray-500 dark:text-white",
                  ),
                },
              }}
              className="mb-4 h-56 lg:h-96"
            >
              <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img
                  alt="iMac side"
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                />
              </div>
              <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img
                  alt="iMac front"
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                />
              </div>
              <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img
                  alt="iMac back"
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                />
              </div>
            </Carousel>
            <p className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              See it all in sharp, glorious detail on the immersive 24‑inch 4.5K
              Retina display.2 The P3 wide color gamut brings what you’re
              watching to life in over a billion colors. Images shine with a
              brilliant 500 nits of brightness. Industry-leading anti‑reflective
              coating delivers greater comfort and readability.
            </p>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Details
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Colors
              </dt>
              <dd className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                <div className="h-6 w-6 rounded-full bg-green-300"></div>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Product State
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                <Badge color="info" className="w-fit px-3">
                  <HiStar className="mr-1 h-3 w-3" />
                  New
                </Badge>
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Sold by
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Flowbite
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Ships from
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Flowbite
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Brand
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Apple
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Dimensions (cm)
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                105 x 15 x 23
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Item weight
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
            </dl>
          </div>
        </div>
        <div className="flex items-center space-x-4">
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
