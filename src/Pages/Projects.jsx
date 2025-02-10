function Projects() {
    return ( 
        <>
        <h2 className="text-6xl font-bold py-6">Projects</h2>
        <div className="w-16 h-2 rounded-full bg-accent "></div>

        <div className="flex w-full p-20 justify-between gap-10">

        <div className="flex items-center gap-6">
            <div className="w-2 h-60 rounded-full bg-accent"></div>
            <h1 className="text-6xl text-center [writing-mode:vertical-rl] rotate-180">My Projects</h1>
            <div className="w-2 h-60 rounded-full bg-accent"></div>
        </div>





            <div>
                <ul>
                    <li>
                        <h3 className="text-4xl font-semibold">Project 1</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, autem.</p>
                    </li>
                    <li>
                        <h3 className="text-4xl font-semibold">Project 2</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, autem.</p>
                    </li>
                    <li>
                        <h3 className="text-4xl font-semibold">Project 3</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, autem.</p>
                    </li>

                </ul>
            </div>


        </div>
        </>
     );
}

export default Projects;