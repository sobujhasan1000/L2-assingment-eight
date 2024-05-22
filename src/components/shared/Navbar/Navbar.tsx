"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-teal-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          Lap<span className="text-red-400">tops</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/categories">Bands</Link>
          </li>
          <li>
            <Link href="/products">Laptops</Link>
          </li>
          <li>
            <Link href="/flash-sale">Flash sale</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contractUs">Contract Us</Link>
          </li>
          <li>
            <Link href="/dashboard/allproduct">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
