import { Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "@/assets/R2_LOGO-removebg-preview.png";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-8 md:px-16 bg-gradient-to-b from-[#af7778] to-[#e5c7c5]">
      <div className="max-w-7xl mx-auto">
        {/* Center Logo Section */}
        <div className="flex flex-col items-center text-center mb-14">
          {/* Logo */}
          <img
            src={logo}
            alt="VAAH Logo"
            className="h-36 md:h-44 w-auto object-contain"
          />

          {/* Name */}
          <p className="mt-2 text-lg md:text-xl tracking-[0.32em] uppercase font-body font-light text-[#4a2f2f]/80 text-center w-full">
            By Anjana V A H
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-14">
          {/* Quick Links */}
          <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
            {[
              { label: "Projects", path: "/portfolio" },
              { label: "Services", path: "/service" },
              { label: "Contact", path: "/contact" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-6 md:gap-10"
              >
                <button
                  onClick={() => navigate(item.path)}
                  className="text-sm tracking-[0.2em] uppercase transition-colors duration-300 font-body font-light text-[#4a2f2f]/80 hover:text-[#4a2f2f]"
                >
                  {item.label}
                </button>

                {index !== 2 && <span className="text-[#4a2f2f]/40">|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12">
          <a
            href="https://www.instagram.com/vaahdesign?igsh=MTR6YXhoaDZzODU1OQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 border border-[#4a2f2f]/30 rounded-full flex items-center justify-center text-[#4a2f2f]/90 hover:text-[#7d4f50] hover:border-[#7d4f50] transition-all duration-300"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/company/vaahdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 border border-[#4a2f2f]/30 rounded-full flex items-center justify-center text-[#4a2f2f]/90 hover:text-[#7d4f50] hover:border-[#7d4f50] transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#4a2f2f]/20 gap-4">
          <p className="text-sm text-[#4a2f2f]/80 font-body font-light tracking-wide">
            © {new Date().getFullYear()} VAAH Design. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-11 h-11 border border-[#4a2f2f]/40 rounded-full flex items-center justify-center text-[#4a2f2f]/90 hover:text-[#7d4f50] hover:border-[#7d4f50] transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
