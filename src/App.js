import React, {Component} from 'react';
import './App.css';
import StackGrid from "react-stack-grid";
import cards from './data/cards';
import ModalMC from './ModalMC';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      modalShow: false
    };
    this.showAll = this.showAll.bind(this);
    this.showCards = this.showCards.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  showAll() {
    this.setState({cards: cards});
  }

  showCards(type) {
    this.setState({
      cards: cards.filter(card => card.type === type)
    });
  }

  toggleModal() {
    this.setState(prevState => ({
      modalShow: !prevState.modalShow
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="holder">
          <div className="cover">
            <div className="bio">
              <h1 className="card-title">
                TUBA
                <br/>
                YILMAZ
              </h1>
              <p className="card-text">
                Dr. Tuba Yilmaz Abdolsaheb is an Assistant Professor and a Marie Sklodowska Curie Research Fellow in Department of Electronics and Communication Engineering at Istanbul Technical University (ITU).
              </p>
              <div className="buttons-image">
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

                ? <img className="card-img-top image-limit" src={require('./assets/'+card.image)} alt={card.title}/>
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
                {card.modal
                  ? <a href={card.link} className="btn btn-primary border"onClick={this.toggleModal}>{card.modal}</a>
                  : ''}
              </div>
            </div>
          )}
        </StackGrid>
        <ModalMC visible={this.state.modalShow} closeModal={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
