import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import HealthMeter from '../HealthMeter/HealthMeter';
import EnergyMeter from '../EnergyMeter/EnergyMeter';
import swal from 'sweetalert';


class NestItem extends Component {
  state = {
    awake: true,
    curTime: null,
    ageIntervalId: null,
    energyId: null
  }

    componentDidMount = () => {
        this.getPet();
        this.hungeryFunction();
        this.checkHealth();
        this.agePet();
        this.isSleeping();
        this.tirePet();
        this.clock();
        this.petDeath();
      }

      componentWillUnmount = () => {
        clearInterval(this.state.ageIntervalId);
        clearInterval(this.state.energyId);
      }

      petDeath= () => {
        if(this.props.store.pet.happy < 10 || this.props.store.pet.age > 999) {
          this.props.history.push('/graveyard');
        }
      }

      clock = () => {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }

      tirePet = () => {
        let energyInterval = setInterval(() => {
          if(this.state.awake === true) {
            this.props.dispatch( {type:'WALK', payload: this.props.store.pet.id})}
          }, 10000);
          this.setState( {
            energyId: energyInterval
          })
        }

      agePet = () => {
        let ageInterval = setInterval(() => {
          this.props.dispatch( {type:'AGE_PET', payload: this.props.store.pet.id})}, 1000);
          this.setState( {
            ageIntervalId: ageInterval
          })
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
          this.props.dispatch( {type:'MINUS_HEALTH', payload: this.props.store.pet.id})
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
        this.poopFunction();
        if(this.state.awake === true) {
          if(this.props.store.pet.health !== 100) {
            console.log('clicked feed');
            this.props.dispatch( {type:'FEED', payload: this.props.store.pet.id} );
          } else {
              swal("100/100", `Looks like ${this.props.store.pet.name} is full!`, {
              button: "Aww yiss!",
          });
          } 
        }
        else {
          swal("Shhhhh...", `Looks like ${this.props.store.pet.name} is sleeping!`, {
            button: "Cute lil sleepy head",
        });
      }
      }

      cleanPoo = () => {
        this.props.dispatch( {type:'POO', payload: this.props.store.pet.id} );
      }

      goToSleep = () => {
        this.setState(  {
          awake: !this.state.awake
        }
        );
      }

      fakeFunction = () => {
        swal("Shhhhh...", `Looks like ${this.props.store.pet.name} is sleeping!`, {
          button: "Cute lil sleepy head",
      });
      }

      poopFunction = () => {
        // baby pets poop twice as fast
        if(this.props.store.pet.age < 100) {
          if(this.props.store.pet.crickets_eaten % 5 === 0) {
            return <div className="poop"></div>;
          }
        }
        else {
          if(this.props.store.pet.crickets_eaten % 10 === 0) {
            return <div className="poop"></div>;
          }
        }
    }
      
      petAnimation = () => {
        if(this.state.awake === true) {
          if(this.props.store.pet.age === 500) {
            swal('Hey your pet is getting really old.')
            return <div className="old"></div>;
          }
            else if(this.props.store.pet.age > 500) {
              return <div className="old"></div>;
          }
            else if(this.props.store.pet.age > 100) {
              if(this.props.store.pet.temperament === "Happy") {

                  return <div className="happy"></div>;
              } else if(this.props.store.pet.temperament === "Sad") {

                  return <div className="sad"></div>;
              } else if(this.props.store.pet.temperament === "Angry") {

                  return <div className="angry"></div>;
              } else if(this.props.store.pet.temperament === "Aloof") {

                  return <div className="aloof"></div>;
          }
        }
          else if (this.props.store.pet.age === 100) {
            swal("Wow!", `${this.props.store.pet.name} is evolving!`, {
              button: "Life is so amazing",
          });
          }
          else if (this.props.store.pet.age <= 100) {
            return <div className="baby"></div>;
          }
        } else if(this.state.awake === false){

            return  <div className="sleepy"></div>;
        }
    }

    walkPet = () => {
      if(this.props.store.pet.energy !== 0) {
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
        <div className="meterName">
        <p>{this.props.store.pet.name}</p>
        <p>Current Time: <br/>
        {this.state.curTime}</p>
        </div>
        
        {/* {JSON.stringify(this.state.awake)}
          {JSON.stringify(this.props.store.pet)} */}
          <div className="container-fluid">
            <div className="petAnimation">
              { this.petAnimation() }
              { this.poopFunction() }
              {this.state.awake === true ?
              <img src={this.props.store.image.name} alt={this.props.store.image.alt}/>
              :
              <img id="night" src="images/night.jpg" alt="starry night"/>
              }
            </div>
          </div>
        <div>
          <div className="buttons">
            <br/>
              {this.state.awake === true ?
              <button className="btn" onClick={this.walkPet}>Walk</button>
              :
              <button className="btn" onClick={this.fakeFunction}>Walk</button>
              }
            {this.props.store.pet.crickets_eaten % 10 === 0 ?
            <button className="btn" onClick={this.cleanPoo}>Clean Poo</button>
            :
            <button className="btn" onClick={this.feedPet}>Eat</button>
            }
            
            {this.state.awake === true ?
            <button className="btn" onClick={this.goToSleep}>Sleep</button>
            :
            <button className="btn" onClick={this.goToSleep}>Awaken</button>
            }
          </div>
          <div className="meterName">
            {this.props.store.pet.health === 100 ?
            <p>{this.props.store.pet.name} is stuffed!</p>
            :
            <p>{this.props.store.pet.name} is kinda hungry...</p>
            }
          </div>
          <HealthMeter />
          <div className="meterName">
            {this.props.store.pet.energy === 100 ?
            <p>{this.props.store.pet.name} is full of energy! Let's go for a walk!</p>
            :
            <p>ENERGY:</p>
            } 
          </div>
          <EnergyMeter />
        </div>
        <div>
          <p>
            <br/>
          </p>
        </div>
      </div> 
    );
  }
}

export default connect(mapStoreToProps)(NestItem);