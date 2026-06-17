import DashboardNavbar from "@/components/layouts/dashboard/dashboard-navbar";
import Footer from "@/components/layouts/dashboard/footer";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Dashboard Navbar Section"
        Component={DashboardNavbar}
        componentPath="src/components/layouts/dashboard/dashboard-navbar.tsx"
      />

      <ComponentViewer
        title="Footer Section"
        Component={Footer}
        componentPath="src/components/layouts/dashboard/footer.tsx"
      />
    </div>
  );
};

export default Page;
