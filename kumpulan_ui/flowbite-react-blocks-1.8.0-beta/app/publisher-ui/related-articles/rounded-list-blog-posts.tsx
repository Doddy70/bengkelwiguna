export default function RoundedListOfBlogPostsRelatedArticles() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Read next
        </h2>
        <article className="mb-8 flex">
          <a href="#" className="shrink-0">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
              className="mr-5 h-32 w-32 max-w-full rounded-full align-middle"
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
  );
}
