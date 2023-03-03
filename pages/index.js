import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <p>You are already logged in</p>;
  }

  return <div></div>;
}
