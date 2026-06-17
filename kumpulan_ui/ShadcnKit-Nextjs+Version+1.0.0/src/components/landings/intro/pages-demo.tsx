import Link from "next/link";
import { nanoid } from "nanoid";
import ThemeBasedImage from "@/components/theme-based-image";

const PagesDemo = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <div className="landing-pages mb-24">
        <div className="text-center mb-10">
          <span className="px-4 py-2 rounded-full text-white -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 font-bold  text-xl  bg-card-hover">
            Landing Pages
          </span>
          <p className=" mt-6">Explore all Prebuilt Lanading pages </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-6 bg-card">
          {landings.map(({ id, route, light, dark }, index) => (
            <>
              {index + 1 === landings.length ? (
                <Link
                  target="_blank"
                  href="landing-pages"
                  className="relative max-w-[308px] w-full mx-auto md:mx-0"
                >
                  <ThemeBasedImage
                    key={id}
                    width={308}
                    height={500}
                    lightSrc={light}
                    darkSrc={dark}
                    alt="shadcn-kit"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center font-black text-primary-foreground">
                    <h4 className=" dark:text-white">+6</h4>
                  </div>
                </Link>
              ) : (
                <Link
                  href={route}
                  target="_blank"
                  className="relative max-w-[308px] w-full mx-auto md:mx-0 group"
                >
                  <ThemeBasedImage
                    key={id}
                    width={308}
                    height={500}
                    lightSrc={light}
                    darkSrc={dark}
                    alt="shadcn-kit"
                  />

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center font-semibold text-primary-foreground">
                    <p>View Page</p>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>

      <div className="dashboard-pages">
        <div className="text-center mb-10">
          <span className="px-4 py-2 rounded-full text-white -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 font-bold  text-xl  bg-card-hover">
            Dashboards
          </span>
          <p className=" mt-6">
            Explore all dashboard pages and start your Project
          </p>
        </div>

        <div className="p-6 rounded-xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-6 bg-card">
          {dashboards.map(({ id, route, light, dark }, index) => (
            <>
              {index + 1 === dashboards.length ? (
                <Link
                  target="_blank"
                  href="dashboard-pages"
                  className="relative rounded-lg overflow-hidden"
                >
                  <ThemeBasedImage
                    key={id}
                    width={300}
                    height={220}
                    lightSrc={light}
                    darkSrc={dark}
                    alt="shadcn-kit"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center font-black text-primary-foreground">
                    <h4 className=" dark:text-white">+7</h4>
                  </div>
                </Link>
              ) : (
                <Link
                  href={route}
                  target="_blank"
                  className="group relative rounded-lg overflow-hidden"
                >
                  <ThemeBasedImage
                    key={id}
                    width={300}
                    height={220}
                    lightSrc={light}
                    darkSrc={dark}
                    alt="shadcn-kit"
                  />

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center font-semibold text-primary-foreground">
                    <p>View Page</p>
                  </div>
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const landings = [
  {
    id: nanoid(),
    route: "/project-management",
    light: "/assets/pages/Landing-01-light.png",
    dark: "/assets/pages/Landing-01-dark.png",
  },
  {
    id: nanoid(),
    route: "/crm-landing",
    light: "/assets/pages/Landing-02-light.png",
    dark: "/assets/pages/Landing-02-dark.png",
  },
  {
    id: nanoid(),
    route: "/ai-content-landing",
    light: "/assets/pages/Landing-03-light.png",
    dark: "/assets/pages/Landing-03-dark.png",
  },
];

const dashboards = [
  {
    id: nanoid(),
    route: "/dashboard/analytics",
    light: "/assets/pages/Dashboard-01 light.png",
    dark: "/assets/pages/Dashboard-01 dark.png",
  },
  {
    id: nanoid(),
    route: "/dashboard/finance-1",
    light: "/assets/pages/Dashboard-02 light.png",
    dark: "/assets/pages/Dashboard-02 dark.png",
  },
  {
    id: nanoid(),
    route: "/dashboard/finance-2",
    light: "/assets/pages/Dashboard-03 light.png",
    dark: "/assets/pages/Dashboard-03 dark.png",
  },
  {
    id: nanoid(),
    route: "/dashboard/ecommerce",
    light: "/assets/pages/Dashboard-04 light.png",
    dark: "/assets/pages/Dashboard-04 dark.png",
  },
  {
    id: nanoid(),
    route: "/dashboard/project-management",
    light: "/assets/pages/Dashboard-05 light.png",
    dark: "/assets/pages/Dashboard-05 dark.png",
  },
  {
    id: nanoid(),
    route: "/dashboard/crm",
    light: "/assets/pages/Dashboard-06 light.png",
    dark: "/assets/pages/Dashboard-06 dark.png",
  },
];

export default PagesDemo;
