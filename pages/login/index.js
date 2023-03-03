"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import concept from "@/images/concept-logo-blue.svg";
import {
  Form,
  Label,
  Input,
  Button,
  FormWrapper,
  Modal,
  Wrapper,
} from "@/styledComponents/registerStyled";
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
          <h1>Login</h1>
          <p>Welcome back!</p>
        </div>

        <Form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              placeholder="Enter your email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Login</Button>
        </Form>
        <footer>
          <p>Do not have an account?</p>
          <Link href="/register">Register</Link>
        </footer>
        {/* <Modal>
        <h2>Login successful!</h2>
        <p>You will be redirected to the dashboard in a moment...</p>
      </Modal> */}
        {success && (
          <Modal>
            <h2>Login successful!</h2>
            <p>You will be redirected to the dashboard in a moment...</p>
          </Modal>
        )}
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
