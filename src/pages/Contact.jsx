import React, { useEffect } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import impormasyonImage from "../assets/images/i_firstphoto.jpg";
import impormasyonImage2 from "../assets/images/i_secondphoto.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-out-quad",
        once: true,
        offset: 120,
        delay: 0,
        mirror: false,
      });
  
      return () => AOS.refresh();
    }, []);
  // Theme styles
  const altarTheme = {
    background: "#fdf6ec",
    gold: "#d5ae74",
    deepWood: "#4b2e16",
    softText: "#5f4c3c",
    imageFilter: "sepia(25%) contrast(1.05)",
  };

  // Researcher data with additional details for the table
  const researchers = [
    {
      img: impormasyonImage,
      name: "Entienza, Monica L.",
      email: "monicaentienza03@gmail.com",
      details: [
        { label: "Sulatroneko", value: "monicaentienza03@gmail.com" },
        {
          label: "Kurso",
          value: "Batsilyer ng Pansekondaryang Edukasyon Medyor sa Filipino",
        },
        {
          label: "Paaralan",
          value: "Camarines Norte State College – Abaño Campus",
        },
      ],
    },
    {
      img: impormasyonImage2,
      name: "Valdez, John Paulo",
      email: "johnpaulovaldez24@gmail.com",
      details: [
        { label: "Sulatroneko", value: "johnpaulovaldez24@gmail.com" },
        {
          label: "Kurso",
          value: "Batsilyer ng Pansekondaryang Edukasyon Medyor sa Filipino",
        },
        {
          label: "Paaralan",
          value: " Camarines Norte State College – Abaño Campus ",
        },
      ],
    },
  ];

  return (
    <Container
      className="py-5"
      style={{
        backgroundColor: altarTheme.background,
        borderRadius: "8px",
      }}
    >
      <Row className="text-center mb-4">
        <Col>
          <h2
            style={{
              color: altarTheme.deepWood,
              fontFamily: "'Times New Roman', serif",
              fontWeight: "bold",
            }}
            data-aos="fade-up"
          >
            Impormasyon ng
          </h2>
          <h3
            style={{
              color: altarTheme.gold,
              fontFamily: "'Times New Roman', serif",
              fontStyle: "italic",
            }}
            data-aos="fade-up"
          >
            mga Mananaliksik
          </h3>
          <p
            style={{
              color: altarTheme.softText,
              fontFamily: "'Palatino', serif",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
          
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {researchers.map((researcher, idx) => (
          <Col md={6} lg={5} className="mb-4" key={idx}>
            <Card
              className="h-100 shadow photo-card"
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              {/* Researcher Photo */}
              <div
                style={{
                  height: "600px", // Adjusted height to fit table
                  overflow: "hidden",
                  borderBottom: `4px solid ${altarTheme.gold}`,
                }}
              >
                <Card.Img
                  variant="top"
                  src={researcher.img}
                  alt={researcher.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: altarTheme.imageFilter,
                  }}
                />
              </div>

              {/* Researcher Info + Table */}
              <Card.Body
                className="text-center p-4"
                style={{ backgroundColor: altarTheme.background }}
              >
                <Card.Title
                  style={{
                    color: altarTheme.deepWood,
                    fontFamily: "'Times New Roman', serif",
                    fontWeight: "bold",
                  }}
                >
                  {researcher.name}
                </Card.Title>
                <Card.Text
                  style={{
                    color: altarTheme.softText,
                    fontFamily: "'Palatino', serif",
                    fontStyle: "italic",
                  }}
                >
                
                </Card.Text>

                {/* Table Inside Card */}
                <Table
                  striped
                  borderless
                  hover
                  responsive
                  size="lg"
                  style={{
                    marginTop: "1rem",
                    backgroundColor: altarTheme.background,
                    color: altarTheme.softText,
                    borderColor: altarTheme.gold,
                  }}
                >
                  <tbody>
                    {researcher.details.map((detail, index) => (
                      <tr key={index}>
                        <td
                          className="text-start"
                          style={{
                            fontWeight: "bold",
                            color: altarTheme.deepWood,
                            fontFamily: "'Times New Roman', serif",
                          }}
                        >
                          {detail.label}
                        </td>
                        <td
                          className="text-start"
                          style={{
                            color: altarTheme.softText,
                            fontFamily: "'Palatino', serif",
                            fontStyle: "italic",
                          }}
                        >
                          {detail.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
