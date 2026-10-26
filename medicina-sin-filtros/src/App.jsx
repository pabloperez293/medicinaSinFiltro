
import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import CoursesIntro from "./components/sections/CoursesIntro";
import ThemeToggle from "./components/ui/ThemeToggle";
import FlyingHeart from "./components/ui/FlyingHeart";
import useTheme from "./hooks/useTheme";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ClassGallery from "./components/sections/ClassGallery";
import CourseCatalog from "./components/sections/CourseCatalog";
import Footer from "./components/layout/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar />

      <div className="theme-control">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <main>
        <Hero />
        <CoursesIntro />
        <WhyChooseUs />
        <ClassGallery />
        <CourseCatalog />
      </main>

      <Footer />

      <FlyingHeart />
    </>
  );
}
