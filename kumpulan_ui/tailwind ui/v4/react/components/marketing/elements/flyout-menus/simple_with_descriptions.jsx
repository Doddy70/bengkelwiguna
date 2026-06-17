import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Blog', description: 'Learn about tips, product updates and company culture', href: '#' },
  {
    name: 'Help center',
    description: 'Get all of your questions answered in our forums of contact support',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it', href: '#' },
  { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously', href: '#' },
]

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm/6 ring-1 shadow-lg ring-gray-900/5">
          {solutions.map((item) => (
            <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
              <a href={item.href} className="font-semibold text-gray-900">
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}
