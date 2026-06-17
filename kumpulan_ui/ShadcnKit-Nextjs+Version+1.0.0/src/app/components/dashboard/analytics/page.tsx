import AveragePositions from "@/components/dashboard/analytics/average-positions";
import Analytics from "@/components/dashboard/analytics/analytics";
import Visitor from "@/components/dashboard/analytics/visitor";
import SessionBrowser from "@/components/dashboard/analytics/session-browser";
import CompletedGoals from "@/components/dashboard/analytics/completed-goals";
import CompletedRates from "@/components/dashboard/analytics/completed-rates";
import SalesCountry from "@/components/dashboard/analytics/sales-country";
import TopPerforming from "@/components/dashboard/analytics/top-performing";
import TopQueries from "@/components/dashboard/analytics/top-queries";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Average Positions Section"
        Component={AveragePositions}
        componentPath="src/components/dashboard/analytics/average-positions.tsx"
      />

      <ComponentViewer
        title="Analytics Section"
        Component={Analytics}
        componentPath="src/components/dashboard/analytics/analytics.tsx"
      />

      <ComponentViewer
        title="Visitor Section"
        Component={Visitor}
        componentPath="src/components/dashboard/analytics/visitor.tsx"
      />

      <ComponentViewer
        title="Session Browser Section"
        Component={SessionBrowser}
        componentPath="src/components/dashboard/analytics/session-browser.tsx"
      />

      <ComponentViewer
        title="Completed Goals Section"
        Component={CompletedGoals}
        componentPath="src/components/dashboard/analytics/completed-goals.tsx"
      />

      <ComponentViewer
        title="Completed Rates Section"
        Component={CompletedRates}
        componentPath="src/components/dashboard/analytics/completed-rates.tsx"
      />

      <ComponentViewer
        title="Sales Country Section"
        Component={SalesCountry}
        componentPath="src/components/dashboard/analytics/sales-country.tsx"
      />

      <ComponentViewer
        title="Top Performing Section"
        Component={TopPerforming}
        componentPath="src/components/dashboard/analytics/top-performing.tsx"
      />

      <ComponentViewer
        title="Top Queries Section"
        Component={TopQueries}
        componentPath="src/components/dashboard/analytics/top-queries.tsx"
      />
    </div>
  );
};

export default Page;
