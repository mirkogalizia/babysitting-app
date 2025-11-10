"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const babysitters = [
  {
    name: "Asia",
    location: "Teverola",
    price: "€8 – 10 / ora",
    exp: "3 anni",
    color: "bg-pastelPink",
  },
  {
    name: "Alina",
    location: "Padova",
    price: "€10 – 12 / ora",
    exp: "5+ anni",
    color: "bg-pastelBlue",
  },
  {
    name: "Roberta",
    location: "Caserta",
    price: "€8 – 10 / ora",
    exp: "5+ anni",
    color: "bg-pastelPurple",
  },
  {
    name: "Julia",
    location: "Torino",
    price: "€10 – 12 / ora",
    exp: "5+ anni",
    color: "bg-pastelTeal",
  },
];

export default function BabysitterSlider() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
        Il nostro team di Babysitter
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full max-w-lg"
      >
        {babysitters.map((b, i) => (
          <SwiperSlide key={i}>
            <div className={`rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center ${b.color}`}>
              <div className="text-2xl font-semibold mb-2 text-blue-700">{b.name}</div>
              <div className="text-md mb-1 text-gray-600">{b.location}</div>
              <div className="text-lg font-bold mb-2 text-purple-700">{b.price}</div>
              <div className="text-sm text-gray-500 mb-2">Esperienza: {b.exp}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
