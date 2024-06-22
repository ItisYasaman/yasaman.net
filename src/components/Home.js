import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="Home">
          <img className="yas-png" src={require("../img/yas.png")} alt="Y" />
      <div className="home-container">
        <div className="Home-second_container">
        <h1>{t("home.title")}</h1>
          <p>{t("home.content")}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
