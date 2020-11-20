import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

class NestItem extends Component {

    componentDidMount = () => {
        this.getPet();
      }
    
      getPet = () => {
        console.log('get pet');
        this.props.dispatch( {type:'GET_PET'} );
      }

      feedPet = () => {
        if(this.props.store.pet.health !== 100) {
          console.log('clicked feed');
          this.props.dispatch( {type: 'FEED', payload: this.props.store.pet.id} );
        } else {
            swal("100/100", "Looks like your Z-Pet is full!", "warning", {
            button: "Aww yiss!",
        });
        }
      }

      petAnimation = () => {
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
          <div className="petAnimation">
            { this.petAnimation() }
            <img src="https://mcdn.wallpapersafari.com/medium/13/67/75Wmsl.jpg" alt="rolling plains"/>
          </div>
          
         

        <p>Owner: {this.props.store.user.username}</p>
        <p>Name: {this.props.store.pet.name}</p>
        <button onClick={this.feedPet}>Feed</button>
        {this.props.store.pet.health === 100 ?
        <p>{this.props.store.pet.name} is stuffed! {this.props.store.pet.health}/100</p>
        :
        <p>{this.props.store.pet.name} is kinda hungery... {this.props.store.pet.health}/100</p>
        }   
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NestItem);