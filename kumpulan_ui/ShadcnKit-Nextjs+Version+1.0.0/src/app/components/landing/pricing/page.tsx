import Pricing from "@/components/landings/pricing/pricing";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Pricing Plans Section"
        Component={Pricing}
        componentPath="src/components/landings/pricing/pricing.tsx"
      />
    </div>
  );
};

export default Page;
