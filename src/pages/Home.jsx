import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import heroImage1 from "../assets/images/t_fifthphoto.jpg";
import heroImage2 from "../assets/images/traslacion-2.jpg";
import heroImage3 from "../assets/images/t_sixthphoto.jpg";
import heroImage4 from "../assets/images/t_firstphoto.jpg";
import heroImage5 from "../assets/images/h_firstphoto.jpg";
import heroImage6 from "../assets/images/k_secondphoto.jpg";
import heroImage7 from "../assets/images/k_thirdphoto.jpg";
import heroImage8 from "../assets/images/k_firstphoto.jpg";
import nazareneImage from "../assets/images/nazarene.png";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = [
  {
    id: 1,
    title: "Kasaysayan",
    image: heroImage2,
    link: "/festivals",
  },
  {
    id: 2,
    title: "Pag - Danas",
    image: heroImage4,
    link: "/cultures",
  },
  {
    id: 3,
    title: "Tradisyon",
    image: heroImage3,
    link: "/experiences",
  },
  {
    id: 5,
    title: "Impormasyon",
    image: heroImage5,
    link: "/beliefs",
  },
];

const cards = [
  {
    image: heroImage6,
    title: "IMN Commercial + Residential Solar Panel Installers.",
    button: "Get A Solar Bid",
  },
  {
    image: heroImage7,
    title: "Experience the future of Solar power.",
    button: "Get A Solar Bid",
  },
  {
    image: heroImage8,
    title: "Power of the sun with our expert solar services.",
    button: "Get A Solar Bid",
  },
];

const Home = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: true,
      offset: 120, // Triggers when element is 120px from viewport bottom
      delay: 0, // No initial delay
      mirror: false, // Don't animate again when scrolling back up
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
                  <h1 className="hero-title">
                    Maligayang pagdating sa e-Tuklas
                  </h1>
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

          <p className="fs-6 noselect">
            Ang Itim na Nazareno ng Capalonga ay isang mahalagang relihiyosong
            imahe na matatagpuan sa bayan ng Capalonga, Camarines Norte. Ito ay
            sumisimbolo kay Hesus Nazareno na may kulay itim ang balat, isang
            anyo na kalimitang inuugnay sa kabanalan, sakripisyo, at pagdurusa
            ng Panginoon. Ayon sa mga kuwento, ang imahe ay dinala sa Capalonga
            mula sa Mexico noong panahon ng kolonisasyong Kastila at naging
            sentro ng pananampalataya sa rehiyon.
          </p>

          <p className="fs-6 noselect">
            Ang debosyon sa Itim na Nazareno ay malalim at buhay na buhay sa
            puso ng mga taga-Capalonga at maging ng mga debotong Pilipino mula
            sa iba’t ibang panig ng bansa. Kadalasan itong tinatawag na
            “Milagrong Nazareno” dahil sa paniniwalang maraming himala ang
            ipinagkakaloob nito sa mga nananalig. Ang mga deboto ay sumasama sa
            mga prusisyon, nag-aalay ng panalangin, at madalas ay nakayapak
            bilang tanda ng kanilang sakripisyo at panata.
          </p>
          <p className="fs-6 noselect">
            Tuwing buwan ng Mayo, ginaganap ang Pista ng Itim na Nazareno sa
            Capalonga na dinarayo ng libo-libong mananampalataya. Ang
            selebrasyong ito ay itinuturing na isa sa mga pinakamahalagang
            kaganapan sa bayan. Tampok dito ang prusisyon ng imahe, mga misa, at
            iba't ibang aktibidad pangkultura. Ang pista ay hindi lamang
            espiritwal na pagtitipon kundi isang panahon din ng pagkakaisa ng
            komunidad.
          </p>
          <p className="fs-6 noselect">
            Isa sa mga dahilan kung bakit tumatatag ang debosyon ay dahil sa mga
            kuwentong himala na ikinukuwento ng mga deboto—kagalingan sa
            karamdaman, proteksyon mula sa sakuna, at katuparan ng mga dasal.
            Para sa marami, ang paglapit sa Itim na Nazareno ay nagbibigay ng
            pag-asa, lalo na sa gitna ng mga personal na pagsubok at kahirapan.
            Ang pananampalataya rito ay tila hindi lamang isang relihiyosong
            gawain kundi isang buhay na kaugalian ng mga taga-Capalonga.
          </p>

          <p className="fs-6 noselect">
            Bagamat mas kilala ang Quiapo Nazareno sa buong bansa, ang Itim na
            Nazareno ng Capalonga ay may sariling identidad at kasaysayang
            pinanghahawakan. Isa itong patunay ng malalim na ugnayan ng mga
            Pilipino sa mga banal na imahen, na hindi lang nakabatay sa paningin
            kundi sa personal na koneksyon sa Diyos. Ipinapakita rin nito kung
            paanong ang relihiyon at kultura ay magkasabay na umuusbong sa lokal
            na konteksto.
          </p>

          <p className="fs-6 noselect">
            Hanggang sa kasalukuyan, patuloy na lumalago ang debosyon sa Itim na
            Nazareno ng Capalonga. Pinangangalagaan ito ng Simbahang Katoliko at
            ng mga lokal na pamahalaan bilang bahagi ng pamana ng bayan. Sa
            kabila ng modernisasyon, nananatili ang tradisyon bilang mahalagang
            bahagi ng pagkakakilanlan ng mga Capalongueño. Ito ay nagpapatunay
            na ang pananampalataya ay isa sa mga pinakamatibay na haligi ng
            buhay Pilipino.
          </p>
        </div>

        {/* Photo Gallery Section */}

        <div className="text-center gallery-title ">Konteksto</div>
        <Row className="justify-content-center">
          {photos.map((photo) => (
            <Col md={4} sm={6} xs={12} key={photo.id} className="mb-4">
              <Card className="photo-card mb-5">
                <Card.Img
                  variant="top"
                  src={photo.image}
                  alt={photo.title}
                  className="photo-img"
                />
                <Card.Body>
                  <Card.Title className="photo-title">{photo.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/*  <Row className="g-4 mb-5">
        {cards.map((card, idx) => (
          <Col key={idx} md={4}>
            <div className="glass-card d-flex align-items-center p-3 gap-3">
              <img src={card.image} alt="Card visual" className="card-img" />
              <div>
                <h6 className="card-text mb-3">{card.title}</h6>
                <Button variant="light" className="glass-btn">
                  {card.button}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>*/}
        <div className="vintage-wrapper">
          <Container>
            <Row className="justify-content-center align-items-center min-vh-100">
              <Col xs={12} md={10} lg={8}>
                <Card className="vintage-card">
                  <Row className="g-0">
                    <Col md={5}>
                      <Card.Img
                        className="img-fluid h-100 rounded-start"
                        src="./src/assets/images/k_secondphoto.jpg"
                        alt="Vintage"
                      />
                    </Col>
                    <Col md={7}>
                      <Card.Body>
                        <Card.Title className="gallery-title">E - Tuklas </Card.Title>
                        <Card.Text className="fs-6">
                          Ang e-Tuklas ay isang digital na platform na
                          tumatalakay sa mayamang kasaysayan, kahalagahan, at
                          kultura ng Itim na Nazareno ng Capalonga, isang
                          itinuturing na sagrado at pinahahalagahang imahe sa
                          Pilipinas. Ang platform na ito ay nag-aalok ng malalim
                          na pagsusuri sa pinagmulan, mga kuwento, at simbolismo
                          ng Itim na Nazareno, isang makapangyarihang simbolo ng
                          pananampalataya, debosyon, at espiritualidad para sa
                          maraming Katoliko sa bansa. Nagbibigay ang proyekto ng
                          isang pangkalahatang-ideya tungkol sa kasaysayan ng
                          imahe, ang kanyang paglalakbay sa paglipas ng mga
                          taon, at ang malalim na epekto nito sa komunidad ng
                          Capalonga. Tinutukoy din ng e-Tuklas ang mga lokal na
                          debosyon, tradisyon, at ang taunang mga pagdiriwang na
                          itinataguyod para sa Itim na Nazareno, kabilang na ang
                          kahalagahan nito tuwing kapistahan at prusisyon. Sa
                          pamamagitan ng platform na ito, layunin ng e-Tuklas na
                          mapanatili ang kwento ng Itim na Nazareno ng
                          Capalonga, upang ito ay maging mas accessible sa mas
                          malawak na audience at matiyak na mauunawaan at
                          mapapahalagahan ng mga susunod na henerasyon ang
                          makulay at sagradong kahalagahan ng imaheng ito.
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Home;
