import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NestItem from '../NestItem/NestItem';


class Nest extends Component {


  walkPet = () => {
    console.log('clicked walk');
    this.props.history.push('/walking');
  }

  render() {
    return (
      <div className="petInfo">
        <NestItem />
        <button className="btn" onClick={this.walkPet}>Walk</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Nest);