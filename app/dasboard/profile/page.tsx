"use client"
import Navbar from "@/app/component/navbar";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect ,useState} from "react";

const Page: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  // localstorage
  useEffect(() => {
    const session = Cookies.get("token");
    // get localstorage

    // if cookie is not null
    if (session) {
      const user = localStorage.getItem("user");

      if (user) {
        const userData = JSON.parse(user);
        setUser(userData);
      }
      // parse the cookie
      // set user state
    } else {
      window.location.href = "/";
    } 
  }, []);

  console.log(user);
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
                <li className=" font-semibold text-lg mb-4  py-2 px-2 bg-primary-color text-black rounded-md ">
                  My Profile
                </li>
              </Link>
              <Link href="/dasboard/transaction">
              <li className="text-white  text-lg mb-4">My Transaction</li>
              </Link>
              {/* // button logout */}
              <button onClick={
                () => {
                  Cookies.remove("token");
                  localStorage.removeItem("user");
                  // redirect 
                  window.location.href = "/";
                }
                
              }>
                <li className="text-white  text-lg mb-4">Logout</li>
              </button>


              
            </ul>
          </div>

          {/* Content */}
          <div className="w-3/4  p-4">
            {/* Add your content here */}
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold  mb-5 ">My Profile </h1>

              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user ? user.name : ''}
                    readOnly
                    className="border text-black border-gray-200 rounded-lg py-3 px-4 focus:outline-none w-full focus:border-primary-color"
                  />
                </div>
               

              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
