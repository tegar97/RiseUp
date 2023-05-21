import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between flex-wrap  w-full  px-24 py-10">
      <div>
        <a href="#" className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/logo.png" alt="logo" width={188} height={40} />
        </a>
      </div>
      <div>
        <ul className="flex flex-row gap-5">
          <li>
            <a
              href="#"
              className="flex items-center flex-shrink-0  mr-6 text-primary-color text-md font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center flex-shrink-0 text-white mr-6 text-md "
            >
              Causes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center flex-shrink-0 text-white mr-6  text-md"
            >
              Story
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center flex-shrink-0 text-white mr-6  text-md"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center flex-shrink-0 text-white mr-6  text-md"
            >
              Investors
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        {/* Register login */}
        <button className="bg-transparent hover:bg-primary-color text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
          Login
        </button>
        {/* button register */}
        <button className=" hover:bg-primary-color  font-semibold hover:text-white py-2 px-4 border bg-primary-color text-black border-primary-color hover:border-transparent rounded">
          Mulai Donasi
        </button>
      </div>
    </nav>
  );
}
