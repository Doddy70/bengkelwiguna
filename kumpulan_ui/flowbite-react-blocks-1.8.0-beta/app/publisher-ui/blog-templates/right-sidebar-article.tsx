"use client";

import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Dropdown,
  Footer,
  Label,
  Table,
  Textarea,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { HiHome, HiUser } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function RightSidebarArticleBlogTemplate() {
  return (
    <>
      <main className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
          <aside
            className="relative ml-auto hidden xl:block"
            aria-labelledby="sidebar-label"
          >
            <div className="sticky top-6 rounded-lg border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800">
              <Tooltip content="Share on Twitter">
                <button
                  className="mb-2 flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                      fill="#1DA1F2"
                    />
                  </svg>
                </button>
              </Tooltip>
              <Tooltip content="Share on Facebook">
                <button
                  data-tooltip-target="share-facebook"
                  className="mb-2 flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13664_80011">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.443604)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Tooltip>
              <Tooltip content="Share on Reddit">
                <button
                  data-tooltip-target="share-reddit"
                  className="mb-2 flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                        fill="#FF4500"
                      />
                      <path
                        d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13664_80014">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.443604)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Tooltip>
              <Tooltip content="Share on LinkedIn">
                <button
                  data-tooltip-target="share-linkedin"
                  className="flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                        fill="#0A66C2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13664_80017">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.443604)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Tooltip>
            </div>
          </aside>
          <article className="format format-sm format-blue mx-auto w-full dark:format-invert sm:format-base lg:format-lg">
            <header className="not-format mb-4 lg:mb-6">
              <Breadcrumb>
                <Breadcrumb.Item href="#">
                  <HiHome className="mr-2" /> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Tech</Breadcrumb.Item>
                <Breadcrumb.Item>Prototyping from A to Z</Breadcrumb.Item>
              </Breadcrumb>
              <div className="my-4 flex items-center gap-3 md:my-6 [&_span]:text-sm [&_span]:font-medium">
                <Badge>Technology</Badge>
                <Badge>Design</Badge>
                <Badge>Programming</Badge>
              </div>
              <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
                Prototyping from A to Z: best practices for successful
                prototypes
              </h1>
              <div className="flex items-center justify-between border-b border-t border-gray-200 py-4 dark:border-gray-700">
                <div className="mr-4 text-sm">
                  <address className="inline not-italic">
                    By{" "}
                    <a
                      rel="author"
                      className="text-gray-900 no-underline hover:underline dark:text-white"
                      href="#"
                    >
                      Jese Leos
                    </a>
                  </address>
                  &nbsp;in&nbsp;
                  <a
                    href="#"
                    className="text-gray-900 no-underline hover:underline dark:text-white"
                  >
                    Design
                  </a>
                  <span>
                    &nbsp;on&nbsp;
                    <time title="February 8th, 2022">
                      Feb. 8, 2022 at 4:52PM PDT
                    </time>
                  </span>
                </div>
                <a
                  href="#comments"
                  className="flex shrink-0 items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <svg
                    className="mr-1 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  4 Comments
                </a>
              </div>
            </header>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              But then I found a{" "}
              <a href="https://flowbite.com">
                component library based on Tailwind CSS called Flowbite
              </a>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </p>
            <figure>
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                className="mx-auto"
                alt=""
              />
              <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2>Getting started with Flowbite</h2>
            <p>
              First of all you need to understand how Flowbite works. This
              library is not another framework. Rather, it is a set of
              components based on Tailwind CSS that you can just copy-paste from
              the documentation.
            </p>
            <p>
              It also includes a JavaScript file that enables interactive
              components, such as modals, dropdowns, and datepickers which you
              can optionally include into your project via CDN or NPM.
            </p>
            <p>
              You can check out the{" "}
              <a href="https://flowbite.com/docs/getting-started/quickstart/">
                quickstart guide
              </a>{" "}
              to explore the elements by including the CDN files into your
              project. But if you want to build a project with Flowbite I
              recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.
            </p>
            <p>
              You'll also receive a lot of useful application UI, marketing UI,
              and e-commerce pages that can help you get started with your
              projects even faster. You can check out this{" "}
              <a href="https://flowbite.com/docs/components/tables/">
                comparison table
              </a>{" "}
              to better understand the differences between the open-source and
              pro version of Flowbite.
            </p>
            <h2>When does design come in handy?</h2>
            <p>
              While it might seem like extra work at a first glance, here are
              some key moments in which prototyping will come in handy:
            </p>
            <ol>
              <li>
                <strong>Usability testing</strong>. Does your user know how to
                exit out of screens? Can they follow your intended user journey
                and buy something from the site you’ve designed? By running a
                usability test, you’ll be able to see how users will interact
                with your design once it’s live;
              </li>
              <li>
                <strong>Involving stakeholders</strong>. Need to check if your
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real;
              </li>
              <li>
                <strong>Impressing a client</strong>. Prototypes can help
                explain or even sell your idea by providing your client with a
                hands-on experience;
              </li>
              <li>
                <strong>Communicating your vision</strong>. By using an
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </li>
            </ol>
            <h3>Laying the groundwork for best design</h3>
            <p>
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </p>
            <p>
              Let's start by including the CSS file inside the <code>head</code>{" "}
              tag of your HTML.
            </p>
            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <h4>Old-Style serifs</h4>
            <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ul>
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
              alt=""
            />
            <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
            </ol>
            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
            <blockquote>
              <p>
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </blockquote>
            <h4>Code example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <pre>
              <code className="language-html">
                &lt;dl class="grid grid-cols-2 gap-8 max-w-screen-md
                text-gray-900 sm:grid-cols-3 dark:text-white"&gt; &lt;div
                class="flex flex-col justify-center items-center"&gt; &lt;dt
                class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt; &lt;dd
                class="text-lg font-normal text-gray-500
                dark:text-gray-400"&gt;developers&lt;/dd&gt; &lt;/div&gt;
                &lt;div class="flex flex-col justify-center items-center"&gt;
                &lt;dt class="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
                &lt;dd class="text-lg font-normal text-gray-500
                dark:text-gray-400"&gt;contributors&lt;/dd&gt; &lt;/div&gt;
                &lt;div class="flex flex-col justify-center items-center"&gt;
                &lt;dt class="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
                &lt;dd class="text-lg font-normal text-gray-500
                dark:text-gray-400"&gt;organizations&lt;/dd&gt; &lt;/div&gt;
                &lt;/dl&gt;
              </code>
            </pre>
            <h4>Table example</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter.
            </p>
            <Table
              theme={{
                root: {
                  shadow: "",
                },
              }}
            >
              <Table.Head className="text-base [&_th]:normal-case">
                <Table.HeadCell>Country</Table.HeadCell>
                <Table.HeadCell>Date &amp; Time</Table.HeadCell>
                <Table.HeadCell>Amount</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>United States</Table.Cell>
                  <Table.Cell>April 21, 2021</Table.Cell>
                  <Table.Cell>
                    <strong>$2,300</strong>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Canada</Table.Cell>
                  <Table.Cell>May 31, 2021</Table.Cell>
                  <Table.Cell>
                    <strong>$300</strong>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>United Kingdom</Table.Cell>
                  <Table.Cell>June 3, 2021</Table.Cell>
                  <Table.Cell>
                    <strong>$2,500</strong>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Australia</Table.Cell>
                  <Table.Cell>June 23, 2021</Table.Cell>
                  <Table.Cell>
                    <strong>$3,543</strong>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Germany</Table.Cell>
                  <Table.Cell>July 6, 2021</Table.Cell>
                  <Table.Cell>
                    <strong>$99</strong>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>France</Table.Cell>
                  <Table.Cell>August 23, 2021</Table.Cell>
                  <Table.Cell>
                    <strong>$2,540</strong>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <p>
              <strong>Start from the inside out</strong>. A nice way to both
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out’. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              you’ll be able to create a prototype that puts your users’ needs
              at the heart of your design.
            </p>
            <p>
              And there you have it! Everything you need to design and share
              prototypes — right in Flowbite Figma.
            </p>
            <section className="not-format" id="comments">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
                  Leave a reply
                </h2>
                <div>
                  <button
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <form
                action="#"
                className="grid-cols mx-auto mb-6 grid gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-2"
              >
                <div className="sm:col-span-2">
                  <Label htmlFor="first-name" className="mb-2">
                    First Name
                  </Label>
                  <TextInput
                    id="first-name"
                    name="first-name"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Your email
                  </Label>
                  <TextInput
                    id="email"
                    name="email"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <Label htmlFor="website" className="mb-2">
                    Website
                  </Label>
                  <TextInput
                    id="website"
                    name="website"
                    placeholder="www.yoursite.com"
                    required
                    type="url"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message" className="mb-2">
                    Your message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder=""
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-fit [&>span]:py-3">
                  Post comment
                </Button>
              </form>
              <article className="mb-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <footer className="mb-2 flex items-center justify-between">
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    size="sm"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Michael Gough
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <time title="February 8th, 2022">Feb. 8, 2022</time>
                    </p>
                  </Avatar>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>
                      37
                    </button>
                    <Dropdown
                      color="gray"
                      inline
                      label={
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-32"),
                        },
                        inlineWrapper: twMerge(
                          theme.dropdown.inlineWrapper,
                          "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                        ),
                      }}
                    >
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Remove</Dropdown.Item>
                      <Dropdown.Item>Report</Dropdown.Item>
                    </Dropdown>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Reply
                </button>
              </article>
              <article className="mb-6 ml-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:ml-12">
                <footer className="mb-2 flex items-center justify-between">
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    size="sm"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Jese Leos
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <time title="February 12th, 2022">Feb. 12, 2022</time>
                    </p>
                  </Avatar>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>
                      9
                    </button>
                    <Dropdown
                      color="gray"
                      inline
                      label={
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-32"),
                        },
                        inlineWrapper: twMerge(
                          theme.dropdown.inlineWrapper,
                          "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                        ),
                      }}
                    >
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Remove</Dropdown.Item>
                      <Dropdown.Item>Report</Dropdown.Item>
                    </Dropdown>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Much appreciated! Glad you liked it ☺️
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Reply
                </button>
              </article>
              <article className="mb-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <footer className="mb-2 flex items-center justify-between">
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    size="sm"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <time title="March 12th, 2022">Mar. 12, 2022</time>
                    </p>
                  </Avatar>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>
                      22
                    </button>
                    <Dropdown
                      color="gray"
                      inline
                      label={
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-32"),
                        },
                        inlineWrapper: twMerge(
                          theme.dropdown.inlineWrapper,
                          "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                        ),
                      }}
                    >
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Remove</Dropdown.Item>
                      <Dropdown.Item>Report</Dropdown.Item>
                    </Dropdown>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Reply
                </button>
              </article>
              <article className="rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <footer className="mb-2 flex items-center justify-between">
                  <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                    size="sm"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Helene Engels
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <time title="June 23rd, 2022">Jun. 23, 2022</time>
                    </p>
                  </Avatar>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                    >
                      <svg
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>
                      18
                    </button>
                    <Dropdown
                      color="gray"
                      inline
                      label={
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-32"),
                        },
                        inlineWrapper: twMerge(
                          theme.dropdown.inlineWrapper,
                          "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                        ),
                      }}
                    >
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Remove</Dropdown.Item>
                      <Dropdown.Item>Report</Dropdown.Item>
                    </Dropdown>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Thanks for sharing this. I do came from the Backend
                  development and explored some of the tools to design my Side
                  Projects.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Reply
                </button>
              </article>
            </section>
          </article>
          <aside
            className="hidden xl:block xl:w-80"
            aria-labelledby="sidebar-label"
          >
            <h3 id="sidebar-label" className="sr-only">
              Sidebar
            </h3>
            <div className="mb-6 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white p-5 font-medium text-gray-500 shadow dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
                Latest news
              </h4>
              <div className="flex items-center py-4">
                <a href="#" className="shrink-0">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                    className="mr-4 h-12 w-12 max-w-full rounded-lg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <h5 className="font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    SaaS can help speed up Cybersecurity projects
                  </h5>
                </a>
              </div>
              <div className="flex items-center py-4">
                <a href="#" className="shrink-0">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                    className="mr-4 h-12 w-12 max-w-full rounded-lg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <h5 className="font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    Crunching large datasets made fast: Flowbite Library
                  </h5>
                </a>
              </div>
              <div className="flex items-center py-4">
                <a href="#" className="shrink-0">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                    className="mr-4 h-12 w-12 max-w-full rounded-lg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <h5 className="font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    Here’s how to make a react app with Flowbite Blocks
                  </h5>
                </a>
              </div>
              <div className="flex items-center py-4">
                <a href="#" className="shrink-0">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                    className="mr-4 h-12 w-12 max-w-full rounded-lg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <h5 className="font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    AI meets IoT: What is the artificial intelligence
                  </h5>
                </a>
              </div>
              <div className="flex items-center pt-4">
                <a href="#" className="shrink-0">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                    className="mr-4 h-12 w-12 max-w-full rounded-lg"
                    alt=""
                  />
                </a>
                <a href="#">
                  <h5 className="font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    How to create a basic application with Flowbite
                  </h5>
                </a>
              </div>
            </div>
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Get the best of Flowbite News delivered to your inbox
              </h4>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Subscribe our newsletter for latest world news. Let's stay
                updated!
              </p>
              <form action="#">
                <label htmlFor="name-icon" className="sr-only">
                  Your Name
                </label>
                <TextInput
                  icon={HiUser}
                  id="name-icon"
                  name="name-icon"
                  placeholder="Your name"
                  required
                />
                <label htmlFor="email-address-icon" className="sr-only">
                  Your Email
                </label>
                <TextInput
                  id="email-address-icon"
                  name="email-address-icon"
                  placeholder="name@company.com"
                  required
                  type="email"
                  className="my-4"
                />
                <Button className="w-full [&>span]:py-3">Subscribe</Button>
              </form>
            </div>
            <div className="mb-6 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white p-5 font-medium text-gray-500 shadow dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
                Recent comments
              </h4>
              <div className="py-4">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  Bonnie Green on{" "}
                  <a
                    href="#"
                    className="font-medium italic text-gray-900 hover:underline dark:text-white"
                  >
                    5 Ways SaaS Can Help Speed Up Cybersecurity Implementation
                  </a>
                </p>
              </div>
              <div className="py-4">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  Lana Byrd on{" "}
                  <a
                    href="#"
                    className="font-medium italic text-gray-900 hover:underline dark:text-white"
                  >
                    Jese Leos on Crunching Large Datasets Made Fast and Easy:
                    the Polars Library
                  </a>
                </p>
              </div>
              <div className="py-4">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  Jese Leos on{" "}
                  <a
                    href="#"
                    className="font-medium italic text-gray-900 hover:underline dark:text-white"
                  >
                    Founders, ditch your long presentations. Here’s how to make
                    ...
                  </a>
                </p>
              </div>
              <div className="py-4">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  Thomas Lean on{" "}
                  <a
                    href="#"
                    className="font-medium italic text-gray-900 hover:underline dark:text-white"
                  >
                    AI Meets IoT: What is the Artificial Intelligence of Things
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-5 font-medium text-gray-500 shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
              <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
                Follow me
              </h4>
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                rounded
                size="sm"
                className="mb-3 justify-start"
              >
                <span className="block font-medium text-gray-900 dark:text-white">
                  Jese Leos
                </span>
                <span className="text-sm font-normal">546k followers</span>
              </Avatar>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Hey! I'm Jese Leos. I'm a career-changer. Bootcamp grad & Dev.
              </p>
              <Button className="w-full">Follow</Button>
            </div>
            <div>
              <div className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Students and Teachers, save up to 60% on Flowbite Creative
                Cloud.
              </p>
              <p className="text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                Ads placeholder
              </p>
            </div>
          </aside>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="bg-gray-50 py-8 antialiased dark:bg-gray-800 lg:py-16"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Read Next
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt=""
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Flowbite enables IT to automate Apple device configuration
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt=""
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">How AI is transforming your smartphone</a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt=""
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Android, ChromeOS, and the future of app discovery
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-4.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt=""
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  What Google collaboration app offers remote teams
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-5.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt=""
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Collaboration app spending grows in the face of crisis
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-6.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt=""
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  For developers, too many meetings, too little 'focus' time
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read more
              </a>
            </article>
          </div>
        </div>
      </aside>
      <section className="bg-white antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl p-4 py-12 text-center lg:py-24">
          <h2 className="mx-auto mb-6 max-w-2xl text-2xl font-extrabold leading-tight text-gray-900 dark:text-white lg:text-4xl">
            Join a growing community of millions of developers and designers!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500 dark:text-gray-400 lg:text-xl">
            Millions of tech blogs publish on Flowbite daily.&nbsp;
          </p>
          <Button href="#" className="mx-auto w-fit [&>span]:py-3">
            Create an account
          </Button>
        </div>
      </section>
      <Footer className="rounded-none bg-gray-50 antialiased dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2">
              <a
                href="#"
                className="mb-2 flex items-center text-2xl font-semibold text-gray-900 dark:text-white sm:mb-0"
              >
                <svg
                  className="mr-2 h-8"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
                    fill="url(#paint0_linear_11430_22515)"
                  />
                  <path
                    d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z"
                    fill="url(#paint1_linear_11430_22515)"
                  />
                  <path
                    d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z"
                    fill="url(#paint2_linear_11430_22515)"
                  />
                  <path
                    d="M19.6699 25.6538C18.3843 26.3953 16.8003 26.3953 15.5147 25.6538C15.3402 25.5531 15.1757 25.4399 15.0201 25.3174L12.7591 26.8719L10.8103 30.0209C12.9733 31.821 15.7821 32.3997 18.589 32.0779C20.7013 31.8357 22.7995 31.1665 24.7582 30.0368C26.3492 29.1191 27.7 27.9909 28.8182 26.7195L27.6563 23.8962L25.7762 22.1316L19.6699 25.6538Z"
                    fill="url(#paint3_linear_11430_22515)"
                  />
                  <path
                    d="M15.0201 25.3175C14.0296 24.5373 13.4371 23.3406 13.4371 22.0588V21.931V11.2558C13.4371 10.6521 13.615 10.5494 14.1384 10.8513C13.3323 10.3864 11.4703 8.79036 9.17118 10.1165C7.88557 10.858 6.8269 12.4949 6.8269 13.978V21.8362C6.8269 24.775 8.34906 27.8406 10.5445 29.7966C10.6313 29.874 10.7212 29.9469 10.8103 30.0211L15.0201 25.3175Z"
                    fill="url(#paint4_linear_11430_22515)"
                  />
                  <path
                    d="M28.6604 5.49565C28.6589 5.49395 28.6573 5.49532 28.6589 5.49703C28.9613 5.83763 29.2888 6.23485 29.6223 6.68734C31.3648 9.05099 32.0158 12.0447 31.4126 14.9176C30.8093 17.7906 29.0071 20.2679 26.4625 21.7357L25.7761 22.1316L28.8181 26.7195C34.0764 20.741 34.09 11.5388 28.6815 5.51929C28.6789 5.51641 28.67 5.50622 28.6604 5.49565Z"
                    fill="url(#paint5_linear_11430_22515)"
                  />
                  <path
                    d="M7.09355 13.978C7.09354 12.4949 7.88551 11.1244 9.17113 10.3829C9.34564 10.2822 9.52601 10.1965 9.71002 10.1231L9.49304 7.38962L7.96861 4.26221C5.32671 5.23364 3.1897 7.24125 2.06528 9.83067C1.2191 11.7793 0.75001 13.9294 0.75 16.1888C0.75 18.0243 1.05255 19.7571 1.59553 21.3603L4.62391 21.7666L7.09355 21.0223V13.978Z"
                    fill="url(#paint6_linear_11430_22515)"
                  />
                  <path
                    d="M9.71016 10.1231C10.8817 9.65623 12.2153 9.74199 13.3264 10.3829L13.4372 10.4468L22.3326 15.5777C22.9566 15.9376 22.8999 16.2918 22.1946 16.4392L22.7078 16.332C23.383 16.1908 23.9999 15.8457 24.4717 15.3428C25.2828 14.4782 25.5806 13.4351 25.5806 12.5299C25.5806 11.0468 24.7886 9.67634 23.503 8.93479L16.6911 5.00568C14.1436 3.53627 11.0895 3.22294 8.29622 4.14442C8.18572 4.18087 8.07756 4.2222 7.96875 4.26221L9.71016 10.1231Z"
                    fill="url(#paint7_linear_11430_22515)"
                  />
                  <path
                    d="M20.0721 31.8357C20.0744 31.8352 20.0739 31.8332 20.0717 31.8337C19.6252 31.925 19.1172 32.0097 18.5581 32.0721C15.638 32.3978 12.7174 31.4643 10.5286 29.5059C8.33986 27.5474 7.09347 24.7495 7.09348 21.814L7.09347 21.0222L1.59546 21.3602C4.1488 28.8989 12.1189 33.5118 20.0411 31.8421C20.0449 31.8413 20.0582 31.8387 20.0721 31.8357Z"
                    fill="url(#paint8_linear_11430_22515)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_11430_22515"
                      x1="20.8102"
                      y1="23.9532"
                      x2="23.9577"
                      y2="12.9901"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1724C9" />
                      <stop offset="1" stop-color="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_11430_22515"
                      x1="28.0593"
                      y1="10.5837"
                      x2="19.7797"
                      y2="2.33321"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C64F2" />
                      <stop offset="1" stop-color="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_11430_22515"
                      x1="16.9145"
                      y1="5.2045"
                      x2="4.42432"
                      y2="5.99375"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0092FF" />
                      <stop offset="1" stop-color="#45B2FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_11430_22515"
                      x1="16.0698"
                      y1="28.846"
                      x2="27.2866"
                      y2="25.8192"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C64F2" />
                      <stop offset="1" stop-color="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_11430_22515"
                      x1="8.01881"
                      y1="15.8661"
                      x2="15.9825"
                      y2="24.1181"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1724C9" />
                      <stop offset="1" stop-color="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_11430_22515"
                      x1="26.2004"
                      y1="21.8189"
                      x2="31.7569"
                      y2="10.6178"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0092FF" />
                      <stop offset="1" stop-color="#45B2FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_11430_22515"
                      x1="6.11387"
                      y1="9.31427"
                      x2="3.14054"
                      y2="20.4898"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C64F2" />
                      <stop offset="1" stop-color="#0092FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_11430_22515"
                      x1="21.2932"
                      y1="8.78271"
                      x2="10.4278"
                      y2="11.488"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1724C9" />
                      <stop offset="1" stop-color="#1C64F2" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_11430_22515"
                      x1="7.15667"
                      y1="21.5399"
                      x2="14.0824"
                      y2="31.9579"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0092FF" />
                      <stop offset="1" stop-color="#45B2FF" />
                    </linearGradient>
                  </defs>
                </svg>
                Flowbite
              </a>
              <p className="my-4 text-gray-500 dark:text-gray-400">
                Flowbite is a open-source library of over 400+ web components
                and interactive elements built with the utility classes from
                Tailwind CSS.
              </p>
              <ul className="mt-5 flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Footer.Title title="Company" className="text-gray-900" />
              <Footer.LinkGroup
                col
                className="text-base text-gray-500 dark:text-gray-400"
              >
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Help Center" className="text-gray-900" />
              <Footer.LinkGroup
                col
                className="text-base text-gray-500 dark:text-gray-400"
              >
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-gray-900" />
              <Footer.LinkGroup
                col
                className="text-base text-gray-500 dark:text-gray-400"
              >
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Download" className="text-gray-900" />
              <Footer.LinkGroup
                col
                className="text-base text-gray-500 dark:text-gray-400"
              >
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">macOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; 2021-2022&nbsp;
            <a href="#" className="hover:underline">
              Flowbite&trade;
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </Footer>
    </>
  );
}
