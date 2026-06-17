import Footer from "@/components/layouts/landing/footer";
import Searching from "@/components/landings/career/searching";
import LandingNavbar2 from "@/components/layouts/landing/landing-navbar-2";
import AvailableJobs from "@/components/landings/career/available-jobs";

export default function Home() {
  return (
    <main>
      <LandingNavbar2 />
      <Searching />
      <AvailableJobs />
      <Footer />
    </main>
  );
}
