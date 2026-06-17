import {
  Button,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
import { HiPlus, HiX } from "react-icons/hi";

export function DefaultCreateModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <Button onClick={() => setShowModal(true)}>Create product</Button>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
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
                  type="number"
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </Label>
                <Select id="category">
                  <option selected>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
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
                  name="description"
                  placeholder="Write product description here"
                  rows={4}
                />
              </div>
            </div>
            <Button size="lg" className="[&>span]:text-sm">
              <HiPlus className="-ml-1 mr-2 h-4 w-4" />
              Add new product
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
