import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  RangeSlider,
  Rating,
  Tabs,
  TextInput,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function FacetedSearchModalWithTabs() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Toggle modal
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="2xl"
        theme={{
          header: {
            popup: twMerge(
              theme.modal.header.base,
              "rounded-t-lg border-0 bg-white px-6 py-4 dark:bg-gray-800",
            ),
            title: "text-lg font-normal text-gray-500 dark:text-gray-400",
          },
          body: {
            base: twMerge(
              theme.modal.body.base,
              "rounded-b-lg bg-white dark:bg-gray-800",
            ),
          },
        }}
      >
        <Modal.Header>Filter with tabs</Modal.Header>
        <Modal.Body>
          <form action="#" method="get">
            <div className="mb-4">
              <Tabs
                variant="underline"
                theme={{
                  tablist: {
                    tabitem: {
                      base: twMerge(
                        theme.tabs.tablist.tabitem.base,
                        "p-2 first:pl-0 focus:ring-0",
                      ),
                      variant: {
                        underline: {
                          active: {
                            on: twMerge(
                              theme.tabs.tablist.tabitem.variant.underline
                                .active.on,
                              "border-transparent text-blue-600 dark:border-transparent dark:text-blue-500",
                            ),
                            off: twMerge(
                              theme.tabs.tablist.tabitem.variant.underline
                                .active.off,
                              "focus:ring-0 dark:hover:border-transparent",
                            ),
                          },
                        },
                      },
                    },
                  },
                }}
              >
                <Tabs.Item active title="Brand">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                        A
                      </h5>
                      <div className="flex items-center">
                        <Checkbox id="apple" name="apple" />
                        <Label
                          htmlFor="apple"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Apple (56)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="asus" name="asus" />
                        <Label
                          htmlFor="asus"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Asus (97)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="acer" name="acer" />
                        <Label
                          htmlFor="acer"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Acer (234)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="allview" name="allview" />
                        <Label
                          htmlFor="allview"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Allview (45)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="atari" name="atari" />
                        <Label
                          htmlFor="asus"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Atari (176)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="amd" name="amd" />
                        <Label
                          htmlFor="amd"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          AMD (49)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="aruba" name="aruba" />
                        <Label
                          htmlFor="aruba"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Aruba (16)
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                        B
                      </h5>
                      <div className="flex items-center">
                        <Checkbox id="beats" name="beats" />
                        <Label
                          htmlFor="beats"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Beats (56)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox defaultChecked id="bose" name="bose" />
                        <Label
                          htmlFor="bose"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Bose (97)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="benq" name="benq" />
                        <Label
                          htmlFor="benq"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          BenQ (45)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="bosch" name="bosch" />
                        <Label
                          htmlFor="bosch"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Bosch (176)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="brother"
                          type="checkbox"
                          value=""
                          checked
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="brother"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Brother (176)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="biostar" name="biostar" />
                        <Label
                          htmlFor="biostar"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Biostar (49)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="braun" name="braun" />
                        <Label
                          htmlFor="braun"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Braun (16)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="blaupunkt" name="blaupunkt" />
                        <Label
                          htmlFor="blaupunkt"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Blaupunkt (45)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="benq2" name="benq2" />
                        <Label
                          htmlFor="benq2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          BenQ (23)
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                        C
                      </h5>
                      <div className="flex items-center">
                        <Checkbox id="canon" name="canon" />
                        <Label
                          htmlFor="canon"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Canon (49)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox defaultChecked id="cisco" name="cisco" />
                        <Label
                          htmlFor="cisco"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Cisco (97)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="cowon" name="cowon" />
                        <Label
                          htmlFor="cowon"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Cowon (234)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="clevo" name="clevo" />
                        <Label
                          htmlFor="clevo"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Clevo (45)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="corsair" name="corsair" />
                        <Label
                          htmlFor="corsair"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Corsair (15)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="csl" name="csl" />
                        <Label
                          htmlFor="csl"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Canon (49)
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                        D
                      </h5>
                      <div className="flex items-center">
                        <Checkbox id="dell" name="dell" />
                        <Label
                          htmlFor="dell"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Dell (56)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="dogfish" name="dogfish" />
                        <Label
                          htmlFor="dogfish"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Dogfish (24)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="dyson" name="dyson" />
                        <Label
                          htmlFor="dyson"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Dyson (234)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="dobe" name="dobe" />
                        <Label
                          htmlFor="dobe"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Dobe (5)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="digitus" name="digitus" />
                        <Label
                          htmlFor="digitus"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Digitus (1)
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                        E
                      </h5>
                      <div className="flex items-center">
                        <Checkbox id="emetec" name="emetec" />
                        <Label
                          htmlFor="emetec"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Emetec (56)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="extreme" name="extreme" />
                        <Label
                          htmlFor="extreme"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Extreme (10)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="elgato" name="elgato" />
                        <Label
                          htmlFor="elgato"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Elgato (234)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="emerson" name="emerson" />
                        <Label
                          htmlFor="emerson"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Emerson (45)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="emi"
                          type="checkbox"
                          value=""
                          checked
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <Label
                          htmlFor="emi"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          EMI (176)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="fugoo" name="fugoo" />
                        <Label
                          htmlFor="fugoo"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Fugoo (49)
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                        F
                      </h5>
                      <div className="flex items-center">
                        <Checkbox id="fujitsu" name="fujitsu" />
                        <Label
                          htmlFor="fujitsu"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Fujitsu (97)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox defaultChecked id="fitbit" name="fitbit" />
                        <Label
                          htmlFor="fitbit"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Fitbit (56)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="foxconn" name="foxconn" />
                        <Label
                          htmlFor="foxconn"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Foxconn (234)
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="floston" name="floston" />
                        <Label
                          htmlFor="floston"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Floston (45)
                        </Label>
                      </div>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Advanced Filters">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label
                            htmlFor="min-price"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Min Price
                          </Label>
                          <RangeSlider
                            defaultValue="300"
                            id="min-price"
                            name="min-price"
                            max="7000"
                            min="0"
                            step="1"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="max-price"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Max Price
                          </Label>
                          <RangeSlider
                            defaultValue="3500"
                            id="max-price"
                            name="max-price"
                            max="7000"
                            min="0"
                            step="1"
                          />
                        </div>
                        <div className="col-span-2 flex items-center justify-between space-x-2">
                          <TextInput
                            defaultValue="300"
                            id="min-price-input"
                            name="min-price-input"
                            max="7000"
                            min="0"
                            required
                            type="number"
                            className="block w-full"
                          />
                          <div className="shrink-0 text-sm font-medium dark:text-gray-300">
                            to
                          </div>
                          <TextInput
                            defaultValue="3500"
                            id="max-price-input"
                            name="max-price-input"
                            max="7000"
                            min="0"
                            required
                            type="number"
                            className="block w-full"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label
                            htmlFor="min-delivery-time"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Min Delivery Time (Days)
                          </Label>
                          <RangeSlider
                            defaultValue="30"
                            id="min-delivery-time"
                            name="min-delivery-time"
                            max="50"
                            min="3"
                            step="1"
                          />
                        </div>
                        <TextInput
                          defaultValue="30"
                          id="min-delivery-time-input"
                          name="min-delivery-time-input"
                          max="50"
                          min="3"
                          required
                          type="number"
                        />
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
                              defaultChecked
                              id="condition-all"
                              name="list-radio"
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
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                      <div>
                        <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                          Colour
                        </h6>
                        <div className="space-y-2">
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
                            <Checkbox defaultChecked id="green" name="green" />
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
                            <Checkbox defaultChecked id="red" name="red" />
                            <Label
                              htmlFor="red"
                              className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500"></div>
                              Red
                            </Label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                          Rating
                        </h6>
                        <div className="space-y-2">
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
                            <Radio id="three-stars" name="rating" />
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
                            <Label
                              htmlFor="two-stars"
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
                            <Radio id="one-stars" name="rating" />
                            <Label
                              htmlFor="one-stars"
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
                      <div>
                        <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                          Weight
                        </h6>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Checkbox id="under-1-kg" name="under-1-kg" />
                            <Label
                              htmlFor="under-1-kg"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Under 1 kg
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox
                              defaultChecked
                              id="1-1-5-kg"
                              name="1-1-5-kg"
                            />
                            <Label
                              htmlFor="1-1-5-kg"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              1-1,5 kg
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox id="1-5-2-kg" name="1-5-2-kg" />
                            <Label
                              htmlFor="1-5-2-kg"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              1,5-2 kg
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox id="2-5-3-kg" name="2-5-3-kg" />
                            <Label
                              htmlFor="2-5-3-kg"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              2,5-3 kg
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <Checkbox id="over-3-kg" name="over-3-kg" />
                            <Label
                              htmlFor="over-3-kg"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Over 3 kg
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                        Delivery type
                      </h6>
                      <ul className="grid grid-cols-2 gap-4">
                        <li>
                          <Radio
                            defaultChecked
                            id="delivery-usa"
                            name="delivery"
                            value="delivery-usa"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="delivery-usa"
                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                USA
                              </div>
                              <div className="w-full">
                                Delivery only for USA
                              </div>
                            </div>
                          </Label>
                        </li>
                        <li>
                          <Radio
                            id="delivery-europe"
                            name="delivery"
                            value="delivery-europe"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="delivery-europe"
                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Europe
                              </div>
                              <div className="w-full">
                                Delivery only for USA
                              </div>
                            </div>
                          </Label>
                        </li>
                        <li>
                          <Radio
                            defaultChecked
                            id="delivery-asia"
                            name="delivery"
                            value="delivery-asia"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="delivery-asia"
                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Asia
                              </div>
                              <div className="w-full">
                                Delivery only for Asia
                              </div>
                            </div>
                          </Label>
                        </li>
                        <li>
                          <Radio
                            id="delivery-australia"
                            name="delivery"
                            value="delivery-australia"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="delivery-australia"
                            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                Australia
                              </div>
                              <div className="w-full">
                                Delivery only for Australia
                              </div>
                            </div>
                          </Label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs>
            </div>
            <div className="mt-5 flex items-center space-x-4 rounded-b dark:border-gray-600">
              <Button type="submit">Show 50 results</Button>
              <Button color="gray" type="reset">
                Reset
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
