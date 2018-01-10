import React, { Component } from 'react';
import './App.css';
import StackGrid from "react-stack-grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StackGrid className="Stack" columnWidth={300}
          monitorImagesLoaded={true}
          gutterHeight={20}
          gutterWidth={20}
          >
          <div className="card">
            <img className="card-img-top" src="https://i.pinimg.com/736x/46/0a/b6/460ab6535580e472611a79efd16c3f33--makeup-course-black-white-fashion.jpg" alt="Card image cap"/>
          </div>
          {/*BIO*/}
          <div className="card bio" >
            <div className="card-block">
              <h1 className="card-title">TUBA YILMAZ</h1>
              <p className="card-text">
                Dr. Tuba Yilmaz Abdolsaheb is an Assistant Professor and a Marie Sklodowska Curie
                Research Fellow in Department of Electronics and Communication Engineering
                at Istanbul Technical University (ITU).</p>
            </div>
          </div>
          {/*PROJECTS*/}
          <div className="card projects">
            <div className="card-block">
                <h2 className="card-title">PROJECTS</h2>
            </div>
          </div>
          <div className="card projects">
            <div className="card-block">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card projects">
            <div className="card-block">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card projects">
            <div className="card-block">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>

          {/*RESEARCH*/}
          <div className="card research">
            <div className="card-block">
                <h2 className="card-title">RESEARCH</h2>
            </div>
          </div>
          <div className="card research">
            <img className="card-img-top" src="http://via.placeholder.com/300x100" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Dielectric Spectroscopy</h4>
            </div>
          </div>
          <div className="card research">
            <img className="card-img-top" src="http://via.placeholder.com/300x100" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Design and Testing of
Microwave Wearable Sensors</h4>
            </div>
          </div>
          <div className="card research">
            <img className="card-img-top" src="http://via.placeholder.com/300x100" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Phantom Characterization for
bio-electromagnetics
applications</h4>
            </div>
          </div>
          <div className="card research">
            <img className="card-img-top" src="http://via.placeholder.com/300x100" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Design and Testing of
On-body Antennas</h4>
            </div>
          </div>
          <div className="card research">
            <img className="card-img-top" src="http://via.placeholder.com/300x100" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Design and Testing of
Implantable Antennas</h4>
            </div>
          </div>
          <div className="card research">
            <img className="card-img-top" src="http://via.placeholder.com/300x100" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title .no_margin">Future Work: AI implemented
sensing platforms</h4>
            </div>
          </div>
          {/*PUBLICATION*/}
          <div className="card publication">
            <div className="card-block">
                <h2 className="card-title">PUBLICATION</h2>
            </div>
          </div>
          <div className="card publication">
            <div className="card-block">
              <h6 className="card-text">T Yilmaz, T Ozturk, S Joof. A Comparative Study for Development of Microwave Glucose Sensors</h6>
            </div>
          </div>
          <div className="card publication">
            <div className="card-block">
              <h6 className="card-text">T Yilmaz, N Hasan, R Zane, Z Pantic. Multi-Objective Optimization of Circular Magnetic Couplers for Wireless Power Transfer Applications</h6>
            </div>
          </div>
          <div className="card publication">
            <div className="card-block">
              <h6 className="card-text">T Yilmaz, H Sahinturk, M Acar, I Akduman. Matching medium characterization for microwave brain stroke imaging</h6>
            </div>
          </div>
          <div className="card publication">
            <div className="card-block">
              <h6 className="card-text">K Cakmak, T Ozturk, T Yilmaz, I Akduman. Dielectric property measurements of dextrose solutions for RF sensor design</h6>
            </div>
          </div>
          <div className="card publication">
            <div className="card-block">
              <h6 className="card-text">T Yilmaz, MA Kılıç, M Erdoğan, M Çayören, D Tunaoğlu, İ Kurtoğlu, ... Machine learning aided diagnosis of hepatic malignancies through in vivo dielectric measurements with microwaves</h6>              
            </div>
          </div>
          <div className="card more">
            <a href="https://scholar.google.com/citations?hl=en&user=U2nbt_IAAAAJ&view_op=list_works&sortby=pubdate" className="btn btn-primary">MORE PUBLICATIONS</a>
          </div>
          {/*AWARDS*/}
          <div className="card awards">
            <div className="card-block">
                <h2 className="card-title">AWARDS</h2>
            </div>
          </div>

          <div className="card awards">
            <div className="card-block">
              <h5 className="card-title">URSI Young Scientist Award, 2017.</h5>
            </div>
          </div>
          <div className="card awards">
            <div className="card-block">
              <h5 className="card-title">Marie Curie Individual Fellowship – Reintegration Grant, 2016.</h5>
            </div>
          </div>
          <div className="card awards">
            <div className="card-block">
              <h5 className="card-title">IET Today’s RF Tomorrow’s Medicine Workshop 2nd runner up prize, 2016.</h5>
            </div>
          </div>
          {/*MEDIA*/}
          <div className="card media">
            <div className="card-block">
                <h2 className="card-title">MEDIA</h2>
            </div>
          </div>
          <div className="card media">
            <div className="card-block">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card media">
            <div className="card-block">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          {/*MORE*/}
          <div className="card more">
            <a href="#" className="btn btn-primary">DOWNLOAD CV</a>
          </div>
          <div className="card more">
            <a href="#" className="btn btn-primary">SEND EMAIL</a>
          </div>
          </StackGrid>
      </div>
    );
  }
}

export default App;
