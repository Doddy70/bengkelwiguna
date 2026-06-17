import {
  Archive,
  ArrowRight,
  Book,
  CameraPhoto,
  ClapperboardPlay,
  Clock,
  ComputerSpeaker,
  DesktopPc,
  Dna,
  Fingerprint,
  Globe,
  Headphones,
  Heart,
  Home,
  Keyboard,
  Lightbulb,
  ObjectsColumn,
  Palette,
  Printer,
  ShoppingBag,
  Store,
  Truck,
  UserHeadset,
  WandMagicSparkles,
} from "flowbite-react-icons/outline";

export default function DefaultProductCategories() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shop by category
          </h2>
          <a
            href="#"
            title=""
            className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            See more categories
            <ArrowRight className="ms-1 h-5 w-5" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <DesktopPc className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Computer &amp; Office
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <WandMagicSparkles className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Collectibles &amp; Toys
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Book className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Books
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ShoppingBag className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Fashion/Clothes
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Globe className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Sports &amp; Outdoors
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Palette className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Painting &amp; Hobby
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Lightbulb className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Electronics
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Store className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Food &amp; Grocery
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Headphones className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Music
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ComputerSpeaker className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              TV/Projectors
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Dna className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Health &amp; beauty
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Home className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Home Air Quality
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <UserHeadset className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Gaming/Consoles
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Truck className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Car &amp; Motorbike
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CameraPhoto className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Photo/Video
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Fingerprint className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Security & Wi-Fi
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Keyboard className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Computer Peripherals
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ObjectsColumn className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Phone Accessories
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Clock className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Watches
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Printer className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Printers
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ClapperboardPlay className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Projectors
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Heart className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Skin Care
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CameraPhoto className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Photo/Video
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Archive className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Office Supplies
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
