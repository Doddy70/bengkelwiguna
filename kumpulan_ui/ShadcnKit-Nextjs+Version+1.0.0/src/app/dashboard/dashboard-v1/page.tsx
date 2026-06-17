import Chat from "@/components/dashboard/dashboard-v1/chat";
import Payments from "@/components/dashboard/dashboard-v1/payments";
import Statistics from "@/components/dashboard/dashboard-v1/statistics";
import StatisticsCards from "@/components/dashboard/dashboard-v1/statistics-cards";
import Subscriptions from "@/components/dashboard/dashboard-v1/subscriptions";
import TotalRevenue from "@/components/dashboard/dashboard-v1/total-revenue";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StatisticsCards className="col-span-12 lg:col-span-4" />
      <Statistics className="col-span-12 lg:col-span-8" />

      <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-7">
        <TotalRevenue className="col-span-12 lg:col-span-6" />
        <Subscriptions className="col-span-12 lg:col-span-6" />
        <Payments className="col-span-12" />
      </div>

      <Chat className="col-span-12 lg:col-span-4" />
    </div>
  );
};

export default Page;
