import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import Projects from "../components/UI/Projects";
import Contact from "../pages/Contact";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <Col lg="12" className="mb-5 text-center">
        <h6 className="section__subtitle">About Us</h6>
        <h2 className="section__title">Popular Services</h2>
      </Col>
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">projects</h6>
              <h2 className="section__title">our recent works</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <Projects item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>


    

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Types Of Renderings</h6>

            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>

        {/* =========== testimonial section =========== */}
        <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
       {/* =========== testimonial section =========== */}
       <section>
        <Container>
          <Row>
          

            <Contact/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
