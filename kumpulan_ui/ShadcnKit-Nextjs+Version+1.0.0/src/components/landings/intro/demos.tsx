import { nanoid } from "nanoid";
import Image from "next/image";

const Demos = () => {
  return (
    <div className="container px-4 flex flex-col gap-24">
      {demos.map((demo, index) => (
        <div
          key={demo.id}
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0"
        >
          {index === 1 ? (
            <>
              <Image
                width={580}
                height={380}
                src={demo.images[0]}
                alt={demo.title}
              />

              <div className="max-w-[408px]">
                <span className="px-4 text-white rounded-full -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 font-bold py-2 text-xl bg-card-hover">
                  {demo.badge}
                </span>
                <h6 className="font-semibold mt-4 mb-2">{demo.title}</h6>
                <p>{demo.details}</p>
                <div className="relative mt-6 inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70  bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 rounded-xl  group-hover:opacity-100"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="relative inline-flex items-center mr-4 justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Get it now
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[408px]">
                <span className="px-4 py-2 rounded-full text-white -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 font-bold  text-xl bg-card-hover">
                  {demo.badge}
                </span>
                <h6 className="font-semibold mt-4 mb-2">{demo.title}</h6>
                <p>{demo.details}</p>
                <div className="relative mt-6 inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70  bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 rounded-xl  group-hover:opacity-100"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="relative inline-flex items-center mr-4 justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Get it now
                  </a>
                </div>
              </div>

              <Image
                width={580}
                height={380}
                src={demo.images[0]}
                alt={demo.title}
                className="rounded-2xl"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const demos = [
  {
    id: nanoid(),
    badge: "Components",
    title: "Select, Copy & Paste",
    details:
      "We've curated the best Figma components in one place. Discover, copy and paste UI components in Figma with the most efficient way to build designs.",
    images: ["/assets/images/intro/ui-components-light.png"],
  },
  {
    id: nanoid(),
    badge: "Auto-layout",
    title: "Figma variables , Auto Layout & more ",
    details:
      "We use all latest figma features so that you can easily build a new page using all the components in minuites ",
    images: ["/assets/images/intro/auto-layout-light.png"],
  },
  {
    id: nanoid(),
    badge: "Colorstyle",
    title: "Easy Theme management",
    details: "Choose your own theme and apply easily ",
    images: ["/assets/images/intro/color-variable-light.png"],
  },
];

export default Demos;
