import { useState, useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const Gallery = () => {
  const images = [
    '/gallery/IMG_2749.JPG',
    '/gallery/IMG_4873.jpg',
    '/gallery/IMG-20250421-WA0014.jpg',
    '/gallery/IMG-20250421-WA0015.jpg',
    '/gallery/IMG-20250421-WA0017.jpg',
    '/gallery/IMG-20250421-WA0018.jpg',
    '/gallery/IMG-20250421-WA0019.jpg',
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const galleryContainer = useRef(null);
  const topRef = useRef(null);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (galleryContainer.current) {
      const lg = lightGallery(galleryContainer.current, {
        selector: 'a',
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true,
        speed: 500,
        download: false,
        zoom: true,
      });

      return () => {
        lg.destroy();
      };
    }

    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Animation will trigger only once
    });

  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

 

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }} ref={topRef}>
      <div className="text-center pt-10 mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-black mb-3 font-quicksand" >
          Inside Our <span className="text-[#dc2626]">Gym</span>
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto"></div>
      </div>

      <Box
        ref={galleryContainer}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 4
        }}
      >
        {currentImages.map((src, index) => (
          <a
            key={index}
            href={src}
            className="gallery-item"
            data-lg-size="800-600"
            data-aos="fade-up"  // AOS animation for fade-up
            style={{
              display: 'block',
              overflow: 'hidden',
              borderRadius: 8,
              boxShadow: 3,
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Gallery image ${startIndex + index + 1}`}
              sx={{
                width: '100%',
                height: 240,
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </a>
        ))}
      </Box>

      <Stack spacing={2} alignItems="center" className="mb-10">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="error"
          size="large"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '1rem',
            },
            '& .Mui-selected': {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack>
    </Box>
  );
};

export default Gallery;
