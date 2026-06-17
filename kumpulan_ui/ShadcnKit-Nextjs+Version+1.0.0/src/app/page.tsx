import Navbar from "@/components/landings/intro/navbar";
import Footer from "@/components/landings/intro/footer";
import Header from "@/components/landings/intro/header";
import Features from "@/components/landings/intro/features";
import Demos from "@/components/landings/intro/demos";
import Pricing from "@/components/landings/intro/pricing";
import PagesDemo from "@/components/landings/intro/pages-demo";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <div className="header bg-gradient-to-r from-purple-800 to-blue-900 flex flex-col gap-24">
        <Navbar />
        <Header />
      </div>

      <Features />
      <Demos />
      <PagesDemo />
      {/* <Testimonials /> */}
      <Pricing />
      <Footer />
    </main>
  );
}
