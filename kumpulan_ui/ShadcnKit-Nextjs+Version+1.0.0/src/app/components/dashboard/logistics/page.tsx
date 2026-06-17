import Statistics from "@/components/dashboard/logistics/statistics";
import ShippingOrders from "@/components/dashboard/logistics/shipping-orders";
import Banner from "@/components/dashboard/logistics/banner";
import CompanyProgress from "@/components/dashboard/logistics/company-progress";
import RoleManagement from "@/components/dashboard/logistics/role-management";
import OurTransportations from "@/components/dashboard/logistics/our-transportations";
import TopSellingCategories from "@/components/dashboard/logistics/top-selling-categories";
import VisitsByCountry from "@/components/dashboard/logistics/visits-by-country";
import ShipmentHistory from "@/components/dashboard/logistics/shipment-history";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Statistics Section"
        Component={Statistics}
        componentPath="src/components/dashboard/logistics/statistics.tsx"
      />

      <ComponentViewer
        title="Shipping Orders Section"
        Component={ShippingOrders}
        componentPath="src/components/dashboard/logistics/shipping-orders.tsx"
      />

      <ComponentViewer
        title="Banner Section"
        Component={Banner}
        componentPath="src/components/dashboard/logistics/banner.tsx"
      />

      <ComponentViewer
        title="Company Progress Section"
        Component={CompanyProgress}
        componentPath="src/components/dashboard/logistics/company-progress.tsx"
      />

      <ComponentViewer
        title="Role Management Section"
        Component={RoleManagement}
        componentPath="src/components/dashboard/logistics/role-management.tsx"
      />

      <ComponentViewer
        title="Our Transportations Section"
        Component={OurTransportations}
        componentPath="src/components/dashboard/logistics/our-transportations.tsx"
      />

      <ComponentViewer
        title="Top Selling Categories Section"
        Component={TopSellingCategories}
        componentPath="src/components/dashboard/logistics/top-selling-categories.tsx"
      />

      <ComponentViewer
        title="Visits By Country Section"
        Component={VisitsByCountry}
        componentPath="src/components/dashboard/logistics/visits-by-country.tsx"
      />

      <ComponentViewer
        title="Shipment History Section"
        Component={ShipmentHistory}
        componentPath="src/components/dashboard/logistics/shipment-history.tsx"
      />
    </div>
  );
};

export default Page;
