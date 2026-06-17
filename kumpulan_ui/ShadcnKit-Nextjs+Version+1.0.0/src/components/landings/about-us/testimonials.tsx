"use client";

import "swiper/css";
import "swiper/css/pagination";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LeftQuotation from "@/components/icons/left-quotation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      const user = testimonials[index];
      return `<span class="${className}"><img src="${user.image}" alt="" /></span>`;
    },
  };

  const swiperRef = useRef<any>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="bg-card py-20 mb-[120px] md:mb-[200px]">
      <div className="container px-4 relative">
        <div className="max-w-[800px] mx-auto text-center">
          <h4 className="font-semibold mb-12">What Our Customer Says</h4>
          <Swiper
            loop={true}
            pagination={pagination}
            modules={[Pagination, Navigation]}
            className="aboutUsTestimonials relative"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          >
            {testimonials.map((item, ind) => (
              <SwiperSlide key={ind + ind} className="pb-[30px]">
                <div className="relative px-6 pt-[60px]">
                  <LeftQuotation className="w-10 h-6 absolute top-0 left-1/2 -translate-x-1/2 text-icon-active" />
                  <p className="text-2xl font-medium text-secondary-foreground">
                    {item.comment}
                  </p>

                  <div className="mt-[100px] md:mt-[180px]">
                    <p className="text-lg font-semibold mb-2">{item.name}</p>
                    <p className="text-secondary-foreground">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Button
          size="icon"
          variant="outline"
          className="custom-prev rounded-full absolute left-0 top-1/2 -translate-y-1/2"
          onClick={goPrev}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="custom-next rounded-full absolute right-0 top-1/2 -translate-y-1/2"
          onClick={goNext}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Lucian Obrien",
    designation: "UX Designer",
    comment:
      "Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.",
    image: "/assets/profiles/Base.png",
  },
  {
    name: "Reech Chung",
    designation: "Full Stack Developer",
    comment:
      "Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.",
    image: "/assets/profiles/Base-1.png",
  },
  {
    name: "Harrison Stain",
    designation: "Marketer",
    comment:
      "Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.",
    image: "/assets/profiles/Base-2.png",
  },
  {
    name: "Lainey Davidson",
    designation: "UI Designer",
    comment:
      "Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.",
    image: "/assets/profiles/Base-3.png",
  },
  {
    name: "David Miller",
    designation: "Accountant",
    comment:
      "Onion Admin Template is a user-friendly website template with a modern design and responsive layout. It offers pre-built customizable components and modules to create a unique admin interface for your web applications.",
    image: "/assets/profiles/Base.png",
  },
];
