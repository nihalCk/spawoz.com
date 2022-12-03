import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Container>
        {["lg"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb_count">
            <Container fluid>
              <Navbar.Brand as={Link} to={"/"}>
                <img style={{ width: 200 }} src={Logo} alt="logo" />
              </Navbar.Brand>

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 ">
                    <Nav.Link as={Link} to={"/about"} className="check">
                      About Us
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/services"}>
                      Services
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/industries"}>
                      Industries
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/ourworks"}>
                      Our Works
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/blog"}>
                      Blog
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>
                      Contact
                    </Nav.Link>

                    <Nav.Link as={Link} to={"/career"} className="check">
                      Career
                    </Nav.Link>

                    <Button className="quote_btn" as={Link} to={"/services"}>
                      Get a Quote
                    </Button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Navbar.Toggle />
            </Container>
          </Navbar>
        ))}
      </Container>
    </>
  );
};

export default Navbars;
