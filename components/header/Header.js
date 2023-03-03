import Link from "next/link";
import React from "react";

import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <nav className="bg-light sticky top-0">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="p-0">
          <Link className="navbar-brand" style={{ marginLeft: "20px" }} href="#">
            The Concept App
          </Link>
        </div>

        <div className="mt-3 mt-md-0 text-center flex flex-row">
          {data?.user ? (
            <div>
              <span className="mr-5">Hi, {data?.user?.name}</span>

              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => signOut()}>
                Logout
              </button>
            </div>
          ) : (
            <div className="mr-5">
              <Link className="nav-link" href="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
