"use client";

import {
  Button,
  Checkbox,
  Datepicker,
  Drawer,
  Label,
  Radio,
  RangeSlider,
  Rating,
  Select,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export function AdvancedFacetedSearchDrawerWithDatepicker() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Show drawer</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-96 overflow-visible"
      >
        <Drawer.Header title="FILTERS" titleIcon={() => <></>} />
        <Drawer.Items>
          <form>
            <div className="mt-4 flex flex-1 flex-col justify-between">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product-brand" className="mb-2 block">
                      Product Brand
                    </Label>
                    <Select id="product-brand" name="product-brand">
                      <option selected value="apple">
                        Apple
                      </option>
                      <option value="lg">LG</option>
                      <option value="samsung">Samsung</option>
                      <option value="logitech">Logitech</option>
                      <option value="lenovo">Lenovo</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="product-model" className="mb-2 block">
                      Product Model
                    </Label>
                    <Select id="product-model" name="product-model">
                      <option selected value="imac-27">
                        iMac 27"
                      </option>
                      <option value="imac-24">iMac 24"</option>
                      <option value="macbook-pro-16">Macbook Pro 16"</option>
                      <option value="macbook-pro-14">Macbook Pro 14"</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="manufacture-year"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Manufacture Year
                  </Label>
                  <div className="flex items-center gap-x-3">
                    <Datepicker />
                    <span className="dark:text-white">&nbsp;to&nbsp;</span>
                    <Datepicker />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Price Range
                  </h6>
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
                    <div className="col-span-2 flex items-center justify-between space-x-4">
                      <div className="w-full">
                        <Label
                          htmlFor="min-price-TextInput"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          From
                        </Label>
                        <TextInput
                          type="number"
                          id="min-price-TextInput"
                          value="300"
                          min="0"
                          max="7000"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="max-price-TextInput"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          To
                        </Label>
                        <TextInput
                          type="number"
                          id="max-price-TextInput"
                          value="3500"
                          min="0"
                          max="7000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                    Condition
                  </h6>
                  <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio
                          id="condition-all"
                          name="list-radio"
                          defaultChecked
                        />
                        <Label
                          htmlFor="condition-all"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          All
                        </Label>
                      </div>
                    </li>
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio id="condition-new" name="list-radio" />
                        <Label
                          htmlFor="condition-new"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          New
                        </Label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center pl-3">
                        <Radio id="condition-used" name="list-radio" />
                        <Label
                          htmlFor="condition-used"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Used
                        </Label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full">
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                      Colour
                    </h6>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox id="blue2" name="blue2" />
                        <Label
                          htmlFor="blue2"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600"></div>
                          Blue
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="gray2" name="gray2" />
                        <Label
                          htmlFor="gray2"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400"></div>
                          Gray
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox defaultChecked id="green2" name="green2" />
                        <Label
                          htmlFor="green2"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400"></div>
                          Green
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="pink2" name="pink2" />

                        <Label
                          htmlFor="pink2"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400"></div>
                          Pink
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox defaultChecked name="red2" id="red2" />
                        <Label
                          htmlFor="red2"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                          Red
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                      Rating
                    </h6>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Radio id="five-stars3" name="rating3" />
                        <Label
                          htmlFor="five-stars3"
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
                        <Radio id="four-stars3" name="rating3" />
                        <Label
                          htmlFor="four-stars3"
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
                        <Radio
                          defaultChecked
                          id="three-stars3"
                          name="rating3"
                        />
                        <Label
                          htmlFor="three-stars3"
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
                        <Radio id="two-stars3" name="rating3" />
                        <Label
                          htmlFor="two-stars3"
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
                        <Radio id="one-stars3" name="rating3" />
                        <Label
                          htmlFor="one-stars3"
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
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                    Delivery
                  </h6>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    <li>
                      <input
                        type="radio"
                        id="delivery-usa"
                        name="delivery"
                        value="delivery-usa"
                        className="peer hidden"
                        defaultChecked
                      />
                      <Label
                        htmlFor="delivery-usa"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                      >
                        <div className="block">
                          <div className="w-full text-base font-semibold">
                            USA
                          </div>
                          <div className="w-full text-sm">
                            Delivery only for USA
                          </div>
                        </div>
                      </Label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="delivery-europe"
                        name="delivery"
                        value="delivery-europe"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="delivery-europe"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                      >
                        <div className="block">
                          <div className="w-full text-base font-semibold">
                            Europe
                          </div>
                          <div className="w-full text-sm">
                            Delivery only for USA
                          </div>
                        </div>
                      </Label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="delivery-asia"
                        name="delivery"
                        value="delivery-asia"
                        className="peer hidden"
                        defaultChecked
                      />
                      <Label
                        htmlFor="delivery-asia"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                      >
                        <div className="block">
                          <div className="w-full text-base font-semibold">
                            Asia
                          </div>
                          <div className="w-full text-sm">
                            Delivery only for Asia
                          </div>
                        </div>
                      </Label>
                    </li>
                    <li>
                      <input
                        defaultChecked
                        type="radio"
                        id="delivery-australia"
                        name="delivery"
                        value="delivery-australia"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="delivery-australia"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                      >
                        <div className="block">
                          <div className="w-full text-base font-semibold">
                            Australia
                          </div>
                          <div className="w-full text-sm">
                            Delivery only for Australia
                          </div>
                        </div>
                      </Label>
                    </li>
                  </ul>
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
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
