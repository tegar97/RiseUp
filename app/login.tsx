import React from 'react'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
function Login() {
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
      .then((response) => {
        //set token on cookies
        Cookies.set("token", response.data.token.token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data.user?.name,
            name: response.data.user.name,
          })
        );

        //redirect to dashboard
        // check redirect in localstorage
        const redirect = localStorage.getItem("redirect");
        if (redirect) {
          localStorage.removeItem("redirect");
          Router.push(redirect);
        } else {
          Router.push("/");
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
                  console.log("error " + error.response.data.message);

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
      //redirect page dashboard
      Router.push("/dashboard");
    }
    
  }, []);
  return <div>login</div>;
}

export default Login