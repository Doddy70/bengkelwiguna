import Laravel from "@/components/icons/laravel";
import Openai from "@/components/icons/openai";
import Paddle from "@/components/icons/paddle";
import Razorpay from "@/components/icons/razorpay";
import Stripe from "@/components/icons/stripe";

const Sponsors = () => {
  return (
    <div className="bg-card mb-[100px] md:mb-[160px]">
      <div className="container px-4 py-[75px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <Stripe className="mx-auto" />
        <Paddle className="mx-auto" />
        <Razorpay className="mx-auto" />
        <Openai className="mx-auto" />
        <Laravel className="mx-auto" />
      </div>
    </div>
  );
};

export default Sponsors;
