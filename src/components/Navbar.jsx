import React, { useState, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiLinkedin } from "react-icons/si";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = "RAMDUTH. ".split("");

  // Handle navigation with Lenis
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.lenis) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.lenis.scrollTo(targetElement, { duration: 3 });
      }
    }
    // Close the mobile menu if it's open
    if (open) {
      setOpen(false);
    }
  };

  const AnimatedIcon = ({ children }) => (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="px-4 md:px-16 max-w-screen-2xl mx-auto flex items-center justify-between py-6">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="cursor-pointer -ml-4"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`font-extrabold text-2xl ${scrolled ? "text-black" : "text-black"
                  }`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </a>

        <div
          className={`hidden md:flex gap-6 ${scrolled ? "text-black" : "text-black"
            }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="cursor-pointer hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="cursor-pointer hover:text-blue-600"
          >
            Contact Me
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, "experience")}
            className="cursor-pointer hover:text-blue-600"
          >
            Experience
          </a>
        </div>

        <div className="flex items-center gap-5">
          <AnimatedIcon>
            <a
              href="https://github.com/Ramduth"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <FaGithub
                size={25}
                className={scrolled ? "text-black" : "text-black"}
              />
            </a>
          </AnimatedIcon>
          <AnimatedIcon>
            <a
              href="https://www.linkedin.com/in/ramduth-rajesh-50412324b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <SiLinkedin
                size={24}
                className={scrolled ? "text-black" : "text-black"}
              />
            </a>
          </AnimatedIcon>
          <AnimatedIcon>
            <a
              href="https://wa.me/+918547277570"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <TbBrandWhatsappFilled
                size={24}
                className={scrolled ? "text-black" : "text-black"}
              />
            </a>
          </AnimatedIcon>
          <AnimatedIcon>
            <div onClick={() => setOpen(true)} className="cursor-pointer block md:hidden">
              <IoMenu size={24} className="text-black" />
            </div>
          </AnimatedIcon>
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="bg-white/80 backdrop-blur-md border-t border-gray-200">
          <SheetHeader>
            <SheetTitle className="text-center text-xl font-bold mb-4">MENU</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-6 items-center py-4">
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, "hero")}
                  className="text-lg font-medium hover:text-blue-600 transition-colors backdrop-filter"
                >
                  Home
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#experience"
                  onClick={(e) => handleNavClick(e, "experience")}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  Experience
                </a>
                
                {/* Social Icons for mobile */}
                <div className="flex gap-8 mt-6">
                  <AnimatedIcon>
                    <a
                      href="https://github.com/Ramduth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={28} className="text-black" />
                    </a>
                  </AnimatedIcon>
                  <AnimatedIcon>
                    <a
                      href="https://www.linkedin.com/in/ramduth-rajesh-50412324b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiLinkedin size={28} className="text-black" />
                    </a>
                  </AnimatedIcon>
                  <AnimatedIcon>
                    <a
                      href="https://wa.me/+918547277570"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TbBrandWhatsappFilled size={28} className="text-black" />
                    </a>
                  </AnimatedIcon>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;