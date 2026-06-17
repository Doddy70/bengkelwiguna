import { Alert } from "flowbite-react";

export function CardsWithGridLayoutAndCTATeamSection() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our people make us great
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
            You'll interact with talented professionals, will be challenged to
            solve difficult problems and think in new and creative ways.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 xl:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Robert Brown</p>
                <p className="text-base font-medium text-gray-300">
                  CEO &amp; Co-Founder
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-2.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">
                  Leslie Livingston
                </p>
                <p className="text-base font-medium text-gray-300">
                  CTO &amp; Co-Founder
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-3.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Joseph McFall</p>
                <p className="text-base font-medium text-gray-300">
                  Front-end Developer
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-4.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Helene Engels</p>
                <p className="text-base font-medium text-gray-300">
                  Front-end Developer
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-5.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Thom Belly</p>
                <p className="text-base font-medium text-gray-300">
                  Front-end Developer
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-6.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Bonnie Green</p>
                <p className="text-base font-medium text-gray-300">
                  React Developer
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-7.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Roberta Casas</p>
                <p className="text-base font-medium text-gray-300">
                  VueJS Developer
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-8.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Jese Leos</p>
                <p className="text-base font-medium text-gray-300">
                  AWS Developer
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-9.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Lana Byrd</p>
                <p className="text-base font-medium text-gray-300">Designer</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-10.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Karen Nelson</p>
                <p className="text-base font-medium text-gray-300">
                  Marketing &amp; SEO
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-11.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Neil Sims</p>
                <p className="text-base font-medium text-gray-300">
                  Accountant
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-12.png"
              alt=""
            />
            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
              <div className="text-center">
                <p className="text-xl font-bold text-white">Thomas Lean</p>
                <p className="text-base font-medium text-gray-300">Marketing</p>
              </div>
            </div>
          </div>
        </div>
        <Alert color="gray" className="mx-auto mt-8 max-w-3xl lg:mt-16">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-1.5">
              <svg
                aria-hidden="true"
                className="hidden h-5 w-5 shrink-0 text-gray-800 dark:text-gray-400 md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-base font-normal text-gray-700 dark:text-gray-400">
                <span className="font-semibold">
                  Want to join the Flowbite team?
                </span>
                &nbsp;We are growing our community.
              </span>
            </div>
            <a
              href="#"
              title=""
              className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Join our team
              <svg
                aria-hidden="true"
                className="ml-1.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </Alert>
      </div>
    </section>
  );
}
