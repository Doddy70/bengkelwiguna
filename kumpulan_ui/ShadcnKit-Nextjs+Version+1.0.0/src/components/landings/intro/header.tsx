import ThemeBasedImage from "@/components/theme-based-image";

const Header = () => {
  return (
    <div className="container px-4 flex flex-col items-center ">
      {/* <ShadcnKit className="text-primary cursor-pointer w-[304px] h-[74px]" /> */}

      <div className="max-w-4xl text-center m-auto">
        <h3 className="font-semibold mt-4 mb-8 text-white">
          Launch 🚀 Fast with Prebuilt Components & Pages In{" "}
          <span className="inline-block bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 bg-clip-text text-7xl text-transparent">
            Shadcn/ui
          </span>
        </h3>
      </div>
      <div className="max-w-2xl text-center m-auto">
        <p className="text-xl mb-8 text-white text-secondary-foreground">
          {/* Launch Your App Faster with ShadcnKit Prebuilt Landing & Dashboard
          Components .  */}
          Reduce your development Time and launch faster with a collection of
          components, Landing,Dashboard and building blocks for your next SaaS
          project
        </p>
      </div>

      {/* <div className="mr-4">
        ⭐⭐⭐⭐⭐
      </div> */}
      <div className="mb-14">
        <div className="relative inline-flex  group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-purple-400 via-green-500 to-blue-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            title="Get quote now"
            className="relative inline-flex items-center mr-4 justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Get it now
          </a>
        </div>
        <a
          href="#_"
          className="inline-flex items-center justify-center ml-4 px-8 py-4 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          <span className="relative">View Demos</span>
        </a>
      </div>

      <ThemeBasedImage
        width={930}
        height={560}
        darkSrc="/assets/images/intro/intro-banner-dark.png"
        lightSrc="/assets/images/intro/intro-banner-light.png"
        className="rounded-2xl"
        alt="demo"
      />
    </div>
  );
};

export default Header;
