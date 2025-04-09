import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#5c4430", color: "#f4ece2", padding: "2rem 0" }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="fw-bold navnav">E-Tuklas</h5>
            <p className="mb-0 navnav" style={{ fontSize: "0.95rem" }}>
              Preserving the heritage and culture for future generations.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 navnav" style={{ fontSize: "0.9rem" }}>
              &copy; {new Date().getFullYear()} e-Tuklas. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
