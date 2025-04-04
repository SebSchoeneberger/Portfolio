import Folder from "./Folder";

const SnapTaskDetails = () => (

  <div className="py-4 px-6 flex flex-col items-center justify-center text-center">
    <h3 className="text-xl font-black text-accent pb-2">Overview</h3>
    <p className="p-4">
    SnapTask is a versatile Full-stack SaaS platform engineered to streamline task management through innovative QR code technology. Built with the MERN stack—MongoDB, Express, React, and Node.js—along with Vite and Tailwind CSS, this project showcases my ability to develop robust, modern web applications from the ground up.
    </p>
    <p className="pb-2">
      Developed in collaboration with a team at WBS Coding School, SnapTask demonstrates a modern, real-world solution for task management.
    </p>
    <h4 className="text-xl font-black text-accent pb-2">Key Implementations:</h4>
    
    <ul className="space-y-2 text-center flex flex-col items-center pb-12">
  <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
    <span className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
      </svg>
    </span>
    <span>
      <strong>QR Code Integration:</strong> Quickly access and update tasks by scanning codes.
    </span>
  </li>
  <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
    <span className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    </span>
    <span>
      <strong>Comprehensive Admin Dashboard:</strong> Manage areas, tasks, and user roles with real-time insights.
    </span>
  </li>
  <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
    <span className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    </span>
    <span>
      <strong>Mobile-Optimized Interface:</strong> Seamlessly manage tasks on the go.
    </span>
  </li>
  <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
    <span className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    </span>
    <span>
      <strong>OpenAI Chatbot Integration:</strong> Enhance user interaction with data analysis and query responses.
    </span>
  </li>
  <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
    <span className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
      </svg>
    </span>
    <span>
      <strong>Robust Backend Architecture:</strong> Secure, scalable RESTful APIs with role-based permissions.
    </span>
  </li>
  <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
    <span className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    </span>
    <span>
      <strong>Modular Code:</strong> Reusable components and thorough documentation for future enhancements.
    </span>
  </li>
</ul>

<h4 className="text-xl font-black text-accent pb-4">Live Demo & Codebase</h4>

<div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
  <Folder
    size={1}
    color="#00d8ff"
    className="pt-2"
    feRepo="https://github.com/yourusername/FE-repo"
    beRepo="https://github.com/yourusername/BE-repo"
    liveLink="https://app-snaptask.onrender.com"
  />
  <p className="p-4 text-center sm:text-left max-w-[400px]">
    Live Demo can be tested with following credentials:
    <br />
    <strong>Username:</strong> example@test.com
    <br />
    <strong>Password:</strong> password1234
    <br />
    (Login might take a minute if the Backend server is sleeping, please be patient)
  </p>
</div>

  </div>
);

export default SnapTaskDetails;
