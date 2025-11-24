import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';
import { fetchOrganization } from '../../utils/api';
import '../../styles/About.scss';

function About() {
  const { data: org, loading, error } = useFetch(fetchOrganization);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="alert alert-danger">Failed to load organization data</div>;

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold mb-4 fade-in">About IBO CBO</h1>
              <p className="lead text-muted fade-in-delay-1">
                IBO Community-Based Organization is dedicated to advancing health literacy and healthcare access for marginalized populations in Kenya.
              </p>
            </Col>
            <Col md={6} className="fade-in-delay-2">
              <div className="about-image-placeholder ">
                <img src="/about.png"  alt="About IBO CBO" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-3">🎯 Our Vision</h3>
                  <p className="text-muted">
                    {org?.vision || 'To create an empowered, inclusive, and resilient society where marginalized communities have access to essential healthcare, education, and social support.'}
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-3">💡 Our Mission</h3>
                  <p className="text-muted">
                    {org?.mission || 'To advance health literacy, healthcare access, and social empowerment of marginalized populations through comprehensive support and systemic advocacy.'}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="core-values py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Our Core Values</h2>
          <Row>
            {[
              { icon: '❤️', title: 'Compassion', desc: 'Emotional, medical, and financial support with empathy and respect' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparency, accountability, and ethical management' },
              { icon: '🌍', title: 'Collaboration', desc: 'Partnership with local governments, NGOs, and communities' },
              { icon: '✨', title: 'Empowerment', desc: 'Education and support for informed health decisions' },
              { icon: '🚀', title: 'Innovation', desc: 'Innovative solutions in research and patient care' },
              { icon: '⚖️', title: 'Equity', desc: 'Equal access to healthcare for all individuals' },
            ].map((value, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 text-center border-0 shadow-sm hover-lift">
                  <Card.Body className="p-4">
                    <div className="mb-3 fs-1">{value.icon}</div>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-muted small">{value.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Organization Info */}
      <section className="org-info py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="fw-bold mb-4">Legal Status & Registration</h3>
              <p className="text-muted mb-3">
                IBO CBO is a nonprofit organization, officially registered under the laws of Kenya, and complies with all relevant regulations governing charitable entities in the country.
              </p>
              <p className="text-muted mb-3">
                We ensure full adherence to legal and regulatory requirements while maintaining the highest standards of accountability, transparency, and ethical practices.
              </p>
              <div className="contact-info mt-4">
                <p className="mb-2"><strong>Address:</strong> {org?.address || 'Nairobi, Kenya'}</p>
                <p className="mb-2"><strong>Phone:</strong> {org?.phone || '+254 XXX XXX XXX'}</p>
                <p className="mb-2"><strong>Email:</strong> {org?.email || 'contact@ibocbo.org'}</p>
              </div>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Quick Stats</h5>
                  <div className="stat-item mb-3">
                    <h6 className="text-primary">Registered</h6>
                    <p className="text-muted">Under Kenyan nonprofit law</p>
                  </div>
                  <div className="stat-item mb-3">
                    <h6 className="text-primary">Focus Areas</h6>
                    <p className="text-muted">HIV, Cancer, GBV, Mental Health</p>
                  </div>
                  <div className="stat-item">
                    <h6 className="text-primary">Target Population</h6>
                    <p className="text-muted">Marginalized women, drug users, vulnerable communities</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;