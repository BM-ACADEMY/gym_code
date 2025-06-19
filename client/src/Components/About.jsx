import { useEffect } from 'react';
import { FaDumbbell, FaFire, FaRunning, FaHeartbeat } from 'react-icons/fa';
import Aboutimage from '../assets/About/gym-pic.jpg';
import BackgroundPattern from '../assets/About/FIT0050.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative py-12 md:py-20 overflow-x-hidden" id="about">
      {/* Full section background overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full opacity-1"
          style={{
            backgroundImage: `url(${BackgroundPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-gray-50/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section - Left Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative rounded-lg overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden">
                <img
                  src={Aboutimage}
                  alt="Battle Fitness Gym"
                  className="w-full h-auto object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 opacity-70 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-quicksand">
                About <span className="text-[#dc2626]">Us</span>
              </h2>

              <div className="h-1 w-16 bg-[#dc2626] mb-6"></div>

              <p className="text-lg text-gray-600 mb-6 font-commissioner text-justify">
                Welcome to <span className="text-black font-medium">Battle Fitness A/C</span> – not just a gym, but a way of life. We are recognized as a{' '}
                <span className="text-[#dc2626] font-medium">premium fitness destination</span> that promotes a healthy lifestyle.
              </p>

              <p className="text-lg text-gray-600 mb-8 font-commissioner text-justify">
                Based in Thiruvarur and Mannarkudi, we're one of the top fitness centers, offering exclusive training programs designed to help you transform your body and mind.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 font-commissioner" style={{ cursor: 'pointer' }}>
                <div className="flex items-start group" data-aos="fade-up">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaDumbbell className="text-[#dc2626] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-[#dc2626] transition-colors duration-300">
                      Functional Training
                    </h4>
                    <p className="text-gray-600 text-sm">Real-world strength</p>
                  </div>
                </div>

                <div className="flex items-start group" data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaFire className="text-[#dc2626] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-[#dc2626] transition-colors duration-300">
                      Fitness Boot Camps
                    </h4>
                    <p className="text-gray-600 text-sm">Build endurance</p>
                  </div>
                </div>

                <div className="flex items-start group" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaRunning className="text-[#dc2626] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-[#dc2626] transition-colors duration-300">
                      Body Transformation
                    </h4>
                    <p className="text-gray-600 text-sm">Tailored to your goals</p>
                  </div>
                </div>

                <div className="flex items-start group" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaHeartbeat className="text-[#dc2626] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-[#dc2626] transition-colors duration-300">
                      Weight Loss & Gain
                    </h4>
                    <p className="text-gray-600 text-sm">Expert nutrition guidance</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 font-commissioner text-justify">
                Our mission is to deliver the best fitness experience under the guidance of qualified and experienced professionals. Join us and be part of a growing fitness movement across the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
