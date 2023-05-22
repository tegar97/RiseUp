"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleMenuToggle = () => {
     setIsMenuOpen(!isMenuOpen);
   };
  return (
    <nav className="flex md:flex-row flex-col justify-between items-center w-full px-8 py-8 md:py-10 md:px-24 ">
      <div className="flex flex-row justify-between md:w-auto w-full">
        <div>
          <Link
            href="/"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <Image src="/riseup.png" alt="logo" width={188} height={40} />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white hover:text-primary-color focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM20 18H4V16H20V18Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:justify-end w-full md:w-auto`}
      >
        <ul className="md:flex md:flex-row md:gap-5 gap-3 flex flex-col md:mt-0 mt-10">
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
              href="/funding"
              className="flex items-center flex-shrink-0 text-white mr-6 text-md "
            >
              Funding
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
          <li className="md:hidden">
            <Link href={"/login"}>
              <button className="bg-transparent hover:bg-primary-color text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                Login
              </button>
            </Link>
          </li>
          <li className="md:hidden">
            <Link href={"/register"}>
              <button className=" hover:bg-primary-color  font-semibold hover:text-white py-2 px-4 border bg-primary-color text-black border-primary-color hover:border-transparent rounded">
                Mulai Donasi
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:flex hidden gap-4  ">
        {/* Register login */}
        <Link href={"/login"}>
          <button className="bg-transparent hover:bg-primary-color text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Login
          </button>
        </Link>

        {/* button register */}
        <Link href={"/register"}>
          <button className=" hover:bg-primary-color  font-semibold hover:text-white py-2 px-4 border bg-primary-color text-black border-primary-color hover:border-transparent rounded">
            Mulai Donasi
          </button>
        </Link>
      </div>
    </nav>
  );
}
