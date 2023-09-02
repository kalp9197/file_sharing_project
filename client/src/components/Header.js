import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "../routing/Home";
import Features from "../routing/Features";
import Contact from "../routing/Contact";
import "../App.css";

function Header() {
  return (
    <>
    <div className="main-route">
      <Router>
        <Navbar expand="lg" className="main_nav sticky-top">
          <Navbar.Brand as={Link} to="/">Transfer-X</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Features">Features</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="main-route">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Features" element={<Features />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  );
}

export default Header;
