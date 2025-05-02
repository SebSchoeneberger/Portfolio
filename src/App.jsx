import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import { TranslationProvider } from "./context/TranslationContext"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

const App = () => (
  <TranslationProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster toastOptions={{duration: 2500}} position="bottom-center" />
    </ThemeProvider>
  </TranslationProvider>
);

export default App;
