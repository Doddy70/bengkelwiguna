import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="container px-4 flex flex-col md:flex-row justify-between items-end mt-[100px] mb-12">
        <h4 className="font-semibold md:max-w-[480px]">
          We build bridges between Companies and Customers
        </h4>
        <p className="text-lg font-medium text-secondary-foreground md:max-w-[490px]">
          To build software that gives customer-facing teams at small-and
          medium-sized businesses the ability to create fruitful and enduring
          relationships with customer
        </p>
      </div>

      <Image
        width={1440}
        height={634}
        className="mx-auto"
        src="/assets/images/about-us-landing/banner.png"
        alt="shadcnkit"
      />
    </>
  );
};

export default Header;
