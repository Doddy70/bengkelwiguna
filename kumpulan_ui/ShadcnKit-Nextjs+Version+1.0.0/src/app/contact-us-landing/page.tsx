import Footer from "@/components/layouts/landing/footer";
import LandingNavbar2 from "@/components/layouts/landing/landing-navbar-2";
import ContactBranches from "@/components/landings/contact-us/contact-branches";
import ContactForm from "@/components/landings/contact-us/contact-form";

const Page = () => {
  return (
    <main>
      <LandingNavbar2 />
      <ContactBranches />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Page;
