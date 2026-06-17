import { Button, Label, TextInput, Textarea } from "flowbite-react";

export function CreateUserForm() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new user
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Label
                htmlFor="first-name"
                className="mb-2 block dark:text-white"
              >
                First Name
              </Label>
              <TextInput
                id="first-name"
                name="first-name"
                placeholder="First name"
                required
              />
            </div>
            <div className="w-full">
              <Label htmlFor="last-name" className="mb-2 block dark:text-white">
                Last Name
              </Label>
              <TextInput
                id="last-name"
                name="last-name"
                placeholder="Last name"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">
                Password
              </Label>
              <TextInput
                id="password"
                name="password"
                placeholder="•••••••••"
                required
                type="password"
              />
            </div>
            <div>
              <Label
                htmlFor="confirm-password"
                className="mb-2 block dark:text-white"
              >
                Confirm password
              </Label>
              <TextInput
                id="confirm-password"
                name="confirm-password"
                placeholder="•••••••••"
                required
                type="password"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="biography" className="mb-2 block dark:text-white">
                Biography
              </Label>
              <Textarea
                id="biography"
                placeholder="Your description here"
                rows={8}
                className="text-sm"
              />
            </div>
          </div>
          <Button type="submit" className="mt-6 [&>span]:px-5 [&>span]:py-2.5">
            Add user
          </Button>
        </form>
      </div>
    </section>
  );
}
