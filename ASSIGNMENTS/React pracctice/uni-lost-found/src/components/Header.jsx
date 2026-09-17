import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lighttheme } from "../store/slices/darktheme";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";


const Header = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.value);

  const [value, setValue] = useState(localStorage.getItem("user"));

  return (
    <header
      className={`
        h-15 px-10 flex items-center justify-between
        shadow-md fixed top-0 left-0 w-full z-50
        border-b transition-colors duration-300
        ${
          isDark
            ? "bg-gray-900 border-gray-700"
            : "bg-[#324f8c] border-gray-300"
        }
      `}
    >
      <div>
        <img
          src="https://images.seeklogo.com/logo-png/43/2/iqra-university-logo-png_seeklogo-432778.png"
          alt="Logo"
          className="w-60 h-10 rounded-full object-cover"
        />
      </div>

      <nav className="flex gap-8">
        <Link
          to="/"
          className={`
            h-10 w-20 flex items-center justify-center
            rounded-md transition-colors duration-200
            ${
              isDark
                ? "text-gray-200 hover:bg-gray-700"
                : "text-white hover:bg-black"
            }
          `}
        >
          Home
        </Link>

        <Link
          to="/contact"
          className={`
            h-10 w-20 flex items-center justify-center
            rounded-md transition-colors duration-200
            ${
              isDark
                ? "text-gray-200 hover:bg-gray-700"
                : "text-white hover:bg-black"
            }
          `}
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to={value ? "/profile" : "/login"}
          className={`
            px-6 py-2 rounded-lg transition-colors duration-200
            ${
              isDark
                ? "text-white hover:bg-gray-700"
                : "text-white hover:bg-black"
            }
          `}
        >
          {value ? "Profile" : "Login"}
        </Link>

        <button
          onClick={() => dispatch(lighttheme())}
          className={`
            px-3 py-2 rounded-lg transition-colors duration-200
            ${
              isDark
                ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }
          `}
        >
          {isDark ?  <IoSunnySharp/> : <FaMoon/>}
        </button>
      </div>
    </header>
  );
};

export default Header;