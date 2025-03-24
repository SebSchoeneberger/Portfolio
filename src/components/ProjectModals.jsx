import SwipeAnimation from "../animations/SwipeAnimation";

const ProjectModals = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <dialog
          key={project.id}
          id={`modal-${project.id}`}
          className="modal modal-bottom !sm:w-[65vw] !max-w-[80vw] mx-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              e.currentTarget.close();
            }
          }}
        >
          <div className="modal-box p-10">
            {/* Carousel */}
            <div className="carousel w-full mb-4">
              {project.images.map((imgSrc, index) => {
                // Calculate slide IDs for navigation
                const total = project.images.length;
                const prevSlide = index === 0 ? total - 1 : index - 1;
                const nextSlide = index === total - 1 ? 0 : index + 1;
                return (
                  <div
                    key={index}
                    id={`slide-${index}-${project.id}`}
                    className="carousel-item relative w-full"
                  >
                    <img src={imgSrc} className="w-full object-contain" alt={`slide ${index + 1}`} />

                    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 justify-between">
                      <a href={`#slide-${prevSlide}-${project.id}`} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={`#slide-${nextSlide}-${project.id}`} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="md:hidden text-center pb-2">
              <SwipeAnimation className="w-8 h-8 mx-auto" />
            </div>

            {/* Project details */}
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="py-4">{project.description}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}
    </>
  );
};

export default ProjectModals;
