import img2 from "../assets/Sebastian Schoeneberger PP.webp";
import ReactLogo from "../assets/MERN-Logo/React.png";
import NodeLogo from "../assets/MERN-Logo/Node.js.png";
import ExpressLogo from "../assets/MERN-Logo/Express.png";
import MongoDBLogo from "../assets/MERN-Logo/MongoDB.png";
import Skills from "../components/Skills";
import devlogo from "../assets/Experience-Logo/4897896.jpg";
import germanAutotecLogo from "../assets/Experience-Logo/Mini Logo.jpeg";
import chilaLogo from "../assets/Experience-Logo/WhatsApp Image 2025-02-12 at 21.26.46.jpeg";
import inityLogo from "../assets/Experience-Logo/Inity Bar logo.jpg"
import SoftSkills from "../components/SoftSkills";
import BlurText from "../animations/BlurText";

function AboutMe() {
    return ( 
        <>

            <BlurText
            text="About Me"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-6xl font-bold py-6 scroll-mt-32"
            id="About"
            />

            <div className="w-16 h-2 rounded-full bg-accent "></div>

            <div className="pt-10 flex flex-col md:flex-row gap-10">

            <div className="flex-1 px-10 text-justify text-lg">
            <BlurText
                text="Get to know me"
                delay={50}
                animateBy="words"
                direction="top"
                className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
            />
                <div className="opacity-80">
                    <p>👋🏽 My name is Sebastian Schoeneberger, and I'm a junior full-stack web developer with a diverse background and a passion for technology.</p>
                    
                    <p>I started my professional journey at <span className="text-primary font-semibold">Mercedes-Benz</span> in the automotive sector, moved into <span className="text-primary font-semibold">entrepreneurship</span> with multiple businesses, and I am now thrilled to explore new opportunities in the <span className="text-primary font-semibold">tech industry</span>.</p>
    
                    <h3 className="py-6 text-xl font-semibold">What Sets Me Apart</h3>
                    
                    <p>🛠️ <strong>Technical Expertise:</strong> – My experience in vehicle diagnostics at Mercedes-Benz honed my problem-solving skills, which I now apply to coding. I work with <span className="text-primary font-semibold">JavaScript</span>, <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Node.js</span>, <span className="text-primary font-semibold">Express</span>, <span className="text-primary font-semibold">SQL</span>, <span className="text-primary font-semibold">MongoDB</span>, and more.</p>
                    
                    <p>🚀 <strong>Entrepreneurial Mindset:</strong> – Six years of running businesses gave me expertise in marketing, finance, and leadership—helping me build web applications that truly serve business needs.</p>
                    
                    <p>🌍 <strong>Multilingual & Adaptable:</strong> – Fluent in <span className="text-primary font-semibold">German</span>, <span className="text-primary font-bold">Spanish</span>, and <span className="text-primary font-semibold">English</span>, with global experience across three continents, I thrive in diverse environments and communicate effectively.</p>
                    
                    <p>🔍 <strong>Detail-Oriented & Reliable:</strong> – I uphold high standards, stay committed to delivering quality work, and ensure every project is completed efficiently and on time.</p>
                </div>
            </div>



            <div className="flex-1 flex flex-col items-center justify-start gap-5">
                <img src={img2} loading="lazy" className="w-56 rounded-full border-4 border-secondary" alt="" />
                <BlurText
                text="Tech Stack"
                delay={50}
                animateBy="words"
                direction="top"
                className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
            />
                <div className="flex gap-2 sm:gap-4">
                    <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
                        <img src={MongoDBLogo} className="w-full border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-3xl sm:text-5xl text-black font-bold">M</p>
                        <p className="hidden sm:inline px-3 py-2 bg-error text-secondary font-semibold rounded-3xl">Mongo DB</p>
                        <p className="sm:hidden px-3 py-2 bg-error text-secondary font-semibold rounded-3xl">Mongo</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
                        <img src={ExpressLogo} className="w-auto border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-3xl sm:text-5xl text-black font-bold">E</p>
                        <p className="hidden sm:inline px-3 py-2 bg-error text-black font-semibold rounded-3xl">Express.js</p>
                        <p className="sm:hidden px-3 py-2 bg-error text-black font-semibold rounded-3xl">Express</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
                        <img src={ReactLogo} className="w-auto border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-3xl sm:text-5xl text-black font-bold">R</p>
                        <p className="hidden sm:inline px-3 py-2 bg-error text-accent font-semibold rounded-3xl">React.js</p>
                        <p className="sm:hidden px-3 py-2 bg-error text-accent font-semibold rounded-3xl">React</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
                        <img src={NodeLogo} className="w-auto border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-3xl sm:text-5xl text-black font-bold">N</p>
                        <p className="hidden sm:inline px-3 py-2 bg-error text-primary font-semibold rounded-3xl">Node.js</p>
                        <p className="sm:hidden px-3 py-2 bg-error text-primary font-semibold rounded-3xl">Node</p>
                    </div>
                </div>
            </div>

            </div>

            <section className="flex flex-col md:flex-row gap-10 p-4 sm:p-10">

                <div className="flex-1">
                <BlurText
                text="Education"
                delay={50}
                animateBy="words"
                direction="top"
                className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
            />

                     <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic text-primary font-semibold">Oct 2024</time>
                        <div className="text-xl font-black text-primary pb-2">Frontend Development Training</div>
                        <div className="text-lg font-black text-accent pb-2">Kreativstrom</div>
                        • Hands-on HTML, CSS and Javascript Training Programm. <br />
                        • Intensive frontend training with expert guidance.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                        <time className="font-mono italic text-primary font-semibold">May 2024</time>
                        <div className="text-xl font-black text-primary pb-2">Full-Stack App & Web Development Bootcamp</div>
                        <div className="text-lg font-black text-accent pb-2">WBS Coding School / Berlin</div>
                        • Completed a full-time, 15-week hybrid bootcamp in full-stack web development. <br />
                        • Gained expertise in HTML, CSS, JavaScript, React, Node.js, Express, and SQL through hands-on projects and real-world applications. <br />
                        • Participated in on-campus sessions to experience a collaborative work environment.
                        </div>
                        <hr />
                    </li>
                    <li>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic text-primary font-semibold">Sep 2018</time>
                        <div className="text-xl font-black text-primary pb-2">Automotive Mechatronics Technician</div>
                        <div className="text-lg font-black text-accent pb-2">Mercedes-Benz Group / Frankfurt</div>
                        • Formal vocational training <br />
                        • Diagnosed and resolved technical issues using advanced tools and technology.<br />
                        • Inspected, maintained, and repaired various vehicle components
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                        <time className="font-mono italic text-primary font-semibold">Jan 2010</time>
                        <div className="text-xl font-black text-primary pb-2">International Baccalaureate (IB)</div>
                        <div className="text-lg font-black text-accent pb-2">German Embassy School Addis Abeba</div>
                        • International Baccalaureate: An internationally recognized bilingual secondary school certificate.
                        </div>
                        <hr />
                    </li>
                    </ul>
                </div>

                <div className="flex-1">
                <BlurText
                text="Experience"
                delay={50}
                animateBy="words"
                direction="top"
                className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
            />

                <div className="collapse collapse-plus shadow-2xl">
                    <input type="checkbox" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={devlogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2 className="text-primary">Self-employed <br /><span className="text-lg font-semibold text-accent">Full-Stack Web Developer Freelancer</span></h2>

                        </div>
                        <p className="pl-4 text-lg">Sep 2024 -  Present | Remote Germany & Ethiopia</p>
                    </div>
                    <div className="collapse-content">
                        <p>• Develop and deploy responsive full-stack web applications using modern frameworks like React and Node.js. <br />
                        • Collaborate with clients to deliver custom solutions, optimizing performance, UX, and scalability.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus shadow-2xl">
                    <input type="checkbox" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-bold">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={germanAutotecLogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2 className="text-primary">Geman AutoTec <br /><span className="text-lg font-semibold text-accent">Co-Founder & CEO</span></h2>
                        </div>
                        <p className="pl-4 text-lg font-medium">Jan 2021 - May 2024 | Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="collapse-content">
                        <p>•Launched and grew a mid-size Mercedes-Benz repair shop in Addis Ababa, employing 10 staff members. <br />
                        • Managed financial operations, marketing strategies, and human resources to ensure business growth and efficiency. <br />
                        • Provided technical advisory services and handled international customer service to maintain high customer satisfaction. <br />
                        • Led the expansion into vehicle detailing services in 2023, resulting in a 35% increase in revenue.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-plus shadow-2xl">
                    <input type="checkbox" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-bold">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={chilaLogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2 className="text-primary">Chila <br /><span className="text-lg font-semibold text-accent">Shareholder & Co-owner</span></h2>
                        </div>
                        <p className="pl-4 text-lg font-medium">Jul 2021 - Apr 2024 | Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="collapse-content">
                        <p>• Assisted in the development of a dog-food and pet shop brand in Addis Ababa. <br />
                        • Contributed to daily operations and managed store activities to ensure efficient and effective service.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus shadow-2xl">
                    <input type="checkbox" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-bold">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={inityLogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2 className="text-primary">Inity Lounge <br /><span className="text-lg font-semibold text-accent">Co-Owner & Manager</span></h2>
                        </div>
                        <p className="pl-4 text-lg font-medium">Jan 2019 - Jul 2020 | Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="collapse-content">
                        <p>• Conceptualized and launched a successful lounge and restaurant. <br />
                        • Managed daily operations, finances, and marketing to ensure efficient functioning and profitability. <br />
                        • Ceased operations due to the impact of the COVID-19 pandemic.</p>
                    </div>
                </div>

                <BlurText
                text="Soft Skills"
                delay={50}
                animateBy="words"
                direction="top"
                className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
            />

                    <SoftSkills />

                    <BlurText
                text="Languages"
                delay={50}
                animateBy="words"
                direction="top"
                className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
            />

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105 p-3">
                            <p className="text-xl font-semibold">German</p>
                            <progress className="progress progress-primary w-56" value={100} max="100"></progress>
                        </div>

                        <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105  p-3">
                            <p className="text-xl font-semibold">Spanish</p>
                            <progress className="progress progress-primary w-56" value={100} max="100"></progress>
                        </div>

                        <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105  p-3">
                            <p className="text-xl font-semibold">English</p>
                            <progress className="progress progress-accent w-56" value={90} max="100"></progress>
                        </div>
                        <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105  p-3">
                            <p className="text-xl font-semibold">Amharic</p>
                            <progress className="progress progress-accent w-56" value={65} max="100"></progress>
                        </div>
                        <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105  p-3">
                            <p className="text-xl font-semibold">Italian</p>
                            <progress className="progress progress-accent w-56" value={30} max="100"></progress>
                        </div>
                        
                    </div>

              </div>

            </section>

            <BlurText
                text="Skills"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-6xl font-bold py-6 scroll-mt-32"
                id="Skills"
                />
            <div className="w-16 h-2 rounded-full bg-accent "></div>

            <Skills />


        </>
     );
}

export default AboutMe;