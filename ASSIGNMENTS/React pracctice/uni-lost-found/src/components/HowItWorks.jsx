import { FaSearchPlus } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdAssignmentReturn } from "react-icons/md";
import { useSelector } from "react-redux";

const HowItWorks = () => {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        isDark ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            How Lost & Found Works
          </h2>

          <p
            className={`mt-3 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Finding or reporting a lost item is simple and easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-8 rounded-xl shadow-md text-center transition-colors duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center text-3xl ${
                isDark
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-gray-900"
              }`}
            >
              <FaSearchPlus />
            </div>

            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Search Items
            </h3>

            <p
              className={`leading-6 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Browse through reported lost and found items to locate your
              missing belongings.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl shadow-md text-center transition-colors duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center text-3xl ${
                isDark
                  ? "bg-green-900 text-green-300"
                  : "bg-green-100 text-gray-900"
              }`}
            >
              <HiOutlineSpeakerphone />
            </div>

            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Report an Item
            </h3>

            <p
              className={`leading-6 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Report a lost or found item with important details and help
              others find their belongings.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl shadow-md text-center transition-colors duration-300 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center text-3xl ${
                isDark
                  ? "bg-purple-900 text-purple-300"
                  : "bg-purple-100 text-gray-900"
              }`}
            >
              <MdAssignmentReturn />
            </div>

            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Get Your Item Back
            </h3>

            <p
              className={`leading-6 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Connect with the person who found your item and safely recover
              your belongings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;