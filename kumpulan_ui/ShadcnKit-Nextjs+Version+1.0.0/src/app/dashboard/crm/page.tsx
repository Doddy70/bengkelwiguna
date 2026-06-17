import Analytics from "@/components/dashboard/crm/analytics";
import CallDuration from "@/components/dashboard/crm/call-duration";
import DealForecastOwner from "@/components/dashboard/crm/deal-forecast-owner";
import DealStatus from "@/components/dashboard/crm/deal-status";
import DealType from "@/components/dashboard/crm/deal-type";
import MostLeads from "@/components/dashboard/crm/most-leads";
import RecentLeads from "@/components/dashboard/crm/recent-leads";
import SalesForecase from "@/components/dashboard/crm/sales-forecase";
import StatisticsCard from "@/components/dashboard/crm/statistics-card";
import ToDoList from "@/components/dashboard/crm/to-do-list";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StatisticsCard className="col-span-12" />

      <Analytics className="col-span-12 lg:col-span-8" />
      <MostLeads className="col-span-12 lg:col-span-4" />

      <DealStatus className="col-span-12 lg:col-span-8" />
      <DealType className="col-span-12 lg:col-span-4" />

      <CallDuration className="col-span-12 lg:col-span-4" />
      <SalesForecase className="col-span-12 lg:col-span-4" />
      <DealForecastOwner className="col-span-12 lg:col-span-4" />

      <RecentLeads className="col-span-12 lg:col-span-8" />
      <ToDoList className="col-span-12 lg:col-span-4" />
    </div>
  );
};

export default Page;
