import React from 'react';
import Trainer1 from '../assets/teams/trainer4.JPG';
import Trainer2 from '../assets/teams/trainer3.png';
import GymBackground from '../assets/teams/sports-equipment-isolated-white-flat-lay.jpg'; // Add your background image
import Slider from 'react-slick';


// Slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: 'Mr. Maran',
      specialty: 'Advanced Physique Transformation Expert',
      image: Trainer1
    },  
    {
      id: 2,
      name: 'Mr. Vetri',
      specialty: 'Fitness Trainer',
      image: Trainer2
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul className="flex justify-center mt-8 space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 mt-4 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
    )
  };
  

  return (
    <section className="relative py-16 flex items-center justify-center min-h-[600px]" id='trainers'>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={GymBackground} 
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-quicksand mb-3">Meet Our <span className="">Trainers</span></h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Slider {...settings} className="px-4">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="px-2">
                <div className="relative border border-white-500/30 group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full  h-[600px] h-md-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                      <p className="text-red-400 font-medium">{trainer.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;