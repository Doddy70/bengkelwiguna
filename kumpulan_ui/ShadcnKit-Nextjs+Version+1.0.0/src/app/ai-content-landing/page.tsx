import Demos from "@/components/landings/ai-writer/demos";
import Features from "@/components/landings/ai-writer/features";
import Header from "@/components/landings/ai-writer/header";
import Overview from "@/components/landings/ai-writer/overview";
import Testimonials from "@/components/landings/ai-writer/testimonials";
import Footer from "@/components/layouts/landing/footer";
import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import React from "react";

const Page = () => {
  return (
    <main>
      <LandingNavbar />
      <Header />
      <Demos />
      <Features />
      <Overview />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Page;
