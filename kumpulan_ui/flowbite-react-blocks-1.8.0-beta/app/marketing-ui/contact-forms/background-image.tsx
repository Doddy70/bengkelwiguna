import { Button, Label, TextInput, Textarea } from "flowbite-react";

export function ContactSectionWithBackgroundImage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className="mx-auto max-w-screen-sm px-4 pb-72 pt-8 text-center lg:px-6 lg:pb-80 lg:pt-24 ">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Contact Us
          </h2>
          <p className="mb-16 text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
      </div>
      <div className="mx-auto -mt-96 max-w-screen-xl px-4 py-16 sm:py-24 lg:px-6 ">
        <form
          action="#"
          className="mx-auto mb-16 grid max-w-screen-md grid-cols-1 gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-2 lg:mb-28"
        >
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="first-name" className="dark:text-white">
              First Name
            </Label>
            <TextInput
              id="first-name"
              placeholder="Bonnie"
              required
              className="[&_input]:p-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="last-name" className="dark:text-white">
              Last Name
            </Label>
            <TextInput
              id="last-name"
              placeholder="Green"
              required
              className="[&_input]:p-3"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="email" className="dark:text-white">
              Your Email
            </Label>
            <TextInput
              id="email"
              placeholder="name@flowbite.com"
              required
              type="email"
              className="[&_input]:p-3"
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
              className="[&_input]:p-3"
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
          <div>
            <Button
              type="submit"
              className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-3"
            >
              Send message
            </Button>
          </div>
        </form>
        <div className="space-y-8 text-center md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <div>
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg
                className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Email us:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="mailto:abc@example.com"
              className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
            >
              hello@flowbite.com
            </a>
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
            <p className="mb-2 text-xl font-bold dark:text-white">Call us:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <span className="font-semibold text-primary-600 dark:text-primary-500">
              +1 (646) 786-5060
            </span>
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
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Support</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <div className="flex items-center justify-center">
              <Button
                outline
                className="[&>span]:border-primary-500 [&>span]:text-primary-600 dark:[&>span]:text-primary-500"
              >
                Support center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
