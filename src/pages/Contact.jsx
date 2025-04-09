import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Placeholder image URLs - replace with your actual image paths
import impormasyonImage from "../assets/images/i_firstphoto.jpg";
import impormasyonImage2 from "../assets/images/i_secondphoto.jpeg";

const Contact = () => {
  // Vintage brown color palette
  const vintageColors = {
    background: "#f5f1e6",
    darkBrown: "#3a2e24",
    mediumBrown: "#6b4f3b",
    lightBrown: "#a38f78",
    accent: "#8c6a4d",
    text: "#3a2e24",
  };

  return (
    <Container
      className="py-5"
      style={{
        backgroundColor: vintageColors.background,
        borderRadius: "8px",
      }}
    >
      <Row className="text-center mb-4">
        <Col>
          <h2
            style={{
              color: vintageColors.darkBrown,
              fontFamily: "'Times New Roman', serif",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Impormasyon
          </h2>
          <h3
            style={{
              color: vintageColors.mediumBrown,
              fontFamily: "'Times New Roman', serif",
              fontWeight: "normal",
              fontStyle: "italic",
            }}
          >
            Mga Mananaliksik
          </h3>
          <p
            style={{
              color: vintageColors.text,
              fontFamily: "'Palatino', serif",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* First Team Member Card */}
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="h-100 photo-card shadow-lg"
            style={{
              backgroundColor: "transparent",
              border: `0px solid ${vintageColors.accent}`,
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "600px",
                overflow: "hidden",
                borderBottom: `1px solid ${vintageColors.accent}`,
              }}
            >
              <Card.Img
                variant="top"
                src={impormasyonImage}
                alt="Monica Entienza"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(30%) contrast(1.1)",
                }}
              />
            </div>
            <Card.Body
              className="text-center p-4"
              style={{
                backgroundColor: vintageColors.lightBrown,
              }}
            >
              <Card.Title
                className="mb-0"
                style={{
                  color: vintageColors.darkBrown,
                  fontFamily: "'Times New Roman', serif",
                  fontWeight: "bold",
                }}
              >
                Entienza, Monica L.
              </Card.Title>
              <Card.Text
                style={{
                  color: vintageColors.mediumBrown,
                  fontFamily: "'Palatino', serif",
                  fontStyle: "italic",
                }}
              >
                monicaentienza03@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Team Member Card */}
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="h-100 photo-card shadow-lg"
            style={{
              backgroundColor: "transparent",
              border: `0px solid ${vintageColors.accent}`,
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "600px",
                overflow: "hidden",
                borderBottom: `1px solid ${vintageColors.accent}`,
              }}
            >
              <Card.Img
                variant="top"
                src={impormasyonImage2}
                alt="Ella Grace"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(30%) contrast(1.1)",
                }}
              />
            </div>
            <Card.Body
              className="text-center p-4"
              style={{
                backgroundColor: vintageColors.lightBrown,
              }}
            >
              <Card.Title
                className="mb-0"
                style={{
                  color: vintageColors.darkBrown,
                  fontFamily: "'Times New Roman', serif",
                  fontWeight: "bold",
                }}
              >
                Valdez, John Paulo
              </Card.Title>
              <Card.Text
                style={{
                  color: vintageColors.mediumBrown,
                  fontFamily: "'Palatino', serif",
                  fontStyle: "italic",
                }}
              >
                johnpaulovaldez24@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
