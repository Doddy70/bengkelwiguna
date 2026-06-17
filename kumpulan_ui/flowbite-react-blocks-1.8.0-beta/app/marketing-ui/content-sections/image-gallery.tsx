export function ImageGalleryContentSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:text-center lg:px-12 lg:py-16">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We didn't reinvent the wheel
        </h2>
        <p className="text-gray-500 dark:text-gray-400 sm:text-lg md:px-20 lg:px-36 xl:px-48">
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.
        </p>
        <div className="mt-8 gap-4 sm:mt-12 sm:grid sm:grid-cols-4">
          <img
            className="col-span-2 mb-4 rounded-lg sm:mb-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
            alt=""
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png"
            className="col-span-1 hidden rounded-lg sm:block"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            className="col-span-1 hidden rounded-lg sm:block"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png"
            className="col-span-1 hidden rounded-lg sm:block"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png"
            className="col-span-2 rounded-lg"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png"
            className="col-span-1 hidden rounded-lg sm:block"
          />
        </div>
      </div>
    </section>
  );
}
