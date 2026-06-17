import StatisticsCard1 from "@/components/dashboard/marketing/statistics-card-1";
import StatisticsCard2 from "@/components/dashboard/marketing/statistics-card-2";
import StatisticsCard3 from "@/components/dashboard/marketing/statistics-card-3";
import StatisticsCard4 from "@/components/dashboard/marketing/statistics-card-4";
import CompanyProgress from "@/components/dashboard/marketing/company-progress";
import AllChannels from "@/components/dashboard/marketing/all-channels";
import YoutubeCampaign from "@/components/dashboard/marketing/youtube-campaign";
import AllCampaigns from "@/components/dashboard/marketing/all-campaigns";
import Banner from "@/components/dashboard/marketing/banner";
import Sales from "@/components/dashboard/marketing/sales";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Statistics Card-1 Section"
        Component={StatisticsCard1}
        componentPath="src/components/dashboard/marketing/statistics-card-1.tsx"
      />

      <ComponentViewer
        title="Statistics Card-2 Section"
        Component={StatisticsCard2}
        componentPath="src/components/dashboard/marketing/statistics-card-2.tsx"
      />

      <ComponentViewer
        title="Statistics Card-3 Section"
        Component={StatisticsCard3}
        componentPath="src/components/dashboard/marketing/statistics-card-3.tsx"
      />

      <ComponentViewer
        title="Statistics Card-4 Section"
        Component={StatisticsCard4}
        componentPath="src/components/dashboard/marketing/statistics-card-4.tsx"
      />

      <ComponentViewer
        title="Company Progress Section"
        Component={CompanyProgress}
        componentPath="src/components/dashboard/marketing/company-progress.tsx"
      />

      <ComponentViewer
        title="All Channels Section"
        Component={AllChannels}
        componentPath="src/components/dashboard/marketing/all-channels.tsx"
      />

      <ComponentViewer
        title="Youtube Campaign Section"
        Component={YoutubeCampaign}
        componentPath="src/components/dashboard/marketing/youtube-campaign.tsx"
      />

      <ComponentViewer
        title="All Campaigns Section"
        Component={AllCampaigns}
        componentPath="src/components/dashboard/marketing/all-campaigns.tsx"
      />

      <ComponentViewer
        title="Banner Section"
        Component={Banner}
        componentPath="src/components/dashboard/marketing/banner.tsx"
      />

      <ComponentViewer
        title="Sales Section"
        Component={Sales}
        componentPath="src/components/dashboard/marketing/sales.tsx"
      />
    </div>
  );
};

export default Page;
