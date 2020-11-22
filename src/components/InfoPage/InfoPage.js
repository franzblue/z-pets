import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class InfoPage extends Component {

  componentDidMount = () => {
    this.getPet();
    this.getCrickets();
  }

  getCrickets = () => {
    this.props.dispatch( {type: 'GET_ALL_CRICKETS'})
  }

  getPet = () => {
    console.log('get pet');
    this.props.dispatch( {type:'GET_PET'} );
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.store.crickets)}
        <h2>STATISTICS</h2>
        <p>{this.props.store.pet.name}'s weight: {this.props.store.pet.weight} grams</p>
        <p>TOTAL CRICKETS EATEN BY ALL Z-PETS: {this.props.store.crickets.sum}</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(InfoPage);
