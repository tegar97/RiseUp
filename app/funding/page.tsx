import React from 'react'
import Navbar from '../component/navbar'
import FundingCard from '../component/funding_card';

function page() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col  gap-20 px-48 py-24">
        <h1 className="text-4xl font-semibold text-center  costume-line-height-header ">
          List of Funding
        </h1>
        <div className="bg-white rounded-lg py-10 px-10 ">
          <div className="grid grid-cols-3  gap-5">
            {/* // search  */}
            <div className="flex   flex-col gap-2 ">
              <label
                className="
                                text-black
                                font-semibold
                                text-lg
                          "
              >
                Search
              </label>
              <input
                type="text"
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none w-full focus:border-primary-color"
                placeholder="Search"
              />
            </div>
            {/* // filter */}

            <div className="flex flex-col  gap-2">
              <label
                className="
                                text-black
                                font-semibold
                                text-lg
                          "
              >
                Type of Startup / ukm
              </label>
              <select className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none w-full focus:border-primary-color">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            {/* // sort */}
            <div className="flex flex-col gap-2 ">
              <label
                className="
                                text-black
                                font-semibold
                                text-lg
                          "
              >
                Sort by
              </label>
              <select className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none w-full focus:border-primary-color">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <button
            className="bg-primary-color w-full text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
            style={{
              borderRadius: "50px",
            }}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-3 w-full">
          <FundingCard
            title="UKM Kreatif Indah"
            imageSrc="/image_gallery1.jpg"
            imageAlt="logo"
            progress={30}
            fundingAmount="1.250.000"
          />
        </div>
      </main>
    </>
  );
}

export default page