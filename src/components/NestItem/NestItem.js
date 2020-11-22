import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';


class NestItem extends Component {
  state = {
    awake: true
  }


    componentDidMount = () => {
        this.getPet();
        this.hungeryFunction();
      }

      hungeryFunction = () => {
        setTimeout(() => {
          this.props.dispatch( {type:'LOWER_FOOD', payload: this.props.store.pet.id})}, 6000);
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
            swal("100/100", `Looks like ${this.props.store.pet.name} is full!`, "warning", {
            button: "Aww yiss!",
        });
        }
      }

      goToSleep = () => {
        console.log('clicked sleepy');
        this.setState(  {
          awake: !this.state.awake
        }
        );
        setTimeout(() => {
          this.props.dispatch( {type:'GO_SLEEP', payload: this.props.store.pet.id})}, 6000);
      }
      
      petAnimation = () => {
        if(this.state.awake === true) {
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
        }       
        } else if(this.state.awake === false){
            // need to return JSX
            return  <div className="sleepy"></div>;
        }
    }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.awake)}
          {JSON.stringify(this.props.store.pet)}
          <div className="petAnimation">
            { this.petAnimation() }
            {this.state.awake === true ?
            <img src="https://mcdn.wallpapersafari.com/medium/13/67/75Wmsl.jpg" alt="rolling plains"/>
            :
            <img src="https://images.fineartamerica.com/images-medium-large-5/a-scenic-night-in-binbrook-kerry-ann-lecky-hepburn.jpg" alt="rolling plains at night"/>
            }
          </div>
        
        <div>
          <p>Z-Pet: {this.props.store.pet.name}</p>
          <p>Owner: {this.props.store.user.username}</p>
          <div>
            <button className="btn" onClick={this.feedPet}>Feed</button>
            {this.state.awake === true ?
            <button className="btn" onClick={this.goToSleep}>Sleep</button>
            :
            <button className="btn" onClick={this.goToSleep}>Awaken</button>
            }
          </div>
          {this.props.store.pet.health === 100 ?
          <p>{this.props.store.pet.name} is stuffed! {this.props.store.pet.health}/100</p>
          :
          <p>{this.props.store.pet.name} is kinda hungery... {this.props.store.pet.health}/100</p>
          }
          {this.props.store.pet.energy === 100 ?
          <p>{this.props.store.pet.name} is full of energy! Let's go for a walk! {this.props.store.pet.energy}/100</p>
          :
          <p>ENERGY: {this.props.store.pet.energy}/100</p>
          }    
        </div>
      </div> 
    );
  }
}

export default connect(mapStoreToProps)(NestItem);