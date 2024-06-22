import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1>{t("about.title")}</h1>
    </div>
  );
};

export default About;
