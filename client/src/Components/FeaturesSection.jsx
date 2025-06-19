import { useEffect, useState } from 'react';
import { FaDumbbell, FaFire, FaRunning, FaHeartbeat } from 'react-icons/fa';
import GymBackground from '../assets/Features/gym-backgound.avif';
import { Modal, Box, Typography, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Centralized content data
const featuresData = [
  {
    id: 'functional',
    icon: FaDumbbell,
    title: 'Functional Training',
    description: 'Functional training is a program by Battle Fitness which is one of the best functional fitness training in Thiruvarur, Mannarkudi.',
    modalTitle: 'Functional Training',
    modalDetails: "Battle Fitness Functional Training program improves your body's ability to perform everyday activities safely and efficiently. We combine strength, flexibility, and coordination exercises designed to replicate real-world movement patterns. Perfect for athletes and beginners alike!",
  },
  {
    id: 'bootcamp',
    icon: FaFire,
    title: 'Fitness Bootcamp',
    description: 'The solution is here: long-lasting fitness results & healthy lifestyle are promised.',
    modalTitle: 'Fitness Bootcamp',
    modalDetails: "Our Fitness Bootcamp is an intense group workout that blends cardio, strength, and HIIT. It’s designed to push your limits, burn calories fast, and build lean muscle. Expect variety, motivation, and transformation—all in a fun, team-based atmosphere.",
  },
  {
    id: 'transformation',
    icon: FaRunning,
    title: 'Body Transformation',
    description: 'We’ve got the perfect workout plan for you if you’re planning to transform.',
    modalTitle: 'Body Transformation',
    modalDetails: "Whether you're aiming to bulk up, slim down, or completely reshape your body, our Body Transformation program offers tailored workout plans, nutrition coaching, and one-on-one guidance. Achieve your dream physique with measurable progress and full support.",
  },
  {
    id: 'weight',
    icon: FaHeartbeat,
    title: 'Weight Loss & Gain',
    description: 'Garner valuable insights on several weight loss and gain programs.',
    modalTitle: 'Weight Loss & Gain',
    modalDetails: "From strategic calorie tracking to customized training plans, our Weight Management services help you lose excess fat or gain healthy muscle mass. You'll get expert coaching, diet support, and progress tracking to ensure your success at every stage.",
  },
];

const FeaturesSection = () => {
  // State to manage which modal is open
  const [openModal, setOpenModal] = useState(null);

  // Modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    bgcolor: 'white',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <section
      className="py-12 md:py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${GymBackground})`,
      }} id="services"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16"  data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 font-quicksand">Our <span className="text-[#dc2626]">Services</span></h2>
          <div className="w-20 h-1 bg-[#dc2626] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center group flex flex-col h-full"
              data-aos="fade-up" // Add AOS animation here
            >
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full">
                  <feature.icon className="text-white text-3xl group-hover:animate-[heartbeat_0.8s_infinite]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-quicksand">{feature.title}</h3>
              <p className="text-gray-600 mb-auto font-opensans">{feature.description}</p>
              <button
                onClick={() => setOpenModal(feature.id)}
                className="text-red-500 font-semibold hover:underline mt-3"
              >
                Find Out More
              </button>
              <Modal
                open={openModal === feature.id}
                onClose={() => setOpenModal(null)}
                aria-labelledby={`${feature.id}-modal`}
                BackdropProps={{
                  sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Transparent dark overlay
                    backdropFilter: 'blur(1px)',          // Optional: soft blur effect
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 450,
                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                    p: 4,
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography
                    id={`${feature.id}-modal`}
                    variant="h5"
                    component="h2"
                    sx={{
                      color: '#e53935',
                      fontWeight: 'bold',
                      mb: 2,
                      fontFamily: 'Quicksand, sans-serif',
                    }}
                  >
                    {feature.modalTitle}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#424242',
                      fontSize: '1rem',
                      mb: 4,
                      fontFamily: 'Open Sans, sans-serif',
                    }}
                  >
                    {feature.modalDetails}
                  </Typography>
                  <Button
                    onClick={() => setOpenModal(null)}
                    variant="contained"
                    color="error"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: '30px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    Close
                  </Button>
                </Box>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
