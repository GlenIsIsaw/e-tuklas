import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import nazareneImage from "../assets/images/k_firstphoto.jpg";
import nazareneImage2 from "../assets/images/k_secondphoto.jpg";
import nazareneImage3 from "../assets/images/k_thirdphoto.jpg";
import nazareneImage4 from "../assets/images/k_fourthphoto.jpg"; // Keeps your original image
import aboutHero from "../assets/images/traslacion-2.jpg"; // Use your hero banner image here

const About = () => {
  const [hovered, setHovered] = useState(false);

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

  return (
    <>
      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
          height: "300px",
          position: "relative",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "1rem",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "1rem",
          }}
        ></div>

        {/* Text Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontWeight: "bold" }} className="hero-title-section">
            Ang Kasaysayan
          </h1>
          <p></p>
        </div>
      </div>

      {/* Main Content */}
      <Container className="my-5">
        <div className="clearfix">
          <img
            src={nazareneImage}
            className="float-md-end mb-3 ms-md-3 img-fluid shadow-lg"
            style={{
              maxWidth: "100%", // ensures it doesn't overflow
              width: "400px", // scales down on larger screens
              height: "auto", // keeps aspect ratio
            }}
            alt="Black Nazarene"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-anchor-placement="top-center"
          />
          <h2 className="text-start gallery-title mt-5">Ang Kwento</h2>
          <p className="fs-6">
            Ang kwento ng pag-iral ng Itim na Nazareno ng Capalonga ay nagmula
            sa mga salaysay na ipinasa-pasa mula sa bibig ng mga tao mula sa
            iba't ibang henerasyon.
          </p>

          <p className="fs-6">
            Sa bawat kwento, may mga pagkakaiba-iba batay sa pinagmulan at
            karanasan ng mga tao. Isang bersyon ang nagsasabi na isang matanda
            ang nag-ukit ng imahe ng Poong Hesus mula sa isang piraso ng kahoy
            na lumulutang sa ilog. Ang kahoy na ito ay tinatawag na "apalong,"
            isang uri ng puno na matatagpuan sa lugar.
          </p>

          <p className="fs-6">
            Mayroon ding isang bersyon na nagsasabing ang Itim na Nazareno ng
            Capalonga ay <strong>higit sa 300-taóng gulang,</strong> inukit
            umano ng isang mangingisda mula sa puno ng "apalong" na nahanap sa
            isang isla na tinatawag na "Punta." Ayon sa kuwento, nang putulin
            ang puno, natagpuan ito kinabukasan na dumudugo, at ang "látex" nito
            ay naging tila dugo, na nagpatuloy pa ring lumaki. Ang isla ay
            tinawag na "Punta de Jesus," na nangangahulugang "Lugar kung saan
            dumating si Jesus."
          </p>

          <p className="fs-6">
            May isa pang kwento na nagsasabing ang mga Dumagat, isang pangkat ng
            mga katutubong mangangalakal na naglakbay mula sa ibang lugar, ang
            nagdala ng larawan sa bayan ng Capalonga. Nang magsanib-baptismo ang
            mga Dumagat sa mga misyonerong Espanyol, nagsimula silang mag-ukit
            ng imahe ng Itim na Nazareno, marahil mula sa pagkakita nila sa
            imahe ng Nazareno sa Quiapo. Sa iba pang kwento, isang lokal na
            manggagawa ng imahen ang nagpunta sa isang burol sa Talatala, isang
            lugar sa Barangay San Isidro, kung saan natagpuan ang isang puno na
            may katangian na kahawig ng dugo. Inukit niya ito at ginawa ang
            imahe ng Poong Hesus.
          </p>
          <p className="fs-6">
            Ang pagkakaibang ito sa mga bersyon ay maaaring dulot ng kakulangan
            ng dokumento upang patunayan ang orihinal na pinagmulan ng imahen.
            Subalit, hindi hadlang ang kakulangan ng katiyakan sa pinagmulan ng
            imahe upang mapagtibay ang katotohanan na ang Poong Hesus Nazareno
            ng Capalonga ay naging sentro ng simbahan ng bayan.
          </p>

          <p className="fs-6">
            Ayon sa isang popular na kwento, nagsimula ang debosyon ng mga
            Pilipino-Tsino kay Poong Hesus Nazareno nang isang Tsino, na
            nahirapan sa kanyang negosyo, ay humingi ng tulong sa isang
            kaibigang Tsino na nagdasal sa Itim na Nazareno. Nang magkaruon siya
            ng mga biyaya, iniulat niya ito sa kanyang mga kababayan, at ang
            debosyon ng mga Tsino sa imahen ay kumalat at lumago.
          </p>
        </div>

        <div className="clearfix">
          <img
            src={nazareneImage2}
            className="float-md-start mb-3 me-3 img-fluid shadow-lg"
            style={{
              maxWidth: "100%",
              width: "400px",
              height: "auto",
            }}
            alt="Black Nazarene"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-anchor-placement="top-center"
          />
          <h2 className="text-end gallery-title mt-5">Ang mga Himala</h2>

          <p className="fs-6">
            Ang mga himala na inuugma sa Itim na Nazareno ng Capalonga ay
            nagbigay daan sa kanyang mas mataas na pagpapahalaga at debosyon.
            Kasama na rito ang mga kwento ng kagalingan at pag-iwas sa
            kapahamakan, at ang pagsalba ng mga tao mula sa malupit na bagyo at
            baha.
          </p>

          <p className="fs-6">
            Dahil sa lumalaking debosyon, may mga nagtangkang magnakaw o manira
            sa imahe. May mga bahagi ng imahe, tulad ng daliri at buhok, na
            nasira o nawala. Bilang tugon, itinaas ng mga pari ang imahe upang
            mahawakan lamang ng mga deboto ang talampakan nito, na naging mas
            ligtas para sa lahat.
          </p>

          <p className="fs-6">
            Walang tiyak na dokumento na nagpapaliwanag kung bakit itim ang
            kulay ng imahe. Isang teorya ay nagmula ito sa katandaan ng kahoy.
            Ang iba naman ay naniniwalang ito ay replika ng Itim na Nazareno sa
            Quiapo, kaya itim din ang kulay.
          </p>

          <p className="fs-6">
            Ang Itim na Nazareno ng Capalonga ay pinaniniwalaang higit sa
            tatlong siglo na ang gulang. Kung totoo ito, ito ay dapat na
            kasintanda ng Patrona ng bayan, si Santa Lucia, sa ilalim ng kanyang
            pangangalaga itinalaga ang bayan.
          </p>

          <p className="fs-6">
            Ngunit ang masusing pagsasaliksik at pag-aaral ay nagpapakita na
            wala ng nabanggit tungkol sa imahen ng Itim na Nazareno sa teksto ng
            itinatag ng bayan, o kahit na anuman na banggit sa alinmang
            kasaysayan at dokumento noong mga unang taon ng mga misyon ng mga
            Franciscan sa Capalonga. Ang misyon ng mga prayle ng mga Franciscan
            sa Capalonga ay nagsimula noong 1632, sa ilalim ng administrasyon ng
            parokya ng Paracale. Noong 1634, nagtayo ang mga Kastila ng rampart
            sa bibig ng ilog Talagpucao mga 500 metro mula sa kasalukuyang
            lokasyon ng simbahan.
          </p>

          <p className="fs-6">
            Ang mga Kastila, na pinamumunuan ni Don Aniceto, ay nanirahan doon.
            Ang rampart ay naglingkod bilang guardhouse para sa simbahan at
            naglalaman ng mga baril at kanyon sa kanyang mga pader. Ang simbahan
            ay inialay kay Santa Lucia, birhen at martir bilang patroness ng
            bayan.
          </p>

          <p className="fs-6">
            Sa simula, ang simbahan ng bayan ay yari sa bato na may bubong na
            nipa. Ang istrakturang ito ay itinatag noong dumating ang mga
            Espanyol na misyonaryo upang ipalaganap ang ebanghelyo sa bayan. Ang
            mga materyales na ginamit ay mga batuhan ng korales, tinunaw na mga
            balat at pulot mula sa mga ligaw na bubuyog. Ang pagtatayo ng
            simbahan ay nagsimula noong 1641.
          </p>

          <p className="fs-6">
            Ang trabaho ay tumagal ng ilang panahon, at ang mga manggagawa ay
            inilahad ng mga katutubo hindi dahil sa pananampalataya kundi sa
            pwersahan. Noong una, ang disenyo ng simbahan ay itinuro ang
            pangunahing pasukan nito sa dagat. Subalit noong 1654, ang pinto ng
            pasukan ay itinuwid papunta sa kapatagan at bundok.
          </p>

          <p className="fs-6">
            Sa simula, ang simbahan ng bayan ay yari sa bato na may bubong na
            nipa. Ang istrakturang ito ay itinatag noong dumating ang mga
            Espanyol na misyonaryo upang ipalaganap ang ebanghelyo sa bayan. Ang
            mga materyales na ginamit ay mga batuhan ng korales, tinunaw na mga
            balat at pulot mula sa mga ligaw na bubuyog. Ang pagtatayo ng
            simbahan ay nagsimula noong 1641.
          </p>
        </div>

        <div className="clearfix">
          <img
            src={nazareneImage3}
            className="float-md-end mb-3 ms-md-3 img-fluid shadow-lg"
            style={{
              maxWidth: "100%", // ensures it doesn't overflow
              width: "400px", // scales down on larger screens
              height: "auto", // keeps aspect ratio
            }}
            alt="Black Nazarene"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-anchor-placement="top-center"
          />
          <h2 className="text-start gallery-title mt-5">Ang Simbahan</h2>
          <p className="fs-6">
            Sa parehong taon, ang simbahan ay binigyan ng isang kampana hindi
            lamang upang tawagin ang mga katutubo sa mga serbisyo sa simbahan,
            kundi pati na rin upang babalaan sila laban sa mga Moro na madalas
            manggulo sa mga bayan. Mula sa malayo, ang rampart ay tila
            nakakatakot at hindi kayang sakupin, na sapat na dahilan para sa mga
            Moro na itangi ang plano na lumapag sa Capalonga. Sa halip, itinuon
            ng mga Moro ang kanilang mga mata sa bayan ng Paracale.
          </p>

          <p className="fs-6">
            Noong 1661, iniwan ang misyon ng mga Franciscan sa Capalonga. Noong
            1664, hiwalay na mula sa Paracale, tinanggap ng Capalonga ang
            kanyang unang misyonero, si Fray Dionisio de la Concepcion. Sa
            panahon na iyon, ang paglalakbay patungo sa Capalonga ay sa
            pamamagitan ng dagat.
          </p>

          <p className="fs-6">
            Gayunpaman, noong 1681, muling kinuha ng mga prayle ng Franciscan
            ang pangangasiwa sa parokya hanggang 1684 nang isalin ito sa
            obispado ng Caceres. Ang diocese ng Nueva Caceres ay noon ay sa
            ilalim ng obispo na si Andes Gonzales, O.P., isa sa unang apat na
            obispo ng Dominican na umupo sa Caceres.
          </p>

          <p className="fs-6">
            Sa mga panahong ito, ayon sa History Research Committee ng
            Capalonga, napansin na naging milagroso ang imahe ni Poong Hesus.
            Iniuugma sa imahen ang mga paggaling sa pamamagitan ng paggamit ng
            langis mula sa ilaw nito o ng banal na tubig sa pasukan ng simbahan.
            Dahil sa mga milagrong ito ng Itim na Nazareno ng Capalonga, naging
            kilala ito sa maraming bahagi ng Pilipinas at sa buong mundo.
          </p>

          <p className="fs-6">
            Noong 1962, isang batang pari ang itinalaga sa Capalonga.
            Bagong-galing sa isang assignment sa lungsod, siya ang nangasiwa sa
            parokya na may mandato sa kanyang puso mula sa kanyang obispo na si
            Pedro S. Santos D.D. Ang batang pari ay si Rev. Fr. Luis R. Ayo, Jr.
            Sa loob ng isang taon, tinitingnan ni Fr. Ayo ang kanyang daan sa
            puso at isipan ng kanyang mga parokyanong. Ang simbahan sa Capalonga
            ay nangangailangan ng mga pag-aayos at ang kanyang kumbento ay
            kailangang palakihin pa.
          </p>

          <p className="fs-6">
            Sa panahong iyon, iilang mga deboto lamang ang nagpupunta sa
            simbahan upang magbigay-pugay kay Poong Hesus Nazareno ng Capalonga.
            Ang kalsada na noon ay kumokonekta sa bayan sa pangunahing kalsada,
            na mga 31 kilometro ang layo, ay kakakalabas lamang. Ang kalsada ay
            dumadaan sa ilalim ng ilang mga ilog, ginawang madadaan sa mga kahoy
            na tulay, at umaikot sa paligid ng mga daang bundok. Ang oras ng
            biyahe mula sa junction sa Bagong Silang (isang barangay ng Labo
            town) patungo sa Capalonga ay halos tatlong oras. Ito'y nagdudulot
            ng maraming sakripisyo para sa mga deboto ni Poong Hesus Nazareno ng
            Capalonga.
          </p>
        </div>

        <div className="clearfix">
          <img
            src={nazareneImage4}
            className="float-md-start mb-3 me-3 img-fluid shadow-lg"
            style={{
              maxWidth: "100%",
              width: "400px",
              height: "auto",
            }}
            alt="Black Nazarene"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-anchor-placement="top-center"
          />
          <h2 className="text-end gallery-title mt-5">Ang Simbahan</h2>

          <p className="fs-6">
            Si <strong>Fr. Luis R. Ayo</strong> ang nagsimula ng renovasyon ng
            interior at facade ng lumang simbahan, na nagbigay sa kanya ng
            kasalukuyang modernong disenyo. Ang simbahan ni Poong Hesus Nazareno
            ng Capalonga ngayon, sa aspeto ng arkitektural na disenyo at layout,
            ay kayang tumindig sa tabi ng ibang simbahan sa mga urbanong sentro
            sa bansa. Sa maraming pag-aayos at inobasyon na ginawa sa loob at
            labas ng simbahan, mula sa simpleng plano ng sahig hanggang sa
            masalimuot na altar ni Poong Hesus Nazareno ng Capalonga, ang dating
            lumang bato ng simbahan ay nananatiling matibay sa paglipas ng
            panahon.
          </p>

          <p className="fs-6">
            Ngayon, ang Dambana ng Itim na Nazareno ng Capalonga at ang
            milagrosong imahen nito ay isa sa mga popular na destinasyon ng mga
            turista sa lalawigan. Ito ay naging isang bagay ng pagsamba para sa
            maraming tao sa Pilipinas at sa buong mundo. Ang mga deboto at mga
            mananampalataya ng Itim na Nazareno ay pumupunta sa Capalonga tuwing
            unang Biyernes ng buwan at tuwing pista nito sa Mayo, ngayon ay mas
            komportable at mas mabilis na biyahe dahil sa pagtatambak ng kalsada
            ng Capalonga-Bagong Silang na bumabawas ng biyahe sa lamang
            apatnapu't limang minuto.
          </p>

          <p className="fs-6">
            Nito lamang kamakailan, noong ika-5 ng Mayo, 2009, idineklara ng
            Most Rev. Gilbert A. Garcera, DD, Obispo ng Daet, ang dating
            Simbahan at Parokya ni Santa Lucia bilang Dambana ng Itim na
            Nazareno ng Capalonga. Inihayag din niya ang Mayo 11, 12 at 13
            bilang mga taunang pista ng bayan alay sa kilalang imahen, ang Itim
            na Nazareno ng Capalonga.
          </p>
        </div>

        <Card
          className="my-5 text-center shadow-sm" 
          style={{
            backgroundColor: "#f4ece2",
            color: "#3a2e1c",
            border: "1px solid #d6c3aa",
            borderRadius: "12px"
          }}
        >
          <Card.Header
            as="h5"
            style={{
              backgroundColor: "#5c4430",
              color: "#fff",
              borderBottom: "none",
            }}
            className="fs-5"
          >
            Sanggunian
          </Card.Header>
          <Card.Body className="py-5">
            <Card.Text className="fs-6">
              Rawat, R. E. (n.d).{" "}
              <span className="fst-italic">
                Excerpted from The Nazarene Silver Anniversary Yearbook.
              </span>
              <br />
              Tourism Officer Designated LGU-Capalonga, Camarines Norte.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default About;
