"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Form,
  Label,
  Input,
  Button,
  FormWrapper,
  Wrapper,
} from "@/styledComponents/registerStyled";
import axios from "axios";
import Link from "next/link";
import concept from "@/images/concept-logo-blue.svg";

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
    <Wrapper>
      <div className="form-intro">
        <Image src={concept} width={100} height={100} alt="logo" />
        <p>
          With its AI-powered advanced search results, The Concept Box serves as a learning tool
          that helps programmers quickly and effectively understand and overcome programming
          challenges.
        </p>
      </div>
      <FormWrapper>
        <div className="header-form">
          <h1>Signup</h1>
          <p>Create an account</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name:</Label>
            <Input
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input
              placeholder="Enter your last name"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Button type="submit">Register</Button>
          {message && <p>{message}</p>}
        </Form>
        <footer>
          <p>Already have an account?</p>
          <Link href="/login">Login</Link>
        </footer>
      </FormWrapper>
    </Wrapper>
  );
}

export default Register;
