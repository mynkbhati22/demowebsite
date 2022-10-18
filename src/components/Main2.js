import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Main2() {
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

        <div className="cardarea my-5">
          {/* <div className="row">{servicesInfo.map(renderServices)}</div>*/}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Mercedes models -</h5>
                  <p class="card-text">
                    Check out the latest Mercedes models here!
                  </p>
                  <a href="/" class="btn btn-primary">
                    CAR DETAILS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Audi models -</h5>
                <p class="card-text">Check out the latest Audi models here!</p>
                <a href="/" class="btn btn-primary">
                  CAR DETAILS
                </a>
            </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">BMW models -</h5>
                <p class="card-text">Check out the latest BMW models here!</p>
                <a href="/" class="btn btn-primary">
                  CAR DETAILS
                </a>
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Jaguar models -</h5>
                <p class="card-text">
                  Check out the latest Jaguar models here!
                </p>
                <a href="/" class="btn btn-primary">
                  CAR DETAILS
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main2;
