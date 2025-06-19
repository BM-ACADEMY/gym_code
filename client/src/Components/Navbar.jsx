import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/Home/logo.png";
import EnquiryForm from "./EnquiryForm"; // <- Import the form

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrolled(scrollPercentage > 7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = enquiryOpen ? "hidden" : "auto";
  }, [enquiryOpen]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    // { name: "Franchise", id: "franchise" },
    { name: "Enquiry", id: "enquiry" }, // New Enquiry link
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    if (id === "enquiry") {
      setEnquiryOpen(true);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, null, `#${id}`);
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const drawerItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full text-white shadow-md z-50 backdrop-blur-[12px] border-b transition-colors duration-300 ${
          scrolled
            ? "bg-[#27303cbb] border-[rgba(255,255,255,0.3)]"
            : "bg-[#00000026] border-[rgba(255,255,255,0.2)]"
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 md:h-24 items-center">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => handleNavClick("home")}
                className="focus:outline-none"
                aria-label="Go to home section"
              >
                <img
                  src={logo}
                  alt="Battle-Fitness-Unisex-Gym"
                  className="h-20 w-auto md:h-24 object-contain"
                  title="Battle Fitness Unisex Gym"
                />
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-4 py-2 font-sans font-medium text-lg hover:text-red-400"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      hoveredItem === item.id ? "text-[#dc2626]" : "text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.span
                    className="absolute left-1/2 bottom-0 h-[2px] rounded bg-[#dc2626]"
                    initial={{ width: 0, x: "-50%" }}
                    animate={{
                      width: hoveredItem === item.id ? "75%" : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(!isOpen)}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(239, 68, 68, 0.3)",
                  },
                }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </IconButton>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <Drawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                backgroundColor: "#00000026",
                color: "white",
                width: "80%",
                maxWidth: "300px",
                backdropFilter: "blur(12px)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <motion.div
              className="h-full flex flex-col"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <div className="flex justify-end px-4 py-3">
                <IconButton
                  onClick={toggleDrawer(false)}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(239, 68, 68, 0.3)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>

              {/* Drawer Nav Items */}
              <List>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={drawerItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <ListItem
                      button
                      onClick={() => handleNavClick(item.id)}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          backgroundColor: "rgba(239, 68, 68, 0.2)",
                          "& .MuiListItemText-primary": {
                            color: "#ef4444",
                          },
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ListItemText
                          primary={item.name}
                          primaryTypographyProps={{
                            sx: {
                              fontFamily: "sans-serif",
                              fontWeight: "500",
                              fontSize: "1.1rem",
                              transition: "color 0.3s ease",
                            },
                          }}
                        />
                      </motion.div>
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>

      {/* Enquiry Modal */}
      <EnquiryForm isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
};

export default Navbar;
