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

export function DefaultCreateDrawer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Create product</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
      >
        <Drawer.Header title="NEW PRODUCT" titleIcon={() => <></>} />
        <Drawer.Items>
          <form action="#" className="mt-5">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Name
                </Label>
                <TextInput
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
                  <option selected>Select category</option>
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
                  id="description"
                  name="description"
                  placeholder="Enter event description here"
                  rows={4}
                />
              </div>
              <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
                <Button type="submit" className="w-full">
                  Add product
                </Button>
                <Button
                  color="alt"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                >
                  <svg
                    aria-hidden
                    className="-ml-1 h-5 w-5 sm:mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
