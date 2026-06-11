import React from "react";
import {Button, Link} from "@nextui-org/react";

import {Icon} from "./icon";

export default function Component() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0">
      <div className="pointer-events-auto flex w-full items-center justify-between gap-x-20 border border-divider bg-primary px-6 py-4 shadow-small">
        <p className="text-small font-normal text-primary-foreground">
          We use cookies to provide the best experience. By continuing to use our site, you agree to
          our&nbsp;
          <Link
            className="font-medium text-primary-foreground"
            href="#"
            size="sm"
            underline="always"
          >
            Cookie Policy.
          </Link>
          <Icon className="ml-2 inline-block h-6 w-6 text-primary-200" icon="lucide:cookie" />
        </p>
        <div className="flex items-center gap-2">
          <Button className="bg-primary-foreground font-medium text-primary" radius="lg">
            Accept
          </Button>
          <Button className="font-medium text-primary-foreground" radius="lg" variant="light">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
