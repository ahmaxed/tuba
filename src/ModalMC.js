import React from "react";
import Modal from "react-bootstrap4-modal";

class ModalMC extends React.Component {
  // event handling methods go here

  render() {
    return (
      <Modal
        className="modal"
        visible={this.props.visible}
        onClickBackdrop={this.props.closeModal}
        dialogClassName={"modal-lg"}
      >
        <div className="modal-header">
          <h6 className="modal-title">
            <b>MIDxPRO</b>: <b>MI</b>crowave <b>D</b>iagnosis of Breast Cancer
            with Open Ended Contact <b>PRO</b>bes
          </h6>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={this.props.closeModal}
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
            treatment and an automated microwave biopsy probe for breast cancer
            diagnosis. While the envisioned applications require a single and
            highly accurate measurement, OECP technique suffers from high error
            and low repeatability dielectric property measurements. The error
            mostly stems from the current mathematical approach utilized for the
            dielectric property retrieval which may converge to local minimum
            and can magnify the measurement set-up based errors. This research
            will first target the existing error by proposing robust
            mathematical retrieval approaches. Next, application based
            modifications will be investigated with new probe structures.
            Finally, further error minimization will be achieved by introducing
            classification algorithms. Developed techniques will be validated
            with animal experiments. The outcomes of this research will greatly
            contribute to the innovation of new medical devices that can be
            utilized for breast cancer, representing one of the most commonly
            diagnosed cancer type among women. The researcher is well-equipped
            and has the required capabilities to execute the objectives of this
            research. The host organization and supervisors have an extensive
            track record in medical device development, necessary
            infrastructure, network, and expertise. This research will allow the
            researcher to become independent by extending her network,
            publication/grant track record, skill sets, and more importantly,
            through joining an innovation oriented host organization, the
            researcher will gain expertise in phases that enables the research
            to be transformed into innovation. Finally, the goal of the proposed
            research, building the foundation for innovation, is also in line
            with ‘Future and Emerging Technologies’ call of the H2020 work
            program.
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
      </Modal>
    );
  }
}

export default ModalMC;
