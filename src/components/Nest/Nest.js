import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NestItem from '../NestItem/NestItem';
import swal from 'sweetalert';


class Nest extends Component {


  walkPet = () => {
    console.log('clicked walk');
    if(this.props.store.pet.energy !== 0) {
      console.log('clicked walk');
      this.props.dispatch( {type: 'WALK', payload: this.props.store.pet.id} );
      this.props.history.push('/walking');  
    } else {
        swal("0/100", `Looks like ${this.props.store.pet.name} is too tired to go for a walk!`, "warning", {
        button: "Nap Time!",
    });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="petInfo">
          <NestItem />
          <button className="btn" onClick={this.walkPet}>Walk</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Nest);