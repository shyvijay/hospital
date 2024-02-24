import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import BookAppointment from "../pages/BookAppointment";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Services from "../pages/Services";
import Popup from "./Popup";

const Menu = () => {
  return (
    <Router>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar-light bg-dark"
        data-bs-theme="dark"
      >
        <Container>
          <Link path="/" className="navbar-brand">
            Doctor +
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/services" className="nav-link">
                Services
              </Link>
              <Link to="/testimonials" className="nav-link">
                Testimonials
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
            <Popup title="Book Appointment" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Menu;
