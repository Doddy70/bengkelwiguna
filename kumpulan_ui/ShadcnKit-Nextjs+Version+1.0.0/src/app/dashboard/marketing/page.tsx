import AllCampaigns from "@/components/dashboard/marketing/all-campaigns";
import AllChannels from "@/components/dashboard/marketing/all-channels";
import Banner from "@/components/dashboard/marketing/banner";
import CompanyProgress from "@/components/dashboard/marketing/company-progress";
import Sales from "@/components/dashboard/marketing/sales";
import StatisticsCard1 from "@/components/dashboard/marketing/statistics-card-1";
import StatisticsCard2 from "@/components/dashboard/marketing/statistics-card-2";
import StatisticsCard3 from "@/components/dashboard/marketing/statistics-card-3";
import StatisticsCard4 from "@/components/dashboard/marketing/statistics-card-4";
import YouTubeCampaign from "@/components/dashboard/marketing/youtube-campaign";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <StatisticsCard1 className="col-span-12 sm:col-span-6 lg:col-span-3" />
      <StatisticsCard2 className="col-span-12 sm:col-span-6 lg:col-span-3" />
      <StatisticsCard3 className="col-span-12 sm:col-span-6 lg:col-span-3" />
      <StatisticsCard4 className="col-span-12 sm:col-span-6 lg:col-span-3" />

      <CompanyProgress className="col-span-12 lg:col-span-8" />
      <AllChannels className="col-span-12 lg:col-span-4" />

      <YouTubeCampaign className="col-span-12 lg:col-span-4" />
      <AllCampaigns className="col-span-12 lg:col-span-8" />

      <Banner className="col-span-12 lg:col-span-4" />
      <Sales className="col-span-12 lg:col-span-8" />
    </div>
  );
};

export default Page;
