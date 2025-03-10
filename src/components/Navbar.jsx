import React, { useState } from "react";
import Container from "./common/container";
import { NavLink } from "react-router";
import { navItems } from "../lib/db/navItems";
import { NavMenuToggle } from "./NavMenuToggle";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = ()=> setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <nav className=" sticky top-0 z-50 bg-light py-5 border-b border-b-gray/20">
        <Container className="flex justify-between items-center">
          <div className="flex gap-4">
            {/* Toggle button */}
            <button
              className="lg:hidden space-y-2 cursor-pointer"
              onClick={toggleMenu}
            >
              <div className="w-6 h-0.5 bg-dark"></div>
              <div className="w-6 h-0.5 bg-dark"></div>
              <div className="w-6 h-0.5 bg-dark"></div>
            </button>
            {/* Toggle Menu */}
            {isMenuOpen && <NavMenuToggle toggleMenu={toggleMenu}/>}

            {/* Logo */}
            <img src="logo.png" alt="logo" />
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex gap-[28px] xl:gap-[35px]">
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

          <div className=" flex gap-3">
            {/* Notification Icon */}
            <div className=" relative w-fit">
              <div className="bg-light rounded-full size-[40px] flex justify-center items-center group hover:cursor-pointer transition-all">
                <svg
                  className="group-hover:fill-orange"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M21.7484 17.0117C21.4568 17.793 20.8422 18.3867 20.0401 18.6576C18.9151 19.0326 17.7588 19.3138 16.5922 19.5117C16.4776 19.5326 16.363 19.5534 16.2484 19.5638C16.0609 19.5951 15.8734 19.6159 15.6859 19.6367C15.4568 19.668 15.2172 19.6888 14.9776 19.7096C14.3213 19.7617 13.6755 19.793 13.0193 19.793C12.3526 19.793 11.6859 19.7617 11.0297 19.6992C10.7485 19.6784 10.4776 19.6471 10.2068 19.6055C10.0505 19.5846 9.89429 19.5638 9.74846 19.543C9.63388 19.5221 9.51929 19.5117 9.40471 19.4909C8.24846 19.3034 7.10263 19.0221 5.98804 18.6471C5.15471 18.3659 4.51929 17.7721 4.23804 17.0117C3.95679 16.2617 4.06096 15.3867 4.50888 14.6367L5.68596 12.6784C5.93596 12.2513 6.16513 11.4284 6.16513 10.9284V8.99089C6.16513 5.20964 9.23804 2.13672 13.0193 2.13672C16.7901 2.13672 19.863 5.20964 19.863 8.99089V10.9284C19.863 11.4284 20.0922 12.2513 20.3526 12.6784L21.5297 14.6367C21.9568 15.3659 22.0401 16.2201 21.7484 17.0117Z"
                    fill=""
                  />
                  <path
                    d="M13.0026 11.207C12.5651 11.207 12.2109 10.8528 12.2109 10.4153V7.1862C12.2109 6.7487 12.5651 6.39453 13.0026 6.39453C13.4401 6.39453 13.7943 6.7487 13.7943 7.1862V10.4153C13.7839 10.8528 13.4297 11.207 13.0026 11.207Z"
                    fill=""
                  />
                  <path
                    d="M15.9479 20.8424C15.5104 22.0508 14.3542 22.9154 13 22.9154C12.1771 22.9154 11.3646 22.582 10.7917 21.9883C10.4583 21.6758 10.2083 21.2591 10.0625 20.832C10.1979 20.8529 10.3333 20.8633 10.4792 20.8841C10.7187 20.9154 10.9688 20.9466 11.2188 20.9674C11.8125 21.0195 12.4167 21.0508 13.0208 21.0508C13.6146 21.0508 14.2083 21.0195 14.7917 20.9674C15.0104 20.9466 15.2292 20.9362 15.4375 20.9049C15.6042 20.8841 15.7708 20.8633 15.9479 20.8424Z"
                    fill=""
                  />
                </svg>
              </div>
              <div className=" absolute top-0 right-0 bg-active size-3 rounded-full border border-white animate-pulse"></div>
            </div>

            {/* User Avatar & profile*/}
            <div className="flex gap-2 items-center text-gray hover:text-dark hover:cursor-pointer transition-all">
              <img src="./imgs/avatar.png" alt="" />
              <div className=" hidden xl:block">
                <h3 className="font-semibold ">Usman Zafar</h3>
                <p className="text-[14px]">usmanzafar@gmail.com</p>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
