import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark  py-5 mt-5">
      <Container>
        <Row className="mb-4">
          {/* <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3"> IBO CBO</h5>
            <p className="text-muted small">
              Empowering marginalized communities through healthcare, education, and advocacy.
            </p>
          </Col> */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className=" text-muted text-decoration-none hover-link">Home</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none hover-link">About</Link></li>
              <li><Link to="/services" className="text-muted text-decoration-none hover-link">Services</Link></li>
              <li><Link to="/contact" className="text-muted text-decoration-none hover-link">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <p className="text-muted small mb-2">
              <strong>Phone:</strong> +254 720 979 015
            </p>
            <p className="text-muted small">
              <strong>Email:</strong> ibocbokenya@gmail.com 
            </p>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="social-links">
              <a href="https://web.facebook.com/profile.php?id=61584210346023" target="_blank" className="text-muted text-decoration-none me-3 hover-link">Facebook</a>
              {/* <a href="#" className="text-muted text-decoration-none me-3 hover-link">Twitter</a>
              <a href="#" className="text-muted text-decoration-none hover-link">LinkedIn</a> */}
            </div>
          </Col>
        </Row>
        <hr className="bg-secondary my-4" />
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="text-muted small mb-0">
              &copy; {currentYear} IBO Community-Based Organization. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-muted small mb-0">
              <Link to="#" className="text-muted text-decoration-none">Privacy Policy</Link> | 
              <Link to="#" className="text-muted text-decoration-none ms-2">Terms of Service</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;