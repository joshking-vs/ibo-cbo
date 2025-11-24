import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.scss';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar-ibo" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-ibo">
          <img 
            src="/logo.png" 
            alt="IBO CBO Logo" 
            className="navbar-logo"
            height="50"
          />
          <span className="brand-text "> IBO CBO</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
              What We Do
            </Nav.Link>
            <Nav.Link as={Link} to="/get-involved" onClick={() => setExpanded(false)}>
              Get Involved
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;