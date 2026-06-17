import PaymentMethod from "@/components/dashboard/dashboard-v2/payment-method";
import PickDate from "@/components/dashboard/dashboard-v2/pick-date";
import StaticsCard from "@/components/dashboard/dashboard-v2/statics-card";
import TeamMembers from "@/components/dashboard/dashboard-v2/team-members";
import TimeSpentExercising from "@/components/dashboard/dashboard-v2/time-spent-exercising";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StaticsCard className="col-span-12 lg:col-span-4" />
      <StaticsCard className="col-span-12 lg:col-span-4" />
      <StaticsCard className="col-span-12 lg:col-span-4" />

      <PaymentMethod className="col-span-12 lg:col-span-4" />
      <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-7 items-start">
        <TimeSpentExercising className="col-span-12" />
        <TeamMembers className="col-span-12 lg:col-span-6" />
        <PickDate className="col-span-12 lg:col-span-6" />
      </div>
    </div>
  );
};

export default Page;
