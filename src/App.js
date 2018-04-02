import React, {Component} from 'react';
import './App.css';
import StackGrid from "react-stack-grid";
import cards from './data/cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards
    };
    this.showAll = this.showAll.bind(this);
    this.showCards = this.showCards.bind(this);
  }
  showAll() {
    this.setState({cards: cards});
  }

  showCards(type) {
    this.setState({
      cards: cards.filter(card => card.type === type)
    });
  }

  render() {

    return (
      <div className="App">
        <div className="holder">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Open modal
          </button>
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                  Modal body..
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>



          <div className="cover container">
            <div className="row">
              <h1 className="col-sm-6 offset-sm-6 col-md-4 offset-md-8 card-title">TUBA
                <br/>
                YILMAZ</h1>
            </div>
            <div className="row">
              <p className="col-sm-6 offset-sm-6 col-md-4 offset-md-8 card-text">
                Dr. Tuba Yilmaz Abdolsaheb is an Assistant Professor and a Marie Sklodowska Curie Research Fellow in Department of Electronics and Communication Engineering at Istanbul Technical University (ITU).
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 offset-sm-6 col-md-4 offset-md-8 buttons-image">
                <a href="CV.pdf" className="btn btn-primary border" target="_blank" download="CV">CV</a>
                <a href="mailto:yilmazabdolsahe@itu.edu.tr" className="btn btn-primary border">Email</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-md-center">
            <div className="buttons col col-md-7">
              <a onClick={this.showAll} className="btn btn-primary border all">all</a>
              <a onClick={() => this.showCards("projects")} className="btn btn-primary border projects">projects</a>
              <a onClick={() => this.showCards("research")} className="btn btn-primary border research">research</a>
              <a onClick={() => this.showCards("publications")} className="btn btn-primary border publications">publications</a>
              <a onClick={() => this.showCards("awards")} className="btn btn-primary border awards">awards</a>
              <a onClick={() => this.showCards("media")} className="btn btn-primary border media">media</a>
            </div>
          </div>
        </div>
        <StackGrid className="Stack" columnWidth={300} monitorImagesLoaded={true} gutterHeight={20} gutterWidth={20}>
          {this.state.cards.map((card, index) =>
            <div className="card" key={index}>
              {card.image

                ? <img className="card-img-top image-limit" src={require('./assets/'+card.image)}alt="Card image cap"/>
                : ""}
              <div className="card-block">
                <span className={"badge badge-secondary " + card.type}>{card.type}</span>
                <br/> {card.title
                  ? <h4 className="card-title">{card.title}</h4>
                  : ''}
                {card.content
                  ? <p className="card-title">{card.content}</p>
                  : ''}
                {card.link
                  ? <a href={card.link} className="btn btn-primary border">{card.linkContent
                        ? card.linkContent
                        : "link"}</a>
                  : ''}
              </div>
            </div>
          )}
        </StackGrid>
      </div>
    );
  }
}

export default App;
