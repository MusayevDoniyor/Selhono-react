import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/SELHONO.svg";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full mx-auto bg-white py-2 sticky top-0 z-50">
      <div className="w-9/12 flex justify-between items-center mx-auto">
        <NavLink to="/">
          <img src={Logo} alt="SELHONO LOGO" />
        </NavLink>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl font-medium cursor-pointer"
          >
            <i className="pi pi-bars"></i>
          </button>
        </div>

        <ul
          className={`flex lg:flex gap-8 ${
            menuOpen ? "flex-col items-center" : "hidden lg:flex"
          }`}
        >
          <li className="font-jost font-medium text-xl text-color3">
            <NavLink
              to="/"
              className="block lg:inline-block"
              onClick={() => setMenuOpen(false)}
              activeclassname="active"
            >
              Home
            </NavLink>
          </li>

          <li className="font-jost font-medium text-xl text-color3">
            <NavLink
              to="/services"
              className="block lg:inline-block"
              onClick={() => setMenuOpen(false)}
              activeclassname="active"
            >
              Services
            </NavLink>
          </li>

          <li className="font-jost font-medium text-xl text-color3">
            <NavLink
              to="/project"
              className="block lg:inline-block"
              onClick={() => setMenuOpen(false)}
              activeclassname="active"
            >
              Project
            </NavLink>
          </li>

          <li className="text-xl font-medium cursor-pointer">
            <i className="pi pi-search"></i>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
