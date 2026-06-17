"use client";

import { Badge, Button, Modal, ModalBody, TextInput } from "flowbite-react";
import { Envelope, Fire } from "flowbite-react-icons/outline";
import { useState } from "react";

export default function DiscountWithModalAndEmailSignup() {
  const [isOpen, setOpen] = useState(true);

  return (
    <Modal onClose={() => setOpen(false)} popup show={isOpen} size="sm">
      <ModalBody className="flex flex-col items-center p-4 text-center">
        <img
          alt=""
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/promo-banner.jpg"
          className="mb-4 h-36 w-full rounded bg-cover"
        />
        <Badge color="green" className="mb-4 w-fit text-sm">
          <div className="flex items-center gap-1">
            <Fire className="h-4 w-4" />
            Today's offer
          </div>
        </Badge>
        <div className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
            20% Off All Gaming Gear
          </h3>
          <p className="text-sm">
            Simply enter your email to unlock this deal and stay in the loop for
            future promotions.
          </p>
        </div>
        <form action="#" className="mb-4 w-full space-y-2">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <TextInput
            icon={() => (
              <Envelope className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            )}
            id="email"
            name="email"
            placeholder="Your email"
            className="w-full"
          />
          <Button type="submit" className="w-full [&>span]:py-2.5">
            Get my 20% OFF
          </Button>
        </form>
        <button
          className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          onClick={() => setOpen(false)}
        >
          No thanks
        </button>
      </ModalBody>
    </Modal>
  );
}
