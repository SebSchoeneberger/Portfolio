import img from "../assets/2019-05-08 18.33.23.jpg";

function Home() {
  return (
    <>
      <main className="bg-neutral text-primary p-10">
<div className="max-w-[80%] flex justify-center items-center text-left gap-10 mx-auto">

          {/* Left Section */}
          <div className="flex flex-1 flex-col justify-center items-start h-screen text-4xl gap-2">
            <h2>
              Greetings 👋🏽 
            </h2>
            <a>I'm <strong className="text-secondary">Sebastian Schoeneberger</strong></a>
            <h3 className="text-accent">And I am a Full-Stack Developer</h3>
            <button className="btn btn-primary rounded-3xl">
              Download CV
            </button>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-1 flex-col justify-center items-center h-screen">
            <img
              src={img}
              alt="Profile Picture Sebastian Schoeneberger"
              className="rounded-full w-52 h-auto border-4 border-secondary"
            />
          </div>
</div>
      </main>
    </>
  );
}

export default Home;
