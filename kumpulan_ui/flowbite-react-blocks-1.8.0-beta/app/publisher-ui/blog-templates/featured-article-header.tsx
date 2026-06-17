"use client";

import {
  Avatar,
  Button,
  Dropdown,
  Footer,
  Table,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsTwitterX } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function FeaturedArticleWithHeaderBlogTemplate() {
  return (
    <>
      <main className="bg-white pb-16 antialiased dark:bg-gray-900 lg:pb-24">
        <header className="py-12">
          <div className="mx-auto w-full max-w-screen-xl px-4 text-center">
            <span className="mb-4 block font-semibold text-gray-900 dark:text-white">
              Published&nbsp;
              <time
                className="font-normal text-gray-500 dark:text-gray-400"
                title="August 3rd, 2022"
              >
                August 3, 2022, 2:20am EDT
              </time>
            </span>
            <h1 className="mx-auto mb-4 max-w-2xl text-2xl font-extrabold leading-none text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              Flowbite Blocks Tutorial - Learn how to get started with custom
              sections using the Flowbite Blocks
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Before going digital, you might scribbling down some ideas in a
              sketchbook.
            </p>
          </div>
        </header>
        <div className="relative z-20 mx-auto flex max-w-screen-xl justify-between rounded bg-white px-4 dark:bg-gray-900">
          <article className="format format-sm format-blue w-full max-w-none dark:format-invert sm:format-base lg:format-lg xl:w-[828px]">
            <div className="flex flex-col justify-between border-b border-t border-gray-200 py-6 dark:border-gray-700 lg:flex-row lg:items-center">
              <span className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 lg:mb-0">
                By{" "}
                <a
                  href="#"
                  rel="author"
                  className="font-bold text-gray-900 no-underline hover:underline dark:text-white"
                >
                  Jese Leos
                </a>{" "}
                in{" "}
                <a
                  href="#"
                  className="font-normal text-gray-500 no-underline hover:underline dark:text-gray-400"
                >
                  World News
                </a>
              </span>
              <aside aria-label="Share social media">
                <a
                  href="#"
                  className="mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2 text-xs font-medium text-gray-900 no-underline hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-3 w-3"
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
                  Share
                </a>
                <a
                  href="#"
                  className="mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2 text-xs font-medium text-gray-900 no-underline hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-3 w-3"
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
                  Tweet
                </a>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2 text-xs font-medium text-gray-900 no-underline hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 19 19"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                    />
                  </svg>
                  Copy link
                </button>
              </aside>
            </div>
            <p className="lead">
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>
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
                alt=""
                className="mx-auto"
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
            <div className="flex items-center justify-between border-b border-t border-gray-200 py-6 dark:border-gray-700">
              <aside aria-label="Share social media">
                <a
                  href="#"
                  className="mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2 text-xs font-medium text-gray-900 no-underline hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-3 w-3"
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
                  Share
                </a>
                <a
                  href="#"
                  className="mr-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2 text-xs font-medium text-gray-900 no-underline hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-3 w-3"
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
                  Tweet
                </a>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-2 text-xs font-medium text-gray-900 no-underline hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 19 19"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                    />
                  </svg>
                  Copy link
                </button>
              </aside>
              <div className="not-format flex items-center gap-1">
                <Tooltip content="Save this article">
                  <button
                    className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                      />
                    </svg>
                  </button>
                </Tooltip>
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
                      base: twMerge(theme.dropdown.floating.base, "w-36"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Mute this author</Dropdown.Item>
                  <Dropdown.Item>Report</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <section className="not-format mt-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
                  Discussion (20)
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
              <form className="mb-6">
                <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                  <div className="rounded-t-lg bg-gray-50 px-4 py-2 dark:bg-gray-800">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <textarea
                      id="comment"
                      rows={6}
                      className="w-full border-0 bg-gray-50 px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                      placeholder="Write a comment..."
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
                    <Button size="xs" className="[&>span]:px-4 [&>span]:py-2.5">
                      Post comment
                    </Button>
                    <div className="flex space-x-1 pl-0 sm:pl-2">
                      <button
                        type="button"
                        className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 12 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                          />
                        </svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>
                        <span className="sr-only">Set location</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <svg
                          className="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <article className="mb-6 rounded-lg bg-gray-50 p-6 text-base dark:bg-gray-700">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        rounded
                        size="xs"
                        className="space-x-2"
                      >
                        <p>
                          Michael Gough
                          <time
                            title="February 8th, 2022"
                            className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            Feb. 8, 2022
                          </time>
                        </p>
                      </Avatar>
                    </p>
                  </div>
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
                        "inline-flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                      ),
                    }}
                  >
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Remove</Dropdown.Item>
                    <Dropdown.Item>Report</Dropdown.Item>
                  </Dropdown>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div className="mt-4 flex items-center space-x-4">
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
                    11 Likes
                  </button>
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="mb-6 ml-12 rounded-lg bg-gray-50 p-6 text-base dark:bg-gray-700">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        rounded
                        size="xs"
                        className="space-x-2"
                      >
                        <p>
                          Jese Leos
                          <time
                            title="February 12th, 2022"
                            className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            Feb. 12, 2022
                          </time>
                        </p>
                      </Avatar>
                    </p>
                  </div>
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
                        "inline-flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                      ),
                    }}
                  >
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Remove</Dropdown.Item>
                    <Dropdown.Item>Report</Dropdown.Item>
                  </Dropdown>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Much appreciated! Glad you liked it ☺️
                </p>
                <div className="mt-4 flex items-center space-x-4">
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
                    3 Likes
                  </button>
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="mb-6 rounded-lg bg-gray-50 p-6 text-base dark:bg-gray-700">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        rounded
                        size="xs"
                        className="space-x-2"
                      >
                        <p>
                          Bonnie Green
                          <time
                            title="March 12th, 2022"
                            className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            Mar. 12, 2022
                          </time>
                        </p>
                      </Avatar>
                    </p>
                  </div>
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
                        "inline-flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                      ),
                    }}
                  >
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Remove</Dropdown.Item>
                    <Dropdown.Item>Report</Dropdown.Item>
                  </Dropdown>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <div className="mt-4 flex items-center space-x-4">
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
                    24 Likes
                  </button>
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="rounded-lg bg-gray-50 p-6 text-base dark:bg-gray-700">
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                      <Avatar
                        img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        rounded
                        size="xs"
                        className="space-x-2"
                      >
                        <p>
                          Helene Engels
                          <time
                            title="June 23rd, 2022"
                            className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                          >
                            Jun. 23, 2022
                          </time>
                        </p>
                      </Avatar>
                    </p>
                  </div>
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
                        "inline-flex items-center rounded-lg bg-gray-50 p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                      ),
                    }}
                  >
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Remove</Dropdown.Item>
                    <Dropdown.Item>Report</Dropdown.Item>
                  </Dropdown>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  Thanks for sharing this. I do came from the Backend
                  development and explored some of the tools to design my Side
                  Projects.
                </p>
                <div className="mt-4 flex items-center space-x-4">
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
                    9 Likes
                  </button>
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section>
          </article>
          <aside className="hidden xl:block" aria-labelledby="sidebar-label">
            <div className="sticky top-6 xl:w-[336px]">
              <h3 id="sidebar-label" className="sr-only">
                Sidebar
              </h3>
              <div className="mb-6 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h4 className="mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white">
                  Flowbite News morning headlines
                </h4>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Get all the stories you need-to-know from the most powerful
                  name in news delivered first thing every morning to your inbox
                </p>
                <form action="#">
                  <label htmlFor="email-address-icon" className="sr-only">
                    Your Email
                  </label>
                  <div className="relative mb-4">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <TextInput
                      icon={HiMail}
                      id="email-address-icon"
                      name="email-address-icon"
                      placeholder="name@company.com"
                      required
                      type="text"
                    />
                  </div>
                  <Button className="[&>span]:py-2.5] w-full">Subscribe</Button>
                </form>
              </div>
              <div className="mb-6 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
                  Latest news
                </h4>
                <div className="mb-6">
                  <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    Our first office
                  </h5>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                  >
                    Read in 9 minutes
                  </a>
                </div>
                <div className="mb-6">
                  <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    Enterprise Design tips
                  </h5>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                  >
                    Read in 14 minutes
                  </a>
                </div>
                <div className="mb-6">
                  <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    Our first project with React
                  </h5>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                  >
                    Read in 4 minutes
                  </a>
                </div>
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
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Students and Teachers, save up to 60% on Flowbite Creative
                  Cloud.
                </p>
                <p className="text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                  Ads placeholder
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="bg-gray-50 py-8 antialiased dark:bg-gray-800 lg:py-24"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Read next
          </h2>
          <article className="mb-8 flex">
            <a href="#" className="shrink-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                className="max-w-fullalign-middle mr-5 h-32 w-32 rounded-full"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first office</a>
              </h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read in 2 minutes
              </a>
            </div>
          </article>
          <article className="mb-8 flex">
            <a href="#" className="shrink-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                className="mr-5 h-32 w-32 max-w-full rounded-full align-middle"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read in 12 minutes
              </a>
            </div>
          </article>
          <article className="flex">
            <a href="#" className="shrink-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                className="mr-5 h-32 w-32 max-w-full rounded-full align-middle"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">We partnered up with Google</a>
              </h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
              >
                Read in 8 minutes
              </a>
            </div>
          </article>
        </div>
      </aside>

      <section className="bg-white antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <TextInput
                    placeholder="Enter your email"
                    type="email"
                    icon={HiMail}
                    id="email"
                    name="email"
                    required
                    className="[&_input]:py-3 md:[&_input]:rounded-r-none"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-fit md:rounded-l-none [&>span]:py-3 [&>span]:text-sm"
                >
                  Subscribe
                </Button>
              </div>
              <div className="mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
                We care about the protection of your data.&nbsp;
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer className="rounded-none bg-gray-50 antialiased dark:bg-gray-800">
        <div className="mx-auto w-full p-4 py-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
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
          <div className="text-center">
            <a
              href="#"
              className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
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
            <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
              &copy; 2021-2022&nbsp;
              <a href="#" className="hover:underline">
                Flowbite&trade;
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-5 flex justify-center space-x-5">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsTwitterX} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
