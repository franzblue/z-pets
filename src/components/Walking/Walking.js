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

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className="petAnimation">
            { this.petWalk() }
            <img src="https://www.pixel4k.com/wp-content/uploads/2018/11/anime-cityscape-landscape-scenery-4k_1541975011.jpg" alt="cityscape"/>
        </div>
    </div>
    );
  }
}

export default connect(mapStoreToProps)(Walking);