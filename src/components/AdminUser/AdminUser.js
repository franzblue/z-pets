import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';



class Test extends Component {

    // DELETE request to delete Z-Pet
    // sweetalert to verify with user
    // targets Pet id value
    delete = () => {
        swal({
            title: "Are you sure?",
            text: `Once deleted, ${this.props.item.username} will be lost forever.`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                console.log('clicked delete', this.props.item.id);     
                this.props.dispatch( {type:'DELETE_USER', payload: this.props.item.id} );
                    swal(`${this.props.item.username} has been deleted!`, {
                        icon: "success",
                    });
            }
            else {
                swal(`${this.props.item.username} was not deleted.`);
              }
        });
    } 

  render() {
    return (
      <tr>
            <td>{this.props.item.id}</td>
            <td>{this.props.item.username}</td>
            <td>{this.props.item.password}</td>
            <td onClick={this.delete}><span role="img" aria-labelledby="trash bin">🗑️ </span></td>
      </tr>
    );
  }
}

export default connect(mapStoreToProps)(Test);