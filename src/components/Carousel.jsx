import React from 'react';

// Import your images from the path
import CanvaLogo from '../assets/Skills Logo/Canva.png';
import CSS3Logo from '../assets/Skills Logo/css-3.png';
import FigmaLogo from '../assets/Skills Logo/Figma.png';
import GitLogo from '../assets/Skills Logo/Git.png';
import GitHubLogo from '../assets/Skills Logo/Github.png';
import HTML5Logo from '../assets/Skills Logo/html-5.png';
import JavaScriptLogo from '../assets/Skills Logo/JavaScript.png';
import PostmanLogo from '../assets/Skills Logo/Postman.png';
import TailwindLogo from '../assets/Skills Logo/Tailwind Css.png';
import VisualStudioLogo from '../assets/Skills Logo/Visual Studio Code (VS Code).png';
import ViteLogo from '../assets/Skills Logo/Vite.js.png';

function Carousel() {
  // List of images and their corresponding names
  const techImages = [
    { src: CanvaLogo, alt: 'Canva' },
    { src: CSS3Logo, alt: 'CSS3' },
    { src: FigmaLogo, alt: 'Figma' },
    { src: GitLogo, alt: 'Git' },
    { src: GitHubLogo, alt: 'GitHub' },
    { src: HTML5Logo, alt: 'HTML5' },
    { src: JavaScriptLogo, alt: 'JavaScript' },
    { src: PostmanLogo, alt: 'Postman' },
    { src: TailwindLogo, alt: 'Tailwind' },
    { src: VisualStudioLogo, alt: 'Visual Studio' },
    { src: ViteLogo, alt: 'Vite.js' },
  ];

  return (
    <div
      className="w-full overflow-hidden relative mx-auto py-12"
      style={{ "--tiles": 18 }}
    >
      <div
        className="flex animate-slideX space-x-6 w-max"
        style={{ animation: "slideX 45s linear infinite" }}
      >
        {/* Carousel Items */}
        {techImages.map((tech, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] h-[200px] hover:scale-110">
            <img
              className="w-full h-full object-contain rounded-[20px] border-2 border-secondary p-6 shadow-2xl"
              src={tech.src}
              alt={tech.alt}
            />
            <p className="text-center text-lg font-semibold pt-3">{tech.alt}</p>
          </div>
        ))}

        {/* Duplicate items for infinite scrolling */}
        {techImages.map((tech, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-[200px] h-[200px] hover:scale-110"
            aria-hidden="true"
          >
            <img
              className="w-full h-full object-contain rounded-[20px] border-2 border-secondary p-6"
              src={tech.src}
              alt={tech.alt}
            />
            <p className="text-center text-lg font-semibold pt-3">{tech.alt}</p>
          </div>
        ))}
      </div>

      <style>{`
          @keyframes slideX {
            0% {
              transform: translateX(calc(-1 * (8rem + 1.5rem) * 12));
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
    </div>
  );
}

export default Carousel;
