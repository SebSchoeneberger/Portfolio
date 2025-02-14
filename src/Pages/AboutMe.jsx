import img2 from "../assets/IMG_20190322_114508.jpg";
import ReactLogo from "../assets/MERN-Logo/React.png";
import NodeLogo from "../assets/MERN-Logo/Node.js.png";
import ExpressLogo from "../assets/MERN-Logo/Express.png";
import MongoDBLogo from "../assets/MERN-Logo/MongoDB.png";
import Carousel from "../components/Carousel";
import Skills from "../components/Skills";
import devlogo from "../assets/Experience-Logo/4897896.jpg";
import germanAutotecLogo from "../assets/Experience-Logo/Mini Logo.jpeg";
import chilaLogo from "../assets/Experience-Logo/WhatsApp Image 2025-02-12 at 21.26.46.jpeg";
import inityLogo from "../assets/Experience-Logo/Inity Bar logo.jpg"

function AboutMe() {
    return ( 
        <>
            <h1 className="text-6xl font-bold py-6">About Me</h1>
            <div className="w-16 h-2 rounded-full bg-accent "></div>

            <div className="pt-10 flex gap-10">

            <div className="flex-1 px-10 text-justify text-lg">
                <h2 className="p-6 text-4xl font-semibold text-left">{`</ Get to know me>`}</h2>

<div className="text-white opacity-80">
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
                <img src={img2} className="w-56 rounded-full border-4 border-secondary" alt="" />
                <h2 className="p-4 text-4xl font-semibold text-center">{`</ Tech Stack>`}</h2>
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-3">
                        <img src={MongoDBLogo} className="w-32 border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-5xl text-black font-bold">M</p>
                        <p className="px-3 py-2 bg-error text-secondary font-semibold rounded-3xl">Mongo DB</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <img src={ExpressLogo} className="w-32 border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-5xl text-black font-bold">E</p>
                        <p className="px-3 py-2 bg-error text-black font-semibold rounded-3xl">Express.js</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <img src={ReactLogo} className="w-32 border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-5xl text-black font-bold">R</p>
                        <p className="px-3 py-2 bg-error text-accent font-semibold rounded-3xl">React.js</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <img src={NodeLogo} className="w-32 border-2 border-secondary p-4 rounded-xl bg-error" alt="" />
                        <p className="text-center text-5xl text-black font-bold">N</p>
                        <p className="px-3 py-2 bg-error text-primary font-semibold rounded-3xl">Node.js</p>
                    </div>
                </div>
            </div>

            </div>

            <section className="flex gap-10 p-10">

                <div className="flex-1">
                    <h2 className="p-6 text-4xl font-semibold text-left">Education</h2>

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
                        <div className="timeline-start mb-10 md:text-end text-white">
                        <time className="font-mono italic text-primary font-semibold">Oct 2024</time>
                        <div className="text-xl font-black text-primary pb-2">Frontend Development Training</div>
                        <div className="text-lg font-black text-accent pb-2">Kreativstrom</div>
                        • Hands-on HTML, CSS and Javascript Training Programm. <br />
                        • Intensive, hands-on frontend training with expert guidance.
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
                        <div className="timeline-end md:mb-10 text-white">
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
                        <div className="timeline-start mb-10 md:text-end text-white">
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
                        <div className="timeline-end md:mb-10 text-white">
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
                <h2 className="p-6 text-4xl font-semibold text-left">Experience</h2>

                <div className="collapse collapse-plus bg-[#262626]">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={devlogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2>Full-Stack Web Developer Freelancer</h2>
                        </div>
                        <p className="pl-4 text-lg">Sep 2024 -  Present</p>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-[#262626]">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-bold">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={germanAutotecLogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2>Geman AutoTec <br /><span className="text-lg font-semibold text-accent">Co-Founder & CEO</span></h2>
                        </div>
                        <p className="pl-4 text-lg font-medium">Jan 2021 - May 2024</p>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-[#262626]">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-bold">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={chilaLogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2>Chila <br /><span className="text-lg font-semibold text-accent">Shareholder & Co-owner</span></h2>
                        </div>
                        <p className="pl-4 text-lg font-medium">Jul 2021 - Apr 2024</p>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-[#262626]">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-bold">
                       <div className="flex items-center gap-4 pb-2">
                            <img src={inityLogo} alt="" className="w-12 h-12 rounded-xl" />
                            <h2>Inity Lounge <br /><span className="text-lg font-semibold text-accent">Co-Owner & Manager</span></h2>
                        </div>
                        <p className="pl-4 text-lg font-medium">Jan 2019 - Jul 2020</p>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

                <h2 className="p-6 text-4xl font-semibold text-left">Soft Skills</h2>

                    <div>
                        

                    </div>

                <h2 className="p-6 text-4xl font-semibold text-left">Languages</h2>

                    <div>
                        
                    </div>

              </div>

            </section>



            <h2 className="text-6xl font-bold py-6">Skills</h2>
            <div className="w-16 h-2 rounded-full bg-accent "></div>
            {/* <Carousel /> */}
            <Skills />


        </>
     );
}

export default AboutMe;