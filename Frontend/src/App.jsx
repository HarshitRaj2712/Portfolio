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
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
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
