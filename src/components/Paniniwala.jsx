import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Paniniwala = () => {
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
        Paniniwala
      </h2>

      <p className="fs-6">
        Ipinapahayag ng mga deboto ng Mapaghimalang Itim na Nazareno sa
        Capalonga ang kanilang matibay na paniniwala sa pamamagitan ng patuloy
        na debosyon, pananampalataya, at pagtitiwala sa kapangyarihan ng Poong
        Nazareno. Para sa kanila, ang Itim na Nazareno ay isang{" "}
        <strong>mapaghimala, milagroso, at makapangyarihan</strong> na may
        kakayahang tumugon sa mga kahilingan, magpagaling ng karamdaman, at
        maghatid ng himala sa mga taong tapat na sumasampalataya. Ang
        paniniwalang ito ay hindi lamang bunga ng tradisyon kundi ng personal na
        karanasan sa kabutihang-loob at milagro ng Nazareno.
      </p>

      <p className="fs-6">
        Karamihan sa mga deboto ay naniniwalang ang kanilang mga kahilingan ay
        natutupad sa pamamagitan ng taimtim na panalangin at pananampalataya.
        Nakaugat sa kanilang puso ang tiwala na sa tamang panahon ay dumarating
        ang kasagutan, basta’t hindi sumusuko sa pagtiwala at pananalig sa
        Kanya. Itinuturing din nila ang Itim na Nazareno bilang tagapagligtas,
        tagapagtanggol ng bayan, at sandigan sa oras ng pangangailangan.
      </p>

      <p className="fs-6">
        Ang kanilang paniniwala ay hindi lamang nakasentro sa mga himala kundi
        sa kabuuang ugnayan nila sa Diyos. Sa pamamagitan ng kanilang debosyon,
        naipapakita nila ang matibay na koneksyon sa Diyos sa gitna ng
        modernisasyon at mga pagbabago sa lipunan. Ang patuloy na pagdami ng mga
        deboto ay patunay ng lalim ng kanilang pananalig, na naipapasa rin sa
        susunod na henerasyon sa pamamagitan ng pagkukuwento, pagbabahagi ng
        karanasan, at pagsama sa mga tradisyong panrelihiyon ng bayan.
      </p>

      <p className="fs-6">
        Ang mga deboto ay isinasabuhay ang aral ng pagtitiwala, pagbabalik-loob,
        at kabutihan sa kapwa. Para sa kanila, ang paniniwala ay hindi lang
        panloob na damdamin kundi isang pamumuhay na nagpapakita ng matatag na
        pananampalataya sa Poong Itim na Nazareno.
      </p>

      <p className="fs-6">
        Narito ang ilan sa mga salaysay ng mga deboto tungkol sa kanilang
        paniniwala:
      </p>

      <br />
      <br />

      <p className="fs-6 mx-5" data-aos="fade-right" data-aos-delay="300">
        <strong>
          “Alam mo naghihimala ‘yan. Napatunayan ko na rin. Maraming himala iyan
          dito, tulad nong maliit pa ako. Nang magkasunog dito sa buong
          Capalonga, inilabas lang ang Poong Nazareno, humupa ang sunog. Buong
          Capalonga ‘yan. Nagsimula ang sunog sa may Elementary papunta rito
          hanggang sa may munisipyo. Noong hindi mapatay yung sunog ng mga tao,
          may mga dala dala sila tubig, inilibas nila ang Itim na Nazareno,
          hiniling nila na sana’y tumigil na ‘yong apoy, ay tumigil naman.
          Maliit pa ako noong nagyari iyon, pero alam ko pa rin iyon.”
        </strong>
      </p>
      <div
        className="text-end fs-6 fst-italic mx-5 mb-5"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        —Binebitez, 69 na taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left" data-aos-delay="350">
        <strong>
          “Naniniwala ako na si Poong Nazareno ay mapaghimala. Kapag humiling ka
          sa Kanya, tinutupad niya. Tsaka kasi nga marami na nakapagpapatunay,
          marami nang nakakakita sa kanyang mga gingawa sa mga tao, lalo na sa
          tulad dito sa amin , sa Capalonga. Naranasan na namin lumaki yung
          tubig dito sa Capalonga, pero yung kanyang dambana ay hindi man lang
          naabot ng tubig. Hindi man lang pinasok ang simbahan. Naranasan ko yan
          nong nagbagyo rito nang malakas. Elementary palang ako no’n. Malalim
          na ang tubig dito pero yung simbahan ay di pinapasok ng tubig. Saka
          nong panahon na balak bombahin ang munisipyo. May mga ganoong
          pangyayari dito sa Capalonga. Sa tulong ng Poong Nazareno, iniligtas
          niya ang aming munisipyo.”
        </strong>
      </p>
      <div
        className="text-end fs-6 fst-italic mx-5 mb-5"
        data-aos="fade-left"
        data-aos-delay="350"
      >
        —Fernando, 46 na taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right" data-aos-delay="400">
        <strong>
          “Ang paniniwala ko sa Itim na Nazareno ay siya ay makapangyarihan at
          nagpapagaling siya ng mga may sakit.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5"  data-aos="fade-right"
        data-aos-delay="400">
        —Katrina, 24 na taoang gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right" data-aos-delay="400">
        <strong>
          “Marami po kaming paniniwala sa Kanya. Talagang siya naman po ay
          mapaghimala. Marami po ritong nagsisimba, mga deboto na napunta pa
          rito. Kung ano man hilingin nila natutupad naman kasi bumabalik-balik
          sila rito. Naniniwala ako na kung ano yung hilingin natin, yung mga
          deboto, binibigay naman po niya. Hindi naman agad-agad yun totally.
          Siyempre dapat patuloy lang pananampalataya mo sa kanya, paniniwala,
          ibibigay naman po niya.”
        </strong>
      </p>
      <div
        className="text-end fs-6 fst-italic mx-5 mb-5"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        —Isabel, 65 na taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left" data-aos-delay="450">
        <strong>
          “Naniniwala ako na ang Itim na Nazareno ay nagbibigay ng mga biyaya at
          himala sa tamang panahon. Kailangan lang maghintay at hindi magsawa.”
        </strong>
      </p>
      <div
        className="text-end fs-6 fst-italic mx-5 mb-5"
        data-aos="fade-left"
        data-aos-delay="450"
      >
        —Joselita, 46 na taong gulang
      </div>
    </Container>
  );
};

export default Paniniwala;
