import Footer from "@/components/layouts/landing/footer";
import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import Pricing from "@/components/landings/pricing/pricing";

export default function Page() {
  return (
    <main>
      <LandingNavbar />
      <Pricing />
      <Footer />
    </main>
  );
}
