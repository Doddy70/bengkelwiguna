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
    <div className="w-full max-w-[1000px] relative mx-auto px-4 my-[140px] md:my-[200px]">
      <Swiper
        loop={true}
        className="mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      >
        <SwiperSlide>
          <div className="relative px-6 pb-[30px] pt-[60px]">
            <LeftQuotation className="w-10 h-6 absolute top-6 left-0" />
            <RightQuotation className="w-24 h-16 absolute top-0 right-0 text-icon-muted" />
            <p className="text-2xl font-medium text-secondary-foreground">
              Our sales team has been able to make more data-driven decisions
              since we started using this CRM tool. The real-time sales tracking
              has been a game-changer for us, allowing us to make quick
              adjustments to our sales process. 1
            </p>
          </div>
          <div className="mt-9 flex items-center">
            <Avatar className="w-[70px] h-[70px] mr-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-2xl font-semibold mb-2">Thomas Anan</p>
              <p className="text-secondary-foreground">Founder of Tonico</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative px-6 pb-[30px] pt-[60px]">
            <LeftQuotation className="w-10 h-6 absolute top-6 left-0" />
            <RightQuotation className="w-24 h-16 absolute top-0 right-0 text-icon-muted" />
            <p className="text-2xl font-medium text-secondary-foreground">
              Our sales team has been able to make more data-driven decisions
              since we started using this CRM tool. The real-time sales tracking
              has been a game-changer for us, allowing us to make quick
              adjustments to our sales process. 1
            </p>
          </div>
          <div className="mt-9 flex items-center relative z-0">
            <Avatar className="w-[70px] h-[70px] mr-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-2xl font-semibold mb-2">Thomas Anan</p>
              <p className="text-secondary-foreground">Founder of Tonico</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-4 right-4 z-10">
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
  );
};

export default Testimonials;
