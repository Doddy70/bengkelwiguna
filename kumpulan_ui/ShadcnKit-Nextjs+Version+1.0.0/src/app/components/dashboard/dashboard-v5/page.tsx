import StatisticsCards from "@/components/dashboard/dashboard-v5/statistics-cards";
import Payments from "@/components/dashboard/dashboard-v5/payments";
import TotalRevenue from "@/components/dashboard/dashboard-v5/total-revenue";
import Subscriptions from "@/components/dashboard/dashboard-v5/subscriptions";
import TimeSpentExercising from "@/components/dashboard/dashboard-v5/time-spent-exercising";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Statistics Cards Section"
        Component={StatisticsCards}
        componentPath="src/components/dashboard/dashboard-v5/statistics-cards.tsx"
      />

      <ComponentViewer
        title="Payments Section"
        Component={Payments}
        componentPath="src/components/dashboard/dashboard-v5/payments.tsx"
      />

      <ComponentViewer
        title="Total Revenue Section"
        Component={TotalRevenue}
        componentPath="src/components/dashboard/dashboard-v5/total-revenue.tsx"
      />

      <ComponentViewer
        title="Subscriptions Section"
        Component={Subscriptions}
        componentPath="src/components/dashboard/dashboard-v5/subscriptions.tsx"
      />

      <ComponentViewer
        title="Time Spent Exercising Section"
        Component={TimeSpentExercising}
        componentPath="src/components/dashboard/dashboard-v5/time-spent-exercising.tsx"
      />
    </div>
  );
};

export default Page;
