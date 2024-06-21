import React from "react";
import { useTranslation } from "react-i18next";
import "./Resume.css";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="Resume">
      <h1>{t("resume.title")}</h1>
      <p>{t("resume.content")}</p>
    </div>
  );
};

export default Resume;
