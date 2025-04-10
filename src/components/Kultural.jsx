import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import debotoImage3 from "../assets/images/t_thirdphoto.jpg";
import debotoImage4 from "../assets/images/t_fourthphoto.jpg";
import debotoImage5 from "../assets/images/t_fifthphoto.jpg";
import debotoImage6 from "../assets/images/t_sixthphoto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Kultural = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: true,
      offset: 120,
      mirror: false,
    });
  }, []);

  return (
    <Container>
      <h2 className="text-start gallery-title mt-5" data-aos="fade-right">
        Kultural na Tradisyon
      </h2>

      <p className="fs-6">
        Bukod sa mga gawaing espirituwal, ang debosyon sa Poong Nazareno ay isa
        ring bahagi ng mayamang kultura ng mga taga-Capalonga. Ang mga
        paniniwala at gawi na ito ay naipapasa mula henerasyon hanggang
        henerasyon at nagbibigay ng kolektibong pagkakakilanlan sa mga deboto.
        Ilan sa mga kultural na tradisyon ay ang sumusunod:
      </p>

      <p className="fs-6 mx-5">
        <strong>❖ Taunang Prusisyon at Pista – </strong> Bahagi na ng kultura ng
        Capalonga ang pagdiriwang ng kapistahan ng Itim na Nazareno tuwing Mayo.
        Daan-daang deboto ang lumalahok sa prusisyon bilang paggalang at
        pasasalamat.
      </p>

      <div
        className="d-flex justify-content-center my-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="position-relative" style={{ maxWidth: "1200px" }}>
          <div className="row w-100">
            {/* First Image */}
            <div className="col-md-6 mb-3 mb-md-0 pe-md-2">
              <img
                src={debotoImage3}
                alt="Mga deboto ng Itim na Nazareno"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                  minHeight: "300px",
                }}
              />
            </div>

            {/* Second Image */}
            <div className="col-md-6 ps-md-2">
              <img
                src={debotoImage4} // Replace with your second image variable
                alt="Second image description"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                  minHeight: "300px",
                }}
              />
            </div>
          </div>

          {/* Single Caption Below Both Images */}
          <div
            className="text-center w-100 mt-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "6px 12px",
              borderRadius: "4px",
              fontSize: "0.75rem",
              color: "#3a2e24",
              fontStyle: "italic",
            }}
          >
            Litrato mula sa Saint Lucy Parish and Shrine of Jesus the Black
            Nazarene of Capalonga- KOA
          </div>
        </div>
      </div>

      <p className="fs-6 mx-5">
        <strong>❖ Alay-Lakad- </strong> Sama-samang paglalakad ng mga deboto
        patungong simbahan bilang panata. Minsan mula sa ibang bayan, kadalasang
        may kasamang pagdarasal at pagkakaisa ng komunidad.
      </p>

      <div
        className="d-flex justify-content-center my-4"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div className="position-relative" style={{ maxWidth: "1200px" }}>
          <div className="row w-100">
            {/* First Image */}
            <div className="col-md-6 mb-3 mb-md-0 pe-md-2">
              <img
                src={debotoImage5}
                alt="Mga deboto ng Itim na Nazareno"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                  minHeight: "300px",
                }}
              />
            </div>

            {/* Second Image */}
            <div className="col-md-6 ps-md-2">
              <img
                src={debotoImage6} // Replace with your second image variable
                alt="Second image description"
                className="img-fluid rounded shadow-lg"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                  minHeight: "300px",
                }}
              />
            </div>
          </div>

          {/* Single Caption Below Both Images */}
          <div
            className="text-center w-100 mt-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "6px 12px",
              borderRadius: "4px",
              fontSize: "0.75rem",
              color: "#3a2e24",
              fontStyle: "italic",
            }}
          >
            Litrato mula sa Shrine of Jesus the Black Nazarene of Capalonga &
            Parish of Saint Lucy
          </div>
        </div>
      </div>

      <p className="fs-6 mx-5">
        <strong>❖ Pamamanata bilang Pamilya- </strong> Isa sa mga
        pinahahalagahan ng karamihan sa mga deboto ng Itim na Nazareno ay ang
        pamamanata bilang pamilya. Ang buong pamilya ay nagtitipon upang
        magsagawa ng kanilang panata bilang isang yunit. Ang debosyon na ito ay
        isang pagpapakita ng pagkakaisa at pagmamahal sa pamilya, at isang
        paraan ng pagpapalaganap ng pananampalataya mula sa henerasyon hanggang
        henerasyon.
      </p>

      <p className="fs-6 mx-5">
        <strong>
          ❖ Paglalagay ng larawan ng Nazareno o mga religious artifacts sa mga
          tindahan, sasakyan, o establisimyento-{" "}
        </strong>{" "}
        Ang tradisyon ng paglalagay ng larawan ng Itim na Nazareno sa mga
        tindahan, sasakyan, o establisimyento ay isang kultural na paniniwala na
        nagbibigay ng proteksyon at suwerte. Ang bawat larawang inilalagay ay
        nagsisilbing isang simbolo ng debosyon at pananalig sa mga biyayang
        ibinibigay ng Poon sa kanilang buhay.
      </p>

      <p className="fs-6 mx-5 mb-5">
        <strong>❖ Pagpasa ng Paniniwala sa Kabataan – </strong> Ang paniniwala
        sa Poong Nazareno ay isinasalin mula sa magulang patungo sa mga anak. Sa
        bawat henerasyon, ang mga kwento ng pananampalataya at ang mga ritwal na
        isinasagawa sa debosyon ng Itim na Nazareno ay isinasalaysay upang
        mapanatili ang tradisyong ito. Ang mga kabataan ay tinuturuan na
        magdasal at magpatuloy sa mga ritwal, kaya’t ang debosyon ay patuloy na
        yumayabong at humuhubog sa komunidad.
      </p>
    </Container>
  );
};

export default Kultural;
