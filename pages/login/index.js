"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import concept from "@/images/concept-logo-blue.svg";

import axios from "axios";
import { signIn } from "next-auth/react";
import ModalMessage from "@/components/modal/ModalMessage";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);

      if (data.ok) {
        setSuccess(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          setSuccess(false);
          router.push("/dashboard");
        }, 3000);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (error) {}
  };

  return (
    <div
      className=" p-5 lg:mt-52  grid grid-cols-1 mx-auto md:max-w-4xl  md:grid-cols-2 md:mt-52 md:p-0
    lg:grid-cols-2 lg:max-w-5xl lg:p-0 lg:rounded-xl lg:shadow-lg">
      <div className=" bg-custom-dk-blue  p-5 rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none">
        {/* <Image src={concept} width={100} height={100} alt="logo" /> */}
        <p className=" text-custom-lite-blue-two font-light lg:mt-20">
          With its AI-powered advanced search results, The Concept Box serves as a learning tool
          that helps programmers quickly and effectively understand and overcome programming
          challenges.
        </p>
      </div>
      <div className=" bg-white p-4 rounded-bl-xl rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl md:rounded-tr-xl md:rounded-br-xl ">
        <div className=" text-center">
          <h1 className=" font-semibold text-lg mb-3">Login</h1>
          <p className="mb-3">Welcome back!</p>
        </div>

        <form className=" grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <div className=" flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Enter your email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Enter your password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className=" bg-custom-dk-blue p-2 rounded-lg  text-custom-lite-blue-two mb-3"
            type="submit">
            Login
          </button>
        </form>
        <footer className=" text-center">
          <p>Do not have an account?</p>
          <Link href="/register" className="font-semibold">
            Register
          </Link>
        </footer>
        {/* <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl bg-custom-yellow p-6 rounded-xl text-center text-custom-blue transition-opacity duration-500">
          <h2 className=" font-bold text-lg">Login successful!</h2>
          <p>You will be redirected to the dashboard in a moment...</p>
        </div> */}
        {success && (
          <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl bg-custom-yellow p-6 rounded-xl text-center text-custom-blue transition-opacity duration-500">
            <h2 className=" font-bold text-lg">Login successful!</h2>
            <p>You will be redirected to the dashboard in a moment...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
