import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import useSWR from "swr";
import FundingCardItem from "./funding_card_item";
import Link from "next/link";
import SkeletonCard from "./skeleton_card";
import { useSpring, animated, config } from "react-spring";

const SwiperComponent = () => {
  const { data: fundingData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/funding`,
    fetcher
  );

  if (error) {
    console.log("Error fetching funding data:", error);
    // Handle the error state
  }
const animationProps = useSpring({
  from: { transform: "rotate(0deg) translateY(0)" },
  to: async (next: any) => {
    while (true) {
      await next({ transform: "rotate(360deg) translateY(-10px)" });
      await next({ transform: "rotate(0deg) translateY(0)" });
    }
  },
  config: config.slow,
});
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
          <div className="h-full">

            <SkeletonCard/>
          </div>
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