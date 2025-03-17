import React from "react";
import { motion } from "framer-motion";
import img from "../assets/007-1959c32a88-LTE-9ece6.webp";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1738256751522.json";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import ScrollProgressBar from "../components/ScrollProgressBar";
import SplitText from "../animations/SplitText";
import ShinyText from "../animations/ShinyText";
import Magnet from "../animations/Magnet";

function Home() {
  return (
    <>
      <ScrollProgressBar />
      
      <motion.main
        className="bg-neutral p-5 sm:p-10 flex flex-col justify-start items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <section
          id="Home"
          className="max-w-[82%] flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left gap-10 mx-auto scroll-mt-28 pb-5"
        >
          {/* Left Section */}
          <div className="flex flex-1 flex-col justify-center items-center md:items-start h-screen text-3xl sm:text-4xl gap-5">
            <h2 className="font-bold">Greetings 👋🏽</h2>
            <a className="text-4xl sm:text-6xl text-primary">
              I'm{" "}
              <strong className="text-secondary">
                <SplitText text="Sebastian Schoeneberger" className="inline" />
              </strong>
            </a>

            <h3 className="text-accent text-3xl sm:text-[2.7rem]">
              And I am a <strong>
                <SplitText text="Full-Stack Developer" />
              </strong>
            </h3>
            <p className="text-xl sm:text-2xl flex flex-col">
              <span>
                With a background in mechatronics and business management, I combine technical expertise, problem-solving, and a multicultural perspective to create impactful web solutions.
              </span>
              <span className="text-secondary font-semibold pt-2">
                <SplitText text="Let’s build solutions that make an impact!" />
              </span>
            </p>

            <Magnet padding={50} disabled={false} magnetStrength={10} wrapperClassName="" innerClassName="">
              <a
                href="/Sebastian Schoeneberger CV Eng (FS).pdf"
                download="CV Sebastian Schoeneberger.pdf"
                className="btn btn-primary rounded-3xl"
              >
                  <ShinyText text="Download CV" disabled={false} speed={5} />
              </a>
            </Magnet>

          </div>

          {/* Right Section */}
          <div className="flex flex-1 gap-5 sm:gap-10 pt-10 md:pt-0 md:gap-5 justify-evenly items-center h-screen">
            <div className="relative w-56 sm:w-96">
              <img
                src={img}
                alt="Profile Picture Sebastian Schoeneberger"
                className="rounded-full w-full h-auto"
              />
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-secondary"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div>
              <ul className="flex flex-1 flex-col justify-center items-center gap-5">
                <div className="w-1 h-10 sm:h-32 bg-secondary"></div>
                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/sebastian-schoeneberger/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      fill="currentColor"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer text-primary"
                    >
                      <path
                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                      ></path>
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://github.com/SebSchoeneberger" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      fill="currentColor"
                      height="50"
                      viewBox="0 0 30 30"
                      className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer text-primary"
                    >
                      <path
                        d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                      ></path>
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <a href="mailto:sebastian.schoeneberger@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="50"
                      height="50"
                      className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/Sebastian Schoeneberger CV Eng (FS).pdf"
                    download="CV Sebastian Schoeneberger.pdf"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="50"
                      height="50"
                      className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <div className="w-1 h-10 sm:h-32 bg-secondary"></div>
              </ul>
            </div>
          </div>
        </section>
        <Lottie animationData={animationData} style={{ width: 80, height: 80 }} />
        <AboutMe />
        <Projects />
        <Contact />
      </motion.main>
    </>
  );
}

export default Home;
