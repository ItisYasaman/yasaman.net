import React, { useEffect } from "react"; // Import useEffect
import { useTranslation } from "react-i18next";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MyNavbar from "./components/Navbar";
// import Contact from "./components/Contact";
// import About from "./components/About";
import Resume from "./components/Resume";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Set default language to Farsi if no other language preference is detected
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage('fa');
    }
  }, [i18n]);

  // Determine if current language is RTL
  const isRTL = i18n.language === "fa";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`App ${isRTL ? "rtl" : "ltr"}`}>
    <div className="bg-half bg-left"></div>
    <div className="bg-half bg-right"></div>
    <MyNavbar changeLanguage={changeLanguage} />
      <div className="content">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={500}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    </div>
  );
}

export default App;