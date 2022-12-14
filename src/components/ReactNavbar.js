import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import useTheme from "./useTheme";
import ToggleMode from "./ToggleMode";
import style from "styled-theming";

import logo from "../images/logo.jpeg";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});

const getForeground = style("mode", {
  light: "#111",
  dark: "#fff",
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

export default function ReactNavbar() {
  const [active, setActive] = useState(0);
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar bg="transparent" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="weblogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                href="#home"
                className={`reactlink mx-2 my-2 ${
                  active === 1 ? "active" : ""
                }`}
                onClick={() => setActive(1)}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#about-us"
                className={`reactlink mx-2 my-2 ${
                  active === 2 ? "active" : ""
                }`}
                onClick={() => setActive(2)}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#available"
                className={`reactlink mx-2 my-2 ${
                  active === 3 ? "active" : ""
                }`}
                onClick={() => setActive(3)}
              >
                AVAILABLE
              </Nav.Link>
              <Nav.Link
                href="#testimonials"
                className={`reactlink mx-2 my-2 ${
                  active === 4 ? "active" : ""
                }`}
                onClick={() => setActive(4)}
              >
                TESTIMONIAL
              </Nav.Link>
              <Nav.Link
                href="#contact-us"
                className={`reactlink mx-2 my-2 ${
                  active === 5 ? "active" : ""
                }`}
                onClick={() => setActive(5)}
              >
                CONTACT US
              </Nav.Link>
              <Button className="darkmode">
                <ToggleMode />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ThemeProvider>
  );
}
