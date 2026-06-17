import { Avatar, Button, Card } from "flowbite-react";

export function TestimonialCards() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="mb-8 grid lg:mb-12 lg:grid-cols-2">
          <Card className="flex flex-col items-center justify-center rounded-none border-0 border-b border-gray-200 bg-gray-50 p-3 text-center dark:border-gray-700 dark:bg-gray-800 md:border-r md:p-8">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Speechless with how easy this was to integrate
              </h3>
              <p className="my-4">
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
              <p className="my-4">
                Flowbite has code in one place and I'm not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
              </p>
              <p className="my-4">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              rounded
            >
              <div className="space-y-0.5 text-left font-medium dark:text-white">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </Avatar>
          </Card>
          <Card className="flex flex-col items-center justify-center rounded-none border-0 border-b border-gray-200 bg-gray-50 p-3 text-center dark:border-gray-700 dark:bg-gray-800 md:p-8">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p className="my-4">
                "Flowbite provides a robust set of design tokens and components
                based on the popular Tailwind CSS framework. From the most used
                UI components like forms and navigation bars to the whole app
                screens designed both for desktop and mobile, this UI kit
                provides a solid foundation for any project.
              </p>
              <p className="my-4">
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              rounded
            >
              <div className="space-y-0.5 text-left font-medium dark:text-white">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Lead designer at Dropbox
                </div>
              </div>
            </Avatar>
          </Card>
          <Card className="flex flex-col items-center justify-center rounded-none border-0 border-b border-gray-200 bg-gray-50 p-3 text-center shadow-none dark:border-gray-700 dark:bg-gray-800 md:border-b-0 md:border-r md:p-8">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Mindblowing workflow and variants
              </h3>
              <p className="my-4">
                "As someone who mainly designs in the browser, I've been a
                casual user of Figma, but as soon as I saw and started playing
                with Flowbite my mind was 🤯.
              </p>
              <p className="my-4">
                Everything is so well structured and simple to use (I've learnt
                so much about Figma by just using the toolkit).
              </p>
              <p className="my-4">
                Aesthetically, the well designed components are beautiful and
                will undoubtedly level up your next application."
              </p>
            </blockquote>
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              rounded
            >
              <div className="space-y-0.5 text-left font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer at Facebook
                </div>
              </div>
            </Avatar>
          </Card>
          <Card className="flex flex-col items-center justify-center rounded-none border-0 border-gray-200 bg-gray-50 p-3 text-center shadow-none dark:border-gray-700 dark:bg-gray-800 md:p-8">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Efficient Collaborating
              </h3>
              <p className="my-4">
                "This is a very complex and beautiful set of elements. Under the
                hood it comes with the best things from 2 different worlds:
                Figma and Tailwind.
              </p>
              <p className="my-4">
                You have many examples that can be used to create a fast
                prototype for your team."
              </p>
            </blockquote>
            <Avatar
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              rounded
            >
              <div className="space-y-0.5 text-left font-medium dark:text-white">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </Avatar>
          </Card>
        </div>
        <div className="flex w-full justify-center">
          <Button color="gray" outline>
            Show more...
          </Button>
        </div>
      </div>
    </section>
  );
}
