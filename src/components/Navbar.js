import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Navbar.css";
import y from "../img/y.gif";

const MyNavbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  const languageLabel = i18n.language === "en" ? "FA" : "EN ";

  return (
    <Navbar bg="light" expand="lg" variant="light" className="navbar">
      <Navbar.Brand as={Link} to="/">
        <img src={y} alt="Brand" className="br-image" />
      </Navbar.Brand>{" "}
      <Nav>
        <Nav.Link className="nav-pages_link" as={Link} to="/">
          {t("navbar.home")}
        </Nav.Link>
        <Nav.Link className="nav-pages_link" as={Link} to="/resume">
          {t("navbar.resume")}
        </Nav.Link>
        {/* <Nav.Link className="nav-pages_link" as={Link} to="/contact">
          {t("navbar.contact")}
        </Nav.Link> */}
        <Nav.Link className="nav-pages_link" as={Link} to="/About">
          {t("navbar.about")}
        </Nav.Link>
      <a
        className="nav-pages_blog_btn"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("navbar.blog")}
      </a>
      </Nav>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="ch-lang" onClick={toggleLanguage}>
            {languageLabel}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
