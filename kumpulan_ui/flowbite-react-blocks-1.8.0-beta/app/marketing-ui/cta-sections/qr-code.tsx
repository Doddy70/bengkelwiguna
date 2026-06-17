export function QRCodeCTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Trade. Anywhere.
          </h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8">
            Compatible with multiple devices, start trading with safety and
            convenience.
          </p>
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/qr-code.svg"
            className="mx-auto w-56 dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/qr-code-dark.svg"
            className="mx-auto hidden w-56 dark:block"
          />
        </div>
      </div>
    </section>
  );
}
