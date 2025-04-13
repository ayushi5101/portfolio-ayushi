import { Container, Image, Button, Row, Col } from "react-bootstrap";
import "./about.css";
import Skills from "./Skills";
export default function About() {
  return (
    <Container className="my-5 text-center">
      <Image src="ayushi.png"  />
      <h1>About Me</h1>
      <p className="lead">
        Hi, I'm Ayushi Parmar. I am student of Software Engineering Technology(FT), while also having completed a bachelor’s degree in computer science.
      </p>
      <Skills />
      <Row className="mt-4">
        <Col className="text-center">
          {/* Resume Download Button */}
          <a href="Aysuhi Parmar.pdf" download="Ayushi Parmar.pdf">
            <Button variant="primary" size="lg">
              Download My Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
