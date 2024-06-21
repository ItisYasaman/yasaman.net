import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

import enTranslation from "./locales/en.json";
import faTranslation from "./locales/fa.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fa: { translation: faTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
