import Snaptask from '../assets/Projects-Img/Screen Shot 2024-09-11 at 20.08.46.png';
import Edelstein from '../assets/Projects-Img/Screen Shot 2024-11-23 at 07.41.28.png';
import PokemonBattle from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.25.07.png';
import CarCareAI from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.28.28.png';
import EventScheduler from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.29.57.png';
import GermanAutotec from '../assets/Projects-Img/Untitled design (3).png';

function Projects() {
    return ( 
        <>
            <h2 className="text-6xl font-bold py-6">Projects</h2>
            <div className="w-16 h-2 rounded-full bg-accent"></div>

            {/* Main Container */}
            <div className="flex max-w-full p-20 items-start gap-16">

                {/* Left Title Section */}
                <div className="flex items-center gap-6">
                    <div className="w-2 h-60 rounded-full bg-accent"></div>
                    <h1 className="text-6xl text-center [writing-mode:vertical-rl] rotate-180">My Projects</h1>
                    <div className="w-2 h-60 rounded-full bg-accent"></div>
                </div>

                {/* Grid Layout for Projects */}
                <section className="grid grid-cols-3 gap-10 w-full">
                    
                    {/* Snaptask */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="mockup-browser bg-base-600 border w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://app-snaptask.onrender.com</div>
                            </div>
                            <div className="bg-base-600 border flex justify-center px-4 py-4">
                                <img src={Snaptask} alt="Snaptask Img" className="rounded-xl border-secondary border-2 w-full h-64 object-cover" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">Snaptask</h2>
                        <p className='text-center'>SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households.</p>
                        <p>Project Stack: MERN</p>
                    </div>

                    {/* Edelstein Bibliothek (Flipped Layout) */}
                    <div className="flex flex-col-reverse items-center gap-4 w-full">
                        <div className="mockup-browser bg-base-600 border w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://edelstein.onrender.com</div>
                            </div>
                            <div className="bg-base-600 border flex justify-center px-4 py-4">
                                <img src={Edelstein} alt="Edelstein Img" className="rounded-xl border-secondary border-2 w-full h-64 object-cover" />
                            </div>
                        </div>
                        <p>Project Stack: MERN</p>
                        <p className='text-center'>A project created for a gemstone seller to showcase and manage their inventory. This platform allows users to explore gemstones using advanced filters, view detailed properties, and learn more about their healing and spiritual benefits.</p>
                        <h2 className="text-2xl font-bold">Edelstein Bibliothek</h2>
                    </div>

                    {/* Pokemon Battle */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="mockup-browser bg-base-600 border w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://pokemonbattle.onrender.com</div>
                            </div>
                            <div className="bg-base-600 border flex justify-center px-4 py-4">
                                <img src={PokemonBattle} alt="Pokemon Battle Img" className="rounded-xl border-secondary border-2 w-full h-64 object-cover" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">Pokemon Battle</h2>
                        <p className='text-center'>Project Description</p>
                        <p>Project Stack: React, Node.js</p>
                    </div>

                    {/* CarCare AI */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="mockup-browser bg-base-600 border w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://carcareai.com</div>
                            </div>
                            <div className="bg-base-600 border flex justify-center px-4 py-4">
                                <img src={CarCareAI} alt="CarCare AI Img" className="rounded-xl border-secondary border-2 w-full h-64 object-cover" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">CarCare AI</h2>
                        <p className='text-center'>CarCare AI is a cutting-edge platform that uses artificial intelligence to simplify car diagnostics. Users can describe their car issues, and the AI provides quick, reliable solutions and troubleshooting advice.</p>
                        <p>Project Stack: Python, AI</p>
                    </div>

                    {/* Event Scheduler (Flipped Layout) */}
                    <div className="flex flex-col-reverse items-center gap-4 w-full">
                        <div className="mockup-browser bg-base-600 border w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://eventscheduler.com</div>
                            </div>
                            <div className="bg-base-600 border flex justify-center px-4 py-4">
                                <img src={EventScheduler} alt="Event Scheduler Img" className="rounded-xl border-secondary border-2 w-full h-64 object-cover" />
                            </div>
                        </div>
                        <p>Project Stack: Django, PostgreSQL</p>
                        <p className='text-center'>Project Description</p>
                        <h2 className="text-2xl font-bold">Event Scheduler</h2>
                    </div>

                    {/* German Autotec */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="mockup-browser bg-base-600 border w-full">
                            <div className="mockup-browser-toolbar">
                                <div className="input">https://germanautotec.com</div>
                            </div>
                            <div className="bg-base-600 border flex justify-center px-4 py-4">
                                <img src={GermanAutotec} alt="German Autotec Img" className="rounded-xl border-secondary border-2 w-full h-64 object-cover" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold">German Autotec</h2>
                        <p className='text-center'>Project Description</p>
                        <p>Project Stack: Vue.js, Firebase</p>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Projects;
