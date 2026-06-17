import { Button, Carousel } from "flowbite-react";

export function HeroSectionWithCarouselSlider() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Making earth cooler for people, nature, climate
              </h2>
              <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:max-w-3xl">
                Protecting the planet and its natural resources for future
                generations, by reducing pollution, promoting sustainability,
                and conserving energy and resources.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg">Donate now</Button>
              <Button
                size="lg"
                color="gray"
                className="[&>span]:items-center"
                outline
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Learn more
              </Button>
            </div>
            <div className="mt-4 dark:border-gray-700 sm:mt-8 sm:border-t sm:border-gray-100 sm:pt-8">
              <p className="hidden text-base font-medium text-gray-500 sm:block">
                Partners and backers:
              </p>
              <div className="mt-3 flex max-w-md items-center">
                <img
                  className="mr-4 h-8 w-auto md:h-12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/greenpeace.svg"
                  alt=""
                />
                <img
                  className="mr-8 h-8 w-auto md:h-12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/united-nations.svg"
                  alt=""
                />
                <img
                  className="mr-8 h-8 w-auto dark:invert md:h-12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/wwf.svg"
                  alt=""
                />
                <img
                  className="h-8 w-auto md:h-12"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/oxfam.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Carousel className="h-64 md:h-96">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-1.jpg"
              className="rounded-lg"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-2.jpg"
              className="rounded-lg"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-3.jpg"
              className="rounded-lg"
              alt=""
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-4.jpg"
              className="rounded-lg"
              alt=""
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
