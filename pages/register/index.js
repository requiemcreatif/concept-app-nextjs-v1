"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
//import concept from "@/images/concept-logo-blue.svg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Invalid input");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Invalid email format");
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        lastName,
      });

      if (response.status === 201) {
        setMessage(response.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setLastName("");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <div
      className=" p-5 lg:mt-52 grid grid-cols-1 mx-auto md:max-w-4xl  md:grid-cols-2 md:mt-52 md:p-0
     lg:grid-cols-2 lg:max-w-5xl shadow-lg lg:p-0 lg:rounded-xl">
      <div className=" bg-custom-dk-blue  p-5 rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none ">
        {/* <Image src={concept} width={100} height={100} alt="logo" /> */}
        <div className="flex">
          <p className=" text-custom-lite-blue-two font-light lg:mt-40">
            With its AI-powered advanced search results, The Concept Box serves as a learning tool
            that helps programmers quickly and effectively understand and overcome programming
            challenges.
          </p>
        </div>
      </div>
      <div className=" bg-white p-4 rounded-bl-xl rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl md:rounded-tr-xl md:rounded-br-xl ">
        <div className=" text-center">
          <h1 className=" font-semibold text-lg mb-3">Signup</h1>
          <p className="mb-3">Create an account</p>
        </div>
        <form className=" grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className=" flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Enter your last name"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              className=" border border-gray-300 rounded-lg p-2"
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className=" bg-custom-dk-blue p-2 rounded-lg  text-custom-lite-blue-two mb-3"
            type="submit">
            Register
          </button>
          {message && <p>{message}</p>}
        </form>
        <footer className=" text-center">
          <p>Already have an account?</p>
          <Link href="/login" className="font-semibold">
            Login
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Register;
