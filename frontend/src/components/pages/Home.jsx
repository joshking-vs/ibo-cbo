import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchOrganization, fetchServices } from '../../utils/api';
import '../../styles/Home.scss';

function Home() {
  const { data: org } = useFetch(fetchOrganization);
  const { data: services } = useFetch(fetchServices);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content fade-in">
              <h1 className="hero-title">
                Empowering Marginalized Communities
              </h1>
              <p className="hero-subtitle fade-in-delay-1">
                {org?.mission || 'Advancing health literacy, healthcare access, and social empowerment for vulnerable populations.'}
              </p>
              <div className="hero-buttons fade-in-delay-2">
                <Button as={Link} to="/contact" className="btn-primary btn-lg">
                  Get In Touch
                </Button>
                <Button as={Link} to="/about" className="btn-outline-primary btn-lg">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image fade-in-delay-3">
              <div className="hero-image-placeholder">
                <img src="/home.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <Container>
          <div className="section-header">
            <h2>Our Focus Areas</h2>
            <div className="header-underline"></div>
            <h3 className="hero-subtitle fade-in-delay-1">
              <br />
                {org?.mission || 'Prevention of organised crime and violence, research, community capacity building, harm reduction and prevention of adfiction'}
              </h3>
          </div>
          <Row className="g-4">
            {services?.map((service, index) => (
              <Col lg={4} md={6} key={service.id} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-card hover-lift">
                  <div className="service-icon">{service.icon}</div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Communities Served</div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Lives Impacted</div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Active Volunteers</div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Want to Make a Difference?</h2>
            <p>Join us in our mission to create a healthier, more equitable society.</p>
            <Button as={Link} to="/get-involved" className="btn-lg" style={{ backgroundColor: 'white', color: '#1a4d3a' }}>
              Get Involved Today
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;