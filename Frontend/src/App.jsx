import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import CodingProfiles from "./Components/CodingProfiles";
import Contact from "./Components/Contact";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import WheelSection from "./Components/WheelSection";
import "./index.css";

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <WheelSection />
              <About />
              <Projects />
              <CodingProfiles />
              <Contact />
            </>
          }
        />

        <Route path="/contact-form" element={<ContactForm />} />

         <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;