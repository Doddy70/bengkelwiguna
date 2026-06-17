"use client";

import {
  Button,
  Drawer,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

export function DefaultUpdateDrawer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Update product</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
      >
        <Drawer.Header title="UPDATE PRODUCT" titleIcon={() => <></>} />
        <Drawer.Items>
          <form action="#" className="mt-5">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Name
                </Label>
                <TextInput
                  defaultValue='Apple iMac 27"'
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="brand" className="mb-2 block">
                  Brand
                </Label>
                <TextInput
                  defaultValue="Apple"
                  id="brand"
                  name="brand"
                  placeholder="Product brand"
                  required
                />
              </div>
              <div>
                <Label htmlFor="price" className="mb-2 block">
                  Price
                </Label>
                <TextInput
                  defaultValue={2999}
                  id="price"
                  name="price"
                  placeholder="$2999"
                  required
                  type="number"
                />
              </div>
              <div>
                <Label htmlFor="category" className="mb-2 block">
                  Category
                </Label>
                <Select id="category" name="category">
                  <option>Select category</option>
                  <option selected value="Electronics">
                    Electronics
                  </option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="description" className="mb-2 block">
                  Description
                </Label>
                <Textarea
                  defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                  id="description"
                  name="description"
                  placeholder="Enter event description here"
                  rows={8}
                />
              </div>
              <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
                <Button type="submit" className="w-full">
                  Update
                </Button>
                <Button
                  color="alt"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
                >
                  <svg
                    aria-hidden
                    className="-ml-1 mr-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Delete
                </Button>
              </div>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
