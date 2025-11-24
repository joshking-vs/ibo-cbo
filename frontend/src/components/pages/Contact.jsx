import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ContactForm from '../forms/ContactForm';
import '../../styles/Contact.scss';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="contact-title fade-in">Get In Touch</h1>
              <p className="contact-subtitle fade-in-delay-1">
                Have questions or want to get involved? We'd love to hear from you. 
                Reach out to us anytime and we'll respond as soon as possible.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-content">
        <Container>
          <Row className="g-4">
            {/* Contact Information */}
            <Col lg={4}>
              <div className="contact-info-section">
                <h3 className="section-title">Get In Touch</h3>
                
                <Card className="contact-card hover-lift slide-in-left">
                  <Card.Body>
                    <div className="contact-icon">📍</div>
                    <h6 className="contact-label">Office Address</h6>
                    <p className="contact-detail">
                      Nairobi, Kenya
                    </p>
                  </Card.Body>
                </Card>

                <Card className="contact-card hover-lift slide-in-left">
                  <Card.Body>
                    <div className="contact-icon">📞</div>
                    <h6 className="contact-label">Phone Number</h6>
                    <p className="contact-detail">
                      <a href="tel:+254XXXXXXXXX">+254 XXX XXX XXX</a>
                    </p>
                  </Card.Body>
                </Card>

                <Card className="contact-card hover-lift slide-in-left">
                  <Card.Body>
                    <div className="contact-icon">✉️</div>
                    <h6 className="contact-label">Email Address</h6>
                    <p className="contact-detail">
                      <a href="mailto:contact@ibocbo.org">contact@ibocbo.org</a>
                    </p>
                  </Card.Body>
                </Card>

                <Card className="contact-card hover-lift slide-in-left">
                  <Card.Body>
                    <div className="contact-icon">🕐</div>
                    <h6 className="contact-label">Business Hours</h6>
                    <p className="contact-detail">
                      <strong>Monday - Friday:</strong><br />
                      9:00 AM - 5:00 PM<br />
                      <strong>Saturday - Sunday:</strong><br />
                      Closed
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <Card className="form-card slide-in-right">
                <Card.Body className="p-5">
                  <h3 className="form-title">Send us a Message</h3>
                  <p className="form-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="header-underline"></div>
          </div>
          
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="faq-container">
                {[
                  {
                    q: 'How can I volunteer with IBO CBO?',
                    a: 'You can reach out to us through our contact form or call us directly. Our volunteer coordinator will discuss opportunities that match your skills and interests.'
                  },
                  {
                    q: 'Is IBO CBO registered as a nonprofit?',
                    a: 'Yes, IBO CBO is officially registered under the laws of Kenya as a nonprofit organization and complies with all relevant regulations governing charitable entities.'
                  },
                  {
                    q: 'How do I donate to the organization?',
                    a: 'You can contact us for information about donation options, including direct transfers, mobile money, and corporate sponsorships. All donations are tax-deductible.'
                  },
                  {
                    q: 'What services do you provide?',
                    a: 'We provide HIV prevention, cancer awareness, psychosocial counseling, healthcare access initiatives, and advocacy for policy reforms affecting marginalized communities.'
                  },
                  {
                    q: 'Do you offer emergency support?',
                    a: 'Yes, we have 24/7 support available for emergencies. Please call our emergency line or visit our office. For life-threatening situations, please call emergency services.'
                  },
                  {
                    q: 'Can I request a speaker for my organization?',
                    a: 'Absolutely! Contact us to arrange a speaker for your event, workshop, or training session. Our team members have expertise in various health and advocacy topics.'
                  },
                ].map((item, index) => (
                  <div key={index} className="faq-item slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="faq-question">
                      <span className="faq-number">{index + 1}</span>
                      <h6>{item.q}</h6>
                    </div>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="map-title">Visit Us</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8187103692074!2d36.7265807!3d-1.2864469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6a0b8e6dd%3A0x50968d0d61018c8!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IBO CBO Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <Container>
          <Row>
            <Col lg={6} className="mx-auto text-center">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter to receive updates on our programs and initiatives.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;