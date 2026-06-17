import Footer from "@/components/layouts/landing/footer";
import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import Analytics from "@/components/landings/management/analytics";
import Demos from "@/components/landings/management/demos";
import FAQs from "@/components/landings/management/faqs";
import Features from "@/components/landings/management/features";
import Header from "@/components/landings/management/header";
import Sponsors from "@/components/landings/management/sponsors";

export default function Home() {
  return (
    <main>
      <LandingNavbar />
      <Header />
      <Features />
      <Demos />
      <FAQs />
      <Analytics />
      <Sponsors />
      <Footer />
    </main>
  );
}
