import React, { Component } from 'react';
import './App.css';
import StackGrid from "react-stack-grid";
import cards from './data/cards';
const tuba = require('./assets/tuba.jpg');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: cards
    };
    this.showAll = this.showAll.bind(this);
    this.showCards = this.showCards.bind(this);
  }
  showAll(){
    this.setState({
        cards: cards
      });
  }

  showCards(type){
    this.setState({
        cards: cards.filter(card => card.type === type)
      });
  }


  render() {
    console.log(this.state.cards);

    return (
      <div className="App">
          <div className="holder">
          <img className="container-fluid" src="http://via.placeholder.com/1080x400"/>
          <div className="cover container">
            <div className="row">
              <h1 className="col-md-4 offset-md-8 card-title">TUBA <br/> YILMAZ</h1>
            </div>
            <div className="row">
            <p className="col-md-4 offset-md-8 card-text">
              Dr. Tuba Yilmaz Abdolsaheb is an Assistant Professor and a Marie Sklodowska Curie
              Research Fellow in Department of Electronics and Communication Engineering
              at Istanbul Technical University (ITU).</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-md-center">
            <div className = "buttons col col-md-7">
              <a onClick={this.showAll} className="btn btn-primary border">all</a>
              <a onClick={() => this.showCards("projects")} className="btn btn-primary border">projects</a>
              <a onClick={() => this.showCards("research")} className="btn btn-primary border">research</a>
              <a onClick={() => this.showCards("publications")} className="btn btn-primary border">publications</a>
              <a onClick={() => this.showCards("awards")} className="btn btn-primary border">awards</a>
              <a onClick={() => this.showCards("media")} className="btn btn-primary border">media</a>
            </div>
        </div>
      </div>
        <StackGrid className="Stack" columnWidth={300}
          monitorImagesLoaded={true}
          gutterHeight={20}
          gutterWidth={20}
          >
          {this.state.cards.map((card, index) =>
              <div className="card" key={index}>
                <div className="card-block">
                  <span className="badge badge-secondary">{card.type}</span>
                  <br/>
                  {card.title ? <h4 className="card-title">{card.title}</h4>:''}
                  {card.content ? <p className="card-title">{card.content}</p>:''}
                  {card.link? <a href={card.link} className="btn btn-primary border">{card.linkContent? card.linkContent: "link" }</a>:''}
                </div>
              </div>
          )}
          </StackGrid>
      </div>
    );
  }
}

export default App;
