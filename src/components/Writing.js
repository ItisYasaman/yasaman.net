import React from "react";
import { useTranslation } from "react-i18next";
import "./Writing.css";

const Writing = () => {
  const { t } = useTranslation();

  return (
    <div className="Writing">
      <h1>{t("blog.title")}</h1>
    </div>
  );
};

export default Writing;
