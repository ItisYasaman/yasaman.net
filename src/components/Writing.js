import React from "react";
import { useTranslation } from "react-i18next";
import "./Writing.css";

const Writing = () => {
  const { t } = useTranslation();

  return (
    <div className="Writing">
      <h1>{t("writing.title")}</h1>
      <p>{t("writing.content")}</p>
    </div>
  );
};

export default Writing;
