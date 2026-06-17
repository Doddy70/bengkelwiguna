import StaticsCard from "@/components/dashboard/dashboard-v3/statics-card";
import TotalRevenue from "@/components/dashboard/dashboard-v3/total-revenue";
import PaymentMethod from "@/components/dashboard/dashboard-v3/payment-method";
import TimeSpentExercising from "@/components/dashboard/dashboard-v3/time-spent-exercising";
import TeamMembers from "@/components/dashboard/dashboard-v3/team-members";
import PickDate from "@/components/dashboard/dashboard-v3/pick-date";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Statics Card Section"
        Component={StaticsCard}
        componentPath="src/components/dashboard/dashboard-v3/statics-card.tsx"
      />

      <ComponentViewer
        title="Total Revenue Section"
        Component={TotalRevenue}
        componentPath="src/components/dashboard/dashboard-v3/payment-method.tsx"
      />

      <ComponentViewer
        title="Payment Method Section"
        Component={PaymentMethod}
        componentPath="src/components/dashboard/dashboard-v3/payment-method.tsx"
      />

      <ComponentViewer
        title="Time Spent Exercising Section"
        Component={TimeSpentExercising}
        componentPath="src/components/dashboard/dashboard-v3/time-spent-exercising.tsx"
      />

      <ComponentViewer
        title="Team Members Section"
        Component={TeamMembers}
        componentPath="src/components/dashboard/dashboard-v3/team-members.tsx"
      />

      <ComponentViewer
        title="Pick Date Section"
        Component={PickDate}
        componentPath="src/components/dashboard/dashboard-v3/pick-date.tsx"
      />
    </div>
  );
};

export default Page;
