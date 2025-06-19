import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GymImage from "../assets/Home/gym.jpg";

export default function HomeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
    AOS.refresh();  
  }, []);

  return (
    <section
    className="relative h-screen bg-cover bg-top text-white text-center flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
    style={{ backgroundImage: `url(${GymImage})` }}
    id="home"
  >
  
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-3xl px-2">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-quicksand mb-4 sm:mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          data-aos="fade-up" 
        >
          "Become the <span className="text-[#dc2626]">Strongest</span> Version of Yourself at <span className="text-[#dc2626]">Battle Fitness</span>"
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-commissioner drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
          data-aos="fade-up" 
          data-aos-delay="200" // delay the second animation
        >
          Train Hard. Stay Consistent. Level Up.
        </p>
      </div>
    </section>
  );
}
