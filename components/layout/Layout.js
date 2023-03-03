"use client";

import Head from "next/head";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { SessionProvider } from "next-auth/react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <SessionProvider>
        <Header />
        {children}
      </SessionProvider>
    </div>
  );
};

export default RootLayout;
