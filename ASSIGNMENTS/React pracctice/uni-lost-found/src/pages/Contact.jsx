import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <div
      className={`mt-15 mb-0 flex items-center justify-center px-6 py-12 transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        <div
          className={`p-8 rounded-xl shadow-md transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1
            className={`text-3xl font-bold mb-2 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Contact Us
          </h1>

          <p
            className={`mb-6 ${
              isDark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Have any questions? Send us a message.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            />

            <input
              type="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className={`w-full px-4 py-3 rounded-lg outline-none resize-none focus:ring-2 focus:ring-[#324f8c] ${
                isDark
                  ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600"
                  : "bg-white text-gray-900 border border-gray-300"
              }`}
            ></textarea>

            <button className="w-full bg-[#324f8c] hover:bg-[#263e70] text-white py-3 rounded-lg font-semibold transition-colors">
              Send Message
            </button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md min-h-120">
          <iframe
            src="https://www.google.com/maps?q=Iqra%20University%20Karachi&output=embed"
            className="w-full h-full min-h-120"
            style={{ border: 0 }}
            loading="lazy"
            title="University Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;