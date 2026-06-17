import {
  Accordion,
  Badge,
  Button,
  Checkbox,
  Datepicker,
  Drawer,
  Dropdown,
  Label,
  Modal,
  Pagination,
  Radio,
  Rating,
  Select,
  Table,
  TextInput,
  Textarea,
  ToggleSwitch,
  Tooltip,
  theme,
} from "flowbite-react";
import { useState } from "react";
import {
  HiCog,
  HiInformationCircle,
  HiOutlineExclamationCircle,
  HiSearch,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function CRUDLayoutForProductManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isNorthAmerica, setNorthAmerica] = useState(true);
  const [isSouthAmerica, setSouthAmerica] = useState(false);
  const [isAsia, setAsia] = useState(false);
  const [isAustralia, setAustralia] = useState(true);
  const [isEurope, setEurope] = useState(false);
  const [isEditDrawerOpen, setEditDrawerOpen] = useState(false);
  const [isPreviewDrawerOpen, setPreviewDrawerOpen] = useState(false);

  function check(id: string) {
    (document.querySelector(id) as HTMLInputElement).checked = true;
  }

  return (
    <>
      <section className="bg-gray-50 py-3 dark:bg-gray-900 sm:py-3">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col space-y-3 px-4 pt-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
              <h5 className="flex gap-x-2">
                <span>
                  <span className="text-gray-500">All Products:&nbsp;</span>
                  <span className="dark:text-white">123456</span>
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  1-100 (436)
                </span>
                <Tooltip content="Showing 1-100 of 436 results">
                  <HiInformationCircle className="mb-1 h-4 w-4 text-gray-400 hover:text-white" />
                </Tooltip>
              </h5>
              <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                <Button color="gray" className="[&>span]:text-xs">
                  <HiCog className="mr-2 h-4 w-4" />
                  Table settings
                </Button>
              </div>
            </div>
            <div className="mx-4 my-3 border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-between">
                <TextInput
                  icon={() => (
                    <HiSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  )}
                  id="default-search"
                  name="default-search"
                  placeholder="Search for products"
                  required
                  type="search"
                  className="flex-1 md:mr-32 [&_input]:py-2"
                />
                <div className="flex flex-col gap-y-2 md:flex-row md:space-x-3">
                  <Button className="whitespace-nowrap">
                    <svg
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      />
                    </svg>
                    Add product
                  </Button>
                  <Dropdown
                    color="gray"
                    label={
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                          className="mr-2 h-4 w-4 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="whitespace-nowrap">
                          Filter options
                        </span>
                      </>
                    }
                    theme={{
                      floating: {
                        base: twMerge(
                          theme.dropdown.floating.base,
                          "w-80 rounded-lg",
                        ),
                        target: "w-full",
                      },
                    }}
                  >
                    <div className="px-3">
                      <div className="flex items-center justify-between pt-2">
                        <p className="text-sm font-medium text-black dark:text-white">
                          Filters
                        </p>
                        <div className="flex items-center space-x-3">
                          <button
                            type="submit"
                            className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Save view
                          </button>
                          <button
                            type="reset"
                            className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Clear all
                          </button>
                        </div>
                      </div>
                      <div className="pb-2 pt-3">
                        <Label
                          htmlFor="Checkbox-group-search"
                          className="sr-only"
                        >
                          Search
                        </Label>
                        <TextInput
                          icon={() => (
                            <svg
                              className="h-4 w-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          id="Checkbox-group-search"
                          name="Checkbox-group-search"
                          placeholder="Search keywords..."
                          className="[&_input]:py-2"
                        />
                      </div>
                      <Accordion flush className="dark:divide-gray-600">
                        <Accordion.Panel>
                          <Accordion.Title
                            theme={{
                              arrow: {
                                base: twMerge(
                                  theme.accordion.title.arrow.base,
                                  "h-5 w-5",
                                ),
                              },
                              base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                              open: {
                                off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                                on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                              },
                            }}
                          >
                            Category
                          </Accordion.Title>
                          <Accordion.Content className="p-1 dark:bg-transparent">
                            <div className="py-2 font-light">
                              <ul className="space-y-2">
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
                                  <Checkbox id="microsoft" name="microsoft" />
                                  <Label
                                    htmlFor="microsoft"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                  >
                                    Microsoft (45)
                                  </Label>
                                </li>
                                <li className="flex items-center">
                                  <Checkbox
                                    defaultChecked
                                    id="logitech"
                                    name="logitech"
                                  />
                                  <Label
                                    htmlFor="logitech"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                  >
                                    Logitech (97)
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
                                  <Checkbox
                                    defaultChecked
                                    id="asus"
                                    name="asus"
                                  />
                                  <Label
                                    htmlFor="asus"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                  >
                                    Asus (97)
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
                                  <Checkbox id="msi" name="msi" />
                                  <Label
                                    htmlFor="msi"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                  >
                                    MSI (97)
                                  </Label>
                                </li>
                                <li className="flex items-center">
                                  <Checkbox
                                    defaultChecked
                                    id="canon"
                                    name="canon"
                                  />
                                  <Label
                                    htmlFor="canon"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                  >
                                    Canon (49)
                                  </Label>
                                </li>
                                <li className="flex items-center">
                                  <Checkbox id="benq" name="benq" />
                                  <Label
                                    htmlFor="benq"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                  >
                                    BenQ (23)
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
                                <a
                                  href="#"
                                  className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                  View all
                                </a>
                              </ul>
                            </div>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                          <Accordion.Title
                            theme={{
                              arrow: {
                                base: twMerge(
                                  theme.accordion.title.arrow.base,
                                  "h-5 w-5",
                                ),
                              },
                              base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                              open: {
                                off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                                on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                              },
                            }}
                          >
                            Price
                          </Accordion.Title>
                          <Accordion.Content className="p-1 dark:bg-transparent">
                            <div className="grid w-full grid-cols-2 items-center gap-x-3 py-2 font-light">
                              <Select
                                id="price-from"
                                name="price-from"
                                className="[&_select]:py-2 [&_select]:sm:text-xs"
                              >
                                <option disabled selected>
                                  From
                                </option>
                                <option>$500</option>
                                <option>$2500</option>
                                <option>$5000</option>
                              </Select>
                              <Select
                                id="price-to"
                                name="price-to"
                                className="[&_select]:py-2 [&_select]:sm:text-xs"
                              >
                                <option disabled selected>
                                  To
                                </option>
                                <option>$500</option>
                                <option>$2500</option>
                                <option>$5000</option>
                              </Select>
                            </div>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                          <Accordion.Title
                            theme={{
                              arrow: {
                                base: twMerge(
                                  theme.accordion.title.arrow.base,
                                  "h-5 w-5",
                                ),
                              },
                              base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                              open: {
                                off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                                on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                              },
                            }}
                          >
                            Worldwide Shipping
                          </Accordion.Title>
                          <Accordion.Content className="p-1 dark:bg-transparent">
                            <div className="space-y-2 py-2">
                              <ToggleSwitch
                                checked={isNorthAmerica}
                                label="North America"
                                onChange={() =>
                                  setNorthAmerica(!isNorthAmerica)
                                }
                                sizing="sm"
                              />
                              <ToggleSwitch
                                checked={isSouthAmerica}
                                label="South America"
                                onChange={() =>
                                  setSouthAmerica(!isSouthAmerica)
                                }
                                sizing="sm"
                              />
                              <ToggleSwitch
                                checked={isAsia}
                                label="Asia"
                                onChange={() => setAsia(!isAsia)}
                                sizing="sm"
                              />
                              <ToggleSwitch
                                checked={isAustralia}
                                label="Australia"
                                onChange={() => setAustralia(!isAustralia)}
                                sizing="sm"
                              />
                              <ToggleSwitch
                                checked={isEurope}
                                label="Europe"
                                onChange={() => setEurope(!isEurope)}
                                sizing="sm"
                              />
                            </div>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                          <Accordion.Title
                            theme={{
                              arrow: {
                                base: twMerge(
                                  theme.accordion.title.arrow.base,
                                  "h-5 w-5",
                                ),
                              },
                              base: "flex w-full items-center justify-between p-1 text-left text-sm text-gray-500 dark:text-gray-400",
                              open: {
                                off: "hover:bg-gray-100 dark:hover:bg-gray-600",
                                on: "font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                              },
                            }}
                          >
                            Rating
                          </Accordion.Title>
                          <Accordion.Content className="space-y-2 px-1 py-3 dark:bg-transparent">
                            <div className="flex items-center gap-2">
                              <Radio id="five-stars" name="stars" />
                              <Rating onClick={() => check("#five-stars")}>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                              </Rating>
                            </div>
                            <div className="flex items-center gap-2">
                              <Radio id="four-stars" name="stars" />
                              <Rating onClick={() => check("#four-stars")}>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                              </Rating>
                            </div>
                            <div className="flex items-center gap-2">
                              <Radio
                                defaultChecked
                                id="three-stars"
                                name="stars"
                              />
                              <Rating onClick={() => check("#three-stars")}>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                                <Rating.Star filled={false} />
                              </Rating>
                            </div>
                            <div className="flex items-center gap-2">
                              <Radio id="two-stars" name="stars" />
                              <Rating onClick={() => check("#two-stars")}>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                                <Rating.Star filled={false} />
                                <Rating.Star filled={false} />
                              </Rating>
                            </div>
                            <div className="flex items-center gap-2">
                              <Radio id="one-stars" name="stars" />
                              <Rating onClick={() => check("#one-stars")}>
                                <Rating.Star />
                                <Rating.Star filled={false} />
                                <Rating.Star filled={false} />
                                <Rating.Star filled={false} />
                                <Rating.Star filled={false} />
                              </Rating>
                            </div>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    </div>
                  </Dropdown>
                  <Dropdown
                    color="gray"
                    label="Actions"
                    theme={{
                      floating: {
                        base: twMerge(theme.dropdown.floating.base, "w-48"),
                        target: "w-full",
                      },
                    }}
                  >
                    <Dropdown.Item>Mass Edit</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Delete All</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table className="whitespace-nowrap">
                <Table.Head>
                  <Table.HeadCell
                    scope="col"
                    className="p-4 group-first/head:first:rounded-tl-none"
                  >
                    <div className="flex items-center">
                      <Checkbox id="checkbox-all" name="checkbox-all" />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Select all
                      </Label>
                    </div>
                  </Table.HeadCell>
                  <Table.HeadCell
                    scope="col"
                    className="px-4 py-3.5 text-gray-500 dark:text-gray-400"
                  >
                    Product
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Category
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Stock
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Sales/Day
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Sales/Month
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Rating
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Sales
                  </Table.HeadCell>
                  <Table.HeadCell scope="col" className="px-4 py-3.5">
                    Revenue
                  </Table.HeadCell>
                  <Table.HeadCell
                    scope="col"
                    className="p-4 group-first/head:last:rounded-tr-none"
                  >
                    Last Update
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 p-4">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      Apple iMac 27&#34;
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Desktop PC</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                        95
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      1.47
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      0.47
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          5.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        1.6M
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$3.2M</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 px-4 py-3.5">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      Apple iMac 20&quot;
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Desktop PC</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                        108
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      1.15
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      0.32
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          5.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        6M
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$785K</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 px-4 py-3.5">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      Apple iPhone 14
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Phone</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-green-400"></div>
                        24
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      1.00
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      0.99
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          4.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        1.2M
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$3.2M</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 px-4 py-3.5">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      Apple iPad Air
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Tablet</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-700"></div>
                        287
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      0.47
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      1.00
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          4.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        298K
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$425K</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 px-4 py-3.5">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      Xbox Series S
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Gaming/Console</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-yellow-300"></div>
                        450
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      1.61
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      0.30
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          5.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        99
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$345K</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 px-4 py-3.5">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      PlayStation 5
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Gaming/Console</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-green-400"></div>
                        2435
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      1.41
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      0.11
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          4.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        2.1M
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$4.2M</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                    <Table.Cell className="w-4 px-4 py-3.5">
                      <div className="flex items-center">
                        <Checkbox
                          id="checkbox-table-search-1"
                          name="checkbox-table-search-1"
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          Select this product
                        </Label>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      scope="row"
                      className="flex items-center whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white"
                    >
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png"
                        alt=""
                        className="mr-3 h-8 w-auto"
                      />
                      Xbox Series X
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">
                      <Badge className="w-fit">Gaming/Console</Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <div className="mr-2 inline-block h-4 w-4 rounded-full bg-orange-400"></div>
                        235
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      7.09
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      3.32
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          5.0
                        </p>
                      </Rating>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-2 h-5 w-5 text-gray-400"
                          aria-hidden
                        >
                          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                        </svg>
                        989K
                      </div>
                    </Table.Cell>
                    <Table.Cell className="px-4 py-3.5">$2.27M</Table.Cell>
                    <Table.Cell className="whitespace-nowrap px-4 py-3.5 font-medium text-gray-900 dark:text-white">
                      <div className="flex items-center space-x-4">
                        <Button onClick={() => setEditDrawerOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-0.5 mr-2 h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setPreviewDrawerOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-ml-0.5 mr-2 h-4 w-4"
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            />
                          </svg>
                          Preview
                        </Button>
                        <DeleteModal />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <nav
              className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing&nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                &nbsp;of&nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <Pagination
                currentPage={currentPage}
                nextLabel=""
                onPageChange={(page) => setCurrentPage(page)}
                previousLabel=""
                showIcons
                totalPages={100}
                theme={{
                  pages: {
                    base: twMerge(theme.pagination.pages.base, "mt-0"),
                    next: {
                      base: twMerge(
                        theme.pagination.pages.next.base,
                        "w-10 px-1.5 py-1.5",
                      ),
                      icon: "h-6 w-6",
                    },
                    previous: {
                      base: twMerge(
                        theme.pagination.pages.previous.base,
                        "w-10 px-1.5 py-1.5",
                      ),
                      icon: "h-6 w-6",
                    },
                    selector: {
                      base: twMerge(
                        theme.pagination.pages.selector.base,
                        "w-9 py-2 text-sm focus:border-blue-300",
                      ),
                    },
                  },
                }}
              />
            </nav>
          </div>
        </div>
      </section>
      <Drawer
        open={isEditDrawerOpen}
        onClose={() => setEditDrawerOpen(false)}
        className="w-full max-w-3xl"
      >
        <Drawer.Header title="UPDATE PRODUCT" titleIcon={() => <></>} />
        <Drawer.Items>
          <form action="#" className="mt-5">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="space-y-4 sm:col-span-2 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Product Name
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
                  <Label htmlFor="description" className="mb-2 block">
                    Description
                  </Label>
                  <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
                    <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                      <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                        <div className="flex items-center space-x-1 sm:pr-4">
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Attach file</span>
                          </button>
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Embed map</span>
                          </button>
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Upload image</span>
                          </button>
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Format code</span>
                          </button>
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Add emoji</span>
                          </button>
                        </div>
                        <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                          <button
                            type="button"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Add list</span>
                          </button>
                          <button
                            type="button"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <svg
                              aria-hidden
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Settings</span>
                          </button>
                        </div>
                      </div>
                      <Tooltip content="Show full screen">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Full screen</span>
                        </button>
                      </Tooltip>
                    </div>
                    <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                      <Textarea
                        defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                        id="description"
                        name="description"
                        placeholder="Write product description here"
                        required
                        rows={8}
                        className="border-0 px-0 text-sm focus:ring-0"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="dropzone-file" className="mb-2 block">
                    Product Images
                  </Label>
                  <div className="flex w-full items-center justify-center">
                    <div className="mb-4 grid w-full grid-cols-3 gap-4">
                      <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="imac"
                        />
                        <button
                          type="button"
                          className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5"
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
                          <span className="sr-only">Remove image</span>
                        </button>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="imac"
                        />
                        <button
                          type="button"
                          className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5"
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
                          <span className="sr-only">Remove image</span>
                        </button>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="imac"
                        />
                        <button
                          type="button"
                          className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5"
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
                          <span className="sr-only">Remove image</span>
                        </button>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="imac"
                        />
                        <button
                          type="button"
                          className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5"
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
                          <span className="sr-only">Remove image</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        aria-hidden
                        className="mb-3 h-10 w-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp;or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      name="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </Label>
                </div>
                <div className="mb-4 flex items-center">
                  <Checkbox id="product-options" name="product-options" />
                  <Label
                    htmlFor="product-options"
                    className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                  >
                    Product has multiple options, like different colors or sizes
                  </Label>
                </div>
                <Datepicker />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="product-brand" className="mb-2 block">
                    Brand
                  </Label>
                  <TextInput
                    defaultValue="Apple"
                    id="product-brand"
                    name="product-brand"
                    placeholder="Product Brand"
                    required
                    type="text"
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
                  <Label htmlFor="item-weight" className="mb-2 block">
                    Item Weight (kg)
                  </Label>
                  <TextInput
                    defaultValue={12}
                    id="item-weight"
                    name="item-weight"
                    placeholder="12"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="length" className="mb-2 block">
                    Length (cm)
                  </Label>
                  <TextInput
                    defaultValue={105}
                    id="length"
                    name="length"
                    placeholder="105"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="breadth" className="mb-2 block">
                    Breadth (cm)
                  </Label>
                  <TextInput
                    defaultValue={15}
                    id="breadth"
                    name="breadth"
                    placeholder="15"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="width" className="mb-2 block">
                    Width (cm)
                  </Label>
                  <TextInput
                    defaultValue={23}
                    id="width"
                    name="width"
                    placeholder="23"
                    required
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:w-1/2">
              <Button type="submit">Update product</Button>
              <Button
                color="alt"
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
          </form>
        </Drawer.Items>
      </Drawer>
      <Drawer
        open={isPreviewDrawerOpen}
        onClose={() => setPreviewDrawerOpen(false)}
        theme={{
          header: {
            inner: {
              titleText: twMerge(
                theme.drawer.header.inner.titleText,
                "mb-0 text-xl font-semibold text-gray-900 dark:text-white",
              ),
            },
          },
        }}
        className="w-full max-w-lg"
      >
        <Drawer.Header title='Apple iMac 25"' titleIcon={() => <></>} />
        <Drawer.Items>
          <h5 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            $2999
          </h5>
          <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-5">
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                alt="iMac Side"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                alt="iMac Front"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                alt="iMac Back"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                alt="iMac Back"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                alt="iMac Front"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                alt="iMac Side"
              />
            </div>
          </div>
          <dl className="sm:mb-5">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </dd>
          </dl>
          <dl className="mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700 sm:col-span-1">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Shipping
              </dt>
              <dd className="flex items-center text-gray-500 dark:text-gray-400">
                <svg
                  className="mr-1.5 h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                United States, Europe
              </dd>
            </div>
            <div className="col-span-2 rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700 sm:col-span-1">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Colors
              </dt>
              <dd className="flex items-center space-x-2 font-light text-gray-500 dark:text-gray-400">
                <div className="h-6 w-6 shrink-0 rounded-full bg-purple-600"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-indigo-400"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-primary-600"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-pink-400"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-teal-300"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-green-300"></div>
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Product State
              </dt>
              <dd>
                <Badge color="blue" className="w-fit">
                  <svg
                    aria-hidden
                    className="mr-1 h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  New
                </Badge>
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Sold by
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Ships from
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Brand
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Apple</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Dimensions (cm)
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                105 x 15 x 23
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Item weight
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
            </div>
          </dl>
          <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4 [&_span]:px-5 [&_span]:py-2.5">
            <Button className="inline-flex w-full">
              <svg
                aria-hidden
                className="-ml-1 mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              Edit
            </Button>
            <Button color="failure" className="inline-flex w-full">
              <svg
                aria-hidden
                className="-ml-1 mr-1.5 h-5 w-5"
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
        </Drawer.Items>
      </Drawer>
    </>
  );
}

function DeleteModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button color="failure" onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-0.5 mr-2 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Delete
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        size="lg"
        show={showModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <button
            onClick={() => setShowModal(false)}
            className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <HiOutlineExclamationCircle className="mx-auto mb-3.5 h-14 w-14 text-gray-400 dark:text-gray-500" />
          <p className="mb-6 text-lg text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this product?
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button
              color="failure"
              onClick={() => setShowModal(false)}
              type="submit"
            >
              Yes, I'm sure
            </Button>
            <Button
              color="gray"
              onClick={() => setShowModal(false)}
              outline
              className="hover:text-gray-900 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 [&>span]:text-gray-500 dark:[&>span]:bg-gray-700 dark:[&>span]:text-gray-300"
            >
              No, cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
