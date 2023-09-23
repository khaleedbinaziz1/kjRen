import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const Projects = (props) => {
  const { imgUrl } = props.item;
  const [isHovered, setIsHovered] = useState(false);

  const imgStyle = {
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5" id="projects">
      <div className="car__item">
        <div
          className="car__img"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/car-details"> {/* Add your link */}
            <img
              src={imgUrl}
              alt=""
              className="w-100"
              style={imgStyle}
            />
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Projects;
