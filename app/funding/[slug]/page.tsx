import React from "react";
import Image from "next/image";
import Navbar from "@/app/component/navbar";

function page() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col   px-48 py-24">
        <div className="w-full max-h-screen relative">
          <Image
            src="/dummy.jpg"
            alt="logo"
            width={405}
            height={100}
            className="rounded-3xl  h-full w-full  object-cover"
          />

          <div className="absolute bg-white w-1/3  right-20   -bottom-72  p-8 rounded-xl flex flex-col gap-6">
            <h2 className="text-black font-semibold  text-xl ">
              Share kidness
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between ">
                <span className="text-subtitle-text-color">Rp 1.250.00</span>
                <span className="text-subtitle-text-color"> Rp 1.500.000</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 w-full">
                <div className="bg-primary-color rounded-full h-2 w-1/2"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-semibold  text-md ">
                What you will get ?
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row gap-2">
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={24}
                    height={24}
                    className="object-cover h-full "
                  />

                  <p className="text-subtitle-text-color">
                    Get special service from us{" "}
                  </p>
                </li>
                <li className="flex flex-row gap-2">
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={24}
                    height={24}
                    className="object-cover h-full "
                  />

                  <p className="text-subtitle-text-color">
                    You can also sell your equity once the s tartup going ipo
                  </p>
                </li>
                <li className="flex flex-row gap-2">
                  <Image
                    src="/check.png"
                    alt="logo"
                    width={24}
                    height={24}
                    className="object-cover h-full "
                  />

                  <p className="text-subtitle-text-color">And more ...</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <form>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Fund amount (min. Rp 10.000)"
                    className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
                  />
                </div>
              </form>
              <button
                className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
                style={{
                  borderRadius: "50px",
                }}
              >
                Fund Now
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-14 px-24  w-1/2 ">
          <h2 className="text-white font-semibold  text-4xl costume-line-height-header-2 mb-4     ">
            Donate For <br></br>{" "}
            <span className="text-primary-color">UKM X</span>
          </h2>
          <span >
            Lorem donate help people life easier ipsum than heaven granted for
            anyone who trying to help others
          </span>
        </div>
      </main>
    </>
  );
}

export default page;
