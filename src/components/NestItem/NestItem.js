import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class NestItem extends Component {

    componentDidMount = () => {
        this.getPet();
      }
    
      getPet = () => {
        console.log('get pet');
        this.props.dispatch( {type:'GET_PET'} );
      }

      feed = () => {
        console.log('clicked feed');
        this.props.dispatch( {type: 'FEED', payload: this.props.store.pet.id} );
      }

      onOrOffDuty = () => {
        if(this.props.store.pet.temperament === "Happy") {
            // need to return JSX
            return <div className="happy"></div>;
        } else if(this.props.store.pet.temperament === "Sad") {
            // need to return JSX
            return <div className="sad"></div>;
        } else if(this.props.store.pet.temperament === "Angry") {
            // need to return JSX
            return <div className="angry"></div>;
        } else if(this.props.store.pet.temperament === "Aloof") {
            // need to return JSX
            return <div className="aloof"></div>;
        } else {
            // need to return JSX
            return  <p>SLEEPING</p>;
        }
    }

  render() {
    return (
      <div>
          {JSON.stringify(this.props.store.pet)}
          { this.onOrOffDuty() }

        <img src={this.props.store.pet.img} alt={this.props.store.pet.name}/>
        <button onClick={this.feed}>Feed</button>
        <p>{this.props.store.pet.name} is this hungry! {this.props.store.pet.health}/100</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NestItem);