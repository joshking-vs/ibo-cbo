import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';
import { fetchOrganization } from '../../utils/api';
import '../../styles/About.scss';

function About() {
  const { data: org, loading, error } = useFetch(fetchOrganization);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="alert alert-danger">Failed to load organization data</div>;

  // Placeholder data for the team. 
  // You can later replace this with data fetched from your backend (api/team/).
  const teamMembers = [
    { 
      name: 'Charles okoth outa', 
      role: 'Board chairman', 
      img: '/charles.jpeg', // Replace with /media/team/photo1.jpg
      bio: 'Charles brings a wealth of experience in leadership and strategic planning, with a deep passion for empowering communities and advancing the mission of IBO CBO. His visionary approach has been instrumental in shaping the organizations path forward.' 
    },
    { 
      name: 'George Odhiambo Oketch ', 
      role: 'Program Manager', 
      img: '/George.png', // Replace with /media/team/photo2.jpg
      bio: 'Aiming to engage in research, project implementation and advocacy on development by using interactive and participatory approaches towards behavior change. ' 
    },
    { 
      name: 'Ali Odhiambo Owino', 
      role: 'Chief operations officer', 
      img: '/Ali.jpeg', // Replace with /media/team/photo3.jpg
      bio: ' My work focuses on trauma counseling, GBV/SGBV response, and the design of community-based mental health and public health programs for marginalized and vulnerable populations.' 
    },
    { 
      name: 'Peninah Anyango Otieno', 
      role: 'Board member', 
      img: '/Peninah.jpeg', // Replace with /media/team/photo3.jpg
      bio: 'Peninah brings a community-centered perspective grounded in lived experience and a deep understanding of the social and economic challenges facing women at the household and community level' 
    },
    { 
      name: 'Harriet Awuor', 
      role: 'Board secretary', 
      img: '/Harriet.jpeg', // Replace with /media/team/photo3.jpg
      bio: 'I am deeply passionate about youth development and social welfare. I actively support welfare groups that empower young people to build sustainable futures' 
    },
  ];

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
                    {org?.vision || 'An empowered, inclusive, and resilient society where marginalized women and communities can access healthcare, education, and social support, live with dignity, and shape their own futures.'}
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-3">💡 Our Mission</h3>
                  <p className="text-muted">
                    {org?.mission || 'To build community resilience by enhancing health literacy, improving healthcare access, and empowering marginalized populations through community-led support and advocacy.'}
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

      {/* Team Section (INSERTED HERE) */}
      <section className="team-section py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Meet Our Team</h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center hover-lift">
                  <div className="pt-4">
                    {/* Circle Image Style */}
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="rounded-circle shadow-sm"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold mt-3">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-primary">{member.role}</Card.Subtitle>
                    <Card.Text className="text-muted small">
                      {member.bio}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Organization Info */}
      <section className="org-info py-5 bg-light">
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
                <p className="mb-2"><strong>Address:</strong> {org?.address || 'Kisumu, Kenya'}</p>
                <p className="mb-2"><strong>Phone:</strong> {org?.phone || '+254 720 979 015'}</p>
                <p className="mb-2"><strong>Email:</strong> {org?.email || ' ibocbokenya@gmail.com '}</p>
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