import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class HealthMeter extends Component {
        // 6/6
    healthMeter = () => {
        if(this.props.store.pet.health === 100) {
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
        else if(this.props.store.pet.health < 100 && this.props.store.pet.health > 79 ) {
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
        else if(this.props.store.pet.health < 80 && this.props.store.pet.health > 59 ) {
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
        else if(this.props.store.pet.health < 59 && this.props.store.pet.health > 39 ) {
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
        else if(this.props.store.pet.health < 39 && this.props.store.pet.health > 19 ) {
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

        else if(this.props.store.pet.health < 19 && this.props.store.pet.health > 9 ) {
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
        else if(this.props.store.pet.health < 19) {
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
        { this.healthMeter() }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HealthMeter);