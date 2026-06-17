"use client";

import {
  Accordion,
  Button,
  Checkbox,
  Drawer,
  Label,
  Radio,
  RangeSlider,
  Rating,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

export function FacetedSearchDrawerWithAccordion() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Show drawer</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs px-0"
      >
        <Drawer.Header
          title="APPLY FILTERS"
          titleIcon={() => <></>}
          className="px-4"
        />
        <Drawer.Items className="px-0">
          <form>
            <Accordion flush className="mt-3">
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Category
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="flex items-center">
                    <Checkbox id="tv2" name="tv2" />
                    <Label htmlFor="tv2" className="ml-2">
                      TV, Audio-Video
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked id="desktop2" name="desktop2" />
                    <Label htmlFor="dektop2" className="ml-2">
                      Desktop PC
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="gaming2" name="gaming2" />
                    <Label htmlFor="gaming2" className="ml-2">
                      Gaming
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="monitors2" name="monitors2" />
                    <Label htmlFor="monitors2" className="ml-2">
                      Monitors
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="laptops2" name="laptops2" />
                    <Label htmlFor="laptops2" className="ml-2">
                      Laptops
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox defaultChecked id="console2" name="console2" />
                    <Label htmlFor="console2" className="ml-2">
                      Console
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="tablets2" name="tablets2" />
                    <Label htmlFor="tablets2" className="ml-2">
                      Tablets
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="foto2" name="foto2" />
                    <Label htmlFor="foto2" className="ml-2">
                      Foto
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="fashion2" name="fashion2" />
                    <Label htmlFor="fashion2" className="ml-2">
                      Fashion
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="books2" name="books2" />
                    <Label htmlFor="books2" className="ml-2">
                      Books
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    View all
                  </a>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Brand
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Checkbox id="apple" name="apple" />
                      <Label
                        htmlFor="apple"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Apple (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="fitbit" name="fitbit" />
                      <Label
                        htmlFor="fitbit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Fitbit (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="dell" name="dell" />
                      <Label
                        htmlFor="dell"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Dell (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="asus" name="asus" />
                      <Label
                        htmlFor="asus"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Asus (97)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="logitech" name="logitech" />
                      <Label
                        htmlFor="logitech"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Logitech (97)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="msi" name="msi" />
                      <Label
                        htmlFor="msi"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        MSI (97)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="bosch" name="bosch" />
                      <Label
                        htmlFor="bosch"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Bosch (176)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="sony" name="sony" />
                      <Label
                        htmlFor="sony"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Sony (234)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="samsung" name="samsung" />
                      <Label
                        htmlFor="samsung"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Samsung (76)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="canon" name="canon" />
                      <Label
                        htmlFor="canon"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Canon (49)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="microsoft" name="microsoft" />
                      <Label
                        htmlFor="microsoft"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Microsoft (45)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="razer" name="razer" />
                      <Label
                        htmlFor="razer"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Razer (49)
                      </Label>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    View all
                  </a>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Color
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="flex items-center">
                    <Checkbox id="blue" name="blue" />
                    <Label
                      htmlFor="blue"
                      className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                      Blue
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="gray" name="gray" />
                    <Label
                      htmlFor="gray"
                      className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                      Gray
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="green" name="green" />
                    <Label
                      htmlFor="green"
                      className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                      Green
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="pink" name="pink" />
                    <Label
                      htmlFor="pink"
                      className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                      Pink
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="red" name="red" defaultChecked />
                    <Label
                      htmlFor="red"
                      className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                      Red
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    View all
                  </a>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Price
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="grid grid-cols-2 gap-3">
                    <RangeSlider
                      defaultValue={300}
                      id="min-price"
                      max={7000}
                      min={0}
                      name="min-price"
                      className="[&_input]:dark:bg-gray-600"
                    />
                    <RangeSlider
                      defaultValue={3500}
                      id="max-price"
                      max={7000}
                      min={0}
                      name="max-price"
                      className="[&_input]:dark:bg-gray-600"
                    />
                    <div className="flex items-center justify-between space-x-2 md:col-span-2">
                      <div className="w-full">
                        <Label
                          htmlFor="min-price-input"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          From
                        </Label>
                        <TextInput
                          defaultValue="300"
                          id="min-price-input"
                          name="min-price-input"
                          max="7000"
                          min="0"
                          type="number"
                          className="[&_input]:py-2 [&_input]:sm:text-xs"
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="max-price-input"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          To
                        </Label>
                        <TextInput
                          defaultValue="3500"
                          id="max-price-input"
                          name="max-price-input"
                          max="7000"
                          min="0"
                          type="number"
                          className="[&_input]:py-2 [&_input]:sm:text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Rating
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="flex items-center">
                    <Radio id="five-stars2" name="rating2" />
                    <Label
                      htmlFor="five-stars2"
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
                    <Radio id="four-stars2" name="rating2" />
                    <Label
                      htmlFor="four-stars2"
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
                    <Radio defaultChecked id="three-stars2" name="rating2" />
                    <Label
                      htmlFor="three-stars2"
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
                    <Radio id="two-stars2" name="rating2" />
                    <Label
                      htmlFor="two-stars2"
                      className="ml-2 flex items-center"
                    >
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
                    <Radio id="one-stars2" name="rating2" />
                    <Label
                      htmlFor="one-stars2"
                      className="ml-2 flex items-center"
                    >
                      <Rating>
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                      </Rating>
                    </Label>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Discount
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <div className="flex items-center">
                    <Radio defaultChecked id="discount-yes" name="discount" />
                    <Label htmlFor="discount-yes" className="ml-2">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="discount-no" name="discount" />
                    <Label htmlFor="discount-no" className="ml-2">
                      No
                    </Label>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="bg-transparent px-4 py-3 text-sm dark:bg-transparent">
                  Delivery Location
                </Accordion.Title>
                <Accordion.Content className="space-y-2 px-4 dark:bg-gray-800">
                  <TextInput
                    icon={HiSearch}
                    id="search"
                    name="search"
                    placeholder="Search for city"
                    type="search"
                  />
                  <div className="flex items-center">
                    <Radio defaultChecked id="dc" name="city" />
                    <Label htmlFor="dc" className="ml-2">
                      Washington, D.C.
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="ny" name="city" />
                    <Label htmlFor="ny" className="ml-2">
                      New York City
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="sf" name="city" />
                    <Label htmlFor="sf" className="ml-2">
                      San Francisco
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="chi" name="city" />
                    <Label htmlFor="chi" className="ml-2">
                      Chicago
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="la" name="city" />
                    <Label htmlFor="la" className="ml-2">
                      Los Angeles
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="bt" name="city" />
                    <Label htmlFor="bt" className="ml-2">
                      Boston
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="dal" name="city" />
                    <Label htmlFor="dal" className="ml-2">
                      Dallas
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="mia" name="city" />
                    <Label htmlFor="mia" className="ml-2">
                      Miami
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="aus" name="city" />
                    <Label htmlFor="aus" className="ml-2">
                      Austin
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Radio id="lv" name="city" />
                    <Label htmlFor="lv" className="ml-2">
                      Las Vegas
                    </Label>
                  </div>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    View all
                  </a>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 px-4 pb-4 md:absolute">
              <Button type="submit" className="w-full">
                Apply filters
              </Button>
              <Button color="gray" outline type="reset" className="w-full">
                Clear all
              </Button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
