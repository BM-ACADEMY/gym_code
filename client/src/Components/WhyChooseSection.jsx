import React, { useEffect } from "react";
import { FaAward, FaDumbbell, FaSmileBeam } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Certified Trainers",
      description: "Train under nationally certified fitness experts with proven track records.",
      icon: <FaAward className="w-8 h-8" />,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Modern Equipment",
      description: "Top-notch, cutting-edge gym equipment to support all fitness levels.",
      icon: <FaDumbbell className="w-8 h-8" />,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Motivational Environment",
      description: "Positive, high-energy atmosphere to keep you pushing toward your goals.",
      icon: <FaSmileBeam className="w-8 h-8" />,
      color: "from-red-500 to-red-700"
    }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Gym-themed background pattern (dumbbells and circles) */}
      <div className="absolute inset-0 opacity-55 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBvcGFjaXR5PSIwLjEiPgogIDxwYXRoIGQ9Ik0yMCA1MGgxMG0xMCAwaDEwbTEwIDBoMTBNMjAgNTBoMTBtMTAgMGgxMG0xMCAwaDEwIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIzMCIgcj0iNSIgZmlsbD0iI2RjMjYyNiIvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iNzAiIHI9IjUiIGZpbGw9IiNkYzI2MjYiLz4KICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjMwIiByPSI1IiBmaWxsPSIjZGMyNjI2Ii8+CiAgPGNpcmNsZSBjeD0iODAiIGN5PSI3MCIgcj0iNSIgZmlsbD0iI2RjMjYyNiIvPgo8L3N2Zz4=')] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-quicksand">Why Choose <span className="text-[#dc2626]">Us</span></h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl shadow-md overflow-hidden h-full group transition-all duration-500 hover:shadow-xl border border-gray-200 hover:border-red-300"
              data-aos="fade-up" // Add AOS fade-up animation
            >
              {/* Hover overlay */}
              <div className={`absolute top-0 left-0 w-0 h-0 bg-gradient-to-br ${feature.color} opacity-0 
                group-hover:w-full group-hover:h-full group-hover:opacity-90 
                transition-all duration-500 ease-out origin-top-left rounded-xl`}/>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="text-red-500 group-hover:text-white mb-6 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 flex-grow">
                  {feature.description}
                </p>
                
                {/* Animated arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-700 ease-out">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
