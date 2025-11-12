import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Destinations", href: "/Countries" },
    { label: "Blog", href: "/Blog" },
  ];

  // Handle section scrolls (#about, #services)
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("#")) {
      // if already on home, scroll smoothly
      if (location.pathname === "/") {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // if on another page, go home and then scroll
        navigate("/" + href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
          >
            <div className="relative">
              <img
                src="https://i.ibb.co/5m6X2q0/Global-Pathway-Overseas-Logo-removebg-preview.png"
                alt="Global Pathway Overseas Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg md:text-xl leading-tight transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Global Pathway Overseas
              </span>
              <span
                className={`text-xs italic hidden sm:block transition-colors ${
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Your Dreams Our Priority
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-accent" : "bg-white"
                  }`}
                ></span>
              </button>
            ))}
            <Button
              onClick={() =>
                window.open("https://forms.gle/df4Y4wG7yZ2ChV9X9", "_blank")
              }
              className="bg-gradient-to-r from-[#143c6e] to-[#003366] hover:shadow-lg hover:brightness-110 transition-all duration-300 text-white"
            >
              Get Started
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-white/80"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 bg-background/95 backdrop-blur-md rounded-lg mt-2 px-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block py-2 text-foreground/80 hover:text-primary font-medium transition-colors w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                window.open("https://forms.gle/df4Y4wG7yZ2ChV9X9", "_blank");
              }}
              className="w-full bg-gradient-to-r from-[#143c6e] to-[#003366] hover:shadow-lg hover:brightness-110 transition-all duration-300 text-white"
            >
              Get Started
            </Button>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
