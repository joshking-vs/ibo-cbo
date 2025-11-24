import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/GetInvolved.scss';

function GetInvolved() {
  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="hero-section bg-success text-white py-5">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-4 fade-in">Get Involved</h1>
              <p className="lead fade-in-delay-1">
                Join us in our mission to empower marginalized communities and create meaningful change in health equity and social justice.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ways to Get Involved */}
      <section className="ways-to-involve py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Ways to Make a Difference</h2>
          <Row>
            {[
              {
                icon: '🤝',
                title: 'Volunteer',
                description: 'Donate your time and skills to support our programs and community initiatives',
                action: 'Learn More'
              },
              {
                icon: '💰',
                title: 'Donate',
                description: 'Provide financial support to help us expand our healthcare services and advocacy work',
                action: 'Donate Now'
              },
              {
                icon: '👥',
                title: 'Become a Member',
                description: 'Join our community and participate in decision-making and program planning',
                action: 'Join Us'
              },
              {
                icon: '🤝',
                title: 'Partner With Us',
                description: 'Organizations can partner with us to co-deliver programs and services',
                action: 'Partner'
              },
              {
                icon: '📢',
                title: 'Advocate',
                description: 'Support our advocacy efforts for policy reform and social justice',
                action: 'Get Involved'
              },
              {
                icon: '💼',
                title: 'Work With Us',
                description: 'Explore career opportunities to advance our mission from within',
                action: 'View Jobs'
              },
            ].map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm hover-lift">
                  <Card.Body className="p-4 text-center">
                    <div className="mb-3 fs-1">{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted mb-4">{item.description}</p>
                    <Button variant="primary" size="sm">
                      {item.action}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Membership Details */}
      <section className="membership-details py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Membership Categories</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">General Members</h5>
                  <p className="text-muted mb-3">
                    Individuals committed to volunteering and participating in our foundation's activities.
                  </p>
                  <ul className="text-muted small">
                    <li>Participate in programs and events</li>
                    <li>Vote in annual general meetings</li>
                    <li>Access member resources and updates</li>
                    <li>Network with other advocates</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Corporate Partners</h5>
                  <p className="text-muted mb-3">
                    Organizations providing strategic support, funding, and resources to our initiatives.
                  </p>
                  <ul className="text-muted small">
                    <li>Brand visibility and recognition</li>
                    <li>Co-branded marketing opportunities</li>
                    <li>Board representation options</li>
                    <li>Tax benefits for donations</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Honorary Members</h5>
                  <p className="text-muted mb-3">
                    Distinguished individuals who have made significant contributions to our mission.
                  </p>
                  <ul className="text-muted small">
                    <li>Recognition and awards</li>
                    <li>Speaking opportunities</li>
                    <li>Advisory roles</li>
                    <li>Public acknowledgment</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Survivor Network Members</h5>
                  <p className="text-muted mb-3">
                    Cancer and HIV survivors offering peer support and mentorship.
                  </p>
                  <ul className="text-muted small">
                    <li>Peer mentorship training</li>
                    <li>Speaking platform</li>
                    <li>Support group access</li>
                    <li>Leadership development</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="mb-4 fw-bold">Ready to Make an Impact?</h2>
          <p className="lead mb-4">
            Your support helps us continue our mission to empower marginalized communities.
          </p>
          <Row className="justify-content-center gap-3">
            <Col xs="auto">
              <Button as={Link} to="/contact" size="lg" variant="light">
                Get Started
              </Button>
            </Col>
            <Col xs="auto">
              <Button size="lg" variant="outline-light">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default GetInvolved;