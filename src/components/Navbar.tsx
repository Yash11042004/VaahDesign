import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/REDONE_LOGO-removebg-preview.png";

const navItems = [
  { label: "Home", type: "route", path: "/" },
  { label: "About", type: "route", path: "/about" },
  { label: "Portfolio", type: "route", path: "/portfolio" },
  { label: "Services", type: "route", path: "/service" },
  { label: "Awards", type: "route", path: "/awards" },
  { label: "Contact", type: "route", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isActiveBg = scrolled || location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.type === "route") {
      navigate(item.path);
      setIsOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate("/" + item.id);
      } else {
        handleScrollToSection(item.id);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isActiveBg
          ? "bg-gradient-to-b from-[#e5c7c5]/90 to-[#af7778]/90 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(175,119,120,0.2)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="VAAH Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 font-body font-light relative group ${
                isActiveBg
                  ? "text-[#4a2f2f]/80 hover:text-[#4a2f2f]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#af7778] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden relative z-50 transition-colors duration-300 ${
            isActiveBg ? "text-[#4a2f2f]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-b from-[#e5c7c5] to-[#af7778] backdrop-blur-sm flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="font-display text-3xl tracking-[0.2em] text-[#4a2f2f]/80 hover:text-[#4a2f2f] transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
