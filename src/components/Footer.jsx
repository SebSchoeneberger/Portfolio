import { useState } from "react";
import { toast } from "react-hot-toast";
import kinglyInspired from "../assets/1377406_668739349805159_2133052110_n.jpg";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { requestCV } from "../API/cvService";

function Footer() {
  const [cvEmail, setCvEmail] = useState("");
  const [loadingCV, setLoadingCV] = useState(false);

  const handleCVRequest = async () => {
    // Email validation
    if (!cvEmail.trim() || !/^\S+@\S+\.\S+$/.test(cvEmail)) {
      return toast.error("Please enter a valid email address.");
    }

    setLoadingCV(true);
    toast.loading("Sending your CV…", { id: "cv" });

    try {
      if (!window.grecaptcha || !window.grecaptcha.execute) {
        throw new Error("reCAPTCHA is not loaded");
      }
      // Execute reCAPTCHA
      const recaptchaToken = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute("6LdNe_cqAAAAAMcyU1E4zaXp-g5SMav0l6mq-X-t", { action: "request_cv" })
            .then((token) => {
              if (!token) return reject(new Error("Received null token"));
              resolve(token);
            })
            .catch(reject);
        });
      });

      const payload = { email: cvEmail, recaptchaToken };
      const response = await requestCV(payload);

      if (response.status === "success") {
        toast.success("Check your inbox for my CV! 🎉");
        setCvEmail("");
      } else {
        toast.error(response.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error requesting CV:", error);
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoadingCV(false);
      toast.dismiss("cv");
    }
  };


  return (
    <>
      <footer className="footer footer-center bg-error text-primary p-10 flex flex-col justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full px-10 md:px-24 gap-10">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-20 items-center">
            <div className="flex flex-col gap-10 items-start">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={kinglyInspired}
                  alt="logo picture"
                  className="btn-ghost rounded-full w-16 h-16"
                />
                <HashLink smooth to="/#Home" className="btn btn-ghost normal-case text-xl text-primary text-left font-bold p-2 rounded-xl">
                  Sebastian <br /> Schoeneberger
                </HashLink>
              </div>

              <div className="flex flex-col gap-4 items-start">
                <a className="text-accent font-bold" href="">Contact Information</a>
                <a className="link-hover" href="mailto:sebastian.schoeneberger@gmail.com">
                  sebastian.schoeneberger@gmail.com
                </a>
                <a className="link-hover" href="tel:+4915155726745">+49 15155726745</a>
              </div>
            </div>

            <nav className="flex sm:flex-col gap-4">
              <span className="text-accent font-bold">Links</span>
              <HashLink smooth to="/#About" className="link link-hover text-secondary">About</HashLink>
              <HashLink smooth to="/#Contact" className="link link-hover text-secondary">Contact</HashLink>
              <HashLink smooth to="/#Skills" className="link link-hover text-secondary">Skills</HashLink>
              <HashLink smooth to="/#Projects" className="link link-hover text-secondary">Projects</HashLink>
            </nav>
          </div>

          {/* Request CV Section */}
          <div className="join pt-4 flex flex-col gap-2 md:flex-row">
            <input
              type="email"
              value={cvEmail}
              onChange={(e) => setCvEmail(e.target.value)}
              placeholder="Your-email@gmail.com"
              className="input input-bordered text-black font-tomorrow focus:outline-none focus:border-[#339933] focus:ring-[#339933] focus:ring-2"
            />
            <button 
              className="btn btn-primary join-item"
              onClick={handleCVRequest}
              disabled={loadingCV}
            >
              {loadingCV ? <span className="loading loading-infinity loading-2xl"></span> : "Request My CV"}
            </button>
          </div>
        </div>

        <div className="w-[90%] h-1 bg-secondary"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full px-10 sm:px-24 gap-10">
          {/* Footer Disclaimer */}
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - Portfolio Website by{" "}
              <strong>Sebastian Schoeneberger</strong>
            </p>
          </aside>

          {/* Social Media Links */}
          <nav>
            <ul className="flex justify-center items-center gap-5">
              <li>
                <NavLink to="https://www.linkedin.com/in/sebastian-schoeneberger/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    fill="currentColor"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
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
                    className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
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
                    className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
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

              <a href="/Sebastian Schoeneberger CV Eng (FS).pdf" download="CV Sebastian Schoeneberger.pdf">     
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="50"
                    height="50"
                    className="hover:scale-125 hover:-translate-x-1 transition-transform duration-300 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;