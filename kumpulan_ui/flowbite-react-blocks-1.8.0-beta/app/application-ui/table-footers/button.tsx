import { Button } from "flowbite-react";

export function TableFooterWithButton() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-b-lg bg-white shadow-md dark:bg-gray-800">
          <nav className="flex flex-row items-center justify-between p-4">
            <Button>View full report</Button>
            <p className="text-sm">
              <span className="font-normal text-gray-500 dark:text-gray-400">
                Total users:&nbsp;
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                1867
              </span>
            </p>
          </nav>
        </div>
      </div>
    </section>
  );
}
