import React from "react";
import { FaEnvelope, FaPlus, FaBoxOpen, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const navigate = useNavigate();
  const isDark = useSelector((state) => state.theme.value);

  return (
    <div
      className={`min-h-screen pt-24 px-6 pb-12 transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`rounded-2xl shadow-md p-6 mb-8 transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="User"
                className="w-28 h-28 rounded-full object-cover border-4 border-[#324f8c]"
              />

              <button
                type="button"
                className="absolute bottom-1 right-1 w-9 h-9 bg-[#324f8c] text-white rounded-full flex items-center justify-center border-2 border-white hover:bg-[#263e70] transition"
              >
                <FaCamera className="text-sm" />
              </button>
            </div>

            <div className="text-center sm:text-left">
              <h1
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Shahid Ahmed
              </h1>

              <div
                className={`flex items-center justify-center sm:justify-start gap-2 mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                <FaEnvelope />
                <span>shahid@example.com</span>
              </div>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-400" : "text-gray-400"
                }`}
              >
                Student Account
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div>
            <h2
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              My Posted Items
            </h2>

            <p
              className={`text-sm mt-1 ${
                isDark ? "text-gray-300" : "text-gray-500"
              }`}
            >
              Items you have posted on Lost & Found
            </p>
          </div>

          <button
            className="flex items-center gap-2 bg-[#324f8c] text-white px-4 py-2 rounded-lg hover:bg-[#263e70]"
            onClick={() => {
              navigate("/profile/createpost");
            }}
          >
            <FaPlus />
            Post Item
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={`rounded-xl shadow-sm overflow-hidden border transition-colors duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
              alt="Backpack"
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-red-900 text-red-300"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Lost
              </span>

              <h3
                className={`text-lg font-bold mt-3 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Black Backpack
              </h3>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Lost near University Library
              </p>

              <p
                className={`text-xs mt-3 ${
                  isDark ? "text-gray-400" : "text-gray-400"
                }`}
              >
                Posted 2 days ago
              </p>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm overflow-hidden border transition-colors duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
              alt="Wallet"
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-green-900 text-green-300"
                    : "bg-green-100 text-green-600"
                }`}
              >
                Found
              </span>

              <h3
                className={`text-lg font-bold mt-3 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Brown Wallet
              </h3>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Found near Cafeteria
              </p>

              <p
                className={`text-xs mt-3 ${
                  isDark ? "text-gray-400" : "text-gray-400"
                }`}
              >
                Posted 5 days ago
              </p>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm overflow-hidden border transition-colors duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1600087626128-5a39a8c6f3d2"
              alt="Headphones"
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <span
                className={`inline-block text-xs px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-red-900 text-red-300"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Lost
              </span>

              <h3
                className={`text-lg font-bold mt-3 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Wireless Headphones
              </h3>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Lost near Main Campus
              </p>

              <p
                className={`text-xs mt-3 ${
                  isDark ? "text-gray-400" : "text-gray-400"
                }`}
              >
                Posted 1 week ago
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl shadow-sm p-8 text-center mt-8 transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <FaBoxOpen
            className={`text-4xl mx-auto mb-3 ${
              isDark ? "text-gray-500" : "text-gray-300"
            }`}
          />

          <h3
            className={`text-lg font-semibold ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            Keep your items updated
          </h3>

          <p
            className={`text-sm mt-1 ${
              isDark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Mark your lost or found items as resolved when they are returned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;