import React from "react";
import doctorImage from "../assets/img1.jpg"; // path adjust करें assets folder के हिसाब से

import {
  FaHeartbeat,
  FaSyringe,
  FaProcedures,
  FaUserMd,
  FaUserTie,
  FaUserNurse,
  FaFlask,
 
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 sm:p-10 shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="hero-content max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 font-poppins">
              <span className="text-gradient-primary">Professional Care</span>
              <br />
              <span className="text-gradient-accent">At Your Doorstep</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-lg">
              Expert nursing and home care services available 24x7. We bring quality healthcare to your home with compassion and professionalism.


            </p>
          </div>

          {/* Doctor Image Container */}
          <div className="relative w-full max-w-xs lg:max-w-sm">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <img
                src={doctorImage}
                alt="Professional doctor"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* 24x7 Badge */}
            <div className="absolute -bottom-3 -right-3 lg:bottom-auto lg:top-1/2 lg:-right-3 lg:-translate-y-1/2 
              bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full w-24 h-24 
              flex flex-col items-center justify-center shadow-lg z-10">
              <div className="text-xl font-bold">24x7</div>
              <div className="text-xs font-semibold">DOCTOR</div>
              <div className="text-[10px]">AVAILABLE</div>
            </div>
          </div>
        </div>
      </section>
        {/* Services Section */}
        <section
          id="services"
          className="bg-white rounded-3xl shadow-md p-6 sm:p-8"
        >
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-poppins">
              हमारी सेवाएँ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-indigo-50 rounded-2xl p-5 flex items-start space-x-4 hover:bg-indigo-100 transition">
              <div className="bg-indigo-600 text-white p-3 rounded-full flex-shrink-0">
                <FaHeartbeat className="text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  बी.पी. शुगर, भाप मशीन की सुविधा
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  सटीक रीडिंग के लिए प्रोफेशनल उपकरण
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-5 flex items-start space-x-4 hover:bg-indigo-100 transition">
              <div className="bg-indigo-600 text-white p-3 rounded-full flex-shrink-0">
                <FaSyringe className="text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  इंजेक्शन, आई.वी. ड्रिप, ड्रेन्सिंग
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  स्टरलाइज्ड और सुरक्षित प्रक्रिया
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-5 flex items-start space-x-4 hover:bg-indigo-100 transition">
              <div className="bg-indigo-600 text-white p-3 rounded-full flex-shrink-0">
                <FaProcedures className="text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  एनीमा एवं पेशाब की नली लगाने की सुविधा
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  विशेषज्ञ नर्स द्वारा सेवा
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-5 flex items-start space-x-4 hover:bg-indigo-100 transition">
              <div className="bg-indigo-600 text-white p-3 rounded-full flex-shrink-0">
                <FaUserMd className="text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  सीनियर सिटीजन केयर
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  वृद्धजनों के लिए विशेष देखभाल
                </p>
              </div>
            </div>
          </div>

          {/* Lab Test Sample Collection Section - Improved */}
          <div className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="bg-white text-indigo-600 p-3 rounded-full flex-shrink-0">
                <FaFlask className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  होम सैंपल कलेक्शन सर्विस
                </h3>
                <p className="mb-2">
                  सभी प्रकार की जांच के सैंपल घर पर लिए जाते हैं
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>ब्लड टेस्ट (सभी प्रकार के)</li>
                  <li>यूरिन टेस्ट</li>
                  <li>पैथोलॉजी टेस्ट</li>
                  <li>रूटीन चेकअप</li>
                </ul>
                <p className="mt-3 text-blue-100">
                  रिपोर्ट घर पर या ऑनलाइन उपलब्ध कराई जाती है
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 text-center shadow-lg">
              <h3 className="font-bold text-lg mb-2">होम्योपैथी परामर्श</h3>
              <p className="text-indigo-100">समय: सायं 6 बजे से</p>
              <p className="text-indigo-50 text-sm mt-2">
                अनुभवी होम्योपैथी चिकित्सक द्वारा
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-2xl p-6 text-center shadow-lg">
              <h3 className="font-bold text-lg mb-2">फीमेल स्टाफ उपलब्ध</h3>
              <p className="text-pink-100">महिला रोगियों के लिए विशेष सुविधा</p>
              <p className="text-pink-50 text-sm mt-2">
                पूर्ण गोपनीयता और सुरक्षा
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="font-bold text-xl mb-3">आप घर पर ही रहें....</h3>
            <p className="text-lg mb-4">
              हम वहीं पर सभी सेवाएँ उपलब्ध करवायेंगे
            </p>
            <div className="text-2xl font-bold tracking-wide pulse">
              📞 सिर्फ एक कॉल पर आपके घर
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-indigo-50 border border-indigo-200 rounded-3xl px-6 py-6 mt-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 font-poppins">
            Contact Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-indigo-900 font-medium">
            <a
              href="tel:8058713880"
              className="bg-white hover:bg-indigo-100 px-5 py-3 rounded-full shadow-sm transition flex items-center gap-2"
            >
              <FaUserTie className="text-indigo-600" />
              Himanshu Gupta: 8058713880
            </a>
            <a
              href="tel:9982847976"
              className="bg-white hover:bg-indigo-100 px-5 py-3 rounded-full shadow-sm transition flex items-center gap-2"
            >
              <FaUserMd className="text-indigo-600" />
              Hrithik Suman: 9982847976
            </a>
            <a
              href="tel:9351608047"
              className="bg-white hover:bg-indigo-100 px-5 py-3 rounded-full shadow-sm transition flex items-center gap-2"
            >
              <FaUserNurse className="text-indigo-600" />
              Hariom Bagwan: 9351608047
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
