import { useState } from "react";
import { useTheme } from "./contexts/ThemeContext"; // Add this

import "./index.css"; // must be before component CSS imports
import imageFixedWallpaper from "./Images/Untitleddesign.png";
import imageFixedWallpaperDark from "./Images/UntitleddesignDark.png";
import "./App.css";
import { Sun, Moon } from "lucide-react";

import { Link, Element } from "react-scroll";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const { isToggled, setIsToggled } = useTheme(); // Use context!

  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSetActive = (section) => {
    console.log("Active Section:", section);
    setActiveSection(section);
  };
  const toggleMenu = (menuOpen) => {
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className={`${isToggled ? "dark" : ""} min-h-screen`}>
      {/* navigation */}
      <div className="fixed z-15  top-10 left-10">
        <label className="relative inline-flex items-center cursor-pointer">
          {/* Hidden checkbox */}
          <input
            type="checkbox"
            className="sr-only peer" // Screen reader only
            checked={isToggled}
            onChange={(e) => setIsToggled(e.target.checked)}
          />

          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 peer-checked:bg-[#242424]/20 peer-checked:!border-black/30">
            {isToggled ? (
              <Moon size={24} className="text-blue-400" />
            ) : (
              <Sun size={24} className="text-yellow-500" />
            )}
          </div>
        </label>
      </div>
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{
          backgroundImage: isToggled
            ? `url(${imageFixedWallpaperDark})`
            : `url(${imageFixedWallpaper})`,
          transform: "translateZ(0)", // GPU acceleration fix
          willChange: "transform",
        }}
      />
      <div className="nav container d-none d-sm-block ">
        <title>Rakshit Ranpariya | React Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio. Explore my latest React projects, case studies, and technical skills. Get in touch with me if you're interested in collaborating!"
        />
        <link
          rel="canonical"
          href="https://rakshitranpariya.github.io/portfolio/"
        />

        <nav>
          <div className="options">
            <Link
              to="Home"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Home")}
              spy={true}
              activeClass={activeSection === "Home" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              to="Education"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Education")}
              spy={true}
              activeClass={activeSection === "Education" ? "active-link" : ""}
            >
              Education{" "}
            </Link>
            <Link
              to="Experience"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Experience")}
              spy={true}
              activeClass={activeSection === "Experience" ? "active-link" : ""}
            >
              Experience{" "}
            </Link>
            <Link
              to="Projects"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Projects")}
              spy={true}
              activeClass={activeSection === "Projects" ? "active-link" : ""}
            >
              Projects
            </Link>
            <Link
              to="Contact"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Contact")}
              spy={true}
              activeClass={activeSection === "Contact" ? "active-link" : ""}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
      {/* <div className='hamburger '>{activeSection}</div>       */}

      {/* Hamburger Menu for smaller screens */}
      <div className="hamburger-container d-sm-none">
        <div className="hamburger" onClick={toggleMenu}>
          ☰ {/* You can replace this with an icon */}
          <span>{activeSection}</span>
        </div>
        {menuOpen && (
          <div className="custom-menu">
            <Link
              to="Home"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Home")}
              spy={true}
              onClick={closeMenu}
              className={activeSection === "Home" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              to="Education"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Education")}
              spy={true}
              onClick={closeMenu}
              className={activeSection === "Education" ? "active-link" : ""}
            >
              Education
            </Link>
            <Link
              to="Experience"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Experience")}
              spy={true}
              onClick={closeMenu}
              className={activeSection === "Experience" ? "active-link" : ""}
            >
              Experience
            </Link>
            <Link
              to="Projects"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Projects")}
              spy={true}
              onClick={closeMenu}
              className={activeSection === "Projects" ? "active-link" : ""}
            >
              Projects
            </Link>
            <Link
              to="Contact"
              smooth
              duration={500}
              onSetActive={() => handleSetActive("Contact")}
              spy={true}
              onClick={closeMenu}
              className={activeSection === "Contact" ? "active-link" : ""}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
      {/* Sections */}
      <Element name="Home">
        <Home />
      </Element>
      <Element name="Education">
        <Education />
      </Element>
      <Element name="Experience">
        <Experience />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
