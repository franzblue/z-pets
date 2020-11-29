import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

class PetThree extends Component {
  state = {
    temperament: 'Angry',
    name: ''
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/4');
  }

  prevPage = () => {
    console.log('clicked');
    this.props.history.push('/2');
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
            <p className='angry'></p>
            <img src="images/plains.jpg" alt="rolling plains"/>
          </div>
          <div className="petInfo2">
            <h2>{this.state.temperament}</h2>
            <p>When they channel their emotions properly they can be very passionate.</p>
            <p>Do not be frightened of angry Z-Pets!</p>
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

export default connect(mapStoreToProps)(PetThree);
