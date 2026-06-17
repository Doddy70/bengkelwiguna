import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import type { BlockSectionProps } from "./block-section";

export function BlockBreadcrumb({
  title,
  description,
}: Pick<BlockSectionProps, "title" | "description">) {
  return (
    <div className="mx-auto mb-6 flex max-w-screen-2xl flex-col gap-3 px-4 pt-6">
      <Breadcrumb>
        <Breadcrumb.Item href="/" icon={HiHome}>
          Flowbite React Blocks
        </Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        React {title} - Flowbite
      </h1>
      <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <hr className="mt-4 border-gray-100 dark:border-gray-800" />
    </div>
  );
}
