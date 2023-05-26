"use client"
import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
function Page() {
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state validation
  const [validation, setValidation] = useState<{ [key: string]: string[] }>({});

  //function "loginHanlder"
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("email", email);
    formData.append("password", password);
    const errors: { [key: string]: string[] } = {};

    if (email.trim() === "") {
      errors.email = ["Email is required"];
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = ["Email is invalid"];
    }

    if (password.trim() === "") {
      errors.password = ["Password is required"];
    } else if (password.length < 6) {
      errors.password = ["Password must be at least 6 characters"];
    }

    if (Object.keys(errors).length > 0) {
      setValidation(errors);
      return;
    }
    //send data to server
    await axios
      .post<{ token: { token: string }; user: any }>(
        `${process.env.NEXT_PUBLIC_API_BACKEND}/auth/login`,
        formData
      )
      .then((response: any) => {
        console.log(response.data.user.name);
        //set token on cookies
        Cookies.set("token", response.data.access_token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data.user?.id,
            name: response.data.user.name,
          })
        );

        //redirect to dashboard
        // check redirect in localstorage
        const redirectUrl = localStorage.getItem("redirect");
        if (redirectUrl) {
          localStorage.removeItem("redirect");
          // redirect(redirectUrl);
          window.location.href = redirectUrl;
        } else {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log('error ' + error.response.data);
        //assign error to state "validation"

        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
                  console.log("error ");

          const responseErrors = error.response.data.errors;

          // Map response errors to validation state
          const updatedErrors: { [key: string]: string[] } = {};

          Object.keys(responseErrors).forEach((key) => {
            updatedErrors[key] = responseErrors[key];
          });

          setValidation(updatedErrors);
        }

      });

    console.log(validation.message);


  };

  //hook useEffect
  useEffect(() => {
    //check token
    if (Cookies.get("token")) {
      //redirect page /
    redirect("/");
    
    }
  }, []);
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-8 overflow-hidden">
      <div className="bg-white w-full h-full lg:col-span-3">
        <div className="px-5 py-5">
          <Link
            href="/"
            className="flex items-center flex-shrink-0 text-white mr-6"
          >
            <Image src="/riseup2.png" alt="logo" width={188} height={40} />
          </Link>
        </div>

        <div className="flex flex-col justify-center px-5 lg:px-32 h-full">
          {
            //check validation\
            Object.keys(validation).length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5">
                <ul>
                  {Object.values(validation).map((value) =>
                    value.map((item, index) => <li key={index}>{item}</li>)
                  )}
                </ul>
              </div>
            )
          }
          <h1 className="text-black font-bold text-3xl mb-4">
            Access your account
          </h1>
          <p className="text-md font-regular text-[#858585]">
            Unlock the potential of your startup or UKM by registering today.
          </p>
          <form className="flex flex-col mt-10">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter Your email"
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter Your password"
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
            </div>

            <button
              className="bg-primary-color text-black rounded-lg font-semibold py-3 px-8 border mt-5"
              style={{
                borderRadius: "50px",
              }}
              onClick={(e: any) => loginHandler(e)}
            >
              Login Now
            </button>
            <p className="text-md text-center font-regular text-[#858585] mt-5">
              Don t have an account?{" "}
              <Link href="/register" className="text-primary-color">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-span-5 hidden lg:block">
        <Image
          src="/image_login.webp"
          alt="image login"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Page