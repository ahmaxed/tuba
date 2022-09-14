import React, { Fragment } from "react";
import Modal from "react-bootstrap4-modal";

class ModalComponent extends React.Component {
  // event handling methods go here

  render() {
    const { modalCode, closeModal, visible } = this.props;
    console.log(modalCode, closeModal, visible);
    if (modalCode === "1235555")
      return (
        <Modal
          className="modal"
          visible={visible}
          onClickBackdrop={closeModal}
          dialogClassName={"modal-lg"}
        >
          <Fragment>
            <div className="modal-header">
              <h6 className="modal-title">
                <b>MIDxPRO</b>: <b>MI</b>crowave <b>D</b>iagnosis of Breast
                Cancer with Open Ended Contact <b>PRO</b>bes
              </h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src={require("./assets/logos.svg")}
                className="img-fluid"
                alt="logo of european commision and Marie Curie actions"
              />
              <p>&nbsp;</p>
              <p>
                <b>Project description</b>: This action proposes to carry out
                research in open ended contact probe (OECP) technique to lay out
                foundation work for development of two new applications: an
                automated surgical margin detection device for breast cancer
                treatment and an automated microwave biopsy probe for breast
                cancer diagnosis. While the envisioned applications require a
                single and highly accurate measurement, OECP technique suffers
                from high error and low repeatability dielectric property
                measurements. The error mostly stems from the current
                mathematical approach utilized for the dielectric property
                retrieval which may converge to local minimum and can magnify
                the measurement set-up based errors. This research will first
                target the existing error by proposing robust mathematical
                retrieval approaches. Next, application based modifications will
                be investigated with new probe structures. Finally, further
                error minimization will be achieved by introducing
                classification algorithms. Developed techniques will be
                validated with animal experiments. The outcomes of this research
                will greatly contribute to the innovation of new medical devices
                that can be utilized for breast cancer, representing one of the
                most commonly diagnosed cancer type among women. The researcher
                is well-equipped and has the required capabilities to execute
                the objectives of this research. The host organization and
                supervisors have an extensive track record in medical device
                development, necessary infrastructure, network, and expertise.
                This research will allow the researcher to become independent by
                extending her network, publication/grant track record, skill
                sets, and more importantly, through joining an innovation
                oriented host organization, the researcher will gain expertise
                in phases that enables the research to be transformed into
                innovation. Finally, the goal of the proposed research, building
                the foundation for innovation, is also in line with ‘Future and
                Emerging Technologies’ call of the H2020 work program.
              </p>
              <a
                href="https://cordis.europa.eu/project/rcn/209324_en.html"
                className="btn btn-primary border"
                target="_blank"
                rel="noopener noreferrer"
              >
                more project info on Cordis
              </a>
              <a
                href="http://midxpro.com/"
                className="btn btn-primary border"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit MIDXPRO website
              </a>
            </div>
          </Fragment>
        </Modal>
      );
    else if (modalCode === "1234156")
      return (
        <Modal
          className="modal"
          visible={visible}
          onClickBackdrop={closeModal}
          dialogClassName={"modal-lg"}
        >
          <Fragment>
            <div className="modal-header">
              <h6 className="modal-title">
                <b>
                  Meme kanseri tedavisi için mikrodalga görüntüleme güdümlü
                  taşınabilir hipertermi cihazı
                </b>
              </h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                <b>Proje özeti</b>: Meme kanseri kadınlarda karşılaşılan en
                yaygın kanser türüdür ve kanser nedenli ölümler içerisinde de
                ilk sıralarda yer almaktadır. Meme kanserine bağlı ölüm
                oranlarının düşürülmesi erken tanı ve etkin tedavi yöntemleriyle
                mümkündür. Günümüzde meme kanserinin tanısı genel olarak X-ışını
                mamografisi ile yapılmaktayken, tedavisinde tümörün büyüklüğü ve
                çeşidine göre kemoterapi, kısmi/radikal mastektomi, radyasyon
                terapisi gibi farklı teknikler uygulanmaktadır. Mamografide tanı
                ve daha sonra tedavi takibi sırasında hasta X-ışınlarına maruz
                kalmaktadır ve aynı zamanda mamografi 40 yaşın altındaki
                kadınlarda teşhis için kullanılamamaktadır. Tedavi
                yöntemlerinden biri olan kemoterapi ise tümöre tamamen nüfuz
                edememekte ve beklenen etkiyi her meme kanseri vakasında
                gösterememektedir. Diğer yandan, kemoterapi uygulaması sırasında
                meme dokusu içerisindeki kanserli bölgenin sıcaklığının
                arttırılması ile kullanılan kemoterapinin etkinliğinin
                iyileştirdiği klinik bir bulgudur. Bu doğrultuda yapılan
                çalışmalar bütünüyle mikrodalga hipertermi üzerinde
                yoğunlaşmıştır. Mikrodalga hipertermi uygulamalarında meme
                dokusu yüksek çıkış gücüne sahip mikrodalga kaynaklara bağlı bir
                anten dizisi aracılığıyla düzgün bir biçimde ısıtılabilmektedir.
                Öte yandan, kullanılan sistemlerin yüksek çıkış gücüne sahip
                olması hem olası diğer yan etkiler hem de ekonomik açıdan
                mikrodalga hiperterminin yaygınlaşmasını engellemiştir.
              </p>
              <p>
                {" "}
                Bu açıklamalar doğrultusunda projenin temel amacı: Kemoterapi
                temelli meme kanseri tedavisinde mikrodalga hiperteminin etkin
                biçimde kullanılmasına olanak verecek özgün bir tedavi
                teknolojisinin tüm boyutlarıyla geliştirilmesidir. Bu kapsamda:{" "}
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  Meme kanserinin tedavisinde kullanılan kemoterapinin
                  etkinliğinin, düşük çıkış gücü kullanan yeni bir mikrodalga
                  hipertermi yaklaşımıyla iyileştirilmesi;
                </li>
                <li className="list-group-item">
                  Mikrodalga hipertermi uygulaması sırasında, oluşacak sıcaklık
                  dağılımının, sisteme tümleşik olan bir mikrodalga görüntüleme
                  alt-sistemi aracılığıyla belirlenerek, hipertermi
                  uygulamasının kontrollü biçimde yapılması;
                </li>
                <li className="list-group-item">
                  Mikrodalga görüntüleme alt-sistemi aracılığıyla periyodik
                  kemoterapi uygulamaları öncesinde ve/veya sonrasında tedavinin
                  ilerleyişinin izlenmesi;
                </li>
                <li className="list-group-item">
                  Hem mikrodalga hiperterminin hem de mikrodalga görüntülemenin
                  birlikte kullanıldığı özgün bir tanı ve tedavini prototipinin
                  gerçekleştirilmesi;
                </li>
              </ul>
              <p> </p>
              <p> amaçlanmaktadır.</p>
              <p>&nbsp;</p>
              <p>
                <b>İş Paketleri</b>:
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  <b>
                    {" "}
                    İP 1: Mikrodalga Hipertermi (MdH) Alt-Sisteminin Tasarımı ve
                    Gerçeklenmesi
                    </b>{" "}
                    <p>-Bu is paketi kapsaminda iki adet hipertermi aplikatörü (lineer ve silindirik) ele alınarak her iki sisteme ilişkin toplam 4 adet faz ve genlik optimizasyonu algoritması geliştirilmiştir. - Her iki aplikatör için mikrodalga arka devre ve uygun antenler tasarlanarak gerçeklenmiş ve fantom malzemeler ile test edilmiştir. -Bu çalışmalar sonucunda aşağıdaki yayınlar hazırlanmıştır,
  .</p>
  <p>
  (J1) Altintas, Gulsah, Ibrahim Akduman, Aleksandar Janjic, and Tuba Yilmaz. "A Novel Approach on Microwave Hyperthermia." Diagnostics 11, no. 3 (2021): 493.
  </p>
  <a
    href="https://doi.org/10.3390/diagnostics11030493"
    className="btn btn-primary border"
  >
    Full Text
  </a>
  <p>
  (J2) Altıntaş, Gülşah, Halimcan Yasar, Ibrahim Enes Uslu, Yusuf Demirel, Mehmet Nuri Akinci, Tuba Yilmaz, and Ibrahim Akduman. ‘ Antenna Excitation Optimization with Deep Learning for Microwave Breast Cancer Hyperthermia.’ Sensors 22, no. 17 (2022):6343.
  </p>
  <a
    href=" https://doi.org/10.3390/s22176343"
    className="btn btn-primary border"
  >
    Full Text
  </a>
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 2: Mikrodalga Görüntüleme (MdG) Alt-Sisteminin Tasarımı
                    ve Gerçeklenmesi
                  </b>{" "}
                  <p> -	Bir önceki iş paketinde tasarlanmış olan iki adet hipertermi aplikatörüne uygun olarak lineer ve silindirik olmak üzere her iki sistem için niteliksel ve niceliksel görüntüleme algoritmaları geliştirilmiştir. Burada altı çizilmesi gereken en önemli nokta niceliksel algoritmaların literatürde kullanılamıyor olması nedeniyle meme dokusu görüntülemenin çoğunlukla nıteliksel algoritmalar ile yapılıyor olmasıdır. Proje kapsamında niceliksel bir algoritmanın problem özelinde çalıştığı bu iş paketi altında gösterilmiştir. Çıktıtya ilişkin yayınımız şu anda hakem izlemesi altındadır.
- Görüntüleme algoritmasının yanı sıra düz problem çözülerek gerçek meme dokusunda üretilmiş veriler derin öğrenme ile işlenerek sıcaklık anomalilerinin belirlenmesi üzerine bir algoritma geliştirilmiştir.
-	Görüntüleme sistemlerinde frekans ve anten sayısının analiz edilmesine yönelik yapay sinir ağı temelli bir algoritma geliştirilmiştir.
-	Alt sistem tüm boyutlarıyla gerçeklenerek sistem deneyleri yapılmıştır.
-	Bu çalışmalar sonucunda aşağıdaki yayınlar hazırlanmıştır,
.</p>
<p>
  (J3) Hulusi Onal, Tuba Yilmaz, Mehmet Nuri Akinci, ‘A BIM-Based Algorithm for Real-Time Quantitative Monitoring of Temperature Distribution during Breast Hyperthermia Treatments,’ IEEE Access.  (Hakem değerlendirmesinde)
</p>
<a
  href="https://doi.org/10.36227/techrxiv.20319474.v1"
  className="btn btn-primary border"
>
  Full Text
</a>
<p>
  (J4) Enes Girgin, Hulusi Önal, Tuba Yilmaz, Mehmet Nuri Akıncı, ‘A Real-time Breast Hyperthermia Monitoring Scheme Based on Processing of Microwave Scattering Parameters with Deep Learning.’ IEEE Transactions on Microwave Theory and Techniques. (Hakem değerlendirmesinde)
</p>
<a
  href="https://doi.org/10.36227/techrxiv.17707106.v1"
  className="btn btn-primary border"
>
  Full Text
</a>
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 3: MdH / MdG Alt-Sistemlerinde Kullanılacak Antenlerini
                    Tasarımı, Gerçeklenmesi ve Ölçülmesi
                  </b>
                  <p>
                    Bu iş paketi kapsamında bow tie temelli yagi anten dizayn
                    edilmiştir. Anten 3.6 - 8 GHz arasında çalışmaktadır. Bu
                    çalışmaya ilişkin çıktı hakem değerlendirmesindedir. - Ayrica Antipodal Vivaldi, corrugated Vivaldi gibi bir çok anten tasarlanmış, üretilmiş ve çeşitli sistem/alt-sistem gerçeklemelerinde kullanılmıştır.
                  </p>
                </li>
                <li className="list-group-item">
                  <b>
                    İP 4: Sıcaklık Dağılımını Görüntüleme Yöntemlerinin
                    Geliştirilmesi
                  </b>
                  <p>Bu is paketi kapsaminda daha önce literaturde sunulmamis olan dielektrik özellik sıcaklık ilişkisi kurulmuştur. Bu ilişki doğrudan niceliksel görüntüleme problemine entegre edilmiştir. Bu iş paketi ile doğrudan sıcaklık haritalarının çıkarılması hedeflenmiş ve aşağıda verilen yayında görüleceği gibi sıcaklık haritaları elde edilmiştir. -	Bu çalışmanın sonucları aşağıdaki yayının bir parçası olarak yayınlamıştır,</p>
                  <p>
                    (J3) Hulusi Onal, Tuba Yilmaz, Mehmet Nuri Akinci, ‘A BIM-Based Algorithm for Real-Time Quantitative Monitoring of Temperature Distribution during Breast Hyperthermia Treatments,’ IEEE Access.  (Hakem değerlendirmesinde)
                  </p>
                  <a
                    href="https://doi.org/10.36227/techrxiv.20319474.v1"
                    className="btn btn-primary border"
                  >
                    Full Text
                  </a>
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 5: MdH ve MdG Sistemlerinde Kullanılacak Fantomların
                    Gerçeklenmesi ve Ölçülmesi
                  </b>
                  <p>
                    - Bu is paketi kapsamında ana amaç raf ömrü uzun olan, dielektrik özellikleri birkaç malzeme ile modellenebilen fantom malzemelerin üretimidir. Bu nedenle yapılan karışımların dielektrik özelliklerinin yüksek doğrulukta ölçümüne ihtiyaç vardır. Bu ihtiyaçlar göz önünde bulundurularak proje süresince aşağıdaki ana aktiviteler gerçekleştirilmiştir,
-	Dielektrik özelliklerin yüksek doğrulukta ölçülebilmesi için algoritmaların geliştirilmesi,
-	Çeşitli malzemelerin dielektrik özellikleri ölçülerek doku dielektrik özelliklerine benzeyen karakteristiklerin elde edilmesi,
-	Polimer bazlı fantom malzemelerin yapılabilirliğinin araştırılması,
-	Jelatin bazlı fantom malzemelerin yapımı, dielektrik özellik karakterizasyonu ve deneyler sırasında kullanımı.
-	Yukarıda sıralanan çalışmalar sonucu aşağıdaki yayınlar hazırlanmıştır,

                  </p>
                  <p>
                    (J5) Cemanur Aydınalp, Sulayman Joof, Ismail Dilman, Ibrahim Akduman, and Tuba Yilmaz. 2022. "Characterization of Open-Ended Coaxial Probe Sensing Depth with Respect to Aperture Size for Dielectric Property Measurement of Heterogeneous Tissues" Sensors 22, no. 3: 760.
                  </p>
                  <a
                    href="https://doi.org/10.3390/s22030760"
                    className="btn btn-primary border"
                  >
                    Full Text
                  </a>
                  <p>
                    (J6) Cemanur Aydınalp, Sulayman Joof, Mehmet Nuri Akıncı, Ibrahim Akduman, and Tuba Yilmaz, "Microwave Dielectric Property Retrieval from Open-Ended Coaxial Probe Response with Deep Learning," in IEEE Access, 2022.
                  </p>
                  <a
                    href="https://doi.org/10.1109/ACCESS.2021.3137033"
                    className="btn btn-primary border"
                  >
                    Full Text
                  </a>
                  <p>
                    (J7) Emre Onemli, Sulayman Joof, Cemanur Aydinalp, Nural Pastacı Özsobacı, Fatma Ateş Alkan, Nuray Kepil, Islem Rekik, Ibrahim Akduman, and Tuba Yilmaz. "Classification of rat mammary carcinoma with large scale in vivo microwave measurements." Scientific reports 12, no. 1 (2022): 1-11.
                  </p>
                  <a
                    href="https://www.nature.com/articles/s41598-021-03884-7"
                    className="btn btn-primary border"
                  >
                    Full Text
                  </a>

                </li>
                <li className="list-group-item">
                  <b>
                    İP 6: Empedans Uyumluluğunu İçin Kullanılacak Yapının
                    Tasarımı ve Gerçeklenmesi
                  </b>
                  <p>
                    - Bu is paketi kapsamında birçok malzeme araştırılmıştır. Araştırılan malzemelerin dielektrik özellikleri ölçülmüş sonrasında ise bu malzemeler  hem simülasyon ortamında hem de deneysel olarak test edilmiştir. Empedans uygunlaştırıcı malzeme olarak ayrı ayrı alt sistem  gereksinimlerine göre hipertermi sistemi için Triton X-100  ve görüntüleme sistemi için Gliserol uygun bulunmuştur.

                  </p>
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 7: Empedans Uyumluluğunu İçin Kullanılacak Yapının
                    Tasarımı ve Gerçeklenmesi Tümleştirme ve Deneysel Doğrulama
                    Çalışmaları
                  </b>
                  <p>
                    - Bu is paketi kapsamında öncelikle her iki alt sistemin tasarımı ve sonrasında tümleştirilmesi yapılmıştır. Her iki alt sistem öncelikle ayrı ayrı deneysel olarak test edilmiştir. Daha sonra ise sistemin tümleştirilmesi yapılarak  deneysel testler gerçekleştirilmiştir. Bu iş paketi kapsamında başarılı  bir şekilde ısıtma ve görüntüleme işlemlerinin deneysel olarak yapıldığı  gözlemlenmiştir.

                  </p>
                </li>
              </ul>
            </div>
          </Fragment>
        </Modal>
      );
    return <div></div>;
  }
}

export default ModalComponent;
