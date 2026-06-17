import { Button, Modal, Select, ToggleSwitch, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function FacetedSearchModalWithToggleFilters() {
  const [showModal, setShowModal] = useState(false);
  const [isLastRate, setLastRate] = useState(false);
  const [isNumVehicles, setNumVehicles] = useState(true);
  const [isNumTrips, setNumTrips] = useState(false);
  const [isNumCars, setNumCars] = useState(false);

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
        <Modal.Header>Show carriers first by:</Modal.Header>
        <Modal.Body>
          <form action="#" method="get">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <ToggleSwitch
                  checked={isLastRate}
                  id="last-rate"
                  label="The last rate"
                  name="last-rate"
                  onChange={() => setLastRate(!isLastRate)}
                />
                <Select
                  id="last-rate-select"
                  name="last-rate-select"
                  className="[&_select]:py-1.5"
                >
                  <option>Min</option>
                  <option>Max</option>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <ToggleSwitch
                  checked={isNumVehicles}
                  id="vehicles"
                  label="Number of vehicles"
                  name="vehicles"
                  onChange={() => setNumVehicles(!isNumVehicles)}
                />
                <Select
                  id="vehicles-select"
                  name="vehicles-select"
                  className="[&_select]:py-1.5"
                >
                  <option>Min</option>
                  <option>Max</option>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <ToggleSwitch
                  checked={isNumTrips}
                  id="trips"
                  label="Number of trips with us"
                  name="trips"
                  onChange={() => setNumTrips(!isNumTrips)}
                />
                <Select
                  id="trips-select"
                  name="trips-select"
                  className="[&_select]:py-1.5"
                >
                  <option>Min</option>
                  <option selected>Max</option>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <ToggleSwitch
                  checked={isNumCars}
                  id="cars"
                  label="Number of cars"
                  name="cars"
                  onChange={() => setNumCars(!isNumCars)}
                />
                <Select
                  id="cars-select"
                  name="cars-select"
                  className="[&_select]:py-1.5"
                >
                  <option>Min</option>
                  <option>Max</option>
                </Select>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-b pt-6 dark:border-gray-600">
              <Button type="submit">Apply</Button>
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
