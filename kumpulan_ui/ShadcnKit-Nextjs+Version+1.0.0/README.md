## Requirements

Make sure that you have the last stable [NodeJS](https://nodejs.org/en/download/) and `npm` version.

- Do not delete the `package-lock.json / yarn.lock file`

### Install

Navigate to the project root folder using terminal and install the dependencies.
**Install with npm**

```bash copy
npm install
```

**Install with yarn**

```bash copy
yarn install
```

### Start

After the installation is complete, you can launch your app by running.

```bash copy
npm run dev
```

or

```bash copy
yarn dev
```

This starts a local webserver at `http://localhost:3000` and auto detect file changes:

```js
Compiled successfully!

You can now view shadcn-kit in the browser.

Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Build

```bash copy
npm run build
```

or

```bash copy
yarn build
```

## Folder structure

> Finding what you need is made simpler by a clear and simple folder structure. The folder structure can be found in the directory `shadcn-kit/`

- _`pulic/`_ : Get all assets files, such as JPGs, PNGs SVGs, and PDFs, inside of this folder.

- _`src/__fakeData__/`_ : Get all of the project's data, including the users, products, and invoice table data, that are stored in this folder.

- _`src/app/`_ : Get all of the pages and their layouts of this project.

- _`src/components/`_: On the entire project, we wrote a lot of reusable components. From this folder, all reusable components were taken.

- _`src/contexts/`_ : All global contexts exist in this folder such as settingsContext (for site settings), jwtContext (for authentication).

- _`src/hooks/`_ : From this folder, all global hooks are located. such as useSettings (for site settings) and useAuth (for authentication).

- _`src/lib/`_ : A few unique, reusable Utlis methods that were all obtained from this folder were used throughout the entire project.

```
shadcn-kit/
├── public/
|   ├── assets/
|   |   ├── avatar
|   |   ├── icons
|   |   ├── images
|   |   ├── profiles
|   |   ├── svg
|   └── and some files
|   |
├── src/
|   ├── __fakeData__/
|   |   ├── map/
|   |   ├   └── worldMap.json
|   |   └── countries.js
|   |
|   ├── app/
|   |   └── app pages folders
|   |
|   ├── components/
|   |   └── components folders
|   |
|   ├── contexts/
|   |   └── app-context.tsx
|   |
|   ├── hooks/
|   |   └── useAppContext.ts
|   |
|   ├── lib/
|   |   ├── base-chart-options.ts
|   |   ├── currency.ts
|   |   ├── events.ts
|   |   ├── react-table-columns.ts
|   |   ├── routes.ts
|   |   └── utils.ts
|   |
└── README.md
```

## Sidebar Navigation Structure

- You can find the navigation file from _`src/lib/routes.ts`_

```js routes.ts
export const routes: RouteProps[] = [
  {
    title: "Menu",
    pages: [
      {
        Icon: Dashboard,
        name: "Dashboard",
        path: "/dashboard",
        childItems: [
          { name: "Dashboard V1", path: "/dashboard-v1" },
          { name: "Dashboard V2", path: "/dashboard-v2" },
          { name: "Dashboard V3", path: "/dashboard-v3" },
          { name: "Dashboard V4", path: "/dashboard-v4" },
          { name: "Dashboard V5", path: "/dashboard-v5" },
          { name: "Analytics", path: "/analytics" },
          { name: "Finance 1", path: "/finance-1" },
          { name: "Finance 2", path: "/finance-2" },
          { name: "E-commerce", path: "/ecommerce" },
          { name: "Project Management", path: "/project-management" },
          { name: "CRM", path: "/crm" },
          { name: "Logistics", path: "/logistics" },
          { name: "Marketing", path: "/marketing" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    pages: [
      {
        Icon: User,
        name: "User",
        path: "/user",
        childItems: [{ name: "Marketing", path: "/marketing" }],
      },
      {
        Icon: Profile,
        name: "Account",
        path: "/account",
        childItems: [],
      },
      {
        Icon: User,
        name: "Profile",
        path: "/profile",
        childItems: [],
      },
      {
        Icon: Invoice,
        name: "Invoice",
        path: "/invoice",
        childItems: [],
      },
      {
        Icon: Authentication,
        name: "Authentication",
        path: "/authentication",
        childItems: [],
      },
      {
        Icon: Blog,
        name: "Blog",
        path: "/blog",
        childItems: [],
      },
      {
        Icon: Share,
        name: "Social",
        path: "/social",
        childItems: [],
      },
      {
        Icon: Pricing,
        name: "Pricing",
        path: "/pricing",
      },
      {
        Icon: FAQs,
        name: "FAQs",
        path: "/faqs",
      },
    ],
  },
  {
    title: "Apps",
    pages: [
      {
        Icon: Ecommerce,
        name: "E-commerce",
        path: "/ecommerce",
        childItems: [],
      },
      {
        Icon: Support,
        name: "Contact",
        path: "/contact",
        childItems: [],
      },
      {
        Icon: Email,
        name: "E-mail",
        path: "/email",
      },
      {
        Icon: Chat,
        name: "Chat",
        path: "/chat",
      },
      {
        Icon: List,
        name: "To Do",
        path: "/todo",
      },
      {
        Icon: Calender,
        name: "Calender",
        path: "/calender",
      },
      {
        Icon: Session,
        name: "Session",
        path: "/session",
      },
      {
        Icon: DocumentText,
        name: "Documentation",
        path: "/documentation",
      },
    ],
  },
];
```
