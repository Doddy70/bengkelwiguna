import Footer from "@/components/layouts/landing/footer";
import Demos from "@/components/landings/about-us/demos";
import Header from "@/components/landings/about-us/header";
import Teams from "@/components/landings/about-us/teams";
import LandingNavbar2 from "@/components/layouts/landing/landing-navbar-2";
import Testimonials from "@/components/landings/about-us/testimonials";

const Page = () => {
  return (
    <main>
      <LandingNavbar2 />
      <Header />
      <Demos />
      <Teams />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Page;
