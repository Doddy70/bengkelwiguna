import CustomerReview from "@/components/dashboard/ecommerce/customer-review";
import CustomerTransactions from "@/components/dashboard/ecommerce/customer-transactions";
import RecentOrders from "@/components/dashboard/ecommerce/recent-orders";
import ReturningRate from "@/components/dashboard/ecommerce/returning-rate";
import Sales from "@/components/dashboard/ecommerce/sales";
import StatisticsCard1 from "@/components/dashboard/ecommerce/statistics-card-1";
import StatisticsCard2 from "@/components/dashboard/ecommerce/statistics-card-2";
import StatisticsCard3 from "@/components/dashboard/ecommerce/statistics-card-3";
import StatisticsCard4 from "@/components/dashboard/ecommerce/statistics-card-4";
import TopSeller from "@/components/dashboard/ecommerce/top-seller";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StatisticsCard1 className="col-span-12 lg:col-span-3" />
      <StatisticsCard2 className="col-span-12 lg:col-span-3" />
      <StatisticsCard3 className="col-span-12 lg:col-span-3" />
      <StatisticsCard4 className="col-span-12 lg:col-span-3" />

      <Sales className="col-span-12 lg:col-span-8" />
      <CustomerReview className="col-span-12 lg:col-span-4" />

      <RecentOrders className="col-span-12 lg:col-span-8" />
      <TopSeller className="col-span-12 lg:col-span-4" />

      <ReturningRate className="col-span-12 lg:col-span-4" />
      <CustomerTransactions className="col-span-12 lg:col-span-8" />
    </div>
  );
};

export default Page;
