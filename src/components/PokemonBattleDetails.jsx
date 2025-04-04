import Folder from "./Folder";

const PokemonBattleDetails = () => (
  <div className="py-4 px-2 text-xs sm:text-base sm:px-6 flex flex-col items-center justify-center text-center">
    <h3 className="text-lg sm:text-xl font-black text-accent pb-2">Overview</h3>
    <p className="p-4">
      Pokemon-battle Game is an engaging full-stack MERN application built as a team project. It combines the excitement of Pokémon battles with modern web technologies, allowing players to choose Pokémon, battle opponents, and view real-time health updates.
    </p>
    <p className="pb-2">
      The project uses the Pokémon API to fetch data and a Node.js backend for score tracking and maintaining a dynamic leaderboard, offering an interactive and competitive experience.
    </p>
    <h4 className="text-lg sm:text-xl font-black text-accent pb-2">Key Implementations:</h4>
    <ul className="space-y-2 text-center flex flex-col items-center pb-12">
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>

        </span>
        <span>
          <strong>Vite Integration:</strong> Experience fast builds and hot module replacement.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokelinecap="round" strokelinejoin="round" width={24} height={24}  strokeWidth={2}> <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path> </svg> 
        </span>
        <span>
          <strong>Tailwind CSS Configuration:</strong> Leverage a utility-first framework for rapid and responsive design.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>

        </span>
        <span>
          <strong>Dynamic Leaderboard:</strong> Real-time score tracking and competitive rankings.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokelinecap="round" strokelinejoin="round" width={24} height={24}  strokeWidth={2}> <path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z"></path> <path d="M5 13l6 6"></path> <path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365"></path> <path d="M10 5.5l-2 -2.5h-5v5l3 2.5"></path> </svg> 
        </span>
        <span>
          <strong>Interactive Battles:</strong> Engage with the Pokémon API for immersive, real-time battles.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>

        </span>
        <span>
          <strong>Customizable Themes:</strong> Personalize the interface for a unique user experience.
        </span>
      </li>
    </ul>

    <h4 className="text-lg sm:text-xl font-black text-accent pb-4">Live Demo & Codebase</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
      <Folder
        size={1}
        color="#00d8ff"
        className="pt-2"
        feRepo="https://github.com/SebSchoeneberger/fe-pokemon-battle"
        beRepo="https://github.com/SebSchoeneberger/BE-Pokemon-Battle"
        liveLink="https://pokemon-battle-game-ljy9.onrender.com"
      />
      <p className="p-4 text-center sm:text-left max-w-[400px]">
        Challenge yourself and see how you stack up against other trainers in real-time battles!
      </p>
    </div>
  </div>
);

export default PokemonBattleDetails;
