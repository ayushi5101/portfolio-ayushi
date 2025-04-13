import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  

  return (
    <Container className="my-5">
      <h2 className="text-center">Contact Me</h2>

      <Row className="mt-4">
        <Col md={6}>
          <h4>Contact Information</h4>
          <p>
            <strong>Phone:</strong> +1 (416)271-9866
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:ayushiparmar105@gmail.com"> ayushiparmar105@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/ayushiparmar5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkIn Profile
            </a>
          </p>
          
        </Col>

        <Col md={6}>
          <h4>Send Me a Message</h4>
          <Form >
            <Form.Group controlId="formName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your First Name"
                name="user_firstname"
                required
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Last Name"
                name="user_lastname"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Your Contact"
                name="user_contact"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your Message"
                name="message"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
