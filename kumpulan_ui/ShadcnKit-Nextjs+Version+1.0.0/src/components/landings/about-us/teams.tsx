"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { nanoid } from "nanoid";

const Teams = () => {
  return (
    <div className="container px-4 mb-[120px] md:mb-[200px]">
      <div className="max-w-[496px] mx-auto text-center">
        <h4 className="font-bold">Meet Our Team</h4>
        <p className="font-medium text-secondary-foreground">
          If you face any problem, our support team will help you within a
          business working day.
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={28}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="teams relative"
      >
        {teams.map((team) => (
          <SwiperSlide key={team.id} className="py-12">
            <div className="p-10 bg-card text-center rounded-2xl">
              <Image
                width={220}
                height={250}
                className="rounded-2xl"
                src={team.image}
                alt="shadcnkit"
              />
              <p className="text-lg font-semibold mt-5 mb-2">{team.name}</p>
              <p className="text-secondary-foreground">{team.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const teams = [
  {
    id: nanoid(),
    name: "Lucian Obrien",
    designation: "UX Designer",
    image: "/assets/profiles/Base.png",
  },
  {
    id: nanoid(),
    name: "Reech Chung",
    designation: "Full Stack Developer",
    image: "/assets/profiles/Base-1.png",
  },
  {
    id: nanoid(),
    name: "Harrison Stain",
    designation: "Marketer",
    image: "/assets/profiles/Base-2.png",
  },
  {
    id: nanoid(),
    name: "Lainey Davidson",
    designation: "UI Designer",
    image: "/assets/profiles/Base-3.png",
  },
  {
    id: nanoid(),
    name: "David Miller",
    designation: "Accountant",
    image: "/assets/profiles/Base.png",
  },
  {
    id: nanoid(),
    name: "Harrison Stain",
    designation: "Marketer",
    image: "/assets/profiles/Base-2.png",
  },
  {
    id: nanoid(),
    name: "Lainey Davidson",
    designation: "UI Designer",
    image: "/assets/profiles/Base-3.png",
  },
];

export default Teams;
