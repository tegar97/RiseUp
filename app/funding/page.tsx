"use client"
import React from 'react'
import Navbar from '../component/navbar'
import FundingCard from '../component/funding_card';
import useSWR from "swr";
import { useState } from 'react';
function Page() {
  const [categorySelect, setCategorySelect] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [sortSelect, setSortSelect] = useState("")
 const { data : categoryData, error } = useSWR(
   `http://riseup-api.test/api/v1/categories`,
   fetcher
  );
  
  const {
    data: fundingData,
    error: fundingError,
    mutate: mutateFundingData,
  } = useSWR(
    `http://riseup-api.test/api/v1/funding?${
      categorySelect ? `category_id=${categorySelect}` : "" 
    }&${searchText ? `search=${searchText}` : ""}&${
      sortSelect ? `sort=${sortSelect}` : ""
    }`,
    fetcher
    );
  
    
  const handleSearch = () => {
    
   // Fetch API with the selected category and search text
   mutateFundingData();
 };
   if (error) {
     console.log("Error fetching funding data:", error);
     // Handle the error state
   }

 if (error) {
   return <div>Error fetching data</div>;
 }

 if (!categoryData) {
   return <div>Loading...</div>;
  }
  
  console.log(categorySelect)

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
                onChange={(e: any) => setSearchText(e.target.value)}
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
              <select
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none w-full focus:border-primary-color"
                onChange={(e: any) => setCategorySelect(e.target.value)}
              >
                {categoryData.data.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
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
              <select
                onChange={(e: any) => setSortSelect(e.target.value)}
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none w-full focus:border-primary-color"
              >
                <option value="newest">Newest </option>
                <option value="oldest">Oldest</option>
                <option value="amount_asc">Most Funded</option>
                <option value="amount_desc">Less Funded</option>
              </select>
            </div>
          </div>
          <button
            className="bg-primary-color w-full text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
            style={{
              borderRadius: "50px",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-3  gap-10 w-full">
          {!fundingData ? (
            <p>Loading...</p>
          ) : (
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
          )}
        </div>
      </main>
    </>
  );
}

export default Page

function fetcher(url: any) {
  return fetch(url).then((response) => response.json());
}

function calculateProgress(currentAmount: any, targetAmount: any) {
  const current = parseFloat(currentAmount);
  const target = parseFloat(targetAmount);
  return Math.floor((current / target) * 100);
}