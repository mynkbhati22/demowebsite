import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import logo from "../images/logo.jpeg";

export default function Testimonials() {
  const testimonialInfo = [
    {
      img: [logo],
      title: "Lorem 1",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus animi sequi eos reiciendis facere, odit minus. Earum  asperiores animi perspiciatis molestiae qui rerum quos neque  perferendis mollitia tempore.",
    },
    {
      img: [logo],
      title: "Lorem 2",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus animi sequi eos reiciendis facere, odit minus. Earum  asperiores animi perspiciatis molestiae qui rerum quos neque  perferendis mollitia tempore.",
    },
    {
      img: [logo],
      title: "Lorem 3",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus animi sequi eos reiciendis facere, odit minus. Earum  asperiores animi perspiciatis molestiae qui rerum quos neque  perferendis mollitia tempore.",
    },
    {
      img: [logo],
      title: "Lorem 4",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus animi sequi eos reiciendis facere, odit minus. Earum  asperiores animi perspiciatis molestiae qui rerum quos neque  perferendis mollitia tempore.",
    },

    {
      img: [logo],
      title: "Lorem 5",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus animi sequi eos reiciendis facere, odit minus. Earum  asperiores animi perspiciatis molestiae qui rerum quos neque  perferendis mollitia tempore.",
    },
    {
      img: [logo],
      title: "Lorem 6",
      subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem doloribus animi sequi eos reiciendis facere, odit minus. Earum  asperiores animi perspiciatis molestiae qui rerum quos neque  perferendis mollitia tempore.",
    },
  ];

  const renderTestimonials = (testimonialInfo, index) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
        <div
          class="card"
          style={{
            width: "23rem",
            borderRadius: "10px",
            border: "1px solid #832de8",
          }}
        >
          <img
            src={testimonialInfo.img}
            class="card-img-top  d-block m-auto"
            alt="..."
            style={{ width: "30%" }}
          />
          <div class="card-body">
            <h5 class="card-title text-center">{testimonialInfo.title}</h5>
            <p class="card-title text-center my-2">
              {testimonialInfo.subtitle}
            </p>
            <p class="card-text">{testimonialInfo.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <div className="main-area my-5 py-2">
          <h1 className="heading">
            What Our Happy Clients say about us
            <br /> <span className="spanarea">OUR TESTIMONIAL</span>
          </h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            doloribus animi sequi eos reiciendis facere, odit minus. Earum
            asperiores animi perspiciatis molestiae qui rerum quos neque
            perferendis mollitia tempore. Ut maxime aliquam quis, beatae rem a
            nesciunt ex eos perspiciatis cum est perferendis repellendus id
            neque similique sint eum.
          </p>
        </div>
        <div className="slider-container my-4">
          <Slider
            dots={true}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={false}
            autoplaySpeed={3100}
            responsive={[
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 912,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {testimonialInfo.map(renderTestimonials)}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
