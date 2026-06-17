import StatisticsCard1 from "@/components/dashboard/ecommerce/statistics-card-1";
import StatisticsCard2 from "@/components/dashboard/ecommerce/statistics-card-2";
import StatisticsCard3 from "@/components/dashboard/ecommerce/statistics-card-3";
import StatisticsCard4 from "@/components/dashboard/ecommerce/statistics-card-4";
import Sales from "@/components/dashboard/ecommerce/sales";
import CustomerReview from "@/components/dashboard/ecommerce/customer-review";
import RecentOrders from "@/components/dashboard/ecommerce/recent-orders";
import TopSeller from "@/components/dashboard/ecommerce/top-seller";
import ReturningRate from "@/components/dashboard/ecommerce/returning-rate";
import CustomerTransactions from "@/components/dashboard/ecommerce/customer-transactions";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="StatisticsCard1 Section"
        Component={StatisticsCard1}
        componentPath="src/components/dashboard/ecommerce/statistics-card-1.tsx"
      />

      <ComponentViewer
        title="StatisticsCard2 Section"
        Component={StatisticsCard2}
        componentPath="src/components/dashboard/ecommerce/statistics-card-2.tsx"
      />

      <ComponentViewer
        title="StatisticsCard3 Section"
        Component={StatisticsCard3}
        componentPath="src/components/dashboard/ecommerce/statistics-card-3.tsx"
      />

      <ComponentViewer
        title="StatisticsCard4 Section"
        Component={StatisticsCard4}
        componentPath="src/components/dashboard/ecommerce/statistics-card-4.tsx"
      />

      <ComponentViewer
        title="Sales Section"
        Component={Sales}
        componentPath="src/components/dashboard/ecommerce/sales.tsx"
      />

      <ComponentViewer
        title="CustomerReview Section"
        Component={CustomerReview}
        componentPath="src/components/dashboard/ecommerce/customer-review.tsx"
      />

      <ComponentViewer
        title="RecentOrders Section"
        Component={RecentOrders}
        componentPath="src/components/dashboard/ecommerce/recent-orders.tsx"
      />

      <ComponentViewer
        title="TopSeller Section"
        Component={TopSeller}
        componentPath="src/components/dashboard/ecommerce/top-seller.tsx"
      />

      <ComponentViewer
        title="ReturningRate Section"
        Component={ReturningRate}
        componentPath="src/components/dashboard/ecommerce/returning-rate.tsx"
      />

      <ComponentViewer
        title="CustomerTransactions Section"
        Component={CustomerTransactions}
        componentPath="src/components/dashboard/ecommerce/customer-transactions.tsx"
      />
    </div>
  );
};

export default Page;
