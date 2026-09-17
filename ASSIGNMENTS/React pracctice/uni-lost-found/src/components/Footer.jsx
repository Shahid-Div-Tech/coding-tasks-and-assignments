import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <footer
      className={`py-10 transition-colors duration-300 ${
        isDark
          ? "bg-gray-950 text-gray-300"
          : "bg-gray-900 text-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="https://images.seeklogo.com/logo-png/43/2/iqra-university-logo-png_seeklogo-432778.png"
            alt="Logo"
            className="w-50 h-10 rounded-full object-cover mb-4"
          />

          <h2
            className={`text-xl font-bold mb-4 ${
              isDark ? "text-white" : "text-white"
            }`}
          >
            About Lost & Found
          </h2>

          <p className="text-sm leading-6">
            Our Lost & Found platform helps students report lost items,
            find missing belongings, and connect with people who have
            found lost items around the university.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Explore</h2>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Lost Items</li>
            <li className="hover:text-white cursor-pointer">Found Items</li>
            <li className="hover:text-white cursor-pointer">
              Report Lost Item
            </li>
            <li className="hover:text-white cursor-pointer">
              Report Found Item
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>

          <p className="text-sm mb-2">Email: example@gmail.com</p>
          <p className="text-sm mb-2">Phone: +92 300 1234567</p>
          <p className="text-sm">Karachi, Pakistan</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>

          <div className="flex items-center gap-4">
            <a href="#" className="bg-white p-2 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>

            <a href="#" className="bg-white p-2 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>

            <a href="#" className="bg-white p-2 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-t mt-8 pt-5 text-center text-sm ${
          isDark ? "border-gray-800" : "border-gray-700"
        }`}
      >
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;