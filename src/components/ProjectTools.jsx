import ReactLogo from "../assets/MERN-Logo/React.png";
import NodeLogo from "../assets/MERN-Logo/Node.js.png";
import ExpressLogo from "../assets/MERN-Logo/Express.png";
import MongoDBLogo from "../assets/MERN-Logo/MongoDB.png";
import TailwindLogo from "../assets/Skills-Logo/TailwindCSS.png";
import JavaScriptLogo from "../assets/Skills-Logo/JavaScript.png";
import CSS3Logo from "../assets/Skills-Logo/css-3.png";
import HTML5Logo from "../assets/Skills-Logo/html-5.png";
import PostmanLogo from "../assets/Skills-Logo/Postman.png";
import AWSLogo from "../assets/Skills-Logo/AWS.png";
import GenAI from "../assets/Skills-Logo/microchip.png";
import GitLogo from "../assets/Skills-Logo/Git.png";
import GitHubLogo from "../assets/Skills-Logo/GitHub.png";
import JWT from "../assets/Skills-Logo/icons8-jwt-96.png";
import DaisyUi from "../assets/Skills-Logo/daisyui-seeklogo.png";
import NPM from "../assets/Skills-Logo/icons8-npm-96.png";
import Axios from "../assets/Skills-Logo/Azios.png";
import EsLint from "../assets/Skills-Logo/ESLint.png";

const toolLogos = {
  'JavaScript': JavaScriptLogo,
  'CSS3': CSS3Logo,
  'HTML5': HTML5Logo,
  'React': ReactLogo,
  'NodeJS': NodeLogo,
  'Express': ExpressLogo,
  'MongoDB': MongoDBLogo,
  'Tailwind CSS': TailwindLogo,
  'Postman': PostmanLogo,
  'AWS': AWSLogo,
  'OpenAI': GenAI,
  'Git': GitLogo,
  'GitHub': GitHubLogo,
  'JWT': JWT,
  'DaisyUI': DaisyUi,
  'NPM': NPM,
  'Axios': Axios,
  'ESLint': EsLint,
};

const ProjectTools = ({ tools }) => {
  const renderToolsByCategory = (category, toolsList) => {
    return (
      <div className="mb-4 flex flex-col items-center gap-2">
        <h4 className="text-lg sm:text-xl font-black text-accent pb-2">{category}</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {toolsList.map((tool, index) => (
            <div key={index} className="flex flex-col items-center">
              {toolLogos[tool] && (
                <img src={toolLogos[tool]} alt={tool} className="w-12 h-12 object-contain" />
              )}
              <span className="mt-1 text-sm sm:text-md font-semibold">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      {tools.frontend && renderToolsByCategory('Frontend Technologies', tools.frontend)}
      {tools.backend && renderToolsByCategory('Backend Technologies', tools.backend)}
      {tools.devTools && renderToolsByCategory('Development Tools & Testing', tools.devTools)}
      {tools.cloud && renderToolsByCategory('Cloud & API Integrations', tools.cloud)}
    </div>
  );
};

export default ProjectTools;
