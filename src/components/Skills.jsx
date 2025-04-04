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
import AWSLogo from '../assets/Skills-Logo/AWS.png';
import GenAI from '../assets/Skills-Logo/microchip.png';
import JWT from '../assets/Skills-Logo/icons8-jwt-96.png';
import Heroku from '../assets/Skills-Logo/icons8-heroku-96.png';
import SQL from '../assets/Skills-Logo/icons8-sql-96.png';
import Postgres from '../assets/Skills-Logo/icons8-postgresql-96.png';
import NPM from '../assets/Skills-Logo/icons8-npm-96.png';
import ReactLogo from "../assets/MERN-Logo/React.png";
import NodeLogo from "../assets/MERN-Logo/Node.js.png";
import ExpressLogo from "../assets/MERN-Logo/Express.png";
import MongoDBLogo from "../assets/MERN-Logo/MongoDB.png";
import DaisyUi from "../assets/Skills-Logo/daisyui-seeklogo.png";
import EsLint from "../assets/Skills-Logo/ESLint.png"
import Axios from "../assets/Skills-Logo/Azios.png"
import Magnet from "../animations/Magnet"

function Skills() {

    const techImages = [
        { src: JavaScriptLogo, alt: 'JavaScript' },
        { src: CSS3Logo, alt: 'CSS3' },
        { src: HTML5Logo, alt: 'HTML5' },
        { src: ReactLogo, alt: 'React'},
        { src: VisualStudioLogo, alt: 'Visual Studio Code' },
        { src: NodeLogo, alt: 'Node.js'},
        { src: ExpressLogo, alt: 'Express'},
        { src: MongoDBLogo, alt: 'MongoDB'},
        { src: TailwindLogo, alt: 'Tailwind' },
        { src: PostmanLogo, alt: 'Postman' },
        { src: AWSLogo, alt: 'AWS'},
        { src: GenAI, alt: 'GenAI'},
        { src: GitLogo, alt: 'Git' },
        { src: GitHubLogo, alt: 'GitHub' },
        { src: JWT, alt: 'JWT'},
        { src: DaisyUi, alt: 'DaisyUI'},
        { src: Heroku, alt: 'Heroku'},
        { src: SQL, alt: 'SQL'},
        { src: Postgres, alt: 'Postgres'},
        { src: NPM, alt: 'NPM'},
        { src: ViteLogo, alt: 'Vite' },
        { src: CanvaLogo, alt: 'Canva' },
        { src: FigmaLogo, alt: 'Figma' },
        { src: EsLint, alt: 'ESLint'},
        {src : Axios, alt: 'Axios'},
      ];


    return (
        <>

            <Magnet wrapperClassName="" innerClassName="" padding={50} disabled={false} magnetStrength={10}>
                <div className="flex flex-wrap justify-center gap-4 p-5 sm:p-10 max-w-[80%] mx-auto">
                {techImages.map((tech, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-center items-center min-w-[100px] sm:min-w-[120px] p-2 max-w-[200px] gap-1 md:gap-4 h-24 md:h-20 md:max-w-[calc(25%-1rem)] rounded-2xl border-2 border-transparent shadow-2xl hover:scale-110 md:p-10">
                    <img
                        className="w-14 h-14 object-contain rounded-[20px] shadow-2xl"
                        src={tech.src}
                        alt={tech.alt}
                    />
                    <p className="text-center text-lg font-semibold md:pt-3">{tech.alt}</p>
                    </div>
                ))}
                </div>
            </Magnet>


        
        </>

      );
}

export default Skills;