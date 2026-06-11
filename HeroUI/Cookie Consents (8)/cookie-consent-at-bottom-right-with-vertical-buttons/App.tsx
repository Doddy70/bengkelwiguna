import React from "react";
import {Button, Link} from "@nextui-org/react";

export default function Component() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto ml-auto max-w-sm rounded-large border border-divider bg-background/15 p-6 shadow-small backdrop-blur">
        <p className="text-small font-normal text-default-700">
          We use cookies on our website to give you the most relevant experience by remembering your
          preferences and repeat visits. By clicking&nbsp;
          <b className="font-semibold">&quot;Accept All&quot;</b>, you consent to the use of ALL the
          cookies. However, you may visit&nbsp;
          <span className="font-semibold">&quot;Cookie Settings&quot;</span> to provide a controlled
          consent. For more information, please read our{" "}
          <Link href="#" size="sm" underline="hover">
            Cookie Policy.
          </Link>
        </p>
        <div className="mt-4 space-y-2">
          <Button
            fullWidth
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
          <Button
            fullWidth
            className="border-default-200 font-medium text-default-foreground"
            radius="lg"
            variant="bordered"
          >
            Reject All
          </Button>
          <Button
            fullWidth
            className="font-medium text-default-foreground"
            radius="lg"
            variant="light"
          >
            Cookie Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
