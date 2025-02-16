import CanvaLogo from '../assets/Skills-Logo/Canva.png';
import CSS3Logo from '../assets/Skills-Logo/css-3.png';
import FigmaLogo from '../assets/Skills-Logo/Figma.png';
import GitLogo from '../assets/Skills-Logo/Git.png';
import GitHubLogo from '../assets/Skills-Logo/GitHub.png';
import HTML5Logo from '../assets/Skills-Logo/html-5.png';
import JavaScriptLogo from '../assets/Skills-Logo/JavaScript.png';
import PostmanLogo from '../assets/Skills-Logo/Postman.png';
import TailwindLogo from '../assets/Skills-Logo/TailwindCSS.png';
import VisualStudioLogo from '../assets/Skills-Logo/VisualStudio.png';
import ViteLogo from '../assets/Skills-Logo/Vite.js.png';

function Skills() {

    const techImages = [
        { src: JavaScriptLogo, alt: 'JavaScript' },
        { src: CSS3Logo, alt: 'CSS3' },
        { src: HTML5Logo, alt: 'HTML5' },
        { src: TailwindLogo, alt: 'Tailwind' },
        { src: VisualStudioLogo, alt: 'Visual Studio Code' },
        { src: PostmanLogo, alt: 'Postman' },
        { src: GitLogo, alt: 'Git' },
        { src: GitHubLogo, alt: 'GitHub' },
        { src: ViteLogo, alt: 'Vite.js' },
        { src: CanvaLogo, alt: 'Canva' },
        { src: FigmaLogo, alt: 'Figma' },
      ];


    return (
        <>

            <div className="flex flex-wrap justify-center gap-4 p-10 max-w-[80%] mx-auto">
            {techImages.map((tech, index) => (
                <div key={index} className="flex justify-center items-center gap-4 h-20 max-w-[calc(25%-1rem)] rounded-2xl border-2 border-transparent shadow-2xl hover:scale-110 p-10">
                <img
                    className="w-14 h-14 object-contain rounded-[20px] shadow-2xl"
                    src={tech.src}
                    alt={tech.alt}
                />
                <p className="text-center text-lg font-semibold pt-3">{tech.alt}</p>
                </div>
            ))}
            </div>


        
        </>

      );
}

export default Skills;