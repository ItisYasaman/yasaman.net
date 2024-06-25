import React from "react";
import { useTranslation } from "react-i18next";
import "./Resume.css";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="Resume">
      <div className="resume-content">
      <h1>{t("resume.title")}</h1>
        <p>{t("resume.content")}</p>
        <p>{t("resume.content")}</p>
        <p>{t("resume.content")}</p>
      </div>
      <div>
        {" "}
        <h2>{t("resume.skillsTitle")}</h2>
        <ul>
          <li>{t("resume.skills.item1")}</li>
          <li>{t("resume.skills.item2")}</li>
          <li>{t("resume.skills.item3")}</li>
          <li>{t("resume.skills.item3")}</li>
          <li>{t("resume.skills.item3")}</li>
          <li>{t("resume.skills.item3")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
