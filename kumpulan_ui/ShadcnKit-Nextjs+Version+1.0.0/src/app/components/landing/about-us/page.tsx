import Demos from "@/components/landings/about-us/demos";
import Teams from "@/components/landings/about-us/teams";
import Header from "@/components/landings/about-us/header";
import Testimonials from "@/components/landings/about-us/testimonials";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Header Section"
        Component={Header}
        componentPath="src/components/landings/about-us/header.tsx"
      />

      <ComponentViewer
        title="Demos Section"
        Component={Demos}
        componentPath="src/components/landings/about-us/demos.tsx"
      />

      <ComponentViewer
        title="Teams Section"
        Component={Teams}
        componentPath="src/components/landings/about-us/teams.tsx"
      />

      <ComponentViewer
        title="Testimonials Section"
        Component={Testimonials}
        componentPath="src/components/landings/about-us/testimonials.tsx"
      />
    </div>
  );
};

export default Page;
