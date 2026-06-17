import { Button, Checkbox, Label, Modal, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function DefaultFacetedSearchModal() {
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
        size="lg"
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
        <Modal.Header>Filter by category</Modal.Header>
        <Modal.Body>
          <form action="#" method="get">
            <div className="relative bg-white dark:bg-gray-800">
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
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
                  <Checkbox id="fitbit" name="fitbit" />
                  <Label
                    htmlFor="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Fitbit (56)
                  </Label>
                </div>
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
                  <Checkbox defaultChecked id="asus" name="asus" />
                  <Label
                    htmlFor="asus"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Asus (97)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="logitech" name="logitech" />
                  <Label
                    htmlFor="logitech"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Logitech (97)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="msi" name="msi" />
                  <Label
                    htmlFor="msi"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    MSI (97)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="bosch" name="bosch" />
                  <Label
                    htmlFor="bosch"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bosch (176)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="sony" name="sony" />
                  <Label
                    htmlFor="sony"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sony (234)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox defaultChecked id="samsung" name="samsung" />
                  <Label
                    htmlFor="samsung"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Samsung (76)
                  </Label>
                </div>
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
                  <Checkbox id="microsoft" name="microsoft" />
                  <Label
                    htmlFor="microsoft"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Microsoft (45)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="razer" name="razer" />
                  <Label
                    htmlFor="razer"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Razer (49)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="emetec" name="emetec" />
                  <Label
                    htmlFor="emetec"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Emetec (16)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="nvidia" name="nvidia" />
                  <Label
                    htmlFor="nvidia"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nvidia (45)
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="hp" name="hp" />
                  <Label
                    htmlFor="hp"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    HP (234)
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
                  <Checkbox id="rockstar" name="rockstar" />
                  <Label
                    htmlFor="rockstar"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Rockstar (49)
                  </Label>
                </div>
              </div>
              <div className="mt-5 flex items-center space-x-4">
                <Button type="submit">Apply</Button>
                <Button type="reset" color="gray">
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
