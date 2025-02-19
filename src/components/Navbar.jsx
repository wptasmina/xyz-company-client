import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"; // Icons for theme switch

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Check if the user has a saved preference for dark mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Apply the dark class on <html> element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="py-2 px-4 md:px-0 shadow-md sticky z-50 top-0 bg-white dark:bg-[#1e293b]">
      <div className="md:w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="w-14" alt="Logo" />
            <p className="text-[#031278] font-semibold text-xl dark:text-white">TrakSmart</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-white/70 duration-300">
            Home
          </NavLink>
          <NavLink to="/product-featur" className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-white/70 duration-300">
            Product Features
          </NavLink>
          <NavLink to="/employee-register" className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-white/70 duration-300">
            Join as Employee
          </NavLink>
          <NavLink to="/hr-register" className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-white/70 duration-300">
            Join as HR Manager
          </NavLink>
          <NavLink to="/contact" className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-white/70 duration-300">
            Contact
          </NavLink>
        </div>
         {/* Dark Mode Toggle */}
         <button
          onClick={toggleDarkMode}
          className="ml-4 text-2xl text-black dark:text-white"
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode  />}
        </button>
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
        <div className="md:hidden bg-blue-50 dark:bg-[#2d3a4b] shadow-md mt-2 p-4 rounded-lg">
          <NavLink
            to="/"
            className="block font-semibold text-gray-700 py-2 dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/product-featur"
            className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-[#1a3566]"
          >
            Product Features
          </NavLink>
          <NavLink
            to="/employee-register"
            className="block font-semibold text-gray-700 py-2 dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join as Employee
          </NavLink>
          <NavLink
            to="/hr-register"
            className="block font-semibold text-gray-700 py-2 dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join as HR Manager
          </NavLink>
          <NavLink
            to="/contact"
            className="font-semibold text-gray-700 hover:text-[#031278] dark:text-white dark:hover:text-[#1a3566]"
          >
            Contact
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
