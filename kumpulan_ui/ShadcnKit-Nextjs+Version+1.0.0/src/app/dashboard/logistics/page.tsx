import Banner from "@/components/dashboard/logistics/banner";
import CompanyProgress from "@/components/dashboard/logistics/company-progress";
import OurTransportations from "@/components/dashboard/logistics/our-transportations";
import RoleManagement from "@/components/dashboard/logistics/role-management";
import ShipmentHistory from "@/components/dashboard/logistics/shipment-history";
import ShippingOrders from "@/components/dashboard/logistics/shipping-orders";
import Statistics from "@/components/dashboard/logistics/statistics";
import TopSellingCategories from "@/components/dashboard/logistics/top-selling-categories";
import VisitsByCountry from "@/components/dashboard/logistics/visits-by-country";

const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <Statistics className="col-span-12 lg:col-span-5" />
      <div className="col-span-12 lg:col-span-7">
        <ShippingOrders />
        <Banner className="mt-7" />
      </div>

      <CompanyProgress className="col-span-12 lg:col-span-8" />
      <RoleManagement className="col-span-12 lg:col-span-4" />

      <OurTransportations className="col-span-12 lg:col-span-4" />
      <TopSellingCategories className="col-span-12 lg:col-span-8" />

      <VisitsByCountry className="col-span-12 lg:col-span-4" />
      <ShipmentHistory className="col-span-12 lg:col-span-8" />
    </div>
  );
};

export default Page;
