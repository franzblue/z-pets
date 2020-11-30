import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EnergyMeter extends Component {
        // 6/6
    energyMeter = () => {
        if(this.props.store.pet.energy === 100) {
            return <div className="meter">
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            </div>
        }
        else if(this.props.store.pet.energy < 100 && this.props.store.pet.energy > 79 ) {
            return <div className="meter">
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
              <div className="emptyBar">
                <p></p>
              </div>
          </div>
        }
        else if(this.props.store.pet.energy < 80 && this.props.store.pet.energy > 59 ) {
            return <div className="meter">
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
          </div>          
        }
        else if(this.props.store.pet.energy < 59 && this.props.store.pet.energy > 39 ) {
            return <div className="meter">
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
          </div>
        }
        else if(this.props.store.pet.energy < 39 && this.props.store.pet.energy > 19 ) {
            return <div className="meter">
            <div className="fullBar">
              <p></p>
            </div>
            <div className="fullBar">
              <p></p>
            </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
          </div>
        }

        else if(this.props.store.pet.energy < 19 && this.props.store.pet.energy > 9 ) {
            return <div className="meter">
            <div className="fullBar">
              <p></p>
            </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
              <div className="emptyBar">
                <p></p>
              </div>
          </div>
        }
        else if(this.props.store.pet.energy < 19) {
            return <div className="meter">
            <div className="emptyBar">
              <p></p>
            </div>
            <div className="emptyBar">
              <p></p>
            </div>
            <div className="emptyBar">
              <p></p>
            </div>
            <div className="emptyBar">
              <p></p>
            </div>
            <div className="emptyBar">
              <p></p>
            </div>
            <div className="emptyBar">
              <p></p>
            </div>
        </div>
        }
    }


  render() {
    return (
      <div>
        { this.energyMeter() }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EnergyMeter);