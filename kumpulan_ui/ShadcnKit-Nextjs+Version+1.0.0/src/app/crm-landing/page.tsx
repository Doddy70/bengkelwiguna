import Footer from "@/components/layouts/landing/footer";
import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import Demos from "@/components/landings/crm/demos";
import Header from "@/components/landings/crm/header";
import CallToAction from "@/components/landings/crm/call-to-action";
import Testimonials from "@/components/landings/crm/testimonials";
import Pricing from "@/components/landings/crm/pricing";

export default function Page() {
  return (
    <main>
      <LandingNavbar />
      <Header />
      <Demos />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
