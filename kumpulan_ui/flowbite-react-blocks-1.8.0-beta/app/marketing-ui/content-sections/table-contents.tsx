export function TableOfContentsCardContentSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Table of contents
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 rounded-lg border border-gray-100 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
          <div className="border-b border-gray-200 pb-5 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chapter 1: Introduction to Design Principles
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              This chapter provides an overview of the basic principles of
              design, such as balance, contrast, and hierarchy. It explains how
              these principles can be used to create visually pleasing and
              effective designs.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-5 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chapter 2: Designing for User Experience
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              This chapter explores the concept of user experience (UX) design
              and how it relates to the overall design process. It covers topics
              such as user research, usability testing, and user-centered
              design.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-5 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chapter 3: Typography in Design
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              This chapter delves into the art and technique of typography,
              including the history and evolution of type, the basics of
              typographic hierarchy, and the use of typography in digital
              design.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-5 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chapter 4: Color Theory and its Applications
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              This chapter covers the basics of color theory and its application
              in design. It includes information on color wheels, complementary
              colors, color schemes, and the psychological effects of color. It
              also covers color management and color spaces in digital design.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-5 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chapter 5: Design for the Web
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              This chapter will cover the basics of web design, including the
              principles of responsive design, website layout, and typography,
              as well as the use of HTML, CSS, and JavaScript.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chapter 6: Branding and Identity Design
            </h3>
            <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              This chapter will explore the process of creating and maintaining
              a brand, including the development of a brand strategy, the
              creation of a visual identity, and the use of design elements to
              communicate a brand's message.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Get free sample chapters
            <svg
              aria-hidden="true"
              className="ml-2 h-5 w-5"
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
      </div>
    </section>
  );
}
