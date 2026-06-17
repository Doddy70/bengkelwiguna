import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

export function ContactFormWithLinks() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <div className="mb-4">
          <Label htmlFor="account_1" className="sr-only">
            Account recovery type
          </Label>
          <Select
            id="account_1"
            theme={{
              field: {
                select: {
                  base: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:!bg-transparent dark:text-white dark:focus:border-blue-500",
                  sizes: {
                    md: "px-0 py-2.5",
                  },
                  withAddon: {
                    off: "rounded-none",
                  },
                },
              },
            }}
            className="[&_select]:bg-transparent "
          >
            <option>Account Login &amp; Recovery</option>
            <option>Account Password</option>
            <option>Account Type</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="account_2" className="sr-only">
            Account recovery type
          </Label>
          <Select
            id="account_2"
            theme={{
              field: {
                select: {
                  base: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:!bg-transparent dark:text-white dark:focus:border-blue-500",
                  sizes: {
                    md: "px-0 py-2.5",
                  },
                  withAddon: {
                    off: "rounded-none",
                  },
                },
              },
            }}
            className="[&_select]:bg-transparent "
          >
            <option>Account Access</option>
            <option>Account Password</option>
            <option>Account Status</option>
          </Select>
        </div>
        <h3 className="mb-5 mt-8 text-xl font-extrabold text-gray-900 dark:text-white">
          Popular guides &amp; tutorials
        </h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              I Can't Log In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              I Think My Account Has Been Compromised
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              Recover Username or Reset Password
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              Troubleshoot the Signup Activation Email
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              Activate Account Notifications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              Manage Account Login and Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              Set Account Security Options
            </a>
          </li>
        </ul>
        <h3 className="mb-5 mt-8 text-xl font-extrabold text-gray-900 dark:text-white">
          Didn't find what you're looking for?
        </h3>
        <form
          action="#"
          className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
        >
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="first-name">First Name</Label>
            <TextInput
              id="first-name"
              placeholder="Bonnie"
              required
              className="[&_input]:p-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="last-name">Last Name</Label>
            <TextInput
              id="last-name"
              placeholder="Green"
              required
              className="[&_input]:p-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              placeholder="name@flowbite.com"
              required
              type="email"
              className="[&_input]:p-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <TextInput
              id="phone-number"
              placeholder="+12 345 6789"
              required
              type="number"
              className="[&_input]:p-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:col-span-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              placeholder="Leave a comment..."
              className="text-sm"
              rows={6}
            />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              By submitting this form you agree to our&nbsp;
              <a
                href="#"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                terms and conditions
              </a>
              &nbsp;and our&nbsp;
              <a
                href="#"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                privacy policy
              </a>
              &nbsp;which explains how we may collect, use and disclose your
              personal information including to third parties.
            </p>
          </div>
          <div>
            <Button
              type="submit"
              className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-3"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
