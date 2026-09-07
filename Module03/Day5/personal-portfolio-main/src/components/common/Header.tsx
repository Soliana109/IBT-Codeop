import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/SAlogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper: check active route
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-indigo-600 dark:border-indigo-400"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        } bg-white dark:bg-gray-900`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;