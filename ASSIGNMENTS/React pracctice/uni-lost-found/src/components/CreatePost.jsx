import React from "react";
import { FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <div
      className={`min-h-screen pt-24 px-6 pb-12 transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Create Post
          </h1>

          <p
            className={`mt-1 ${
              isDark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Report a lost or found item to help reunite it with its owner.
          </p>
        </div>

        <div
          className={`rounded-2xl shadow-md p-6 md:p-8 transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="mb-6">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Post Type
            </label>

            <div className="grid grid-cols-2 gap-4">
              <select
                className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                  isDark
                    ? "bg-gray-700 text-white border border-gray-600"
                    : "bg-white text-gray-900 border border-gray-300"
                }`}
              >
                <option>lost</option>
                <option>Found</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Item Name
            </label>

            <input
              type="text"
              placeholder="e.g. Black Wallet"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            />
          </div>

          <div className="mb-5">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Category
            </label>

            <select
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            >
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Wallet</option>
              <option>Keys</option>
              <option>Documents</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Location
            </label>

            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-4 text-[#324f8c]" />

              <input
                type="text"
                placeholder="Where was the item lost/found?"
                className={`w-full pl-11 pr-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                  isDark
                    ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                    : "bg-white text-gray-900 border border-gray-300"
                }`}
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Describe the item, color, brand, identifying marks etc."
              className={`w-full px-4 py-3 rounded-lg outline-none resize-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              className={`block text-sm font-semibold mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Item Image
            </label>

            <label
              className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer hover:border-[#324f8c] transition ${
                isDark
                  ? "border-gray-600 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <FaCamera
                className={`text-3xl mb-2 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              />

              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Click to upload item image
              </p>

              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-400" : "text-gray-400"
                }`}
              >
                PNG, JPG up to 5MB
              </p>

              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          <button
            type="button"
            className="w-full bg-[#324f8c] hover:bg-[#263e70] text-white py-3 rounded-lg font-semibold transition"
          >
            Post Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;