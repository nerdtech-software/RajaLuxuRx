import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/62cb2645cb0ce4d6584c2d13d226fdba.png"; // Replace with your logo path

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <nav className="bg-transparent backdrop-blur-md bg-opacity-70 text-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-32 h-16" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/"
                className={`hover:text-yellow-500 transition duration-300 ${
                  isActiveLink("/") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={`hover:text-yellow-500 transition duration-300 ${
                  isActiveLink("/booking") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Book Now
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-gray-300 transition duration-300"
              >
                Vehicles8
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                  <li>
                    <Link
                      to="/vehicles/sedan"
                      className={`block px-4 py-2 hover:bg-gray-700 transition ${
                        isActiveLink("/vehicles/sedan") ? "bg-gray-700" : ""
                      }`}
                    >
                      Sedan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vehicles/suv"
                      className={`block px-4 py-2 hover:bg-gray-700 transition ${
                        isActiveLink("/vehicles/suv") ? "bg-gray-700" : ""
                      }`}
                    >
                      SUV
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vehicles/limousine"
                      className={`block px-4 py-2 hover:bg-gray-700 transition ${
                        isActiveLink("/vehicles/limousine") ? "bg-gray-700" : ""
                      }`}
                    >
                      Limousine
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/service"
                className={`hover:text-yellow-500 transition duration-300 ${
                  isActiveLink("/service") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-yellow-500 transition duration-300 ${
                  isActiveLink("/about") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-yellow-500 transition duration-300 ${
                  isActiveLink("/contact") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:bg-gray-700 rounded"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 bg-gray-800 p-4">
            <li>
              <Link
                to="/"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActiveLink("/") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActiveLink("/booking") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
               to="/service"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActiveLink("/booking") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActiveLink("/booking") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
               About US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-gray-300 transition duration-300 ${
                  isActiveLink("/booking") ? "text-yellow-500 font-semibold" : ""
                }`}
              >
               Contact
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between hover:text-gray-300 transition duration-300"
              >
                Vehicles
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 bg-gray-700 text-white rounded-lg shadow-lg">
                  <li>
                    <Link
                      to="/vehicles/sedan"
                      className={`block px-4 py-2 hover:bg-gray-600 transition ${
                        isActiveLink("/vehicles/sedan") ? "bg-gray-600" : ""
                      }`}
                    >
                      Sedan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vehicles/suv"
                      className={`block px-4 py-2 hover:bg-gray-600 transition ${
                        isActiveLink("/vehicles/suv") ? "bg-gray-600" : ""
                      }`}
                    >
                      SUV
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vehicles/limousine"
                      className={`block px-4 py-2 hover:bg-gray-600 transition ${
                        isActiveLink("/vehicles/limousine") ? "bg-gray-600" : ""
                      }`}
                    >
                      Limousine
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
