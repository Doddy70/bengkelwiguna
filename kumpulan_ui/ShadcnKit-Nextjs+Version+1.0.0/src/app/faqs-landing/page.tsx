import CallToAction from "@/components/landings/faqs/call-to-action";
import FAQs from "@/components/landings/faqs/faqs";
import Footer from "@/components/layouts/landing/footer";
import LandingNavbar2 from "@/components/layouts/landing/landing-navbar-2";

export default function Home() {
  return (
    <main>
      <LandingNavbar2 />
      <CallToAction />
      <FAQs />
      <Footer />
    </main>
  );
}
