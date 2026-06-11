import React from "react";
import {Button, Link} from "@nextui-org/react";

export default function Component() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0">
      <div className="pointer-events-auto flex w-full items-center justify-between gap-x-20 border border-divider bg-background/15 px-6 py-4 shadow-small backdrop-blur">
        <p className="text-small font-normal text-default-700">
          We use cookies to provide the best experience. By continuing to use our site, you agree to
          our&nbsp;
          <Link className="font-medium" href="#" size="sm" underline="always">
            Cookie Policy.
          </Link>
        </p>
        <div className="flex items-center gap-2">
          <Button
            className="px-4 font-medium"
            radius="lg"
            style={{
              border: "solid 2px transparent",
              backgroundImage: `linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            Accept All
          </Button>
          <Button className="font-medium" radius="lg" variant="light">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
