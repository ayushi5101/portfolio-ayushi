import { experience } from "./Data.jsx";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Experience() {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center">Work Experience</h2>
        <Row className="mt-4">
          {experience.map((work, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{work.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {work.company}
                  </Card.Subtitle>
                  <Card.Text>{work.year}</Card.Text>
                  <Card.Text>{work.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
