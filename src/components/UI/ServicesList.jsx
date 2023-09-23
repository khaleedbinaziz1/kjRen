import React, { useState } from "react";
import { Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {servicesData.map((item, index) => (
        <ServiceItem
          item={item}
          key={item.id}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </>
  );
};

const ServiceItem = ({ item, isHovered, onMouseEnter, onMouseLeave }) => (
  <Col lg="4" md="6" sm="12" className="mb-4" id="services">
    <Card
      className="service__card"
      style={{
        backgroundColor: isHovered ? "red" : "white",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardBody>
        <span className="mb-3 d-inline-block icon"
          style={{
            color: isHovered ? "white" : "red", // Change text color to white when hovered
            fontSize:'40px'
          }}>
          <i className={item.icon} />
        </span>

        <CardTitle tag="h5"   style={{
            color: isHovered ? "white" : "red", // Change text color to white when hovered
          }}>{item.title}</CardTitle>
        <CardText
          className="section__description"
          style={{
            color: isHovered ? "white" : "black", // Change text color to white when hovered
          }}
        >
          {item.desc}
        </CardText>
      </CardBody>
    </Card>
  </Col>
);

export default ServicesList;
