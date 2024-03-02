import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Footer from "../Footer";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [activeItem, setActiveItem] = useState("Interviews");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleItemClick = (itemName) => {
        setActiveItem(itemName);
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="Interviews" className="title">
            Interviews
          </Link>
          <button onClick={handleShow} className="toggle canvas-control">
            <span className="menu-icon">&#9776;</span>
          </button>
          <Nav className="link-control me-auto ps-5">
            <Link
              to="/"
              className={`nav-home ps-3 ${
                activeItem === "Interviews" ? "active-home" : ""
              }`}
              onClick={() => {
                handleItemClick("home");
              }}
            >
              Home
            </Link>
            <Link
              to="/html"
              className={`nav-home ps-3 ${
                activeItem === "html" ? "active-home" : ""
              }`}
              onClick={() => {
                handleItemClick("html");
              }}
            >
              Html
            </Link>
            <Link
              to="/css"
              className={`nav-home ps-3 ${
                activeItem === "css" ? "active-home" : ""
              }`}
              onClick={() => {
                handleItemClick("css");
              }}
            >
              Css
            </Link>
            <Link
              to="/javascript"
              className={`nav-home ps-3 ${
                activeItem === "javascript" ? "active-home" : ""
              }`}
              onClick={() => {
                handleItemClick("javascript");
              }}
            >
              JavaScript
            </Link>
            <Link
              to="/react"
              className={`nav-home ps-3 ${
                activeItem === "react" ? "active-home" : ""
              }`}
              onClick={() => {
                handleItemClick("react");
              }}
            >
              React JS
            </Link>
          </Nav>
        </Container>
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="canvas-control"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-dark text-uppercase">
              Interviews
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">
            <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
              <Link
                to="/"
                className={`nav ${activeItem === "home" ? "active" : ""}`}
                onClick={() => {
                  handleItemClick("home");
                  handleClose();
                }}
              >
                Home
              </Link>
              <Link
                to="/html"
                className={`nav ${activeItem === "html" ? "active" : ""}`}
                onClick={() => {
                  handleItemClick("html");
                  handleClose();
                }}
              >
                Html
              </Link>
              <Link
                to="/css"
                className={`nav ${activeItem === "css" ? "active" : ""}`}
                onClick={() => {
                  handleItemClick("css");
                  handleClose();
                }}
              >
                Css
              </Link>
              <Link
                to="/javascript"
                className={`nav ${activeItem === "javascript" ? "active" : ""}`}
                onClick={() => {
                  handleItemClick("javascript");
                  handleClose();
                }}
              >
                JavaScript
              </Link>
              <Link
                to="/react"
                className={`nav ${activeItem === "react" ? "active" : ""}`}
                onClick={() => {
                  handleItemClick("react");
                  handleClose();
                }}
              >
                React JS
              </Link>
            </Nav>
            <div className="footer-design">
              <Footer />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
}

export default NavBar;