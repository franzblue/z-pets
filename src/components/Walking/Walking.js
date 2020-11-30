import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';
import HealthMeter from '../HealthMeter/HealthMeter';
import EnergMeter from '../EnergyMeter/EnergyMeter';
import './Walking.css';

class Walking extends Component {
  state = {
    heading: 'Walking Around Town',
    energyId: null,
    hungerId: null
  };

  componentDidMount = () => {
    this.getPet();
    this.agePet();
    this.walkPet();
    this.hungeryFunction();
  }

  componentWillUnmount = () => {
    clearInterval(this.state.energyId);
    clearInterval(this.state.hungerId);
  }

  walkPet = () => {
    let energyInterval = setInterval(() => {
        this.props.dispatch( {type: 'WALK', payload: this.props.store.pet.id})}, 5000);
        this.setState( {
          energyId: energyInterval
        })
    }

  agePet = () => {
    setInterval(() => {
      this.props.dispatch( {type:'AGE_PET', payload: this.props.store.pet.id})}, 1000);
  }

  getPet = () => {
    console.log('get pet');
    this.props.dispatch( {type:'GET_PET'} );
  }

  hungeryFunction = () => {
    let hungerInterval = setInterval(() => {
      this.props.dispatch( {type:'LOWER_FOOD', payload: this.props.store.pet.id})
    }, 6000);
    this.setState( {
      hungerId: hungerInterval
    })
  }

  petAnimation = () => {
    if(this.props.store.pet.age > 500) {
      return <div className="oldWalk"></div>;
    }
      else if(this.props.store.pet.temperament === "Happy") {
        return <div className="happyWalk"></div>;
    } else if(this.props.store.pet.temperament === "Sad") {
        return <div className="sadWalk"></div>;
    } else if(this.props.store.pet.temperament === "Angry") {
        return <div className="angryWalk"></div>;
    } else if(this.props.store.pet.temperament === "Aloof") {
        return <div className="aloofWalk"></div>;
    } 
    }

    lookAround = () => {
      swal('This looks like a nice place to hang out.')
      this.props.dispatch( {type:'GET_IMAGE'} );
      this.props.history.push('/nest');
    }

    goHome = () => {
      this.props.history.push('/nest');
    }

  render() {
    return (
      <div className="petInfo">
        {/* {JSON.stringify(this.state.awake)}
          {JSON.stringify(this.props.store.pet)} */}
          <h2>{this.state.heading}</h2>
          <div className="petAnimation">
              { this.petAnimation() }
              <img className="walking" src="images/walking.jpg" alt="cityscape"/>
          </div>
          <div>

              {/* <p>Z-Pet: {this.props.store.pet.name}</p>
              <p>Owner: {this.props.store.user.username}</p> */}
              <p>HUNGER: {this.props.store.pet.health}/100</p>
              <HealthMeter />
              <p>ENERGY: {this.props.store.pet.energy}/100</p>
              <EnergMeter />
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