import React from "react";
import { navItems } from "../lib/db/navItems";
import { NavLink } from "react-router";

export const NavMenuToggle = ({ toggleMenu }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 bg-white h-fit w-full px-4 pt-5.5">
        <div className="flex items-start gap-3 pb-12">
          {/* Close Button */}
          <button
            className=" cursor-pointer relative pt-4"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-dark  absolute rotate-45"></div>
            <div className="w-6 h-0.5 bg-dark  -rotate-45"></div>
          </button>

          <div className="flex flex-col gap-6">
            {/* Logo */}
            <img src="logo.png" alt="logo" />
            {/* Nav Items */}
            <div className="flex flex-col gap-[16px]">
              {navItems.map(({ label, link }, i) => (
                <NavLink
                  to={link}
                  key={i}
                  className="text-gray hover:text-dark transition-all"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={toggleMenu}
        className="fixed left-0 z-40 backdrop-blur-lg bg-dark/70  h-screen w-full"
      ></div>
    </>
  );
};
