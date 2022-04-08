import React from "react";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import logo from "./../../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-menu"
            style={{ maxHeight: "115px" }}
            navbarScroll
          >
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">
              About us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={HashLink} to="/appointment">
              Appointment
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex form-btn">
            {!user.email ? (
              <Link to="/login">
                <Button variant="form-btn">
                  Login
                  <i className="fas fa-sign-in-alt"></i>
                </Button>
              </Link>
            ) : (
              <Button onClick={logOut} variant="form-btn">
                Logout
                <i className="fas fa-sign-out-alt"></i>
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
