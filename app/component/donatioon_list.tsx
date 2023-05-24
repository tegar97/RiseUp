import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import useSWR from "swr";
import FundingCardItem from "./funding_card_item";
import Link from "next/link";

const SwiperComponent = () => {
  const { data: fundingData, error } = useSWR(
    "http://riseup-api.test/api/v1/funding",
    fetcher
  );

  if (error) {
    console.log("Error fetching funding data:", error);
    // Handle the error state
  }

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {fundingData ? (
        fundingData.data.map((funding: any) => (
          <SwiperSlide key={funding.id}>
            <FundingCardItem
              id={funding.id}
              ukm={funding.ukm.name}
                title={funding.title}
                imageSrc={`https://freshmart.oss-ap-southeast-5.aliyuncs.com/images/images/${funding.image}`}
                fundingAmount={funding.current_amount}
                targetAmount={funding.target_amount}
                progress={calculateProgress(
                  funding.current_amount,
                  funding.target_amount
                )}
              />
       
          </SwiperSlide>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Swiper>
  );
};

function fetcher(url : any) {
  return fetch(url).then((response) => response.json());
}

function calculateProgress(currentAmount : any, targetAmount : any) {
  const current = parseFloat(currentAmount);
  const target = parseFloat(targetAmount);
  return Math.floor((current / target) * 100);
}


export default SwiperComponent;