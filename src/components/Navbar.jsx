import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaHome } from 'react-icons/fa';

const Navbar = ({ role = 'guest' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSignOut = async () => {
        try {
            await signOutUser();
            console.log("Successfully logged out!");
        } catch (error) {
            console.error("Failed to log out:", error.message);
            alert("Failed to log out, please try again.");
        }
    };

    return (
        <nav className="bg-gray-800 text-white z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">{role === 'hr' ? 'Company Logo' : 'XYZ'}</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-20">
                    <button
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        className="focus:outline-none text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Links */}
                <div
                    className={`absolute md:static top-16 left-0 w-full bg-gray-800 md:flex md:items-center md:w-auto md:space-x-4 ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <Link to="/" className="block text-white py-2 px-4 hover:text-gray-50 rounded md:inline-block">
                        <FaHome className="inline-block text-white text-center ml-4 mr-1 -mt-1" />
                        Home
                    </Link>

                    {user ? (
                        role === 'employee' ? (
                            <>
                                <Link
                                    to="/my-assets"
                                    className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                                >
                                    My Assets
                                </Link>
                                <Link
                                    to="/my-team"
                                    className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                                >
                                    My Team
                                </Link>
                                <Link
                                    to="/request-asset"
                                    className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                                >
                                    Request Asset
                                </Link>
                            </>
                        ) : role === 'hr' ? (
                            <>
                                <Link
                                    to="/asset-list"
                                    className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                                >
                                    Asset List
                                </Link>
                                <Link
                                    to="/add-asset"
                                    className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                                >
                                    Add Asset
                                </Link>
                                <Link
                                    to="/employee-list"
                                    className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                                >
                                    My Employees
                                </Link>
                            </>
                        ) : null
                    ) : (
                        <>
                            <Link
                                to="/join-employee"
                                className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                            >
                                Join as Employee
                            </Link>
                            <Link
                                to="/join-hr"
                                className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                            >
                                Join as HR Manager
                            </Link>
                            <Link
                                to="/login"
                                className="block text-[#e47608] py-2 px-4 hover:text-gray-50 rounded md:inline-block"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>

                {/* User Avatar or Join Now */}
                <div>
                    {user ? (
                        <div className="relative z-30">
                            <button
                                onClick={toggleDropdown}
                                className="btn btn-ghost btn-circle avatar"
                                aria-label="User Menu"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        className="rounded-full"
                                        alt="User Avatar"
                                        src={user?.photoURL || '/default-avatar.png'}
                                    />
                                </div>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg py-2">
                                    <li className="px-4 py-2">{user.displayName}</li>
                                    <li className="px-4 py-2">{user.email}</li>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="block px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white w-full text-left"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="btn bg-indigo-600 rounded-sm transition-all duration-300 hover:bg-indigo-500 text-white btn-sm border-none"
                        >
                            Join Now
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
