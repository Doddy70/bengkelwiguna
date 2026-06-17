import Demos from "@/components/landings/crm/demos";
import Header from "@/components/landings/crm/header";
import Pricing from "@/components/landings/crm/pricing";
import Testimonials from "@/components/landings/crm/testimonials";
import CallToAction from "@/components/landings/crm/call-to-action";
import ComponentViewer from "@/components/component-viewer";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-1 gap-14">
      <ComponentViewer
        title="Hero Section"
        Component={Header}
        componentPath="src/components/landings/crm/header.tsx"
      />

      <ComponentViewer
        title="Demo Section"
        Component={Demos}
        componentPath="src/components/landings/crm/demos.tsx"
      />

      <ComponentViewer
        title="CTA Section"
        Component={CallToAction}
        componentPath="src/components/landings/crm/call-to-action.tsx"
      />

      <ComponentViewer
        title="Testimonials Section"
        Component={Testimonials}
        componentPath="src/components/landings/crm/testimonials.tsx"
      />

      <ComponentViewer
        title="Pricing Section"
        Component={Pricing}
        componentPath="src/components/landings/crm/pricing.tsx"
      />
    </div>
  );
};

export default Page;
