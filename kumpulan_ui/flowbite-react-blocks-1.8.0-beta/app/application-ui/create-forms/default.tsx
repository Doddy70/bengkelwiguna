import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

export function DefaultCreateForm() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <Label htmlFor="name" className="mb-2 block dark:text-white">
                Product Name
              </Label>
              <TextInput
                id="name"
                name="name"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="brand" className="mb-2 block dark:text-white">
                Brand
              </Label>
              <TextInput
                id="brand"
                name="brand"
                placeholder="Product brand"
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="price" className="mb-2 block dark:text-white">
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
            <div>
              <Label htmlFor="category" className="mb-2 block dark:text-white">
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
            <div>
              <Label
                htmlFor="item-weight"
                className="mb-2 block dark:text-white"
              >
                Item Weight (kg)
              </Label>
              <TextInput
                id="item-weight"
                name="item-weight"
                placeholder="12"
                required
                type="number"
              />
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="description"
                className="mb-2 block dark:text-white"
              >
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Your description here"
                rows={8}
                className="text-sm"
              />
            </div>
          </div>
          <Button type="submit" className="mt-6 [&>span]:px-5 [&>span]:py-2.5">
            Add product
          </Button>
        </form>
      </div>
    </section>
  );
}
