import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    router.push("/register"); // Redirect to register page after logout
  };
  return (
    <div>
      <div className=" flex justify-center gap-4 p-4 text-xl">
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/register">register</Link>
        </li>

        {/* <Link href="/profile">Profile</Link>
        <Link href="/advanced">Advanced</Link>
        <Link href="/playground">Playground</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
