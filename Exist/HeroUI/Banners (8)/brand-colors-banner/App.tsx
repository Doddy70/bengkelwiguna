"use client";

import React from "react";
import {Button, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export default function Component() {
  return (
    <div className="flex w-full items-center gap-x-3 border-b-1 border-divider bg-primary px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <p className="text-small text-primary-foreground">
        <Link className="text-inherit" href="#">
          The Winter 2024 Release is here: new editor, analytics API, and so much more.&nbsp;
        </Link>
      </p>
      <Button
        as={Link}
        className="group relative h-9 overflow-hidden bg-primary-foreground text-small font-medium text-primary"
        color="default"
        endContent={
          <Icon
            className="flex-none outline-none transition-transform group-data-[hover=true]:translate-x-0.5 [&>path]:stroke-[2]"
            icon="solar:arrow-right-linear"
            width={16}
          />
        }
        href="#"
        radius="full"
      >
        Explore
      </Button>
      <div className="flex flex-1 justify-end">
        <Button isIconOnly aria-label="Close Banner" className="-m-1" size="sm" variant="light">
          <Icon aria-hidden="true" className="text-primary-foreground" icon="lucide:x" width={20} />
        </Button>
      </div>
    </div>
  );
}
