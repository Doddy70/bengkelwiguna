import PaymentMethod from "@/components/dashboard/dashboard-v3/payment-method";
import PickDate from "@/components/dashboard/dashboard-v3/pick-date";
import StaticsCard from "@/components/dashboard/dashboard-v3/statics-card";
import TeamMembers from "@/components/dashboard/dashboard-v3/team-members";
import TimeSpentExercising from "@/components/dashboard/dashboard-v3/time-spent-exercising";
import TotalRevenue from "@/components/dashboard/dashboard-v3/total-revenue";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StaticsCard className="col-span-12 lg:col-span-4" />
      <StaticsCard className="col-span-12 lg:col-span-4" />
      <StaticsCard className="col-span-12 lg:col-span-4" />

      <div className="col-span-12 lg:col-span-4">
        <TotalRevenue className="col-span-12 mb-7" />
        <PaymentMethod className="col-span-12" />
      </div>

      <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-7">
        <TimeSpentExercising className="col-span-12" />
        <TeamMembers className="col-span-12 lg:col-span-6" />
        <PickDate className="col-span-12 lg:col-span-6" />
      </div>
    </div>
  );
};

export default Page;
