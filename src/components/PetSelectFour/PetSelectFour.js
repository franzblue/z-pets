import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetFour extends Component {
  state = {
    temperament: 'Aloof',
    name: ''
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/user');
  }

  prevPage = () => {
    console.log('clicked');
    this.props.history.push('/3');
  }

  selectPet = () => {
    if(this.state.name === '' || this.state.name === null || this.state.name === undefined) {
      alert('Please enter a name.');
    }
    else {
            console.log('selected', this.state.temperament);
      this.props.dispatch( {type: 'SELECT_PET', payload: this.state} );
      alert('Congrats on the new pet!');
      this.props.history.push('/nest');
    }
  }

  handleChange = (event, typeParam) => {
    this.setState( {
        ...this.state,
        [typeParam]: event.target.value
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <h2>{this.state.temperament}</h2>
        <p className="aloof"></p>
        <p>How cute!</p>
        <p>This lil guy has no idea what's going on, huh?</p>
        <button onClick={this.prevPage}>View previous pet</button>
        <input onChange={(event) => this.handleChange(event, 'name')} type="text" placeholder="Give it a name!"></input>
        <button onClick={this.nextPage}>Back to HomePage</button>
        <br/>
        <button onClick={this.selectPet}>Select this Pet!</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetFour);
