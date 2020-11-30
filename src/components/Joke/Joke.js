import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Joke extends Component {
  state = {
    object: '',
  };

  tellAJoke = () => {
    swal({
        title: "Wanna hear a joke?",
        text: `Why did the programmer quit their job?`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
          swal("Because they didn’t get arrays!", {
            icon: "success",
          });
        } else {
          swal("Because they didn’t get arrays!");
        }
      });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.tellAJoke}>Ha Ha Ha</button>
{/* 8/8 */}
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
<div className="fullBar">
  <p></p>
</div>
<div className="fullBar">
  <p></p>
</div>
</div>

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
<div className="fullBar">
  <p></p>
</div>
<div className="emptyBar">
  <p></p>
</div>
</div>

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
<div className="emptyBar">
  <p></p>
</div>
<div className="emptyBar">
  <p></p>
</div>
</div>

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

<div className="meter">
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
<div className="emptyBar">
  <p></p>
</div>
<div className="emptyBar">
  <p></p>
</div>
</div>

<div className="meter">
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
<div className="emptyBar">
  <p></p>
</div>
<div className="emptyBar">
  <p></p>
</div>
</div>

<div className="meter">
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
<div className="emptyBar">
  <p></p>
</div>
<div className="emptyBar">
  <p></p>
</div>
</div>
{/* 0/8 */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Joke);

// <div>

// <div className="fullBar">
//   <p></p>
// </div>

// <div className="emptyBar">
//   <p></p>
// </div>


// {/* 8/8 */}
// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="fullBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>

// <div className="meter">
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// <div className="emptyBar">
//   <p></p>
// </div>
// </div>
// {/* 0/8 */}

// </div>