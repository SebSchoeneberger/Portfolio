// Navbar.jsx
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import kinglyInspired from "../assets/1377406_668739349805159_2133052110_n.jpg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  return (
    <nav className="flex justify-center p-10">
      <div className="navbar flex justify-between bg-error text-base-100 shadow-md fixed max-w-[82%] border-2 rounded-2xl border-primary px-4 py-2 z-50">

        <HashLink smooth to="/#Home" className="flex flex-1 justify-start items-center gap-2">
          <img src={kinglyInspired} alt="" className="btn-ghost rounded-full w-16 h-16" />
          <a className="hidden sm:block btn-ghost normal-case text-xl text-primary text-left font-bold p-2 rounded-xl">
            Sebastian <br /> Schoeneberger
          </a>
        </HashLink>


        {/* Original Horizontal Menu for Large Screens */}
        <div className="hidden md:flex flex-1 justify-center items-center font-bold text-2xl">
          <ul className="menu menu-horizontal px-1">
            <li>
              <HashLink smooth to="/#About" className="text-base hover:text-white">
                About me
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Skills" className="text-base hover:text-white">
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Projects" className="text-base hover:text-white">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Contact" className="text-base hover:text-white">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-end gap-4 items-center">
          <HashLink to="/#Contact">
            <button className="hidden md:btn btn-primary rounded-full hover:text-white text-base">
              Contact
            </button>
          </HashLink>

          {/* Theme Toggle */}
          <label className="swap swap-rotate ml-4 rounded-full p-2 hover:bg-gray-200">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <svg className="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Language Selector */}
          <div className="relative">
            <button onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} className="p-2 rounded-full hover:bg-gray-200 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </button>
            {languageDropdownOpen && (
              <ul className="absolute bg-white border rounded-md mt-2 shadow-lg p-2 w-40">
                <li onClick={() => changeLanguage("English")} className="p-2 hover:bg-gray-200 cursor-pointer">
                  English
                </li>
                <li className="p-2 text-gray-400 cursor-not-allowed">
                  German (coming soon)
                </li>
                <li className="p-2 text-gray-400 cursor-not-allowed">
                  Spanish (coming soon)
                </li>
              </ul>
            )}
          </div>

           {/* Dropdown Menu Button for Medium Screens */}
        <div className="dropdown dropdown-end">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="md:hidden p-2">
            {/* Icon for dropdown menu */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
  
          {/* Dropdown Menu for Medium Screens */}
          {dropdownOpen && (
            <ul className="dropdown-content flex flex-col justify-start items-start text-black bg-white border rounded-md mt-2 shadow-lg p-2 w-40 md:hidden">
              <li>
                <HashLink smooth to="/#About" className="text-base hover:text-white">
                  About me
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#Skills" className="text-base hover:text-white">
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#Projects" className="text-base hover:text-white">
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#Contact" className="text-base hover:text-white">
                  Contact
                </HashLink>
              </li>
            </ul>
          )}
        </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
