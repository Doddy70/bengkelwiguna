import {
  Accordion,
  Checkbox,
  Dropdown,
  Label,
  Radio,
  Rating,
  Select,
  TextInput,
  ToggleSwitch,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function AdvancedDropdownFilterKeywords() {
  const [isNorthAmerica, setNorthAmerica] = useState(true);
  const [isSouthAmerica, setSouthAmerica] = useState(false);
  const [isAsia, setAsia] = useState(false);
  const [isAustralia, setAustralia] = useState(true);
  const [isEurope, setEurope] = useState(false);

  function check(id: string) {
    (document.querySelector(id) as HTMLInputElement).checked = true;
  }

  return (
    <Dropdown
      label="Filter by keywords"
      theme={{
        floating: {
          base: twMerge(theme.dropdown.floating.base, "w-80 rounded-lg"),
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
          <Label htmlFor="Checkbox-group-search" className="sr-only">
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
            theme={{
              field: {
                input: {
                  colors: {
                    gray: twMerge(
                      theme.textInput.field.input.colors.gray,
                      "focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                    ),
                  },
                },
              },
            }}
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
                  base: twMerge(theme.accordion.title.arrow.base, "h-5 w-5"),
                },
                base: "flex w-full items-center justify-between px-1.5 py-2 text-left text-sm text-gray-500 dark:text-gray-400",
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
                    <Checkbox defaultChecked id="logitech" name="logitech" />
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
                    <Checkbox defaultChecked id="asus" name="asus" />
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
                    <Checkbox defaultChecked id="canon" name="canon" />
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
                  base: twMerge(theme.accordion.title.arrow.base, "h-5 w-5"),
                },
                base: "flex w-full items-center justify-between px-1.5 py-2 text-left text-sm text-gray-500 dark:text-gray-400",
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
                  base: twMerge(theme.accordion.title.arrow.base, "h-5 w-5"),
                },
                base: "flex w-full items-center justify-between px-1.5 py-2 text-left text-sm text-gray-500 dark:text-gray-400",
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
                  onChange={() => setNorthAmerica(!isNorthAmerica)}
                  sizing="sm"
                />
                <ToggleSwitch
                  checked={isSouthAmerica}
                  label="South America"
                  onChange={() => setSouthAmerica(!isSouthAmerica)}
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
                  base: twMerge(theme.accordion.title.arrow.base, "h-5 w-5"),
                },
                base: "flex w-full items-center justify-between px-1.5 py-2 text-left text-sm text-gray-500 dark:text-gray-400",
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
                <Radio id="three-stars" name="stars" />
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
              <div className="flex items-center gap-2">
                <Radio id="zero-stars" name="stars" />
                <Rating onClick={() => check("#zero-stars")}>
                  <Rating.Star filled={false} />
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
  );
}
