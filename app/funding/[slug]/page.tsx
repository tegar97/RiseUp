"use client"
import React,{useState} from "react";
import Image from "next/image";
import Navbar from "@/app/component/navbar";
import useSWR from "swr";
import { usePathname } from 'next/navigation';
import Cookies from "js-cookie";
import axios from "axios";
function Page() {

    // get id from url
  
  const pathname = usePathname();
  const [amount, setAmount] = useState(0);
  
  const pay = async () => {
    // get id
    const id = pathname.replace("/funding/", "");

    // get token from cookies
    const token = Cookies.get("token");

    //if token is not exist redirect to login page and localstorage redirect to current page after login  
    if (!token) {
      window.location.href = "/login";
      localStorage.setItem("redirect", pathname);
    }


    // axios post  http://riseup-api.test/api/v1/transaction wit bearer 
    const res = await axios.post(`http://riseup-api.test/api/v1/transaction`, { funding_id: id, amount: amount }, { headers: { Authorization: `Bearer ${token}` } })   
    
    // redirect to payment gateway 
    window.location.href = res.data.data.redirect_url;
  }
  
  console.log();




    const { data, error } = useSWR(
      `http://riseup-api.test/api/v1/funding/${pathname.replace(
        "/funding/",
        ""
      )}`,
      fetcher
    );

    if (error) {
      return <div>Error fetching data</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    const { title, image, target_amount, current_amount, ukm } = data.data;

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col   px-48 py-24">
        <div className="w-full max-h-screen relative">
          <Image
            src={`https://freshmart.oss-ap-southeast-5.aliyuncs.com/images/images/${image}`}
            alt="photo background"
            width={405}
            height={100}
            style={{height: 800}}
            className="rounded-3xl  w-full   object-cover"
          />

          <div className="absolute bg-white w-1/3  right-20   -bottom-72  p-8 rounded-xl flex flex-col gap-6">
            <h2 className="text-black font-semibold  text-xl ">{title}</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between ">
                <span className="text-subtitle-text-color">
                  Rp {current_amount}
                </span>
                <span className="text-subtitle-text-color">
                  {target_amount}
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 w-full">
                <div className="bg-primary-color rounded-full h-2 "
                  style={{
                    width: `${calculateProgress(current_amount, target_amount)}%`,
                  }}
                ></div>
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
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    id="amount"
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
                onClick={pay}
              >
                Fund Now
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-14 px-24  w-1/2 ">
          <h2 className="text-white font-semibold  text-4xl costume-line-height-header-2 mb-4     ">
            Funding For <br></br>{" "}
            <span className="text-primary-color">{ukm.name}</span>
          </h2>
          <span>{ukm.description}</span>
        </div>
      </main>
    </>
  );
}

function fetcher(url: any) {
  return fetch(url).then((response) => response.json());
}

function calculateProgress(currentAmount: any, targetAmount: any) {
  const current = parseFloat(currentAmount);
  const target = parseFloat(targetAmount);
  return Math.floor((current / target) * 100);
}

export default Page;
