import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage1 from "../assets/images/traslacion-1.jpg";
import heroImage2 from "../assets/images/traslacion-2.jpg";
import heroImage3 from "../assets/images/traslacion-3.jpg";
import nazareneImage from "../assets/images/nazarene.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const photos = [
  {
    id: 1,
    title: "Kasaysayan",
    image: heroImage2,
    link: "/festivals",
  },
  {
    id: 2,
    title: "Ang Pag - Danas",
    image: heroImage2,
    link: "/cultures",
  },
  {
    id: 3,
    title: "Tradisyon",
    image: heroImage2,
    link: "/experiences",
  },
  {
    id: 4,
    title: "Dokumentasyon",
    image: heroImage2,
    link: "/rituals",
  },
  {
    id: 5,
    title: "Impormasyon ng Mananaliksik",
    image: heroImage2,
    link: "/beliefs",
  },
  {
    id: 6,
    title: "Ang Itim na Nazareno",
    image: heroImage2,
    link: "/heritage",
  },
];

const Home = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 120, // Triggers when element is 120px from viewport bottom
      delay: 0,    // No initial delay
      mirror: false // Don't animate again when scrolling back up
    });
    
    // Refresh AOS when route changes
    return () => AOS.refresh();
  }, []);

  return (
    <div>
      {/* Hero Carousel */}
      <section className="hero">
        <Carousel
          className="hero-carousel"
          controls={false}
          indicators={false}
          interval={4000}
        >
          {[heroImage1, heroImage2, heroImage3].map((image, index) => (
            <Carousel.Item key={index}>
              <div
                className={`hero-slide ${hovered ? "hovered" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="hero-overlay">
                  <h1 className="hero-title">Welcome to e-Tuklas</h1>
                  <p className="hero-text">
                    Tuklasin ang mayamang kasaysayan at tradisyon ng Poong Hesus
                    Nazareno.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <Container>
        <h2 className="text-center gallery-title mt-5">Ang Nazareno</h2>
        <div className="clearfix">
          <img
            src={nazareneImage}
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
            alt="Black Nazarene"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-anchor-placement="top-center"
          />

          <p className="fs-6">
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix class. We're adding quite a few meaningless phrases
            here to demonstrate how the columns interact here with the floated
            image. As you can see the paragraphs gracefully wrap around the
            floated image. Now imagine how this would look with some actual
            content in here, rather than just this boring placeholder text that
            goes on and on, but actually conveys no tangible information at. It
            simply takes up space and should not really be read.
          </p>

          <p className="fs-6">
            And yet, here you are, still persevering in reading this placeholder
            text, hoping for some more insights, or some hidden easter egg of
            content. A joke, perhaps. Unfortunately, there's none of that here.
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>
          <p className="fs-6">
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>
          <p className="fs-6">
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read. As you can see the
            paragraphs gracefully wrap around the floated image. Now imagine how
            this would look with some actual content in here, rather than just
            this boring placeholder text that goes on and on, but actually
            conveys no tangible information at. It simply takes up space and
            should not really be read.
          </p>

          <p className="fs-6">
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read. As you can see the
            paragraphs gracefully wrap around the floated image. Now imagine how
            this would look with some actual content in here, rather than just
            this boring placeholder text that goes on and on, but actually
            conveys no tangible information at. It simply takes up space and
            should not really be read.
          </p>

          <p className="fs-6">
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read. As you can see the
            paragraphs gracefully wrap around the floated image. Now imagine how
            this would look with some actual content in here, rather than just
            this boring placeholder text that goes on and on, but actually
            conveys no tangible information at. It simply takes up space and
            should not really be read.
          </p>
        </div>

      {/* Photo Gallery Section */}
  
        <div className="text-center gallery-title ">Ang Ating Kultura</div>
        <Row>
          {photos.map((photo) => (
            <Col md={4} sm={6} xs={12} key={photo.id} className="mb-4">
              <Link to={photo.link} className="photo-link">
                <Card className="photo-card">
                  <Card.Img
                    variant="top"
                    src={photo.image}
                    alt={photo.title}
                    className="photo-img"
                  />
                  <Card.Body>
                    <Card.Title className="photo-title">
                      {photo.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
