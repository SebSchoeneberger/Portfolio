import SwipeAnimation from "../animations/SwipeAnimation";
import SnapTaskDetails from '../components/SnaptaskDetails'; 
import ProjectTools from "./ProjectTools";
import EdelsteinDetails from "./EdelsteinDetails";
import PokemonBattleDetails from "./PokemonBattleDetails";
import CarCareAIDetails from "./CarCareAIDetails";

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
                      <a href={`#slide-${prevSlide}-${project.id}`} className="btn btn-circle">❮</a>
                      <a href={`#slide-${nextSlide}-${project.id}`} className="btn btn-circle">❯</a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="md:hidden text-center pb-2">
              <SwipeAnimation className="w-8 h-8 mx-auto" />
            </div>

            {/* Project details content */}
            <section className="flex flex-col items-center gap-3">
              <h3 className="text-primary font-bold text-4xl">{project.title}</h3>
              {project.id === 'snaptask' ? (
                <SnapTaskDetails />
              ) : project.id === 'edelstein' ? (
                <EdelsteinDetails />
              ) : project.id === 'pokemon-battle' ? (
                <PokemonBattleDetails />
              ) : project.id === 'car-care-ai' ? (
                <CarCareAIDetails />
              ) : (
                <p className="py-4">{project.description}</p>
              )}
              {project.tools && <ProjectTools tools={project.tools} />}
            </section>
            
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
