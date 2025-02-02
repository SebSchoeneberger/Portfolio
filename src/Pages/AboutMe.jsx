import img2 from "../assets/IMG_20190322_114508.jpg";
import ReactLogo from "../assets/MERN-Logo/React.png";
import NodeLogo from "../assets/MERN-Logo/Node.js.png";
import ExpressLogo from "../assets/MERN-Logo/Express.png";
import MongoDBLogo from "../assets/MERN-Logo/MongoDB.png";
import Carousel from "../components/Carousel";

function AboutMe() {
    return ( 
        <>
            <h1 className="text-6xl font-bold py-6">About Me</h1>
            <div className="w-16 h-2 rounded-full bg-accent "></div>

            <div className="pt-10 flex gap-10">

            <div className="flex-1 px-10 text-justify text-lg">
                <h2 className="p-6 text-4xl font-semibold text-left">{`</ Get to know me>`}</h2>

                <p>👋🏽 My name is Sebastian Schoeneberger, and I'm a junior full-stack web developer with a diverse background and a passion for technology.</p>
                
                <p>I started my professional journey at <span className="text-accent font-semibold">Mercedes-Benz</span> in the automotive sector, moved into <span className="text-accent font-semibold">entrepreneurship</span> with multiple businesses, and I am now thrilled to explore new opportunities in the <span className="text-accent font-semibold">tech industry</span>.</p>

                <h3 className="py-6 text-xl font-semibold">What Sets Me Apart</h3>
                
                <p>🛠️ <strong>Technical Expertise:</strong> – My experience in vehicle diagnostics at Mercedes-Benz honed my problem-solving skills, which I now apply to coding. I work with <span className="text-accent font-semibold">JavaScript</span>, <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">Node.js</span>, <span className="text-accent font-semibold">Express</span>, <span className="text-accent font-semibold">SQL</span>, <span className="text-accent font-semibold">MongoDB</span>, and more.</p>
                
                <p>🚀 <strong>Entrepreneurial Mindset:</strong> – Six years of running businesses gave me expertise in marketing, finance, and leadership—helping me build web applications that truly serve business needs.</p>
                
                <p>🌍 <strong>Multilingual & Adaptable:</strong> – Fluent in <span className="text-accent font-semibold">German</span>, <span className="text-accent font-bold">Spanish</span>, and <span className="text-accent font-semibold">English</span>, with global experience across three continents, I thrive in diverse environments and communicate effectively.</p>
                
                <p>🔍 <strong>Detail-Oriented & Reliable:</strong> – I uphold high standards, stay committed to delivering quality work, and ensure every project is completed efficiently and on time.</p>
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

            <h2 className="p-6 pt-12 text-4xl font-semibold text-left">{`</ Skills>`}</h2>
            <Carousel />


        </>
     );
}

export default AboutMe;