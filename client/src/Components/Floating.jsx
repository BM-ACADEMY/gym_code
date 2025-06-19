import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import WhatsAppIcon from '../assets/Footer/whatsapp.png'; // Replace with your image path

const FloatingIcons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to show or hide the scroll to top button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Floating Icon as Image */}
      <a 
        href="https://wa.me/919751351156" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-3 mb-5 p-3 transition z-[999]"
        title="Chat with us on WhatsApp"
      >
        <img 
          src={WhatsAppIcon} 
          alt="WhatsApp" 
          className="w-12 h-12" // Adjust size as needed
        />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 p-3 rounded-full text-white shadow-lg hover:bg-red-600 transition z-[999]"
          title="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingIcons;
