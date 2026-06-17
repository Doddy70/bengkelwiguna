import { Dropdown, Footer } from "flowbite-react";

export function NewsletterSignUpFooterSection() {
  return (
    <Footer className="rounded-none">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
        <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              New York
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Huntersville,
              <br /> 957 Hill Hills Suite 491, United States
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Office: +12(3) 456 7890 1234
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Support:&nbsp;
                <a
                  href="mailto:company@name.com"
                  className="ml-2 hover:underline"
                >
                  company@name.com
                </a>
              </li>
            </ul>
          </address>
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Rome
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Piazza di Spagna,
              <br /> 00187 Roma RM, Italy
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Office: +12(3) 456 7890 1234
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Support:&nbsp;
                <a
                  href="mailto:company@name.com"
                  className="ml-2 hover:underline"
                >
                  company@name.it
                </a>
              </li>
            </ul>
          </address>
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              London
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Fulham Rd,
              <br />
              London SW6 1HS, United Kingdom
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Office: +12(3) 456 7890 1234
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Support:&nbsp;
                <a
                  href="mailto:company@name.com"
                  className="ml-2 hover:underline"
                >
                  company@name.co.uk
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="mx-auto mt-6 max-w-screen-md items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700 sm:flex lg:mt-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Sign up to our newsletter
          </p>
          <form action="#" className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0">
            <div className="relative w-full">
              <label
                htmlFor="email-subscribe"
                className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                id="email-subscribe"
                className="block w-full rounded-l-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Your email"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-r-lg border border-primary-600 bg-primary-600 px-5 py-3 text-center text-sm text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        <Footer.Divider />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <Footer.Brand
            alt="Flowbite logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
            className="mb-4 sm:mb-4 lg:mb-0"
          />
          <Footer.Copyright
            by="Flowbite™. All Rights Reserved."
            href="https://flowbite.com"
            year={2023}
            className="mb-2 lg:mb-0"
          />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex cursor-pointer items-center justify-center rounded p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    y="0.466187"
                    width="20"
                    height="13.3137"
                    rx="2"
                    fill="white"
                  />
                  <mask
                    id="mask0_3422_20233"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="14"
                  >
                    <rect
                      x="0.75"
                      y="0.466187"
                      width="20"
                      height="13.3137"
                      rx="2"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_3422_20233)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.75 0.466187H0.75V1.35377H20.75V0.466187ZM20.75 2.24134H0.75V3.12892H20.75V2.24134ZM0.75 4.0165H20.75V4.90408H0.75V4.0165ZM20.75 5.79166H0.75V6.67924H20.75V5.79166ZM0.75 7.56682H20.75V8.4544H0.75V7.56682ZM20.75 9.34198H0.75V10.2296H20.75V9.34198ZM0.75 11.1171H20.75V12.0047H0.75V11.1171ZM20.75 12.8923H0.75V13.7799H20.75V12.8923Z"
                      fill="#D02F44"
                    />
                    <rect
                      x="0.75"
                      y="0.466187"
                      width="8.57143"
                      height="6.21305"
                      fill="#46467F"
                    />
                    <g filter="url(#filter0_d_3422_20233)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.65477 1.79755C2.65477 2.04265 2.44158 2.24134 2.17858 2.24134C1.91559 2.24134 1.70239 2.04265 1.70239 1.79755C1.70239 1.55245 1.91559 1.35376 2.17858 1.35376C2.44158 1.35376 2.65477 1.55245 2.65477 1.79755ZM4.55954 1.79755C4.55954 2.04265 4.34634 2.24134 4.08334 2.24134C3.82035 2.24134 3.60715 2.04265 3.60715 1.79755C3.60715 1.55245 3.82035 1.35376 4.08334 1.35376C4.34634 1.35376 4.55954 1.55245 4.55954 1.79755ZM5.98811 2.24134C6.2511 2.24134 6.4643 2.04265 6.4643 1.79755C6.4643 1.55245 6.2511 1.35376 5.98811 1.35376C5.72511 1.35376 5.51192 1.55245 5.51192 1.79755C5.51192 2.04265 5.72511 2.24134 5.98811 2.24134ZM8.36906 1.79755C8.36906 2.04265 8.15586 2.24134 7.89287 2.24134C7.62988 2.24134 7.41668 2.04265 7.41668 1.79755C7.41668 1.55245 7.62988 1.35376 7.89287 1.35376C8.15586 1.35376 8.36906 1.55245 8.36906 1.79755ZM3.13096 3.12892C3.39396 3.12892 3.60715 2.93023 3.60715 2.68513C3.60715 2.44003 3.39396 2.24134 3.13096 2.24134C2.86797 2.24134 2.65477 2.44003 2.65477 2.68513C2.65477 2.93023 2.86797 3.12892 3.13096 3.12892ZM5.51192 2.68513C5.51192 2.93023 5.29872 3.12892 5.03573 3.12892C4.77273 3.12892 4.55954 2.93023 4.55954 2.68513C4.55954 2.44003 4.77273 2.24134 5.03573 2.24134C5.29872 2.24134 5.51192 2.44003 5.51192 2.68513ZM6.94049 3.12892C7.20348 3.12892 7.41668 2.93023 7.41668 2.68513C7.41668 2.44003 7.20348 2.24134 6.94049 2.24134C6.6775 2.24134 6.4643 2.44003 6.4643 2.68513C6.4643 2.93023 6.6775 3.12892 6.94049 3.12892ZM8.36906 3.57271C8.36906 3.81781 8.15586 4.0165 7.89287 4.0165C7.62988 4.0165 7.41668 3.81781 7.41668 3.57271C7.41668 3.32761 7.62988 3.12892 7.89287 3.12892C8.15586 3.12892 8.36906 3.32761 8.36906 3.57271ZM5.98811 4.0165C6.2511 4.0165 6.4643 3.81781 6.4643 3.57271C6.4643 3.32761 6.2511 3.12892 5.98811 3.12892C5.72511 3.12892 5.51192 3.32761 5.51192 3.57271C5.51192 3.81781 5.72511 4.0165 5.98811 4.0165ZM4.55954 3.57271C4.55954 3.81781 4.34634 4.0165 4.08334 4.0165C3.82035 4.0165 3.60715 3.81781 3.60715 3.57271C3.60715 3.32761 3.82035 3.12892 4.08334 3.12892C4.34634 3.12892 4.55954 3.32761 4.55954 3.57271ZM2.17858 4.0165C2.44158 4.0165 2.65477 3.81781 2.65477 3.57271C2.65477 3.32761 2.44158 3.12892 2.17858 3.12892C1.91559 3.12892 1.70239 3.32761 1.70239 3.57271C1.70239 3.81781 1.91559 4.0165 2.17858 4.0165ZM3.60715 4.46029C3.60715 4.70538 3.39396 4.90408 3.13096 4.90408C2.86797 4.90408 2.65477 4.70538 2.65477 4.46029C2.65477 4.21519 2.86797 4.0165 3.13096 4.0165C3.39396 4.0165 3.60715 4.21519 3.60715 4.46029ZM5.03573 4.90408C5.29872 4.90408 5.51192 4.70538 5.51192 4.46029C5.51192 4.21519 5.29872 4.0165 5.03573 4.0165C4.77273 4.0165 4.55954 4.21519 4.55954 4.46029C4.55954 4.70538 4.77273 4.90408 5.03573 4.90408ZM7.41668 4.46029C7.41668 4.70538 7.20348 4.90408 6.94049 4.90408C6.6775 4.90408 6.4643 4.70538 6.4643 4.46029C6.4643 4.21519 6.6775 4.0165 6.94049 4.0165C7.20348 4.0165 7.41668 4.21519 7.41668 4.46029ZM7.89287 5.79166C8.15586 5.79166 8.36906 5.59296 8.36906 5.34787C8.36906 5.10277 8.15586 4.90408 7.89287 4.90408C7.62988 4.90408 7.41668 5.10277 7.41668 5.34787C7.41668 5.59296 7.62988 5.79166 7.89287 5.79166ZM6.4643 5.34787C6.4643 5.59296 6.2511 5.79166 5.98811 5.79166C5.72511 5.79166 5.51192 5.59296 5.51192 5.34787C5.51192 5.10277 5.72511 4.90408 5.98811 4.90408C6.2511 4.90408 6.4643 5.10277 6.4643 5.34787ZM4.08334 5.79166C4.34634 5.79166 4.55954 5.59296 4.55954 5.34787C4.55954 5.10277 4.34634 4.90408 4.08334 4.90408C3.82035 4.90408 3.60715 5.10277 3.60715 5.34787C3.60715 5.59296 3.82035 5.79166 4.08334 5.79166ZM2.65477 5.34787C2.65477 5.59296 2.44158 5.79166 2.17858 5.79166C1.91559 5.79166 1.70239 5.59296 1.70239 5.34787C1.70239 5.10277 1.91559 4.90408 2.17858 4.90408C2.44158 4.90408 2.65477 5.10277 2.65477 5.34787Z"
                        fill="url(#paint0_linear_3422_20233)"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3422_20233"
                      x="1.70239"
                      y="1.35376"
                      width="6.66675"
                      height="5.43787"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3422_20233"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3422_20233"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_3422_20233"
                      x1="1.70239"
                      y1="1.35376"
                      x2="1.70239"
                      y2="5.79166"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#F0F0F0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>English (US)</span>
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            }
          >
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>German</Dropdown.Item>
            <Dropdown.Item>Italian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Footer>
  );
}
