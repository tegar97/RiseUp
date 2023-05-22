import Image from "next/image";
import Navbar from "./component/navbar";
import FundingCard from "./component/funding_card";
import ProgressCard from "./component/progress_card";
import SwiperComponent from "./component/donatioon_list";
import FAQ from "./component/faq";



export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col  md:gap-40 md:px-48  py-24 px-8 gap-20 ">
        <div className="hero grid grid-cols-1 md:grid-cols-2 gap-20 md:justify-between">
          <div className="hero-text ">
            <h1 className="text-6xl font-bold mb-5 tracking-wide	 costume-line-height 	 ">
              <span className="text-primary-color 	">Be Kind.</span> <br></br>
              Start From Us.
            </h1>
            <p className="text-xl font-light   mb-5 leading-8 ">
              Lorem donate help people life easier ipsum than heaven granted for
              anyone who trying to
            </p>
            <button
              className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
              style={{
                borderRadius: "50px",
              }}
            >
              Explore Now
            </button>
          </div>
          <SwiperComponent />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 justify-center  justify-items-center items-center md:gap-0 gap-10">
          <div className="col-span-1 md:col-span-auto">
            <Image src="/sponsor1.png" alt="logo" width={91} height={30} />
          </div>
          <div className="col-span-1 md:col-span-auto">
            <Image src="/sponsor2.png" alt="logo" width={91} height={30} />
          </div>
          <div className="col-span-1 md:col-span-auto">
            <Image src="/sponsor3.png" alt="logo" width={91} height={30} />
          </div>
          <div className="col-span-1 md:col-span-auto">
            <Image src="/sponsor4.png" alt="logo" width={91} height={30} />
          </div>
          <div className="col-span-1 md:col-span-auto">
            <Image src="/sponsor5.png" alt="logo" width={91} height={30} />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold text-center  costume-line-height-header mb-20">
            Open <br></br>{" "}
            <span className="text-primary-color ">Funding Now </span>
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            <FundingCard
              title="UKM Kreatif Indah"
              imageSrc="/image_gallery1.jpg"
              imageAlt="logo"
              progress={30}
              fundingAmount="1.250.000"
            />
          </div>
        </div>
        <div className="progress flex flex-col gap-10 items-center">
          <h2 className="text-4xl font-semibold text-center costume-line-height-header mb-20">
            We made <br />
            <span className="text-primary-color">Big progress</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-20 text-center">
            <ProgressCard value={500} unit="M" label="Total Causes" />
            <ProgressCard value={19} unit="B" label="Total Donation" />
            <ProgressCard value={420} unit="K" label="Donator" />
            <ProgressCard value={3} unit="K" label="Global Countries" />
            <ProgressCard value={113} unit="K" label="Global Companies" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full">
          <Image
            src="/image_gallery1.jpg"
            alt="logo"
            width={641}
            height={500}
            className="w-full col-span-2 rounded-2xl "
          />

          <div className="w-full flex flex-col gap-6">
            <Image
              src="/image_gallery2.jpg"
              alt="logo"
              width={405}
              height={180}
              className="rounded-xl h-full"
            />
            <Image
              src="/image_gallery3.jpeg"
              alt="logo"
              width={405}
              height={247.5}
              className="rounded-xl h-full"
            />
          </div>
        </div>
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
