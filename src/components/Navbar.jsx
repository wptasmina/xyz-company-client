import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-2 shadow-md sticky z-50 top-0 bg-white">
      <div className="w-11/12 md:w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="w-14" alt="Logo" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className="font-semibold text-gray-700">
            Home
          </NavLink>
          <NavLink to="/employee-register" className="font-semibold text-gray-700">
            Join as Employee
          </NavLink>
          <NavLink to="/hr-register" className="font-semibold text-gray-700">
            Join as HR Manager
          </NavLink>
        </div>

        {/* Login Button */}
        <Link to="/login" className="hidden md:block">
          <button className="bg-[#1a3566ee] text-white px-6 py-2 rounded-md">
            Login
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-3xl border border-blue-gray-200 rounded-md text-[#1753c2]"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <IoMdClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-50 shadow-md mt-2 p-4 rounded-lg">
          <NavLink
            to="/"
            className="block font-semibold text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/employee-register"
            className="block font-semibold text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join as Employee
          </NavLink>
          <NavLink
            to="/hr-register"
            className="block font-semibold text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join as HR Manager
          </NavLink>
          <Link
            to="/login"
            className="block bg-[#1a3566ee] text-white text-center py-2 rounded-md mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
