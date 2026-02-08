import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { sendContactMessage } from '../../utils/api';
import '../../styles/ContactForm.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await sendContactMessage(formData);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="contact-form">
      {status.message && (
        <Alert variant={status.type} dismissible onClose={() => setStatus({ type: '', message: '' })}>
          {status.message}
        </Alert>
      )}

      <Form.Group className="mb-4">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="What is this about?"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message here..."
        />
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit" 
        size="lg" 
        disabled={loading}
        className="w-100"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </Form>
  );
}

export default ContactForm;