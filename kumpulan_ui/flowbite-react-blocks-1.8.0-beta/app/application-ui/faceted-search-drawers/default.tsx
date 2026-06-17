"use client";

import {
  Button,
  Checkbox,
  Drawer,
  Label,
  Radio,
  Rating,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export function DefaultFacetedSearchDrawer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Show drawer</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
      >
        <Drawer.Header title="APPLY FILTERS" titleIcon={() => <></>} />
        <Drawer.Items>
          <div className="flex flex-1 flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h6 className="mt-4 text-base font-medium text-black dark:text-white">
                  Categories
                </h6>
                <div className="flex items-center">
                  <Checkbox id="tv" name="tv" />
                  <Label htmlFor="tv" className="ml-2">
                    TV, Audio-Video
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="desktop" name="desktop" />
                  <Label htmlFor="dektop" className="ml-2">
                    Desktop PC
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="gaming" name="gaming" />
                  <Label htmlFor="gaming" className="ml-2">
                    Gaming
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="monitors" name="monitors" />
                  <Label htmlFor="monitors" className="ml-2">
                    Monitors
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="laptops" name="laptops" />
                  <Label htmlFor="laptops" className="ml-2">
                    Laptops
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="console" name="console" />
                  <Label htmlFor="console" className="ml-2">
                    Console
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="tablets" name="tablets" />
                  <Label htmlFor="tablets" className="ml-2">
                    Tablets
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="foto" name="foto" />
                  <Label htmlFor="foto" className="ml-2">
                    Foto
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="fashion" name="fashion" />
                  <Label htmlFor="fashion" className="ml-2">
                    Fashion
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="books" name="books" />
                  <Label htmlFor="books" className="ml-2">
                    Books
                  </Label>
                </div>
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  View all
                </a>
              </div>
              <div className="space-y-2">
                <h6 className="text-base font-medium text-black dark:text-white">
                  Prices
                </h6>
                <div className="col-span-2 flex items-center justify-between space-x-3">
                  <div className="w-full">
                    <Label
                      htmlFor="min-experience-input"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      From
                    </Label>
                    <TextInput
                      type="number"
                      id="price-from"
                      defaultValue={300}
                      min={1}
                      max={10000}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="price-to" className="mb-2 block">
                      To
                    </Label>

                    <TextInput
                      type="number"
                      id="max-experience-input"
                      defaultValue={3500}
                      min={1}
                      max={10000}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="text-base font-medium text-black dark:text-white">
                  Rating
                </h6>
                <div className="flex items-center">
                  <Radio id="five-stars" name="rating" />
                  <Label
                    htmlFor="five-stars"
                    className="ml-2 flex items-center"
                  >
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                    </Rating>
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="four-stars" name="rating" />
                  <Label
                    htmlFor="four-stars"
                    className="ml-2 flex items-center"
                  >
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio defaultChecked id="three-stars" name="rating" />
                  <Label
                    htmlFor="three-stars"
                    className="ml-2 flex items-center"
                  >
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="two-stars" name="rating" />
                  <Label htmlFor="two-stars" className="ml-2 flex items-center">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio id="one-stars" name="rating" />
                  <Label htmlFor="one-stars" className="ml-2 flex items-center">
                    <Rating>
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </Label>
                </div>
              </div>
            </div>
            <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
              <Button type="submit" className="w-full">
                Apply filters
              </Button>
              <Button color="gray" outline type="reset" className="w-full">
                Clear all
              </Button>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
