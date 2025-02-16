import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function MainLayout() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === "light" ? "text-black" : "text-white"} bg-neutral`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
