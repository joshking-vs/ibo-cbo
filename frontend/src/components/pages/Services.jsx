import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';
import { fetchServices } from '../../utils/api';
import '../../styles/Services.scss';

function Services() {
  const { data: services, loading, error } = useFetch(fetchServices);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="alert alert-danger">Failed to load services</div>;

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero bg-primary text-white py-5">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-4 fade-in">What We Do</h1>
              <p className="lead fade-in-delay-1">
                IBO CBO provides comprehensive healthcare, advocacy, and community support services tailored to the unique needs of marginalized populations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Programs */}
      <section className="core-programs py-5">
        <Container>
          {/* <h2 className="text-center mb-5 fw-bold">Our Core Programs</h2> */}
          <Row>
            {services?.map((service, index) => (
              <Col md={6} key={service.id} className="mb-4">
                <Card className="h-100 border-0 shadow-sm hover-lift service-card">
                  <Card.Body className="p-4">
                    <div className="service-icon mb-3 fs-1">{service.icon}</div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="additional-services py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Additional Support Services</h2>
          <Row>
            {[
              {
                title: 'Health-centered support for people who use drugs',
                description: 'We address drug use as a public health issue by promoting safer practices, reducing harm, and supporting access to health and social services without stigma or punishment.'
              },
              {
                title: 'Cancer Awareness',
                description: 'Through our cancer awareness programs, we educate communities about prevention, early detection, and available treatment options, empowering individuals to take charge of their health.'
              },
              {
                title: 'Gender-Based Violence',
                description: 'Our dedicated response initiatives address the critical issue of gender-based violence, offering support services, legal advocacy, and community education to help victims reclaim their lives.'
              },
              {
                title: 'Harm Reduction: Reducing risks and Protecting lives ',
                description: 'Our Harm reduction services prioritize dignity informed choice and evidence -based approaches to reduce helth and social harms linked to drug use'
              },
              {
                title: 'HIV: Prevention, care, and stigma-free access',
                description: 'We provide HIV education, prevention, and referal to testing  and care, especially for the population  facing hightened risk due to exclusion and vulnerability.'


              },
              {
                title: 'Legal Support',
                description: 'Guidance and referrals for legal issues related to health and safety'
              },
            ].map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h6 className="fw-bold mb-3 text-primary">{item.title}</h6>
                    <p className="text-muted small">{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Delivery */}
      <section className="service-delivery py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="fw-bold mb-4">How We Deliver Services</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong className="text-primary">📱 Mobile Outreach</strong>
                  <p className="text-muted ms-4">Bringing services directly to underserved communities</p>
                </li>
                <li className="mb-3">
                  <strong className="text-primary">🤝 Community Partnerships</strong>
                  <p className="text-muted ms-4">Collaborating with local organizations and government bodies</p>
                </li>
                <li className="mb-3">
                  <strong className="text-primary">👥 Peer Support</strong>
                  <p className="text-muted ms-4">Survivor-led programs for mutual support and empowerment</p>
                </li>
                <li className="mb-3">
                  <strong className="text-primary">📚 Education & Awareness</strong>
                  <p className="text-muted ms-4">Evidence-based health information and training</p>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-4">Who We Serve</h5>
                  <div className="target-groups">
                    <Badge className="mb-2 me-2">Marginalized Women</Badge>
                    <Badge className="mb-2 me-2">Sex Workers</Badge>
                    <Badge className="mb-2 me-2">Drug Users</Badge>
                    <Badge className="mb-2 me-2">GBV Survivors</Badge>
                    <Badge className="mb-2 me-2">HIV+ Individuals</Badge>
                    <Badge className="mb-2 me-2">Cancer Patients</Badge>
                    <Badge className="mb-2 me-2">Vulnerable Youth</Badge>
                    <Badge className="mb-2 me-2">Organized Crime Victims</Badge>
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

// Simple Badge component if needed
function Badge({ children, className }) {
  return <span className={`badge bg-primary ${className}`}>{children}</span>;
}

export default Services;