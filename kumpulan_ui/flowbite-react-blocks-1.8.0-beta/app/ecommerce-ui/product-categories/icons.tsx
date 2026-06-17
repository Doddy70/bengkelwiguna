import {
  ArrowRight,
  Book,
  CameraPhoto,
  ClipboardCheck,
  ComputerSpeaker,
  DesktopPc,
  Eye,
  FaceGrin,
  Heart,
  Home,
  Phone,
  Server,
  ShoppingBag,
  Store,
  Truck,
  UserHeadset,
  WandMagicSparkles,
} from "flowbite-react-icons/outline";

export default function ProductCategoriesWithIcons() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-center justify-between border-gray-200 pb-4 text-gray-900 dark:border-gray-700 md:mb-8 md:flex md:border-b md:pb-8">
          <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white sm:mb-0 sm:text-2xl">
            Top categories
          </h2>
          <a
            href="#"
            className="hidden items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto md:flex lg:flex"
          >
            View more categories
            <ArrowRight className="-me-2 ms-2 h-5 w-5" />
          </a>
        </div>
        <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:mb-0 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Server className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Computers
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Fashion
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <ComputerSpeaker className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Electronics
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <UserHeadset className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Gaming
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <DesktopPc className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              TV/Projectors
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <WandMagicSparkles className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Toys
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <FaceGrin className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Sport
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Store className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Grocery
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Heart className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Health
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Truck className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Auto
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Book className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Books
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Home className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Home
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <CameraPhoto className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Photo/Video
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <ClipboardCheck className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Collectibles
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Eye className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Beauty
            </p>
          </a>
          <a href="#" className="hover group text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 group-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white group-hover:dark:bg-gray-700">
              <Phone className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-white">
              Phone/Tablets
            </p>
          </a>
        </div>
        <a
          href="#"
          className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:hidden"
        >
          View more categories
          <ArrowRight className="-me-2 ms-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
