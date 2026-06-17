export function VideoEmbedContentSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:text-center lg:px-12 lg:py-16">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We didn't reinvent the wheel
        </h2>
        <p className="text-gray-500 dark:text-gray-400 sm:text-lg md:px-20 lg:px-36 xl:px-48">
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.
        </p>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/4bnJG2UDr9A"
          title="YouTube video player"
          className="mx-auto mt-8 h-64 w-full max-w-2xl rounded-lg sm:h-96 lg:mt-12"
        />
      </div>
    </section>
  );
}
