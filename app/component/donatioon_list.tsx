"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";
import FundingCardItem from "./funding_card_item";

const SwiperComponent = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <FundingCardItem
          title="Startup X"
          imageSrc="/dummy.jpg"
          fundingAmount="Rp 1.250.000"
          progress={30}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <FundingCardItem
          title="UKM X"
          imageSrc="/dummy3.png"
          fundingAmount="Rp 1.250.000"
          progress={30}
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <FundingCardItem
          title="UKM 5"
          imageSrc="/register.jpg"
          fundingAmount="Rp 1.250.000"
          progress={30}
        />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
