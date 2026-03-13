import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import CodingProfiles from "./Components/CodingProfiles";
import Contact from "./Components/Contact";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import WheelSection from "./Components/WheelSection";
import "./index.css";
import "./App.css";

function App() {
  const location = useLocation();
  const cursorRef = useRef(null);
  const isCursorVisibleRef = useRef(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".scroll-reveal"));

    if (revealItems.length === 0) {
      return;
    }

    const showAll = () => {
      revealItems.forEach(item => item.classList.add("is-visible"));
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      showAll();
      return;
    }

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

    revealItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const isOnScreen = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

      if (isOnScreen) {
        item.classList.add("is-visible");
      } else {
        observer.observe(item);
      }
    });

    // Safety net: never leave sections hidden if observer callbacks are missed.
    const revealFallbackTimeout = window.setTimeout(showAll, 1500);

    return () => {
      window.clearTimeout(revealFallbackTimeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let rafId = null;

    const updateCursorPosition = (x, y) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        cursorRef.current.style.setProperty("--cursor-x", `${x}px`);
        cursorRef.current.style.setProperty("--cursor-y", `${y}px`);
      });
    };

    const setCursorVisibility = nextValue => {
      if (isCursorVisibleRef.current === nextValue) {
        return;
      }

      isCursorVisibleRef.current = nextValue;
      setIsCursorVisible(nextValue);
    };

    const handleMouseMove = event => {
      const isInsideCursorZone = Boolean(event.target.closest(".cursor-zone"));

      if (!isInsideCursorZone) {
        setCursorVisibility(false);
        return;
      }

      setCursorVisibility(true);
      updateCursorPosition(event.clientX, event.clientY);
    };

    const handleMouseLeave = () => {
      setCursorVisibility(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="cursor-zone">
              <HeroSection />
              <WheelSection />
              <About />
              <Projects />
              <CodingProfiles />
              <Contact />
            </main>
          }
        />

        <Route
          path="/certifications"
          element={
            <main className="cursor-zone">
              <Certifications />
            </main>
          }
        />

        <Route
          path="/contact-form"
          element={
            <main className="cursor-zone">
              <ContactForm />
            </main>
          }
        />

         <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <div
        ref={cursorRef}
        className={`cursor-orb ${isCursorVisible ? "is-active" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}

export default App;