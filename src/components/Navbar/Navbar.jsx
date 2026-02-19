import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-white dark:bg-[#050414] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center text-black dark:text-white">
        
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">{'<'}</span>
          Piyush/Mishra
          <span className="text-[#8245ec]">{'>'}</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="hover:text-[#8245ec]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-[#8245ec]"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/Piyush200516" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/piyush-mishra-495391260" target="_blank" rel="noreferrer">
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX className="text-2xl" onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-2xl" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#050414] shadow-lg rounded-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
