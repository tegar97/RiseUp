"use client"
import Navbar from "@/app/component/navbar";
import convertToRupiah from "@/app/helper/convertToRupiah";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";

const Page: React.FC = () => {
   useEffect(() => {
     const session = Cookies.get("token");
     // get localstorage

     // if cookie is not null
     if (!session) {
       window.location.href = "/";
       // set user state
     }
   }, []);

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => res.json());

  const { data: transactions, error } = useSWR(
    "https://riseup-api.akutegar.com/api/v1/transaction",
    fetcher
  );

  if (error) {
    return <div>Error fetching transactions.</div>;
  }

  

  return (
    <>
      <Navbar />
      <main className="bg-black flex min-h-screen flex-col  md:gap-40 md:px-24  py-24 px-8 gap-20 ">
        <div className="flex h-screen  gap-5">
          {/* Sidebar */}
          <div className="w-1/4  rounded-xl bg-[#181819]  p-4">
            {/* Sidebar content */}
            {/* Add your sidebar content here */}
            <ul>
              <Link href="/dasboard/profile">
                <li className="text-white  text-lg mb-4">My Profile</li>
              </Link>
              <Link href="/dasboard/transaction">
                <li className=" font-semibold text-lg mb-4  py-2 px-2 bg-primary-color text-black rounded-md ">
                  My Transaction
                </li>
              </Link>
              <button
                onClick={() => {
                  Cookies.remove("token");
                  localStorage.removeItem("user");
                  // redirect
                  window.location.href = "/";
                }}
              >
                <li className="text-white  text-lg mb-4">Logout</li>
              </button>
            </ul>
          </div>

          {/* Content */}
          <div className="w-3/4  p-4">
            {/* Add your content here */}
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold  mb-5 ">My Transaction </h1>

              <div>
                {transactions ? (
                  <ul className="flex flex-col gap-5">
                    {transactions.data.map((transaction: any) => (
                      <Link
                        key={transaction.id}
                        href={
                          transaction.status == 0
                            ? `${transaction.payment_url}`
                            : `/funding/${transaction.funding.id}`
                        }
                      >
                        <li className="flex justify-between items-center bg-[#181819] rounded-xl p-4">
                          <div className="flex gap-4">
                            <div className="w-20 h-20">
                              <Image
                                alt={`image funding ${transaction.funding.title}`}
                                width={100}
                                height={100}
                                src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${transaction.funding.image}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                            <div className="flex flex-col justify-between">
                              <div>
                                <h1 className="text-lg font-semibold">
                                  {transaction.funding.title}
                                </h1>
                                {/* // total transaction */}

                                <p className="text-md text-gray-200">
                                  {/* // convertToRupiah */}
                                  {convertToRupiah(
                                    parseInt(transaction.amount)
                                  )}
                                </p>
                              </div>

                              <p className="text-sm text-gray-400">
                                {transaction.created_at}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p
                              className={`text-sm ${
                                transaction.status === 0
                                  ? "text-yellow-500"
                                  : transaction.status === 1
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {transaction.status == 0
                                ? "Waiting for payment"
                                : transaction.status == 1
                                ? "Success"
                                : "Failed"}
                            </p>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <div>Loading transactions...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
