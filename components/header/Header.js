import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/images/concept-logo-white.svg";

import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <div className="bg-custom-dk-blue sticky top-0 z-50 p-1 text-white">
      <nav className="bg-light sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-2">
          <div className="">
            <Link className="navbar-brand" href="#">
              <Image src={whiteLogo} width={100} height={100} alt="logo" />
            </Link>
          </div>

          <div className="mt-3 mt-md-0 text-center flex flex-row">
            {data?.user ? (
              <div>
                <span className="mr-5">Hi, {data?.user?.name}</span>

                <button
                  className=" bg-custom-red hover:bg-custom-dk-red py-1 px-4 rounded-lg"
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
    </div>
  );
};

export default Header;
