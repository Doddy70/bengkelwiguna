export default function HorizontalCardWithImageRelatedArticles() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white lg:mb-8">
          Related articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <article className="flex flex-col xl:flex-row">
            <a href="#" className="mb-2 xl:mb-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                className="mr-5 max-w-sm"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 max-w-sm text-gray-500 dark:text-gray-400">
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
          <article className="flex flex-col xl:flex-row">
            <a href="#" className="mb-2 xl:mb-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                className="mr-5 max-w-sm"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4 max-w-sm text-gray-500 dark:text-gray-400">
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
          <article className="flex flex-col xl:flex-row">
            <a href="#" className="mb-2 xl:mb-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                className="mr-5 max-w-sm"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">We partnered up with Google</a>
              </h2>
              <p className="mb-4 max-w-sm text-gray-500 dark:text-gray-400">
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
          <article className="flex flex-col xl:flex-row">
            <a href="#" className="mb-2 xl:mb-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                className="mr-5 max-w-sm"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4 max-w-sm text-gray-500 dark:text-gray-400">
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
        </div>
      </div>
    </aside>
  );
}
