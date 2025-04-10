import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Pangkalusugan = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-out-quad",
        once: true,
        offset: 120,
        mirror: false
      });
    }, []);

  return (
    <Container>
      <h2 className="text-start gallery-title mt-5" data-aos="fade-right">Pangkalusugan</h2>

      <p className="fs-6">
        Ang kalusugan ang pangunahing hiling ng mga deboto ng Itim na Nazareno
        sa Capalonga. Karamihan sa kanila ay nananalangin para sa kanilang
        paggaling, pati na rin sa kalusugan ng kanilang mga mahal sa buhay. Sa
        kanilang pananampalataya, ang Poong Nazareno ay nagsisilbing
        tagapagligtas na nagbibigay ng lakas, paggaling mula sa malubhang sakit,
        at proteksyon laban sa mga karamdaman. Ang mga deboto ay nagbabahagi ng
        mga karanasan nila ng pagpapagaling at milagro mula sa Poong Nazareno,
        na nagbibigay sa kanila ng pag-asa at lakas upang patuloy na magtiwala
        sa Kanyang kapangyarihan. Ang kanilang pananampalataya sa Itim na
        Nazareno ay patuloy na nagbibigay ng ginhawa sa kanilang buhay, lalo na
        sa kanilang mga hamon sa kalusugan.
      </p>

      <p className="fs-6">
        Narito ang ilan sa mga kahilingan ng mga deboto pagdating sa kalusugan:
      </p>

      <br />
      <br />

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="300">
        <strong>
          “Kadalasan ang hinihiling ko sa Itim na Nazareno ay para sa kalusugan.
          Kasi kapag maganda ang kalusugan mo, kaya mo nang harapin ang lahat.
          Marami na ring natupad sa mga hiling ko, lalo na noong gumaling ang
          asawa kong matagal nang may sakit. Hindi siya magamot ng mga doktor,
          pero nung bumalik kami rito sa Capalonga at nanalangin, unti-unti
          siyang gumaling. Mula noon, naging deboto na rin siya.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="300">
        — Joselita, 46 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="350">
        <strong>
          “Ang tanging hiling ko sa Itim na Nazareno ay ang paggaling ko. May
          sakit ako sa puso at hika, at kahit simpleng paglalakad o
          pakikipag-usap, hinihingal na ako. Hiling ko rin ang kaginhawaang
          pampinansyal para sa gamot at pagkain. Kahit wala akong pera,
          dumadalaw ako sa kanya tuwing First Friday, Linggo, o kahit
          ordinaryong araw. Siya lang talaga ang kinakapitan ko. Ramdam ko ang
          kanyang presensya, siya ang nagpapalakas sa akin. Minsan pa nga ay
          nagpapakita siya sa aking panaginip. Naniniwala ako na milagroso siya.
          Bagama’t hindi pa natutupad ang ilan sa mga hiling ko, patuloy akong
          umaasa dahil siya lang ang nakakaalam kung kailan niya ako
          pakikinggan.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="350">
        — Katrina, 24 taong gulang, 15 taon nang deboto
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="400">
        <strong>
          "Ang pinakamalaki kong hiling sa Itim na Nazareno ay ang pahabain ang
          buhay ng aking anak na may sakit na cancer. Akala ko'y hindi na siya
          magtatagal, pero sa panalangin ko’y dininig ako, nabuhay siya hanggang
          22 taong gulang."
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="400">
        — Florenda, 67 taong gulang
      </div>
    </Container>
  );
};

export default Pangkalusugan;
