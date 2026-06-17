export default function GridLayoutCardsRelatedArticles() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Read Next
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article>
            <a href="#">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                Flowbite enables IT to automate Apple device configuration
              </a>
            </h2>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
            >
              Read more
            </a>
          </article>
          <article>
            <a href="#">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">How AI is transforming your smartphone</a>
            </h2>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
            >
              Read more
            </a>
          </article>
          <article>
            <a href="#">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">Android, ChromeOS, and the future of app discovery</a>
            </h2>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
            >
              Read more
            </a>
          </article>
          <article>
            <a href="#">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-4.jpg"
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">What Google collaboration app offers remote teams</a>
            </h2>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
            >
              Read more
            </a>
          </article>
          <article>
            <a href="#">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-5.jpg"
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                Collaboration app spending grows in the face of crisis
              </a>
            </h2>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
            >
              Read more
            </a>
          </article>
          <article>
            <a href="#">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-6.jpg"
                className="mb-5 w-full max-w-full rounded-lg"
                alt=""
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">
                For developers, too many meetings, too little 'focus' time
              </a>
            </h2>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
            >
              Read more
            </a>
          </article>
        </div>
      </div>
    </aside>
  );
}
