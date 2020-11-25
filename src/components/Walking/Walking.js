import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Walking.css';

class Walking extends Component {
  state = {
    heading: 'Walking',
  };

  componentDidMount = () => {
    this.getPet();
    this.agePet();
    this.walkPet();
  }

  walkPet = () => {
    setInterval(() => {
        this.props.dispatch( {type: 'WALK', payload: this.props.store.pet.id})}, 6000); 
    }

  agePet = () => {
    console.log('aging pet', this.props.store.pet.age);
    setInterval(() => {
      this.props.dispatch( {type:'AGE_PET', payload: this.props.store.pet.id})}, 1000);
  }

  getPet = () => {
    console.log('get pet');
    this.props.dispatch( {type:'GET_PET'} );
  }

  petWalk = () => {
    if(this.props.store.pet.temperament === "Happy") {
        return <div className="happyWalk"></div>;
    } else if(this.props.store.pet.temperament === "Sad") {
        return <div className="sadWalk"></div>;
    } else if(this.props.store.pet.temperament === "Angry") {
        return <div className="angryWalk"></div>;
    } else if(this.props.store.pet.temperament === "Aloof") {
        return <div className="aloofWalk"></div>;
    } else {
        return  <p>SLEEPING</p>;
    }
    }

    lookAround = () => {
        console.log('clicked look around');
    }

    goHome = () => {
      this.props.history.push('/nest');
    }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className="petAnimation">
            { this.petWalk() }
            <img src="https://www.pixel4k.com/wp-content/uploads/2018/11/anime-cityscape-landscape-scenery-4k_1541975011.jpg" alt="cityscape"/>
        </div>
        <div className="petInfo">
          <br/>
            <button className="btn" onClick={this.lookAround}>Look Around</button>
            <button className="btn" onClick={this.goHome}>Go Back Home</button>
          <br/><br/>
        </div>
    </div>
    );
  }
}

export default connect(mapStoreToProps)(Walking);