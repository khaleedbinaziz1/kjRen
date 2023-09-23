// import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text:
        "KJ Rendering & Plastering did an outstanding job renovating our home. Their attention to detail in the house rendering was impeccable. We are thrilled with the results and highly recommend their services.",
      author: "John Smith",
      role: "Homeowner",
      image: ava01,
    },
    {
      text:
        "We recently hired KJ Rendering & Plastering for plastering work in our living room. The craftsmanship was exceptional, and the team was professional throughout the project. We couldn't be happier.",
      author: "Sarah Johnson",
      role: "Homeowner",
      image: ava02,
    },
    {
      text:
        "When it comes to house rendering, KJ Rendering & Plastering is the best in the business. They transformed our outdated exterior into a modern masterpiece. Their expertise is unmatched.",
      author: "Michael Davis",
      role: "Homeowner",
      image: ava03,
    },
    {
      text:
        "We had damp issues in our basement, and KJ Rendering & Plastering provided a comprehensive damp proofing solution. Their team was efficient, and our basement is now dry and safe. Highly recommended.",
      author: "Emily Lewis",
      role: "Homeowner",
      image: ava04,
    },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <p className="section__description">{testimonial.text}</p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={testimonial.image} alt={`Testimonial Author ${index + 1}`} className="w-25 h-25 rounded-2" />

            <div>
              <h6 className="mb-0 mt-3">{testimonial.author}</h6>
              <p className="section__description">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
