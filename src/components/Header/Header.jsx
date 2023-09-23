import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/all-images/logo.jpg";
const navLinks = [
  {
    href: "/",
    display: "HOME",
  },
  {
    href: "#about",
    display: "ABOUT",
  },
  {
    href: "#services",
    display: "SERVICES",
  },
  {
    href: "#blogs",
    display: "TYPES OF RENDERS",
  },

  {
    href: "#projects",
    display: "PROJECTS",
  },
  {
    href: "#contact",
    display: "CONTACT",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <img
                      src={logo}
                      alt="logo"
                      style={{ width: "200px", height: "60px" }}
                    />
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>United Kingdom</h4>
                  <h6>Liverpool</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn">
                <a href="tel:07897269972">
                  <i className="ri-phone-line"></i> 07897269972
                </a>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <a 
                    href={item.href}
                  className="nav_link"
                  >
                    {item.display}
                  </a>
                ))}
              </div>
            </div>

            <div className="nav__right">
           
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
