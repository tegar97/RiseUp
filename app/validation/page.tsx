import React from 'react'
import Navbar from '../component/navbar';
import Image from 'next/image'
import Link from 'next/link';
function Page() {
  return (
    <>
      <Navbar />

      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Image
            src="/payment-success.svg"
            alt="Success Image"
            width={100}
            height={100}
            className="object-cover w-full h-full mb-20"
          />
          <h1 className="text-2xl font-bold text-center mb-5 ">
            Thank You! For your contribution
          </h1>
          <p className="text-lg text-center">
            Your contribution is propelling small business projects forward and
            making a positive impact.
          </p>
          <Link href="/dasboard/transaction">
            <button className="bg-primary-color  font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mt-5 text-black">
              See My transaction
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page