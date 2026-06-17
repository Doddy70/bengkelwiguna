import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
import { HiCalendar, HiCloudUpload, HiX } from "react-icons/hi";

export function CreateProductModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <Button onClick={() => setShowModal(true)}>Create product</Button>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal} size="3xl">
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-[18px] ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <HiX className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </Label>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
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
                <Label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
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
                <Label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
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
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-4 md:gap-6">
                <div>
                  <Label
                    htmlFor="weight"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Item weight (kg)
                  </Label>
                  <TextInput
                    id="weight"
                    name="weight"
                    placeholder="12"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="length"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Lenght (cm)
                  </Label>
                  <TextInput
                    id="length"
                    name="length"
                    placeholder="105"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="breadth"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Breadth (cm)
                  </Label>
                  <TextInput
                    id="breadth"
                    name="breadth"
                    placeholder="15"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="width"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Width (cm)
                  </Label>
                  <TextInput
                    id="width"
                    name="width"
                    placeholder="23"
                    required
                    type="number"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Write product description here"
                  required
                  rows={4}
                />
              </div>
            </div>
            <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
              <div className="mr-4 flex items-center">
                <Checkbox id="inline-checkbox" name="sellingType" />
                <Label
                  htmlFor="inline-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  In-store only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox id="inline-2-checkbox" name="sellingType" required />
                <Label
                  htmlFor="inline-2-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Online selling only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox
                  defaultChecked
                  id="inline-checked-checkbox"
                  name="sellingType"
                />
                <Label
                  htmlFor="inline-checked-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Both in-store and online
                </Label>
              </div>
            </div>
            <div className="mb-4">
              <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Product Images
              </span>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <HiCloudUpload className="mb-3 h-10 w-10 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </Label>
              </div>
            </div>
            <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-fit [&>span]:text-sm"
              >
                Add product
              </Button>
              <Button size="lg" className="w-full md:w-fit [&>span]:text-sm">
                <HiCalendar className="-ml-1 mr-1 h-5 w-5" />
                Schedule
              </Button>
              <Button
                color="gray"
                onClick={() => setShowModal(false)}
                size="lg"
                className="w-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-600 sm:w-auto [&>span]:text-sm hover:[&>span]:text-gray-900 dark:hover:[&>span]:bg-gray-600 dark:hover:[&>span]:text-white"
              >
                <HiX className="-ml-1 mr-1 h-5 w-5" />
                Discard
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
