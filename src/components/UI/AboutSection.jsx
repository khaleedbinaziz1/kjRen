import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section id="about" className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">
                Welcome to KJ Rendering & Plastering
              </h2>
              <p className="section__description">
                At KJ Rendering & Plastering, we take pride in being Liverpool's trusted experts in house rendering and plastering. With decades of experience in the industry, we are committed to delivering top-quality services to enhance and protect your property.
              </p>

              <p className="section__description">
                Our skilled team specializes in transforming homes with expert rendering and plastering solutions. We believe in the importance of craftsmanship, attention to detail, and ensuring the utmost satisfaction of our customers.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> High-Quality Services: We are dedicated to providing high-quality rendering and plastering services that meet the unique needs of each customer.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Customer-Centric Approach: Our customer-centric approach ensures that your expectations are not just met but exceeded.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Experienced Team: Our experienced team consists of skilled professionals who are passionate about their work.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Trust and Reliability: We've built a reputation for trust and reliability in the Liverpool community.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="Our Work" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
