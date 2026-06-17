# :construction: flowbite-react-blocks :construction:

**Please note: Flowbite Blocks in React are currently still being developed and released in stages. You can expect some of the Blocks found on [the Flowbite Blocks website](https://flowbite.com/blocks/) to be unavailable in React. There isn't a fixed release schedule.**

## What are Flowbite Blocks?

UI components you can copy-and-paste effortlessly into any [Node.js](https://nodejs.org) project using [Flowbite](https://github.com/themesberg/flowbite).

## What are Flowbite React Blocks?

Flowbite Blocks designed for React users, using [`flowbite-react`](https://github.com/themesberg/flowbite-react)!

## How do I use Flowbite Blocks?

You can copy-and-paste the contents of the files you want directly from this GitHub repository, into your own Node.js project, with `flowbite-react` installed!

The Blocks are in `.tsx` files in the following folders, which correspond to the categories found on the Flowbite Blocks website:

- `app/marketing-ui/` (https://flowbite.com/blocks/marketing/)
- `app/application-ui/` (https://flowbite.com/blocks/application/)

For example, [Table Footers](https://flowbite.com/blocks/application/table-footers/) are in the `app/application-ui/table-footers/` folder. [Table footer with button](https://flowbite.com/blocks/application/table-footers/#table-footer-with-button) is in `app/application-ui/table-footers/button.tsx`.

If you're unsure which file corresponds to the Block you are looking for, each category folder also contains an `page.tsx` file, which maps all of its examples to their files.

Components are all written in TypeScript, but work in JavaScript (with types removed). Some components require interactive React elements via, e.g. `useState` (but not all).

## How do I fix, `<Dropdown> not defined`, etc.?

All of the Blocks depend on `flowbite-react`.

If you are using [Visual Studio Code](https://code.visualstudio.com/), the editor should suggest `import` statements to you from the `flowbite-react` library.

## Local development

We included a [`Next.js`](https://nextjs.org/) development server. You can run it locally via `npm run dev`.
