import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import ClickSpark from "../animations/ClickSpark";

function MainLayout() {
  const { theme } = useTheme();
  return (
<ClickSpark sparkColor='#339933'>
      <div className={`min-h-screen ${theme === "light" ? "text-black" : "text-white"} bg-neutral`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
</ClickSpark>
  );
}

export default MainLayout;
