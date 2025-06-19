import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdFitnessCenter } from "react-icons/md";
import Googleimage1 from '../assets/google/our gym inside 2.jpeg'
import Googleimage2 from '../assets/google/photo-1581009146145-b5ef050c2e1e.png'

const GymLocation = () => {
  const [selectedGym, setSelectedGym] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const gyms = [
    {
      id: 1,
      name: "Battle fitness unisex gym",
      address: "2nd floor, near Appolo formacy, Pulivalam, Thruthuraipoondi, Thiruvarur, Tamil Nadu 610109",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4823.084189503091!2d79.6377236!3d10.7565984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a554707482ce923%3A0xbfcd5a538bbb7457!2sBattle%20fitness%20unisex%20gym!5e1!3m2!1sen!2sin!4v1746010641383!5m2!1sen!2sin",
      phone: "+91 97513 51156",
      hours: "5:00 AM - 10:00 PM (Mon-Sat), Closed (Sun)",
      image: Googleimage1
    },
    {
      id: 2,
      name: "Battle fitness unisex gym",
      address: "3rd floor, Balakrishna nagar, Mannarkudi, 614001",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4824.576217708035!2d79.44625347583755!3d10.662895861276011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a554d073b7b2e57%3A0x94120e9fda9f044a!2sNaturals%20Mannargudi!5e1!3m2!1sen!2sin!4v1746010852505!5m2!1sen!2sin",
      phone: "+91 97513 51156",
      hours: "5:00 AM - 10:00 AM, 3:00 PM - 9:30 PM (Mon-Sat), 10:00 AM - 12:00 PM (Women Only), Closed (Sun)",
      image: Googleimage2
    },
  ];

  useEffect(() => {
    if (gyms.length > 0 && !selectedGym) {
      setSelectedGym(gyms[0]);
    }
  }, [gyms, selectedGym]);

  const handleGymClick = (gym) => {
    setSelectedGym(gym);
    setIsExpanded(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0e15] px-4 py-12">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-quicksand">Our Gym <span className="text-[#dc2626]">Locations</span></h2>
          <div className="w-20 h-1 bg-[#dc2626] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Mobile */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-between"
            >
              <span className="font-semibold">
                {selectedGym ? selectedGym.name : "Select a Branch"}
              </span>
              <IoIosArrowForward className={`transition-transform ${isExpanded ? "rotate-90" : ""}`} />
            </button>
            
            {isExpanded && (
              <div className="mt-2 bg-gray-800/95 rounded-lg overflow-hidden shadow-lg ">
                {gyms.map((gym) => (
                  <div
                    key={gym.id}
                    onClick={() => handleGymClick(gym)}
                    className={`p-4 border-b border-gray-700 last:border-b-0 flex items-center gap-3 cursor-pointer transition-colors ${
                      selectedGym?.id === gym.id ? "bg-red-600" : "hover:bg-gray-700/90"
                    }`}
                  >
                    <MdFitnessCenter className="text-xl text-white" />
                    <div>
                      <h3 className="font-medium text-white">{gym.name}</h3>
                      <p className="text-gray-300 text-sm">{gym.address.split(",").slice(0, 2).join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-full lg:w-1/3 bg-gray-800/95 rounded-xl overflow-hidden shadow-2xl  h-auto">
            <div className="p-6 bg-red-600">
              <h2 className="text-2xl font-bold text-white">Our Branches</h2>
              <p className="text-red-100">Select a branch to view details</p>
            </div>
            
            <div className="overflow-y-auto">
              {gyms.map((gym) => (
                <div
                  key={gym.id}
                  onClick={() => handleGymClick(gym)}
                  className={`p-5 border-b border-gray-700 last:border-b-0 flex items-start gap-4 cursor-pointer transition-all ${
                    selectedGym?.id === gym.id
                      ? "bg-gray-700/90"
                      : "hover:bg-gray-700/70"
                  }`}
                >
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MdFitnessCenter className="text-xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{gym.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{gym.address}</p>
                  </div>
                  <IoIosArrowForward className="text-gray-400 mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {selectedGym ? (
              <div className="bg-gray-800/95 rounded-xl overflow-hidden shadow-2xl border border-white-500/30">
                {/* Gym Image */}
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <img 
                    src={selectedGym.image} 
                    alt={selectedGym.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedGym.name}</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <FaMapMarkerAlt className="text-red-500" />
                      <p className="text-gray-300 text-sm">{selectedGym.address}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Gym Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-700/70 p-4 rounded-lg border border-white-500/30">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaClock className="text-red-500" /> Operating Hours
                      </h3>
                      <p className="text-gray-300">{selectedGym.hours}</p>
                    </div>
                    
                    <div className="bg-gray-700/70 p-4 rounded-lg border border-white-500/30">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FaPhone className="text-red-500" /> Contact
                      </h3>
                      <p className="text-gray-300">{selectedGym.phone}</p>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="rounded-xl overflow-hidden border border-white-500/30 h-96">
                    <iframe
                      src={selectedGym.embedUrl}
                      title={selectedGym.name}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[600px] flex flex-col items-center justify-center bg-gray-800/95 rounded-xl p-6 text-center border border-white-500/30">
                <MdFitnessCenter className="text-5xl text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-300">Select a branch</h3>
                <p className="text-gray-500 mt-2">Choose from our list of premium fitness centers</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymLocation;