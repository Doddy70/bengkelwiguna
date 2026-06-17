import Visitor from "@/components/dashboard/analytics/visitor";
import Analytics from "@/components/dashboard/analytics/analytics";
import CompletedGoals from "@/components/dashboard/analytics/completed-goals";
import AveragePositions from "@/components/dashboard/analytics/average-positions";
import CompletedRates from "@/components/dashboard/analytics/completed-rates";
import SessionBrowser from "@/components/dashboard/analytics/session-browser";
import TopPerforming from "@/components/dashboard/analytics/top-performing";
import SalesCountry from "@/components/dashboard/analytics/sales-country";
import TopQueries from "@/components/dashboard/analytics/top-queries";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <AveragePositions className="col-span-12 lg:col-span-4" />
      <Analytics className="col-span-12 lg:col-span-8" />

      <Visitor className="col-span-12 lg:col-span-8" />
      <SessionBrowser className="col-span-12 lg:col-span-4" />

      <div className="col-span-12 lg:col-span-4">
        <CompletedGoals className="h-full max-h-[200px] overflow-hidden" />
        <CompletedRates className="h-full max-h-[200px] overflow-hidden mt-7" />
      </div>
      <SalesCountry className="col-span-12 lg:col-span-8" />

      <TopPerforming className="col-span-12 lg:col-span-6" />
      <TopQueries className="col-span-12 lg:col-span-6" />
    </div>
  );
};

export default Page;
