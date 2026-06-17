import { Button, Label, Modal, Radio } from "flowbite-react";
import { useState } from "react";

export function SurveyPopup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Preview survey popup</Button>
      <Modal
        onClose={() => setShow(false)}
        popup
        show={show}
        size="xl"
        theme={{
          content: {
            inner:
              "relative flex max-h-[90vh] flex-col rounded-lg bg-white shadow dark:bg-gray-800",
          },
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <h3 className="pr-4 font-semibold text-gray-900 dark:text-white">
            Before we get started, we’d like to ask a few questions to better
            understand your business needs.
          </h3>
          <fieldset className="my-6 flex max-w-md flex-col gap-4">
            <legend className="mb-4 text-gray-600 dark:text-gray-400">
              What type of project?
            </legend>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="new-project"
                name="type-of-project"
                value="New project"
              />
              <Label htmlFor="new-project">New project</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="existing-project"
                name="type-of-project"
                value="Existing project"
              />
              <Label htmlFor="existing-project">Existing project</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="assistance"
                name="type-of-project"
                value="Ongoing assistance or consultation"
              />
              <Label htmlFor="assistance">
                Ongoing assistance or consultation
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                defaultChecked
                id="other"
                name="type-of-project"
                value="None of the above"
              />
              <Label htmlFor="other">None of the above</Label>
            </div>
          </fieldset>
          <Button onClick={() => setShow(false)}>Get started</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
