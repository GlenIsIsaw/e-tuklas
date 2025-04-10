import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import debotoImage from "../assets/images/t_firstphoto.jpg";
import debotoImage2 from "../assets/images/t_secondphoto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Esperituwal = () => {
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
      <p
        className="fs-6 mt-5 text-center fst-italic"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        Ang debosyon sa Mapaghimalang Itim na Nazareno ng Capalonga ay higit pa
        sa simpleng pananampalataya. Ito ay isang buhay na tradisyon na
        humuhubog sa espirituwal at kultural na pagkatao ng mga deboto. Sa bawat
        dasal, panata, at gawaing iniaalay nila sa Poon, naipapamalas ang lalim
        ng kanilang pananalig at ang mahalagang papel ng debosyong ito sa
        kanilang pang-araw-araw na pamumuhay.
      </p>
      <h2 className="text-start gallery-title mt-5" data-aos="fade-right">
        Esperituwal Na Tradisyon
      </h2>

      <p className="fs-6">
        Ang mga deboto ng Itim na Nazareno sa Capalonga ay nagpapamalas ng
        masidhing pananampalataya sa pamamagitan ng iba’t ibang gawaing
        espirituwal. Ang mga ito ay nakaugat sa kanilang paniniwala sa
        kapangyarihan ng Diyos at sa kabutihang dulot ng pananalig. Isinasabuhay
        nila ito sa pamamagitan ng:
      </p>

      <p className="fs-6 mx-5">
        <strong>❖ Panalangin at Panata – </strong> Tuwing linggo, unang biyernes
        ng buwan, o tuwing may mahalagang okasyon, ang mga deboto ng Itim na
        Nazareno ay nadalo ng misa at taimtim na nananalangin. Sa pamamagitan ng
        kanilang panalangin, humihingi sila ng tulong at proteksyon para sa
        kanilang pamilya at buong komunidad. Ang mga panalangin na ito ay hindi
        lamang para sa kanilang personal na kapakanan kundi para sa iba pang mga
        pangangailangan ng pamilya at komunidad, tulad ng kalusugan at kaayusan.
      </p>

      <div
        className="d-flex justify-content-center my-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="position-relative"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <img
            src={debotoImage}
            alt="Mga deboto ng Itim na Nazareno"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
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
        <strong>❖ Paghalik sa Poon – </strong> Isa sa mga pinaka-simbolikong
        tradisyon ng deboto ay ang paghalik sa poon o imahen ng Itim na
        Nazareno. Ang kilos ng paghalik ay hindi lamang isang simpleng ritwal,
        kundi isang paraan ng pagpapakita ng matinding debosyon at respeto sa
        Poon. Ito ay isang personal na paraan upang mas lalapit sa Diyos at
        ipahayag ang kanilang tiwala at pananampalataya sa kanyang mga biyaya.
      </p>

      <div
        className="d-flex justify-content-center my-4"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <div
          className="position-relative"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <img
            src={debotoImage2}
            alt="Mga deboto ng Itim na Nazareno"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
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
            Litrato mula sa Newsfeed
          </div>
        </div>
      </div>

      <p className="fs-6 mx-5">
        <strong>❖ Pagrorosaryo at Nobena – </strong> Ang nobena ay isang serye
        ng panalangin na isinasagawa sa loob ng siyam na araw bilang paghahanda
        para sa kapistahan ng Nazareno o bilang bahagi ng panata. Ginagawa ito
        ng mga deboto upang humingi ng kagalingan, patnubay, o magpasalamat sa
        mga natanggap na biyaya.
      </p>

      <p className="fs-6 mx-5">
        <strong>
          ❖ Pagkakaroon ng altar o imahen ng Nazareno sa tahanan–{" "}
        </strong>{" "}
        Maraming deboto ang naglalagay ng imahen ng Itim na Nazareno sa kanilang
        mga tahanan bilang isang espirituwal na proteksyon. Ang altar ay
        nagsisilbing simbolo ng kanilang debosyon at isang paalala ng kanilang
        pananampalataya sa bawat araw. Pinaniniwalaan din ito ng mga deboto
        bilang isang paraan upang mapanatili ang gabay ng Poong Nazareno sa
        kanilang buhay.
      </p>

      <p className="fs-6 mx-5">
        <strong>❖ Paghingi ng Himala – </strong> Marami ang humihiling ng
        biyaya, kalusugan, trabaho, tagumpay sa buhay, at pagkakabuo ng pamilya,
        at marami ring sumasaksi sa katuparan ng mga panalangin.
      </p>

      <p className="fs-6 mx-5 mb-5">
        <strong>❖ Pagpapakita ng Pasasalamat – </strong> Kapag natupad ang mga
        hiling na biyaya, ang mga deboto ay nagbabalik sa Poon upang
        magpasalamat. Karaniwang isinasagawa nila ito sa pamamagitan ng
        pag-aalay ng kandila, bulaklak, at iba pang munting handog. Ito ay isang
        paraan ng pagpapakita ng taos-pusong pasasalamat sa lahat ng biyayang
        natamo.
      </p>
    </Container>
  );
};

export default Esperituwal;
