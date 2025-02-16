import Snaptask from '../assets/Projects-Img/Screen Shot 2024-09-11 at 20.08.46.png';
import Edelstein from '../assets/Projects-Img/Screen Shot 2024-11-23 at 07.41.28.png';
import PokemonBattle from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.25.07.png';
import CarCareAI from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.28.28.png';
import EventScheduler from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.29.57.png';
import GermanAutotec from '../assets/Projects-Img/Untitled design (3).png';

function Projects() {
    return ( 
        <>
            <h2 id='Projects' className="text-6xl font-bold py-6 scroll-mt-28">Projects</h2>
            <div className="w-16 h-2 rounded-full bg-accent"></div>

            <section className='flex flex-col items-center gap-10 p-10 '>

                <div className='flex items-center gap-10 border-b border-white dark:border-black w-[1240px] h-[350px]'>
                    <img src={Snaptask} alt="Snaptask Homepage" className='w-[545px] h-auto bg-cover rounded-lg hover:scale-110' />
                    <div className='flex flex-col items-start gap-2'>
                        <h2 className='text-primary font-bold text-xl'>Snaptask</h2>
                        <h3 className='text-base font-normal opacity-60 pb-6'>Fullstack Website</h3>
                        <p className=' text-base font-normal opacity-60'>SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households.</p>
                        <ul className='flex gap-2'>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>React</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>NodeJS</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>Mongo DB</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                             </svg>
                        </button>

                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                          </svg>
                       </button>
                    </div>
                </div>

                <div className='flex items-center gap-10 border-b border-white dark:border-black w-[1240px] h-[350px]'>
                    <img src={Edelstein} alt="Edelstein Homepage" className='w-[545px] h-auto bg-cover rounded-lg hover:scale-110' />
                    <div className='flex flex-col items-start gap-2'>
                        <h2 className='text-primary font-bold text-xl'>Edelstein Bibliothek</h2>
                        <h3 className=' text-base font-normal opacity-60 pb-6'>Fullstack Website</h3>
                        <p className=' text-base font-normal opacity-60'>SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households.</p>
                        <ul className='flex gap-2'>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>React</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>NodeJS</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>Mongo DB</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>AWS</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                             </svg>
                        </button>

                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                          </svg>
                       </button>
                    </div>
                </div>

                <div className='flex items-center gap-10 border-b border-white dark:border-black w-[1240px] h-[350px]'>
                    <img src={PokemonBattle} alt="Pokemon Battle Game Page" className='w-[545px] h-auto bg-cover rounded-lg hover:scale-110' />
                    <div className='flex flex-col items-start gap-2'>
                        <h2 className='text-primary font-bold text-xl'>Pokemon Battle Game</h2>
                        <h3 className=' text-base font-normal opacity-60 pb-6'>Fullstack Website</h3>
                        <p className=' text-base font-normal opacity-60'>SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households.</p>
                        <ul className='flex gap-2'>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>React</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>NodeJS</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>Mongo DB</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                             </svg>
                        </button>

                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                          </svg>
                       </button>
                    </div>
                </div>

                <div className='flex items-center gap-10 border-b border-white dark:border-black w-[1240px] h-[350px]'>
                    <img src={CarCareAI} alt="Car Care Ai Page" className='w-[545px] h-auto bg-cover rounded-lg hover:scale-110' />
                    <div className='flex flex-col items-start gap-2'>
                        <h2 className='text-primary font-bold text-xl'>Car Care Ai</h2>
                        <h3 className=' text-base font-normal opacity-60 pb-6'>Fullstack Website</h3>
                        <p className=' text-base font-normal opacity-60'>SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households.</p>
                        <ul className='flex gap-2'>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>React</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>NodeJS</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>Mongo DB</li>
                            <li className='border-white dark:border-black border-2 rounded-full p-2'>OpenAI</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                             </svg>
                        </button>

                        <button className='rounded-full bg-accent p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-8">
                            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                          </svg>
                       </button>
                    </div>
                </div>

                <button className='border-2 rounded-full p-3 flex items-center gap-2'>
                    View more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>


            </section>

  
            {/* <div className="flex max-w-full p-20 items-start gap-16">


                <div className="flex items-center gap-6">
                    <div className="w-2 h-60 rounded-full bg-accent"></div>
                    <h1 className="text-6xl text-center [writing-mode:vertical-rl] rotate-180">My Projects</h1>
                    <div className="w-2 h-60 rounded-full bg-accent"></div>
                </div>

                <section className="grid grid-cols-3 gap-10 w-full">
                    
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
            </div> */}
        </>
    );
}

export default Projects;
