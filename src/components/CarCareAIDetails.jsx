import Folder from "./Folder";

const CarCareAIDetails = () => (
  <div className="py-4 px-2 text-xs sm:text-base sm:px-6 flex flex-col items-center justify-center text-center">
    <h3 className="text-lg sm:text-xl font-black text-accent pb-2">Overview</h3>
    <p className="p-4">
      CarCare AI is a cutting-edge platform designed to simplify car diagnostics using artificial intelligence.
      Users can describe car issues, and the AI provides quick, reliable troubleshooting advice and service reminders.
      Although still in development, the platform aims to become your personal AI mechanic.
    </p>
    <p className="pb-2">
      Powered by an extensive Node.js backend with OpenAI integration, CarCare AI also offers features such as car detail storage,
      service history tracking, and personalized recommendations through a daily free token system.
    </p>
    <h4 className="text-lg sm:text-xl font-black text-accent pb-2">Key Implementations:</h4>
    <ul className="space-y-2 text-center flex flex-col items-center pb-12">
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
      </svg>
        </span>
        <span>
          <strong>Robust API:</strong> Efficiently handle diagnostic queries and service data through a scalable backend.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>

        </span>
        <span>
          <strong>User Authentication:</strong> Secure login with JWT and robust input validation.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        </span>
        <span>
          <strong>OpenAI Integration:</strong> Get intelligent diagnostic advice and troubleshooting support.
        </span>
      </li>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
        <span className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-7 4h4m-9 4h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
          </svg>
        </span>
        <span>
          <strong>Service History & Reminders:</strong> Track maintenance and receive personalized reminders.
        </span>
      </li>
    </ul>

    <h4 className="text-lg sm:text-xl font-black text-accent pb-4">Codebase</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
      <Folder
        size={1}
        color="#00d8ff"
        className="pt-2"
        feRepo="https://github.com/SebSchoeneberger/CarCare-AI-Fe"
        beRepo="https://github.com/SebSchoeneberger/CarCare-AI-BE"
        liveLink=""
      />
      <p className="p-4 text-center sm:text-left max-w-[400px]">
        CarCare AI is still under development. Please check back later for a live demo.
      </p>
    </div>
  </div>
);

export default CarCareAIDetails;
