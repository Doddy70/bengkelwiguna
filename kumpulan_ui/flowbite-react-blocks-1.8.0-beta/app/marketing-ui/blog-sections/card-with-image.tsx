import { Badge, Card } from "flowbite-react";

export function CardWithImageBlogSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="[&>div]:p-5">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                alt="office laptop working"
              />
            </a>
            <span>
              <Badge color="purple" className="inline">
                Article
              </Badge>
            </span>
            <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Our first office</a>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
          </Card>
          <Card className="[&>div]:p-5">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                alt="Google HQ"
              />
            </a>
            <span>
              <Badge color="purple" className="inline">
                Article
              </Badge>
            </span>
            <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">We partnered up with Google</a>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="Roberta Casas avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Roberta Casas</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
          </Card>
          <Card className="[&>div]:p-5">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                alt="office laptops"
              />
            </a>
            <span>
              <Badge color="purple" className="inline">
                Article
              </Badge>
            </span>
            <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Our first project with React</a>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                alt="Sofia McGuire avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Sofia McGuire</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
