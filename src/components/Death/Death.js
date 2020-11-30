import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';
import './Death.css';

class Death extends Component {

  componentDidMount = () => {
      this.getPet();
  }

  getPet = () => {
    this.props.dispatch( {type:'GET_PET'} );
    this.welcomeAlert();
  }

  deathAnimation = () => {
      console.log('clicked');
      if(this.props.store.pet.age > 499) {
        return <div className="oldDeath"></div>;
      }
      else if(this.props.store.pet.age < 100) {
        return <div className="babyDeath"></div>;
      }
      else if(this.props.store.pet.temperament === "Happy") {
        return <div className="happyDeath"></div>;
    } else if(this.props.store.pet.temperament === "Sad") {
        return <div className="sadDeath"></div>;
    } else if(this.props.store.pet.temperament === "Angry") {
        return <div className="angryDeath"></div>;
    } else if(this.props.store.pet.temperament === "Aloof") {
        return <div className="aloofDeath"></div>;
    }
  }

  welcomeAlert = () => {
    swal(`Oh no! ${this.props.store.pet.name} is dying...`);
  }

  startOver = () => {
      console.log('clicked start over');
      this.props.dispatch( {type:'START_OVER', payload: this.props.store.pet.id});
      swal(`The Circle of Life is complete, ${this.props.store.pet.name} has passed on...`);
      this.props.history.push('/user');
  }

  render() {
    return (
      <div className="petInfo">
        <h2 className="meterNames">Graveyard</h2>  
        <div className="petAnimation">
            <img src="images/graveyard.jpg" alt="graveyard"/>
        </div>
        <br/>
        <button className="btn" onClick={this.startOver}>Your Z-Pet is Dead</button>
        <br/>
        { this.deathAnimation() }
      <div>   
      </div> 
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Death);