import Goals from "@/components/dashboard/dashboard-v4/goals";
import Payments from "@/components/dashboard/dashboard-v4/payments";
import Report from "@/components/dashboard/dashboard-v4/report";
import StaticsCard from "@/components/dashboard/dashboard-v4/statics-card";
import TimeSpentExercising from "@/components/dashboard/dashboard-v4/time-spent-exercising";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StaticsCard className="col-span-12" />

      <Goals className="col-span-12 lg:col-span-4" />
      <TimeSpentExercising className="col-span-12 lg:col-span-8" />

      <Payments className="col-span-12 lg:col-span-8" />
      <Report className="col-span-12 lg:col-span-4" />
    </div>
  );
};

export default Page;
