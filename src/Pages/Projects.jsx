import { NavLink } from 'react-router-dom';
import BlurText from '../animations/BlurText';
import { useTranslation } from '../context/TranslationContext';

import Snaptask from '../assets/Projects-Img/Screen Shot 2024-09-11 at 20.08.46.png';
import Snaptask2 from '../assets/Projects-Img/dashboard-BS7KH6UP.png';
import Snaptask3 from '../assets/Projects-Img/Screen Shot 2024-12-23 at 00.42.38.png';
import Snaptask4 from '../assets/Projects-Img/Screen Shot 2024-12-23 at 00.43.13.png';

import Edelstein from '../assets/Projects-Img/Screen Shot 2024-11-23 at 07.41.28.png';
import Edelstein2 from '../assets/Projects-Img/Screen Shot 2024-12-23 at 00.53.55.png';
import Edelstein3 from '../assets/Projects-Img/Screen Shot 2024-12-23 at 00.55.41.png';
import Edelstein4 from '../assets/Projects-Img/Screen Shot 2025-03-24 at 20.23.01.png';

import PokemonBattle from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.25.07.png';
import PokemonBattle2 from '../assets/Projects-Img/Screen Shot 2025-04-04 at 18.50.35.png';
import PokemonBattle3 from '../assets/Projects-Img/Screen Shot 2025-04-04 at 18.51.37.png';
import PokemonBattle4 from '../assets/Projects-Img/Screen Shot 2025-04-04 at 18.52.15.png';

import CarCareAI from '../assets/Projects-Img/Screen Shot 2025-02-10 at 21.28.28.png';

import ProjectModals from '../components/ProjectModals';

const projects = [
  {
    id: 'snaptask',
    title: 'Snaptask',
    type: 'Fullstack Website',
    description:
      'SnapTask is a full-stack SaaS application that leverages QR code technology for efficient task management. Its intuitive admin dashboard and mobile interface work together to deliver an innovative solution for managing tasks in real time.',
    images: [Snaptask, Snaptask2, Snaptask3, Snaptask4],
    tools: {
      frontend: ['JavaScript', 'CSS3', 'HTML5', 'React', 'Tailwind CSS', 'DaisyUI'],
      backend: ['NodeJS', 'Express', 'MongoDB', 'JWT'],
      devTools: ['Postman', 'ESLint', 'Axios', 'NPM', 'Git', 'GitHub'],
      cloud: ['AWS', 'OpenAI'],
    },
    tech: ['React', 'NodeJS', 'Mongo DB', 'Express', 'OpenAI', 'AWS'],
    demo: 'https://app-snaptask.onrender.com',
  },
  {
    id: 'edelstein',
    title: 'Edelstein Bibliothek',
    type: 'Fullstack Website',
    description:
      'A website created for a gemstone seller to showcase and manage their inventory. This platform allows users to explore gemstones using advanced filters, view detailed properties, and learn more about their healing and spiritual benefits.',
    images: [Edelstein, Edelstein2, Edelstein4, Edelstein3],
    tools: {
      frontend: ['JavaScript', 'CSS3', 'HTML5', 'React', 'Tailwind CSS', 'DaisyUI'],
      backend: ['NodeJS', 'Express', 'MongoDB', 'JWT'],
      devTools: ['Postman', 'ESLint', 'Axios', 'NPM', 'Git', 'GitHub'],
      cloud: ['AWS'],
    },
    tech: ['React', 'NodeJS', 'Mongo DB', 'Express', 'AWS'],
    demo: 'https://klugelou.onrender.com',
  },
  {
    id: 'pokemon-battle',
    title: 'Pokemon Battle Game',
    type: 'Fullstack Website',
    description:
      'A Pokémon battle game page where players can choose Pokémon, battle opponents, and see real-time health updates.',
    images: [PokemonBattle, PokemonBattle2, PokemonBattle3, PokemonBattle4],
    tools: {
      frontend: ['JavaScript', 'CSS3', 'HTML5', 'React', 'Tailwind CSS', 'DaisyUI'],
      backend: ['NodeJS', 'Express', 'MongoDB'],
      devTools: ['Postman', 'ESLint', 'Axios', 'NPM', 'Git', 'GitHub'],
    },
    tech: ['React', 'NodeJS', 'Mongo DB', 'Express'],
    demo: 'https://pokemon-battle-game-ljy9.onrender.com',
  },
  {
    id: 'car-care-ai',
    title: 'Car Care Ai',
    type: 'Fullstack Website (Work in Progress)',
    description:
      'CarCare AI is a cutting-edge platform that uses artificial intelligence to simplify car diagnostics. Users can describe their car issues, and the AI provides quick, reliable solutions and troubleshooting advice.',
    images: [CarCareAI],
    tech: ['React', 'NodeJS', 'Mongo DB', 'Express', 'OpenAI'],
    demo: 'https://example.com/car-care-ai',
  },
];

function Projects() {
  const { t } = useTranslation();

  const openModal = (id) => {
    document.getElementById(`modal-${id}`).showModal();
  };

  return (
    <>
      <BlurText
        text={t('projects.title')}
        delay={100}
        animateBy="words"
        direction="top"
        className="text-6xl font-bold py-6 scroll-mt-32"
        id="Projects"
      />

      <div className="w-16 h-2 rounded-full bg-accent mx-auto"></div>

      <section className="flex flex-col text-center md:text-left items-center gap-10 p-6 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-10 border-b border-white dark:border-black max-w-[1240px] w-full md:max-h-[350px] h-auto p-4"
          >
            <img
              src={project.images[0]}
              alt={`${project.title} Homepage`}
              className="w-full max-w-[545px] h-auto bg-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 shadow-2xl"
              onClick={() => openModal(project.id)}
            />
            <div className="flex flex-col items-center md:items-start gap-3">
              <h2 className="text-primary font-bold text-2xl">
                {t(`projects.${project.id}.title`)}
              </h2>
              <h3 className="text-base font-normal pb-6">
                {t(`projects.${project.id}.type`)}
              </h3>
              <p className="text-base font-normal opacity-50">
                {t(`projects.${project.id}.description`)}
              </p>
              <ul className="flex flex-wrap justify-center items-center gap-2">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="border-white dark:border-black border-2 rounded-full p-2"
                  >
                    {t(`projects.${project.id}.tech.${index}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:flex-col gap-4">
              <button
                className="rounded-full bg-accent p-2 hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(project.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <NavLink to={project.demo} target="_blank">
                <button
                  className="rounded-full bg-accent p-2 hover:scale-110 transition-transform duration-300 ease-in-out"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="size-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>
        ))}

        <button disabled className="btn btn-primary rounded-3xl">
          {t('projects.viewMore')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>  
        </button>
      </section>

      <ProjectModals projects={projects} />
    </>
  );
}

export default Projects;
