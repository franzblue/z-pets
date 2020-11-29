import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

class UserPage extends Component {
 
  componentDidMount = () => {
    this.getPet();
  }

  getPet = () => {
    console.log('get pet', this.props.store.pet);
    this.props.dispatch( {type:'GET_PET'} );
  }

  nextPage = () => {
    if(this.props.store.pet.name === '' || this.props.store.pet.name === null || this.props.store.pet.name === undefined) {
      console.log('clicked');
      this.props.dispatch({ type: 'LAST_LOGGED', payload: this.props.store.user.id})
      this.props.history.push('/1');
    } 
    else if (this.props.store.pet.name !== '' || this.props.store.pet.name !== null || this.props.store.pet.name !== undefined) {
        swal("Don't you already have a Pet?", "Go play with your Pet!", "info");
    }
  }

  otherPage = () => {
    console.log('clicked');
    if(this.props.store.pet.name === '' || this.props.store.pet.name === null || this.props.store.pet.name === undefined) {
      swal("You don't have a Z-Pet...", "Go pick one out!", "info");
    }
    else {
          this.props.dispatch({ type: 'LAST_LOGGED', payload: this.props.store.user.id})
    this.props.history.push('/nest');
    }
  }


  
  render() {
    return (
      <div className="petInfo">
        {JSON.stringify(this.props.store.pet)}
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <div className="petAnimation">
          <img src="images/plains.jpg"></img>
        </div>
        <br/>
        {this.props.store.pet.name === undefined ?
        <button className="btn" onClick={this.nextPage}>Ready to choose Pet!</button>
        :
        <button className="btn" onClick={this.otherPage}>Go hang out with your Pet!</button>
        }
        <br/>   
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
