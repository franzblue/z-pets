import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Meter extends Component {


  render() {
    return (
      <div>
        {/* 6/6 */}
            <div className="meter">
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Meter);