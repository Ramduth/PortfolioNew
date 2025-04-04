import React from "react";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" px-4 pb-6 md:px-16 max-w-screen-2xl mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2.5">
          <div className="text-2xl font-bold ">Ramduth Rajesh</div>

          <p className="text-foreground/70 text-center max-w-md">
            MERN Stack Developer passionate about creating elegant, efficient
            solutions to complex problems.
          </p>

          <div className="flex space-x-2">
            <a
              href="https://github.com/Ramduth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 text-foreground/70 hover:text-blue-500 hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ramduth-rajesh-50412324b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 text-foreground/70 hover:text-blue-500 hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ramduthrajesh1@gmail.com"
              className="p-2 rounded-full bg-muted/50 text-foreground/70 hover:text-blue-500 hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="w-full h-px bg-muted "></div>

          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Ramduth Rajesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
