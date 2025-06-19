import React, { useState,useEffect } from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Reviewimage from "../assets/Review/FIT0062.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      text: "Battle Fitness helped me lose 12 kgs in 4 months. Trainers are amazing and motivate me every day!",
      author: "Keerthana",
    },
    {
      id: 2,
      text: "The best gym in Thiruvarur! Great ambiance, structured workouts, and super results.",
      author: "Rajesh",
    },
    {
      id: 3,
      text: "Excellent gym for anyone focused on weight loss and overall fitness! The trainers are professional, encouraging, and provide great guidance. The environment is energetic, and the equipment is in top condition with affordable fees. I've noticed great improvements in my fitness journey .Definitely worth joining",
      author: "Bhuvajha V",
    },
    {
      id: 4,
      text: "Trainers are highly knowledgeable, supportive and always ready to guide you, no matter your fitness level. The flexible timings makes me convenient for me and the friendly atmosphere keeps me motivated. Fun, flexible and full of energy.",
      author: "Dakshinamoorthy",
    },
    {
      id: 5,
      text: "Good atmosphere and excellent equipmens also well knowledgeable coaches.",
      author: "Deva karunesh",
    },
    {
      id: 6,
      text: "Trainers are good at teaching exercises, equipments is good enough, trainers and owner are very friendly to clients.",
      author: "Surya R",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextReview = () => {
    setDirection("right");
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection("left");
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Easing function
      });
    }, []);

  return (
    <section
      className="py-20 relative overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${Reviewimage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#041e38]/90 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4 font-quicksand">
            What Our <span className="text-[#dc2626]">Members</span> Say
          </h2>
          <div className="w-20 h-1 bg-[#dc2626] mx-auto"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={reviews[currentReview].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl p-8 sm:p-10 md:p-12 text-center max-w-full border border-white/20 min-h-[240px] flex flex-col justify-center relative"
            >
              {/* Quote icons */}
              <RiDoubleQuotesL className="absolute top-6 left-6 text-gray-300 text-2xl" />
              <RiDoubleQuotesR className="absolute bottom-6 right-6 text-gray-300 text-2xl" />
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 px-4">
                {reviews[currentReview].text}
              </p>
              <div className="font-semibold text-[#dc2626]">
                — {reviews[currentReview].author}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentReview(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentReview === idx
                    ? "bg-[#dc2626] scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-10">
            <IconButton
              onClick={prevReview}
              sx={{
                color: "white",
                backgroundColor: "rgba(220, 38, 38, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(220, 38, 38, 0.9)",
                },
              }}
              aria-label="Previous"
            >
              <ChevronLeft fontSize="medium" />
            </IconButton>
            <IconButton
              onClick={nextReview}
              sx={{
                color: "white",
                backgroundColor: "rgba(220, 38, 38, 0.7)",
                "&:hover": {
                  backgroundColor: "rgba(220, 38, 38, 0.9)",
                },
              }}
              aria-label="Next"
            >
              <ChevronRight fontSize="medium" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;