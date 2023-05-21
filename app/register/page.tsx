import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="w-full  h-screen grid grid-cols-8 overflow-hidden ">
      <div className="bg-white w-full h-full col-span-3 ">
        <div className="px-5 py-5">
          <Link
            href="/"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <Image src="/logo2.png" alt="logo" width={188} height={40} />
          </Link>
        </div>
        <div className="flex flex-col justify-center  px-32  h-full">
          <h1 className="text-black font-bold text-3xl mb-4 ">
            Let’s create your Account
          </h1>
          <p className=" text-md font-regular text-[#858585]">
            Unlock the potential of your startup or UKM by registering today.
          </p>
          <form className="flex gap-3 flex-col mt-10">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" Your name "
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter  Your email "
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter  Your password "
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
            </div>

            <button
              className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
              style={{
                borderRadius: "50px",
              }}
            >
              Register Now
            </button>
            <p className="text-md text-center font-regular text-[#858585] mt-5">
              Already have an account ?  
              <Link href="/login" className="text-primary-color">
                 Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-span-5">
        <Image
          src="/register.jpg"
          alt="logo"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default page;
