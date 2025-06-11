import React, { useState } from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const navItems = [
    {
      path: "/login",
      name: "Login",
      active: !loggedIn,
    },
    {
      path: "/signup",
      name: "Sign Up",
      active: !loggedIn,
    },
    {
      path:"/favorites",
      name:"Favorites",
      active:loggedIn
    }
  ];
  console.log(loggedIn);
  
  return (
    <header className="bg-amber-400 py-3 shadow">
      <nav className="flex justify-between gap-24">
        <div className="mx-6 flex-shrink-0">
        <Link to="/">
          <Logo width="70px" />
        </Link>
        </div>
        <div className="flex max-w-2xl w-full">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-2 font-semibold  text-base rounded-l-full border-t border-b border-l border-gray-300  focus:outline-none"
          />
          <button className="px-4 py-2 bg-red-500 border-t border-b border-r text-white border-gray-300 rounded-r-full hover:bg-red-400">
            Search
          </button>
        </div>

        <div className="mr-8 flex items-center gap-4 flex-shrik-0">
          {navItems.map((navItem) => (
            <button
              key={navItem.path}
              className="inline-block text-m font-semibold hover:text-gray-700"
            >
              {navItem.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
