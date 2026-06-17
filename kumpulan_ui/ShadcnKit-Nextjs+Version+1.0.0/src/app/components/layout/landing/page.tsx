import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import LandingNavbar2 from "@/components/layouts/landing/landing-navbar-2";
import Footer from "@/components/layouts/landing/footer";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Landing Navbar Section"
        Component={LandingNavbar}
        componentPath="src/components/layouts/landing/landing-navbar.tsx"
      />

      <ComponentViewer
        title="Landing Navbar-2 Section"
        Component={LandingNavbar2}
        componentPath="src/components/layouts/landing/landing-navbar-2.tsx"
      />

      <ComponentViewer
        title="Footer Section"
        Component={Footer}
        componentPath="src/components/layouts/landing/footer.tsx"
      />
    </div>
  );
};

export default Page;
