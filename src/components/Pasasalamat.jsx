import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Pasasalamat = () => {
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
        Pasasalamat
      </h2>

      <p className="fs-6">
        Ipinapahayag ng mga deboto ng Mapaghimalang Itim na Nazareno sa
        Capalonga ang kanilang taos-pusong pasasalamat sa pamamagitan ng iba’t
        ibang gawaing panrelihiyon at paglilingkod. Karamihan sa kanila ay
        regular na nagsisimba tuwing Linggo, unang Biyernes ng buwan, o sa mga
        kapistahan. Ang iba naman ay nagpapa-misa bilang pasasalamat sa mga
        natanggap na biyaya. May mga deboto rin na aktibong naglilingkod sa
        simbahan bilang mga collector, miyembro ng Pastoral Council, at
        tagapagtulong sa mga pari. Sa kanilang simpleng mga gawain, nadarama
        nila ang malalim na koneksyon sa Poong Nazareno.
      </p>

      <p className="fs-6">
        Bukod dito, bahagi rin ng kanilang pasasalamat ang pagdarasal, pag-aalay
        ng kandila, pagbabasa ng pasyon, at pagnonobena, lalo na tuwing Mahal na
        Araw. Para sa ilan, ang pasasalamat ay ipinapakita rin sa pamamagitan ng
        pagtulong sa kapwa at pakikiisa sa mga pista at tradisyon ng bayan. May
        mga deboto ring gumagawa ng mga sakripisyo tulad ng pagtitinda ng
        kandila upang matustusan ang pangangailangan ng pamilya, na itinuturing
        nilang alay sa Nazareno.
      </p>

      <p className="fs-6">
        Ang mga deboto ay nagsasabuhay ng mahahalagang aral tulad ng
        pagbabalik-loob sa Diyos, pag-asa at pagtitiwala sa tamang panahon, at
        matibay na pananampalataya sa gitna ng mga pagsubok. Sa kabila ng mga
        personal na hamon, ang pagmamahal sa kapwa, kabutihang-loob, takot sa
        Diyos, at pagsunod sa Kanyang kalooban ang patuloy nilang
        pinanghahawakan. Para sa kanila, ang pasasalamat ay hindi lamang sa
        salita kundi sa gawa, debosyon, at pananampalatayang isinasabuhay
        araw-araw.
      </p>

      <br />
      <br />

      <p className="fs-6">
        Narito ang ilan sa mga salaysay ng mga deboto tungkol sa kanilang paraan
        ng pagpapasalamat:
      </p>

      <br />
      <br />

      <p className="fs-6 mx-5" data-aos="fade-right" data-aos-delay="300">
        <strong>
          “Ipinapakita ko ang aking pasasalamat sa Itim na Nazareno sa
          pamamagitan ng pagpapamisa tuwing Linggo. Sa loob ng isang buwan,
          patuloy akong nagpapasalamat. Bilang deboto, natutunan kong huwag
          magmadali sa mga kahilingan, dahil sa tamang panahon ay ipinagkakaloob
          Niya ito.”
        </strong>
      </p>
      <div
        className="text-end fs-6 fst-italic mx-5 mb-5"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        —Joselita, 46 na taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="350">
        <strong>
          "Ipinapakita ko ang aking pasasalamat sa Itim na Nazareno sa
          pamamagitan ng aking paglilingkod bilang collector sa simbahan. Sa
          simpleng gawaing tulad ng pangongolekta ng alay, nakakaramdam ako ng
          inspirasyon at tuwa. Itinuturing ko itong isang malaking biyaya.
          Bilang deboto, isinasabuhay ko ang pagbabalik-loob sa Kanya, lalo na
          matapos kong pagdaanan ang mga hamon sa buhay bilang isang solo parent
          at balo. Tunay na napaka-blessed ko."
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="350">
        —Rosenie, 34 na taong gulang, 12 taon nang deboto
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="400">
        <strong>
          “Ipinapakita ko ang aking pasasalamat sa Itim na Nazareno sa
          pamamagitan ng pagtulong sa kapwa, tulad ng paglilingkod sa pari at
          paggawa ng mga simpleng gawaing bilang tanda ng aking debosyon sa
          Kanya. Isinasabuhay ko rin ang mahalagang aral ng pagbabalik-loob sa
          Itim na Nazareno, dahil pinaniniwalaan ko na Siya ang tumutulong sa
          akin sa lahat ng aspeto ng buhay, lalo na sa pagtulong sa aking apo
          upang mapagtapos ito ng pag-aaral."
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="400">
        —Florenda, 67 na taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="450">
        <strong>
          “Ipinapakita ang pasasalamat sa Itim na Nazareno sa pamamagitan ng
          pagdalo sa misa at pagtanggap sa mga biyaya ng pista. At ang
          mahalagang aral na isinasabuhay ko ay ang kabutihan sa kapwa at
          paghihikayat sa iba na magsimba at magtiwala sa Itim na Nazareno.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="450">
        —Homer, 60 taong gulang, 30 taon nang deboto
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="500">
        <strong>
          "Ipinapakita ko ang pasasalamat sa Itim na Nazareno sa pamamagitan ng
          paglilingkod sa simbahan at pagiging bahagi ng Pastoral Council. Ang
          mahalagang aral na isinasabuhay ko ay ang paggawa ng mabuti, pagtulong
          sa kapwa, at pagbibigay ng tulong sa simbahan.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="500">
        —John, 51 taong gulang,
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="650">
        <strong>
          "Ipinapakita ko ang pasasalamat sa Itim na Nazareno sa pamamagitan ng
          pagdadasal, pagpapakrus, at pagpapasting tuwing Mahal na Araw. Ang
          mahalagang aral na isinasabuhay ko ay ang pakikipagkapwa, takot sa
          Diyos, at pagmamahal sa Poong Nazareno.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="650">
        —Maynard, 39 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="700">
        <strong>
          "Ipinapakita ko ang pasasalamat sa Itim na Nazareno sa pamamagitan ng
          pagtulong sa kapwa at pagdalo sa mga simba at pagdiriwang ng fiesta.
          Ang mahalagang aral na isinasabuhay ko ay ang pagmamahal sa kapwa at
          pagkakaroon ng takot sa Diyos."
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="700">
        —Alberto, 52 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="750">
        <strong>
          "Ipinapakita ang pasasalamat sa Itim na Nazareno sa pamamagitan ng
          pagdalo sa misa tuwing Linggo at mga kapistahan, at paglahok sa mga
          aktibidad tulad ng Ash Wednesday. Ang mahalagang aral na isinasabuhay
          ko ay ang pagiging matatag sa pananampalataya at pagsunod sa mga
          tamang itinuturo sa atin.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="750">
        —Abelardo, 58 taong gulang
      </div>
    </Container>
  );
};

export default Pasasalamat;
