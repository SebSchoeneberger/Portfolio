function Contact() {
    return ( 
        <>
            <h2 className="text-6xl font-bold py-6">Contact Me</h2>
            <div className="w-16 h-2 rounded-full bg-accent"></div>

            <div className="flex justify-center items-center min-w-[80%] pt-14">
                <form action="" className="flex flex-col justify-center items-center gap-4 w-[80%]">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" placeholder="Enter your Name" className="input input-bordered w-full max-w-xs" />
                    </label>
    
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">email</span>
                        </div>
                        <input type="text" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs" />
                    </label>
    
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Message</span>
                        </div>
                        <input type="text" placeholder="Type your Message here" className="input input-bordered w-full max-w-xs" />
                    </label>
                </form>
            </div>
        </>
     );
}

export default Contact;