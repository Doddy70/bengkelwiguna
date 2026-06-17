import { Button, Label, TextInput, Textarea } from "flowbite-react";

export function ContactSectionWithAddressLocation() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm px-4 text-center lg:mb-16 lg:px-6">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 mb-8 lg:mb-0">
            <form
              action="#"
              className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
            >
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="first-name" className="dark:text-white">
                  First Name
                </Label>
                <TextInput id="first-name" placeholder="Bonnie" required />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="last-name" className="dark:text-white">
                  Last Name
                </Label>
                <TextInput id="last-name" placeholder="Green" required />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email" className="dark:text-white">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="phone-number" className="dark:text-white">
                  Phone Number
                </Label>
                <TextInput
                  id="phone-number"
                  placeholder="+12 345 6789"
                  required
                  type="number"
                />
              </div>
              <div className="grid grid-cols-1 gap-2 sm:col-span-2">
                <Label htmlFor="message" className="dark:text-white">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Leave a comment..."
                  rows={6}
                  className="text-sm"
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
              <Button
                type="submit"
                className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-3"
              >
                Send message
              </Button>
            </form>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                <svg
                  className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Company information:
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Themesberg LLC <br />
                Tax id: USXXXXXX
              </p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                <svg
                  className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Address:
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                SILVER LAKE, United States 1941 Late Avenue <br /> Zip
                Code/Postal code:03875
              </p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                <svg
                  className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Call us:
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Call us to speak to a member of our team. We are always happy to
                help.
              </p>
              <p className="font-semibold text-primary-600 dark:text-primary-500">
                +1 (646) 786-5060
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
