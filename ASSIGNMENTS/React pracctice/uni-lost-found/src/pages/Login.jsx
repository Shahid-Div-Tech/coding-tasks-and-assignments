import React from "react";
import { Link } from "react-router-dom";
import { MdLockPerson } from "react-icons/md";
import { useSelector } from "react-redux";

const Login = () => {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <div
      className={`pt-20 flex items-center justify-center px-4 transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-xl p-8 transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-[#324f8c] rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl text-white">
              <MdLockPerson />
            </span>
          </div>

          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Welcome Back
          </h1>

          <p
            className={`mt-2 ${
              isDark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Login to your Lost & Found account
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label
              className={`flex items-center gap-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-[#324f8c] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#324f8c] hover:bg-[#263e70] text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p
          className={`text-center text-sm mt-6 ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Don't have an account?{" "}
          <span className="text-[#324f8c] font-semibold cursor-pointer hover:underline">
            <Link to="/signup">Signup</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;