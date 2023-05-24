"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";

function Page() {
  //define state
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState<{ [key: string]: string[] }>({});
  //function "loginHanlder"
  const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    console.log(name)

    //append data to formData
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    const errors: { [key: string]: string[] } = {};

    if (name.trim() === "") {
      errors.name = ["Name is required"];
    } else if (name.length < 6) {
      errors.name = ["Name must be at least 6 characters"];
    }


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

    console.log('Check point')
    //send data to server
    await axios
      .post<{ token: { token: string }; user: any }>(
        `http://riseup-api.test/api/v1/auth/register`,
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
        console.log(error);
      });
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
          <form className="flex gap-3 flex-col mt-10" method="post">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" Your name "
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter  Your email "
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter  Your password "
                className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary-color"
              />
            </div>

            <button
              className="bg-primary-color text-black rounded-lg  font-semibold py-3 px-8 border  mt-5"
              style={{
                borderRadius: "50px",
              }}
              onClick={(e: any) => registerHandler(e)}
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

export default Page;
