import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar"; // Import Navbar from react-bootstrap
import Nav from "react-bootstrap/Nav"; // Import Nav from react-bootstrap
import { Link } from "react-router-dom";
import "./Navbar.css";
import br from "../img/br.gif";

const MyNavbar = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <Navbar bg="light" expand="lg" variant="light" className="navbar">
      <Navbar.Brand as={Link} to="/">
        <img src={br} alt="Brand" className="br-image"/>
      </Navbar.Brand>{" "}
      <Nav>
        <Nav.Link className="nav-pages_link" as={Link} to="/">
          {t("navbar.home")}
        </Nav.Link >
        <Nav.Link className="nav-pages_link" as={Link} to="/resume">
          {t("navbar.resume")}
        </Nav.Link >
        <Nav.Link className="nav-pages_link" as={Link} to="/contact">
          {t("navbar.contact")}
        </Nav.Link>
        <Nav.Link className="nav-pages_link" as={Link} to="/writing">
          {t("navbar.writing")}
        </Nav.Link>
      </Nav>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="ch-lang" onClick={() => changeLanguage("en")}>
            {t("navbar.english")}
          </Nav.Link >
          <Nav.Link  className="ch-lang" onClick={() => changeLanguage("fa")}>
            {t("navbar.farsi")}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
