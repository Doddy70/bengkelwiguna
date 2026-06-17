import Header from "@/components/landings/new-intro/header";
import Demos from "@/components/landings/new-intro/demos";
import Features from "@/components/landings/new-intro/features";
import Banner from "@/components/landings/new-intro/banner";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Header Section"
        Component={Header}
        componentPath="src/components/landings/new-intro/header.tsx"
      />

      <ComponentViewer
        title="Demos Section"
        Component={Demos}
        componentPath="src/components/landings/new-intro/demos.tsx"
      />

      <ComponentViewer
        title="Features Section"
        Component={Features}
        componentPath="src/components/landings/new-intro/features.tsx"
      />

      <ComponentViewer
        title="Banner Section"
        Component={Banner}
        componentPath="src/components/landings/new-intro/banner.tsx"
      />
    </div>
  );
};

export default Page;
