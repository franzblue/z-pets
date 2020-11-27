import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Death.css';

class Death extends Component {
  state = {
    heading: 'Z-Dead',
  };

  componentDidMount = () => {
      this.getPet();
  }

  getPet = () => {
    console.log('get pet');
    this.props.dispatch( {type:'GET_PET'} );
  }

  deathAnimation = () => {
      console.log('clicked');
      if(this.props.store.pet.temperament === "Happy") {
        return <div className="happyDeath"></div>;
    } else if(this.props.store.pet.temperament === "Sad") {
        return <div className="sadDeath"></div>;
    } else if(this.props.store.pet.temperament === "Angry") {
        return <div className="angryDeath"></div>;
    } else if(this.props.store.pet.temperament === "Aloof") {
        return <div className="aloofDeath"></div>;
    }
  }

  render() {
    return (
      <div className="petInfo">
        <h2>{this.state.heading}</h2>
        <p id="box">Oh no! It looks like your Z-Pet is dying :'(</p>
        <div className="petAnimation">
            <img src="images/graveyard.jpg" alt="graveyard"/>
        </div>
           
        <p className="death">Boo!</p>
        {/* <p className="happyDeath"></p>
        <p className="sadDeath"></p>
        <p className="angryDeath"></p>
        <p className="aloofDeath"></p> */}
            <button className="btn" onClick={this.deathAnimation}>Your Z-Pet is Dead</button>
            { this.deathAnimation() }
      <div>   
      </div>    
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Death);