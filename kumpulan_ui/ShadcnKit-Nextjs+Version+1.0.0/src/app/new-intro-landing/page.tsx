import Footer from "@/components/layouts/landing/footer";
import LandingNavbar2 from "@/components/layouts/landing/landing-navbar-2";
import Banner from "@/components/landings/new-intro/banner";
import Demos from "@/components/landings/new-intro/demos";
import Features from "@/components/landings/new-intro/features";
import Header from "@/components/landings/new-intro/header";

const Page = () => {
  return (
    <main>
      <LandingNavbar2 />
      <Header />
      <Demos />
      <Features />
      <Banner />
      <Footer />
    </main>
  );
};

export default Page;
