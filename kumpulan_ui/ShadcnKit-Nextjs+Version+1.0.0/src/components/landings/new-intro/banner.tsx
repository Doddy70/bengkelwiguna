import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative pb-36 mb-[120px] md:mb-[200px]">
      <div className="bg-card pt-16">
        <div className="container px-4 flex flex-col md:flex-row justify-between gap-20">
          <div className="max-w-[460px] mx-auto md:mx-0 text-center md:text-start md:pt-10">
            <h5 className="font-semibold mb-10">
              Streamline your workflow with our flexible React admin dashboard
            </h5>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <Button className="py-3.5 px-6 h-14">Buy Now</Button>
              <Button variant="outline" className="py-3.5 px-6 h-14">
                Live Preview
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              width={612}
              height={412}
              src="/assets/images/new-intro-landing/banner.png"
              alt="shadcnkit"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[994px] py-12 px-6 bg-card-hover absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl">
        <h6 className="font-semibold text-center mb-7">
          Have any questions about our template?
        </h6>
        <div className="flex items-center justify-center gap-4">
          <Button className="py-3.5 px-6 h-12">Submit Ticket</Button>
          <Button variant="outline" className="py-3.5 px-6 h-12">
            Send an email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
