import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { MdOutlineArrowDropDown, MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const letters = "RAMDUTH".split(""); // Split the word into individual letters

  return (
    <nav
      className={`fixed top-0 w-full z-70 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-14 py-6">
        {/* <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
        <div>
          <h1 className="text-bold font-Boldonse font-extrabold text-2xl">RAMDUTH</h1>
        </div>
        </Link> */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }, // Delay each letter animation
              },
            }}
            className="flex" // Ensures letters are spaced properly
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 }, // Start below and invisible
                  visible: { opacity: 1, y: 0 }, // Fade in and move up
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-extrabold text-2xl"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </Link>

        <div className="hidden text-white md:flex gap-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
          {/* <Link className="hover:text-blue-600 transition-colors">Home</Link> */}
          <Link
            to="second"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            FAQs
          </Link>
          <div className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
            <Link
              to="third"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Industries
            </Link>
            <MdOutlineArrowDropDown />
          </div>
          <Link
            to="four"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Blogs
          </Link>
        </div>
        <div className="flex  gap-2">

          <div className="flex items-center text-white gap-5 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.2 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Slight shrink when clicked
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub size={25} />
            </motion.div>

            {/* LinkedIn Icon */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SiLinkedin size={24} />
            </motion.div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
