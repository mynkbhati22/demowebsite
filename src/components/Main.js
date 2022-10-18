import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GrServices } from "react-icons/gr";
import { BsWallet2 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { SiBrandfolder } from "react-icons/si";

export default function Main() {
  const servicesInfo = [
    {
      image: [<TbTruckDelivery />],
      title: "Fastest Delivery",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
    },
    {
      image: [<BsWallet2 />],
      title: "Affordable",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
    },
    {
      image: [<GrServices />],
      title: "Services",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
    },
    {
      image: <SiBrandfolder />,
      title: "Brand",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
    },
  ];

  const renderServices = (servicesInfo, index) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
        <Card className="cardss">
          <div className="cardimg">{servicesInfo.image}</div>
          <Card.Body>
            <Card.Title>{servicesInfo.title}</Card.Title>
            <Card.Text>{servicesInfo.desc}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <div className="main-area">
          <h1 className="heading">
            WELCOME TO <br /> <span className="spanarea">CAR RENTAL WORLD</span>
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

        <div className="cardarea my-5">
          {/* <div className="row">{servicesInfo.map(renderServices)}</div>*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Card className="cardss">
                {/* <div className="cardimg">{servicesInfo.image}</div> */}
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>byyee</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Card className="cardss">
                {/* <div className="cardimg">{servicesInfo.image}</div> */}
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>byyee</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Card className="cardss">
                {/* <div className="cardimg">{servicesInfo.image}</div> */}
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>byyee</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Card className="cardss">
                {/* <div className="cardimg">{servicesInfo.image}</div> */}
                <Card.Body>
                  <Card.Title>hello</Card.Title>
                  <Card.Text>byyee</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
