import Payments from "@/components/dashboard/dashboard-v5/payments";
import StatisticsCards from "@/components/dashboard/dashboard-v5/statistics-cards";
import Subscriptions from "@/components/dashboard/dashboard-v5/subscriptions";
import TotalRevenue from "@/components/dashboard/dashboard-v5/total-revenue";
import TimeSpentExercising from "@/components/dashboard/dashboard-v5/time-spent-exercising";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StatisticsCards className="col-span-12 lg:col-span-5" />
      <Payments className="col-span-12 lg:col-span-7" />

      <TotalRevenue className="col-span-12 lg:col-span-4" />
      <Subscriptions className="col-span-12 lg:col-span-4" />
      <TotalRevenue className="col-span-12 lg:col-span-4" />

      <TimeSpentExercising className="col-span-12" />
    </div>
  );
};

export default Page;
