import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaSearch,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector ,useDispatch} from "react-redux";
import lostfound from "../assets/lostfound.png";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { lighttheme } from "../store/slices/darktheme";


const ProfileHeader = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();
  const isDark = useSelector((state) => state.theme.value);
   const dispatch = useDispatch();

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  return (
    <header
      className={`h-16 px-8 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md border-b transition-colors duration-300 ${
        isDark
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div>
        <img
          src={lostfound}
          alt="Logo"
          className="w-60 h-10 rounded-full object-cover"
        />
      </div>

      <nav className="flex items-center gap-2">
        <Link
          to="/profile"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            isDark
              ? "text-gray-300 hover:bg-gray-700 hover:text-white"
              : "text-gray-600 hover:bg-[#324f8c]/10 hover:text-[#324f8c]"
          }`}
        >
          <FaBoxOpen />
          Lost Items
        </Link>

        <Link
          to="/profile/founditems"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            isDark
              ? "text-gray-300 hover:bg-gray-700 hover:text-white"
              : "text-gray-600 hover:bg-[#324f8c]/10 hover:text-[#324f8c]"
          }`}
        >
          <FaSearch />
          Found Items
        </Link>

        <Link
          to="/profile/userProfile"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            isDark
              ? "text-gray-300 hover:bg-gray-700 hover:text-white"
              : "text-gray-600 hover:bg-[#324f8c]/10 hover:text-[#324f8c]"
          }`}
        >
          <FaUser />
          Profile
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

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 ml-3 px-5 py-2 rounded-lg bg-[#324f8c] text-white hover:bg-[#263e70] transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </nav>
    </header>
  );
};

export default ProfileHeader;