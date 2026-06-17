export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="max-w-2xl text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
          Everything you need to deploy your app
        </p>
        <div className="relative mt-16 aspect-2432/1442 h-[36rem] sm:h-auto sm:w-[calc(var(--container-7xl)-calc(var(--spacing)*16))]">
          <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] ring-1 shadow-xs ring-black/5" />
          <img
            alt=""
            src="https://tailwindui.com/plus-assets/img/component-images/project-app-screenshot.png"
            className="h-full rounded-xl ring-1 shadow-2xl ring-black/10"
          />
        </div>
      </div>
    </div>
  )
}
