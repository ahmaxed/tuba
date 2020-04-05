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
                  </b>
                  <p>
                    Bu iş paketine ilişkin çalışmalar anten genlik ve fazlarının
                    optımızasyonunu içermekte çalışmalar halen devam etmektedir.{" "}
                  </p>
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 2: Mikrodalga Görüntüleme (MdG) Alt-Sisteminin Tasarımı
                    ve Gerçeklenmesi
                  </b>{" "}
                  <p>Bu iş paketine ilişkin çalışmalar devam etmektedir.</p>
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
                    çalışmaya ilişkin çıktı haken değerlendirmesindedir.
                  </p>
                </li>
                <li className="list-group-item">
                  <b>
                    İP 4: Sıcaklık Dağılımını Görüntüleme Yöntemlerinin
                    Geliştirilmesi
                  </b>
                  <p>Bu iş paketine ilişkin çalışmalar devam etmektedir.</p>
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 5: MdH ve MdG Sistemlerinde Kullanılacak Fantomların
                    Gerçeklenmesi ve Ölçülmesi
                  </b>
                  <p>
                    -Bu iş paketi doğrultusunda lliteratürde 'oil-in-gelatin
                    dispersion' olarak bilinen ve temel olarak yağ, jelatin,
                    deiyonize su, ve sürfaktan karışımının belli oranlarda yağ
                    miktarının değiştirilmesi ile elde edilen fantom malzemeler
                    yapılmıştır. - Kaynama sıcaklıkları yüksek olan
                    kımyasalların dıelektrık özellikleri araştırılmıştır. -
                    Ölçülen saf malzeme dielektrik geçirgenliğine dayanarak
                    empırık formülasyonlarla karışım dielektrik
                    geçirgenliklerinin modellenmesi üzerine çalışılmıştır. -
                    Yapılan çalışmalar doğrultusunda yeni fantom malzemelerin
                    yanı sıra sadeleştirilmiş 'oil-in-gelatin dispersion'
                    malzemeleri kullanılarak karaciğer dokusunun ve
                    anomalılerininin dielektrik özelliklerini mimikleyen fantom
                    malzemeler üretilmiş ve bu malzemelerin dielektrik özellik
                    ölçümünün yanı sıra analizi gerçekleştirilmiştir. -
                    Karaciğer dokusunun yanı sıra meme dokuları da karakterize
                    edilmiştir. - Bu çalışmalar sonucu elde edilen çıktı MDPI,
                    Sensors dergisinde yayınlanmıştır.
                  </p>
                  <p>
                    J1. Tuba Yilmaz, “Multiclass Classification of Hepatic
                    Anomalies with Dielectric Properties: From Phantom Materials
                    to Rat Hepatic Tissues,” Sensors, vol. 20, no. 2, pp
                    530-543, Jan. 2020.
                  </p>
                  <a
                    href="http://hdl.handle.net/11527/18059"
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
                </li>
                <li className="list-group-item">
                  {" "}
                  <b>
                    İP 7: Empedans Uyumluluğunu İçin Kullanılacak Yapının
                    Tasarımı ve Gerçeklenmesi Tümleştirme ve Deneysel Doğrulama
                    Çalışmaları
                  </b>
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
