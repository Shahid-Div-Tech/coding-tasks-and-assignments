import React from "react";
import { useSelector } from "react-redux";

const LostItems = () => {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <div
      className={`min-h-screen pt-24 pb-12 px-6 transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Lost Items
          </h1>

          <p
            className={`mt-2 ${
              isDark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Items reported as lost by students.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search lost items..."
            className={`flex-1 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
              isDark
                ? "bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
                : "bg-white text-gray-900 border border-gray-200"
            }`}
          />

          <select
            className={`px-4 py-3 rounded-lg outline-none ${
              isDark
                ? "bg-gray-800 text-white border border-gray-700"
                : "bg-white text-gray-900 border border-gray-200"
            }`}
          >
            <option>All Locations</option>
            <option>Library</option>
            <option>Cafeteria</option>
            <option>Main Campus</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={`rounded-xl shadow-sm overflow-hidden transition-colors duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`h-48 ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>

            <div className="p-5">
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-red-900 text-red-300"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Lost
              </span>

              <h2
                className={`text-xl font-bold mt-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Black Backpack
              </h2>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Main Campus
              </p>

              <button className="w-full mt-5 bg-[#324f8c] text-white py-2.5 rounded-lg hover:bg-[#263e70]">
                View Details
              </button>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm overflow-hidden transition-colors duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`h-48 ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>

            <div className="p-5">
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-red-900 text-red-300"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Lost
              </span>

              <h2
                className={`text-xl font-bold mt-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Student ID Card
              </h2>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                University Library
              </p>

              <button className="w-full mt-5 bg-[#324f8c] text-white py-2.5 rounded-lg hover:bg-[#263e70]">
                View Details
              </button>
            </div>
          </div>

          <div
            className={`rounded-xl shadow-sm overflow-hidden transition-colors duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`h-48 ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>

            <div className="p-5">
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-red-900 text-red-300"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Lost
              </span>

              <h2
                className={`text-xl font-bold mt-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Water Bottle
              </h2>

              <p
                className={`text-sm mt-2 ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Cafeteria
              </p>

              <button className="w-full mt-5 bg-[#324f8c] text-white py-2.5 rounded-lg hover:bg-[#263e70]">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostItems;