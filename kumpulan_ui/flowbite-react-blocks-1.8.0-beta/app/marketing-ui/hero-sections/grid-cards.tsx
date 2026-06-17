import { Button } from "flowbite-react";

export function BackgroundImageCardsHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-ix.png')] bg-cover bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-normal"
          >
            <h2 className="mb-5 max-w-xl text-5xl font-extrabold leading-tight tracking-tight text-white">
              Enjoy nature sustainable travel in the BMW iX
            </h2>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700 dark:bg-transparent dark:hover:bg-white">
              Show more
            </Button>
          </a>
          <a
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-m4.png')] bg-cover bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-normal md:col-span-1"
          >
            <h2 className="mb-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white">
              Enjoy nature sustainable travel in the BMW iX
            </h2>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700 dark:bg-transparent dark:hover:bg-white">
              Show more
            </Button>
          </a>
          <a
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-m6.png')] bg-cover bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-normal md:col-span-1"
          >
            <h2 className="mb-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white">
              Enjoy nature sustainable travel in the BMW iX
            </h2>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700 dark:bg-transparent dark:hover:bg-white">
              Show more
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
