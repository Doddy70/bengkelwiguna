"use client";

import "swiper/css";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LeftQuotation from "@/components/icons/left-quotation";
import RightQuotation from "@/components/icons/right-quotation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";

const Testimonials = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4">
      <Swiper
        loop={true}
        className="mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="relative px-6 pb-[30px] pt-[60px]">
              <LeftQuotation className="w-10 h-6 absolute top-6 left-0" />
              <RightQuotation className="w-24 h-16 absolute top-0 right-0 text-icon-muted" />
              <p className="text-2xl font-medium text-secondary-foreground">
                {testimonial.comment}
              </p>
            </div>

            <div className="mt-9 flex flex-col items-center gap-4 relative z-0">
              <Avatar className="w-[70px] h-[70px]">
                <AvatarImage alt="@shadcn" src={testimonial.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-2xl font-semibold mb-2">
                  {testimonial.name}
                </p>
                <p className="text-secondary-foreground">
                  {testimonial.designation}
                </p>
              </div>

              <div className="mt-5">
                <Button
                  size="icon"
                  variant="outline"
                  className="custom-prev rounded-full mr-2"
                  onClick={goPrev}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="custom-next rounded-full"
                  onClick={goNext}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const testimonials = [
  {
    id: nanoid(),
    name: "Thomas Anan",
    designation: "Founder of Tonico",
    avatar: "/assets/profiles/Base-1.png",
    comment:
      "Our sales team has been able to make more data-driven decisions since we started using this CRM tool. The real-time sales tracking has been a game-changer for us, allowing us to make quick.",
  },
  {
    id: nanoid(),
    name: "Thomas Anan",
    designation: "Founder of Tonico",
    avatar: "/assets/profiles/Base-2.png",
    comment:
      "Our sales team has been able to make more data-driven decisions since we started using this CRM tool. The real-time sales tracking has been a game-changer for us, allowing us to make quick.",
  },
];

export default Testimonials;
