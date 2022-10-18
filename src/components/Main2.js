import React from "react";
import { Container } from "react-bootstrap";
import bmw from "../images/bmw.webp";
import ecosports from "../images/ecosports.webp";
import audiia6 from "../images/audiia6.webp";
import MercedesBenz from "../images/Mercedes-Benz.webp";
import marutee from "../images/maruti-800.webp";
import swift from "../images/swift.webp";
import Slider from "react-slick";

function Main2() {
  const availableCars = [
    {
      carname: "AUDI A6",
      image: [audiia6],
      desc: "Check out the latest audi model here!",
      price: "5000rs per/week",
    },
    {
      carname: "SWIFT base model",
      image: [swift],
      desc: "Check out the latest swift model here!",
      price: "900rs per/week",
    },
    {
      carname: "ECOSPORTS",
      image: [ecosports],
      desc: "Check out the latest ECOSPORTS model here!",
      price: "1000rs per/week",
    },
    {
      carname: "BMW",
      image: [bmw],
      desc: "Check out the latest BMW model here!",
      price: "5500rs per/week",
    },
    {
      carname: "MERCEDES BENZ",
      image: [MercedesBenz],
      desc: "Check out the latest MERCEDES BENZ model here!",
      price: "5700rs per/week",
    },
    {
      carname: "MARUTI 800",
      image: [marutee],
      desc: "Check out the latest MARUTEE 800 model here!",
      price: "600rs per/week",
    },
  ];

  const renderCars = (availableCars, index) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
        <div
          class="card"
          style={{
            width: "18rem",
            display: "block",
            margin: "auto",
            border: "1px solid #832de8",
            maxHeight: "500px",
          }}
        >
          <img src={availableCars.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">{availableCars.carname}</h5>
            <p class="card-text">{availableCars.desc}</p>
            <p className="text-center" style={{ color: "#832de8" }}>
              {availableCars.price}
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Container>
        <div className="main-area">
          <h1 className="heading">
            CHECK OUT OUR <br /> <span className="spanarea">RECENT CARS</span>
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
            {availableCars.map(renderCars)}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Main2;
