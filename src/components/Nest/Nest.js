import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';


class NestItem extends Component {
  state = {
    awake: true,
    curTime: null,
  }


    componentDidMount = () => {
        this.getPet();
        this.hungeryFunction();
        this.checkHealth();
        this.agePet();
        this.isSleeping();
        this.tirePet();
        this.clock();
      }

      clock = () => {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }

      tirePet = () => {
        setInterval(() => {
          if(this.state.awake === true) {
            this.props.dispatch( {type: 'WALK', payload: this.props.store.pet.id})}
          }, 13000);
        }

      agePet = () => {
        setInterval(() => {
          this.props.dispatch( {type:'AGE_PET', payload: this.props.store.pet.id})}, 1000);
      }
   

      hungeryFunction = () => {
        setInterval(() => {
          if(this.state.awake === true) {
          this.props.dispatch( {type:'LOWER_FOOD', payload: this.props.store.pet.id})}
        }, 6000);
      }

      checkHealth = () => {
        console.log('in check health');
        if(this.props.store.pet.health < 10) {
          this.props.dispatch( {type: 'MINUS_HEALTH', payload: this.props.store.pet.id})
        }
      }

      getPet = () => {
        console.log('get pet');
        this.props.dispatch( {type:'GET_PET'} );
      }

      isSleeping = () => {
        console.log('sleeping');
        setInterval(() => {
          if(this.state.awake === false) {
            this.props.dispatch( {type:'GO_SLEEP', payload: this.props.store.pet.id})}
        }, 2000);
      }

      feedPet = () => {
        if(this.state.awake === true) {
          if(this.props.store.pet.health !== 100) {
            console.log('clicked feed');
            this.props.dispatch( {type: 'FEED', payload: this.props.store.pet.id} );
          } else {
              swal("100/100", `Looks like ${this.props.store.pet.name} is full!`, "warning", {
              button: "Aww yiss!",
          });
          } 
        }
        else {
          swal("Shhhhh...", `Looks like ${this.props.store.pet.name} is sleeping!`, "info", {
            button: "Cute lil sleepy head",
        });
      }
      }

      goToSleep = () => {
        console.log('clicked sleepy');
        this.setState(  {
          awake: !this.state.awake
        }
        );
      }

      fakeFunction = () => {
        swal("Shhhhh...", `Looks like ${this.props.store.pet.name} is sleeping!`, "info", {
          button: "Cute lil sleepy head",
      });
      }
      
      petAnimation = () => {
        if(this.state.awake === true) {
          if(this.props.store.pet.age > 100) {
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
        }
          else if (this.props.store.pet.age === 100) {
            swal("Wow!", `${this.props.store.pet.name} is evolving!`, "info", {
              button: "Life is so amazing",
          });
          }
          else if (this.props.store.pet.age <= 100) {
            return <div className="baby"></div>;
          }
        } else if(this.state.awake === false){
            // need to return JSX
            return  <div className="sleepy"></div>;
        }
    }

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
      <div className="petInfo">
        <p>Current Time: {this.state.curTime}</p>
        {JSON.stringify(this.state.awake)}
          {JSON.stringify(this.props.store.pet)}
          <div className="container-fluid">
            <div className="petAnimation">
              { this.petAnimation() }
              {this.state.awake === true ?
              <img src="https://mcdn.wallpapersafari.com/medium/13/67/75Wmsl.jpg" alt="rolling plains"/>
              :
              <img src="https://images.fineartamerica.com/images-medium-large-5/a-scenic-night-in-binbrook-kerry-ann-lecky-hepburn.jpg" alt="rolling plains at night"/>
              }
            </div>
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
        {this.state.awake === true ?
        <button className="btn" onClick={this.walkPet}>Walk</button>
        :
        <button className="btn" onClick={this.fakeFunction}>Walk</button>
        }
      </div> 
    );
  }
}

export default connect(mapStoreToProps)(NestItem);