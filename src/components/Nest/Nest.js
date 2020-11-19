import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NestItem from '../NestItem/NestItem';


class Nest extends Component {

  render() {
    return (
      <div>
        <NestItem />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Nest);