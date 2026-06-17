import { Button } from "flowbite-react";
import type { PropsWithChildren } from "react";
import { FaGithub } from "react-icons/fa";

export interface BlockSectionProps extends PropsWithChildren {
  description: string;
  githubLink: string;
  title: string;
}

export function BlockSection({
  children,
  description,
  githubLink,
  title,
}: BlockSectionProps) {
  return (
    <section className="mx-auto mb-12 max-w-screen-2xl">
      <div className="mx-4 mb-6 flex flex-col items-center gap-3 pb-4 md:flex-row md:justify-between md:space-x-4">
        <div>
          <header>
            <h2 className="mb-1 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          </header>
          <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400 lg:mb-0">
            {description}
          </p>
        </div>
        <Button
          href={githubLink}
          target="_blank"
          className="ml-0 w-full shrink-0 hover:bg-gray-50 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-white md:w-auto"
          color="gray"
        >
          <FaGithub className="mr-3 h-5 w-5" />
          View on GitHub
        </Button>
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
