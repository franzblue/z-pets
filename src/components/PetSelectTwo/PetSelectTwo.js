import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../App/App.css';
import swal from 'sweetalert';

class PetTwo extends Component {
  state = {
    temperament: 'Sad',
    name: ''
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/3');
  }

  prevPage = () => {
    console.log('clicked');
    this.props.history.push('/1');
  }

  selectPet = () => {
    if(this.state.name === '' || this.state.name === null || this.state.name === undefined) {
      swal("Oh snap!", "Please enter a name.", "error");
    }
    else {
            console.log('selected', this.state.temperament);
      this.props.dispatch( {type: 'SELECT_PET', payload: this.state} );
      swal("Yay!", "Congrats on the new pet!", "success");
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
        <div className="petInfo">
          <div className="petAnimation">
            <p className='sad'></p>
            <img src={this.props.store.image.name} alt={this.props.store.image.alt}/>
          </div>
          <div className="petInfo2">
            <h2>{this.state.temperament}</h2>
            <p>Although this Z-Pet may look down, that is only because it's heart is so big.</p>
            <p>Is it possible to love something too much?</p>
          </div>
          <i class="arrow left"></i>
          <button className="btn" onClick={this.prevPage}>View previous pet</button>
          <button className="btn" onClick={this.nextPage}>View next pet</button>
          <i class="arrow right"></i>
          <br/><br/>
          <button className="btn" onClick={this.selectPet}>Select this Pet!</button>
          <br/>
          <input onChange={(event) => this.handleChange(event, 'name')} type="text" placeholder="Give it a name!"></input>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetTwo);