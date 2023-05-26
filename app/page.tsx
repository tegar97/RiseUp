"use client"
import Image from "next/image";
import Navbar from "./component/navbar";
import FundingCard from "./component/funding_card";
import ProgressCard from "./component/progress_card";
import SwiperComponent from "./component/donatioon_list";
import FAQ from "./component/faq";
import useSWR from "swr";

import Head from "next/head";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import SponsorCarousel from "./component/sponsor_caraousel";
import ProgressSection from "./component/animate_progress";
import ImageGallery from "./component/image_gallery";


export default function Home() {

const heroTextAnimation = useSpring({
  opacity: 1,
  transform: "translateY(0)",
  from: { opacity: 0, transform: "translateY(-20px)" },
  delay: 500,
});

const heroButtonAnimation = useSpring({
  opacity: 1,
  transform: "translateX(0)",
  from: { opacity: 0, transform: "translateX(-20px)" },
  delay: 1000,
});
   const { data: fundingData, error } = useSWR(
     `${process.env.NEXT_PUBLIC_API_BACKEND}/funding`,
     fetcher
   );

   const { data: state, error: staticError } = useSWR(
     `${process.env.NEXT_PUBLIC_API_BACKEND}/static`,
     fetcher
   );
   if (error) {
     console.log("Error fetching funding data:", error);
     // Handle the error state
   }
  
  
  

  return (
    <>
      <Head>
        <title>Riseu2p</title>
      </Head>
      <Navbar />

      <main className="flex min-h-screen flex-col  md:gap-40 md:px-48  py-24 px-8 gap-20 bg-black ">
        <div className="hero grid grid-cols-1 md:grid-cols-2 gap-20 md:justify-between">
          <animated.div style={heroTextAnimation} className="hero-text">
            <h1 className="text-6xl font-bold mb-5 tracking-wide costume-line-height">
              <span className="text-primary-color">Empower </span> <br />
              Dreams
            </h1>
            <p className="text-xl font-light mb-5 leading-8">
              Unleashing the Power of Crowdfunding to Fuel Small Business
              Success and Impact Lives
            </p>
            <Link href="/funding">
              <animated.button
                style={heroButtonAnimation}
                className="bg-primary-color text-black rounded-lg font-semibold py-3 px-8 border mt-5"
               
              >
                Contribute Today
              </animated.button>
            </Link>
          </animated.div>
          <animated.div style={heroTextAnimation} className="hero-text">
          <SwiperComponent />

          </animated.div>
        </div>
       <SponsorCarousel/>

        <div>
          <h2 className="text-4xl font-semibold text-center  costume-line-height-header mb-20">
            Open <br></br>{" "}
            <span className="text-primary-color ">Funding Now </span>
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            {fundingData ? (
              fundingData.data.map((funding: any) => (
                <FundingCard
                  id={funding.id}
                  key={funding.id}
                  title={funding.title}
                  desc={funding.fund_raise_use}
                  imageSrc={`https://freshmart.oss-ap-southeast-5.aliyuncs.com/images/images/${funding.image}`}
                  imageAlt="logo"
                  progress={calculateProgress(
                    funding.current_amount,
                    funding.target_amount
                  )}
                  fundingAmount={funding.target_amount}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="progress flex flex-col gap-10 items-center">
         
          <ProgressSection />
        </div>
       <ImageGallery/>
        <div>
          <h2 className="text-4xl font-semibold text-center costume-line-height-header mb-20">
            Frequently Asked Questions
            <br />
            <span className="text-primary-color">
              Find useful information for you question
            </span>
          </h2>
          <FAQ />
        </div>
      </main>
    </>
  );
}
function fetcher(url :any) {
  return fetch(url).then((response) => response.json());
}

function calculateProgress(currentAmount : any , targetAmount :any) {
  const current = parseFloat(currentAmount);
  const target = parseFloat(targetAmount);
  return Math.floor((current / target) * 100);
}