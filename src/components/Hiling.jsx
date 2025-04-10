import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Hiling = () => {
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
        Hiling
      </h2>
      <p className="fs-6">
        Ang mga deboto ng Itim na Nazareno sa Capalonga ay patuloy na humihiling
        ng biyaya at tulong mula sa Poong Nazareno, na siyang nagsisilbing
        simbolo ng kanilang pananampalataya at pag-asa. Karamihan sa mga deboto
        ay humihiling ng kalusugan para sa kanilang pamilya at sarili, dahil
        naniniwala silang ang mabuting kalusugan ay susi sa pagharap sa mga
        pagsubok ng buhay. Bukod dito, marami rin sa kanila ang humihiling para
        sa kaginhawahan ng kanilang kabuhayan, kaligtasan, at tagumpay sa mga
        personal nilang laban, tulad ng pagkakaroon ng mga anak na makapagtapos
        ng pag-aaral at ang paggaling ng mga may sakit sa kanilang pamilya.
      </p>

      <p className="fs-6">
        Ang mga deboto ay nagsasalaysay ng kanilang mga karanasan ng mga
        biyayang natamo, tulad ng paggaling mula sa mga malubhang sakit,
        tagumpay sa mga exam, at mga oportunidad sa buhay, na itinuturing nilang
        mga milagro mula sa Poong Nazareno. May mga deboto ring humihiling ng
        kapayapaan at kaligayahan, hindi lamang para sa kanilang pamilya kundi
        pati na rin para sa kanilang komunidad. Sa kanilang mga panalangin,
        nagsisilbing gabay sa kanila ang Itim na Nazareno, at patuloy nilang
        inilalapit ang kanilang mga kahilingan, umaasa na siya ay magbibigay ng
        tulong sa tamang panahon.
      </p>

      <p className="fs-6">
        Sa bawat hiling ng mga deboto, makikita ang malalim na tiwala at
        pananampalataya sa Itim na Nazareno bilang tagapagbigay ng biyaya at
        milagro. Ang kanilang mga karanasan ay patunay ng walang kapantay na
        debosyon at ang patuloy na pag-asa na ang Poong Nazareno ay laging
        naroroon upang magbigay ng tulong at gabay.
      </p>

      <p className="fs-6">
        Narito ang ilan sa mga karaniwang kahilingan ng mga deboto ng Poong
        Hesus Nazareno ng Capalonga:
      </p>

      <br />
      <br />

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="200">
        <strong>
          “Ang pangunahing hiling ko sa Itim na Nazareno ay ang maayos na
          kalusugan para sa aking pamilya at ang kakayahang malampasan ang
          araw-araw na hamon. Bilang isang solo parent, hiling ko rin ang
          kaayusan ng buhay ng aking mga anak. Sa tulong ng Nazareno, natutupad
          naman ito. Nakakayanan ko ang mga pagsubok, at higit sa lahat, kasama
          ko ang aking mga anak sa pagtatrabaho. Hindi ko na kailangang
          mangibang-bayan; araw-araw ko silang kapiling sa hirap at ginhawa.”
        </strong>
      </p>
      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="200">
        — Rosenie, 34 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="250">
        <strong>
          “Marami na akong naging hiling sa Itim na Nazareno lalo na ang
          makapagpatapos ng pag-aaral ang aking mga anak, at ang paggaling ng
          mga maysakit sa aming pamilya. Lahat 'yon ay tinugon ng Nazareno. Dati
          akong may goiter at nakapagpa-opera ako. Marami rin akong kilalang
          nagpa-nobena at gumaling, o nakapasa sa kanilang mga exam. Kahit
          ngayon, patuloy pa rin akong humihiling sa Kanya, lalo na para sa
          aming kalusugan at kapayapaan sa bayan. Sa Kanya kami umaasa, sapagkat
          siya ang makapangyarihan sa lahat.”
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="250">
        — Isabel, 65 taong gulang,
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="300">
        <strong>
          “Hiling ko sa Itim na Nazareno ang kaligtasan, kapayapaan ng kalooban,
          at magandang kaisipan. Kasi sa buhay, ang mahalaga ay ang matahimik at
          payapang pamumuhay. Isa pa sa aking hiling ay ang makapagtapos ng
          pag-aaral ang anak ko at awa ng Diyos, ga-graduate na siya. Araw-araw,
          nararamdaman ko ang Kanyang paggabay at pagkalinga.”
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="300">
        — Conception, 67 taong gulang, 10 taon nang deboto
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="350">
        <strong>
          “Lahat ng kailangan ko, hinihiling ko sa Itim na Nazareno. Kaluusugan,
          tulong sa mga anak ko sa ibang bansa, at pati mga yumaong mahal sa
          buhay, ipinagdarasal ko. Kahit sa eleksyon, humihiling ako na sana
          manalo si John at ang kanyang mga kasama. Marami na rin akong
          natanggap na biyaya, gaya noong Pasko at kaarawan ko. maraming
          nagbigay.”
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="350">
        — Gloria, 88 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="400">
        <strong>
          “Ang mga kahilingan ko sa Itim na Nazareno ay para sa kalusugan ng
          aking pamilya, para lagi kaming malakas at malayo sa sakit. Hinihiling
          ko rin ang mahabang buhay at lakas ng katawan. Isa sa mga biyaya na
          natamo ko ay ang pagkakaroon ng pangalawang anak matapos ang 18 taon
          ng paghihintay, dahil nawala ang aming una.”
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="400">
        — Fernando, 46 taong gulang,
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="450">
        <strong>
          “Ang mga kahilingan ko sa Itim na Nazareno ay para sa kalusugan ng
          aking pamilya at para laging magkaroon kami ng tamang oras ng pagkain
          at kasaganaan. Isa sa mga biyaya na natamo ko ay ang pagkakaroon ng
          tamang kabiyak na ipinagkaloob sa akin noong ako'y 21 anyos. Hanggang
          ngayon, kami pa rin ay magkasama.”
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="450">
        — Binebitez, 69 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="500">
        <strong>
          “Ang mga kahilingan ko sa Itim na Nazareno ay para laging malakas ang
          katawan at maiwasan ang sakit. Isa pa, humiling ako ng biyaya tulad ng
          pagkakaroon ng sasakyan, at ito ay natupad. “
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="500">
        — Homer, 60 taong gulang, 30 taon nang Deboto
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="550">
        <strong>
          "Unang-una, ang hinihiling ko ay kalusugan at ang kapayapaan ng
          komunidad. Gusto ko na maging mapayapa ang aming komunidad. Naniniwala
          kami kay Nazareno na siya ay tumutulong at nagbibigay ng mga biyaya sa
          amin. Bukod sa sarili kong kalusugan, humihiling din ako para sa aking
          ina na 88 taong gulang, na sana ay patuloy siyang magkaroon ng lakas
          at linaw ng isip. Sa ngayon, natupad na ang mga hiling ko, kabilang na
          ang aking pagiging cancer survivor sa loob ng 15 taon."
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="550">
        — John, 51 taong gulang,
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="600">
        <strong>
          "Para sa kabataan, pagpapaaral at scholarship. Gusto ko na matulungan
          sila sa kanilang edukasyon at magkaroon ng oportunidad sa pamamagitan
          ng scholarship. Bukod doon, hinihiling ko rin ang pag-unlad ng sports,
          tulad ng Volleyball at Basketball, lalo na para sa mga kabataan.
          Salamat kay Poong Nazareno, natupad ang aking mga kahilingan."
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="600">
        —Maynard, 39 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="650">
        <strong>
          "Ang hiling ko sa Itim na Nazareno ay magamit ako bilang kasangkapan
          upang magbigay ng liwanag at kagalingan sa mga may karamdaman. Kasi
          kapag gumiginhawa ang pakiramdam ng aking mga kliyente, ako’y natutuwa
          at parang ako rin ay gumagaan. Bukod doon, hinihiling ko rin na
          makatulong sa iba at na sana matupad ang kanilang mga kahilingan.
          Salamat kay Poong Nazareno, natutulungan ko ang aking mga kliyente at
          gumagaling sila."
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="650">
        — Alberto, 52 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-right"
        data-aos-delay="700">
        <strong>
          "Matagal na akong deboto ng Itim na Nazareno, at lahat ng kahilingan
          ko ay na-grant. Halimbawa, nung ako ay nagtuturo sa isang parochial
          school, hiling ko na ako ay mailipat sa isang public school, at nakuha
          ko iyon bilang school head. Nagkasakit ako, pero dasal lang at
          nakarecover din ako. Nung ako ay nahilig sa politika, nanalangin ako,
          at napanalunan ko ang posisyon bilang konsehal ng bayan. Bukod pa
          dito, panalangin ko rin para sa mga anak ko, tulad ng kanilang mga
          board exam na nakuha nila, at kamakailan lang, ang anak kong gustong
          mag-abroad, ngayon ay nasa Taiwan na."
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-right"
        data-aos-delay="700">
        — Abelardo, 58 taong gulang
      </div>

      <p className="fs-6 mx-5" data-aos="fade-left"
        data-aos-delay="750">
        <strong>
          “Ang pinakamalaki kong hiling sa Itim na Nazareno ay ang pahabain ang
          buhay ng aking anak na may sakit na cancer. Akala ko'y hindi na siya
          magtatagal, pero sa panalangin ko’y dininig ako nabuhay siya hanggang
          22 taong gulang. Bago siya pumanaw, naiwanan pa niya ako ng anak. Isa
          ‘yong biyayang hindi ko malilimutan. Bukod doon, hinihiling ko rin ang
          pang-araw-araw naming kabuhayan. Kahit wala kaming ari-arian o
          pinag-aralan, hindi kami pinababayaan ng Nazareno. Sa simpleng
          hanapbuhay naming pagbebenta ng kandila, may pambili kami ng pagkain
          araw-araw.”
        </strong>
      </p>

      <div className="text-end fs-6 fst-italic mx-5 mb-5" data-aos="fade-left"
        data-aos-delay="750">
        — Florenda, 67 taong gulang
      </div>
    </Container>
  );
};

export default Hiling;
