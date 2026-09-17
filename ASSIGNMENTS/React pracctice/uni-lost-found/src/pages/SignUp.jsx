import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { supabase } from "../supabase/supabaseClient";
const SignUp = () => {
  const isDark = useSelector((state) => state.theme.value);

  const [isSignup,setIsSignup]=useState({
    email:"",
    password:"",
    name:"",
  })


  async function signUpUser(e){
  e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
  email: isSignup.email,
  password: isSignup.password,
});

console.log(data)
  }

  return (
    <div
      className={`min-h-screen pt-15  flex items-center justify-center px-4 transition-colors duration-300 ${
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
              <FaUserPlus />
            </span>
          </div>

          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Create Account
          </h1>

          <p
            className={`mt-2 ${
              isDark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Join our University Lost & Found
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e)=>{signUpUser(e)}}>
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            onChange={(e)=>{setIsSignup({...isSignup,name:e.target.value})}}/>
          </div>

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
              placeholder="Enter your university email"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            onChange={(e)=>{setIsSignup({...isSignup,email:e.target.value})}} />
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
              placeholder="Create a password"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`} onChange={(e)=>{setIsSignup({...isSignup,password:e.target.value})}}
            />
          </div>

         

          <button
            type="submit"
            className="w-full bg-[#324f8c] hover:bg-[#263e70] text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>
        </form>

        <p
          className={`text-center text-sm mt-6 ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Already have an account?{" "}
          <span className="text-[#324f8c] font-semibold cursor-pointer hover:underline">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;