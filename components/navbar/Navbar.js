import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-center gap-4 p-4 text-xl">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/advanced">Advanced</Link>
        <Link href="/playground">Playground</Link>
      </div>
    </div>
  );
};

export default Navbar;
