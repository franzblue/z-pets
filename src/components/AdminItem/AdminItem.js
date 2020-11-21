import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

class AdminItem extends Component {

    // DELETE request to delete Z-Pet
    // sweetalert to verify with user
    // targets Pet id value
    delete = () => {
        if(this.props.store.user.admin === true) {
                swal({
            title: "Are you sure?",
            text: `Once deleted, ${this.props.item.name} will be lost forever.`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                console.log('clicked delete', this.props.item.id);     
                this.props.dispatch( {type:'DELETE_PET', payload: this.props.item.id} );
                    swal(`${this.props.item.name} has been deleted!`, {
                        icon: "success",
                    });
            }
            else {
                swal(`${this.props.item.name} was not deleted.`);
              }
        });
        } else {
            swal("WARNING!", "You are not authorized to delete data.", "warning");
        }
    } 

  render() {
    return (
      <tr>
            <td>{this.props.item.id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.birthday.substring(0, 10)}</td>
            <td>{this.props.item.temperament}</td>
            <td>{this.props.item.health}</td>
            <td>{this.props.item.energy}</td>
            <td>{this.props.item.user_id}</td>
            <td className="trash" onClick={this.delete}><span role="img" aria-labelledby="trash bin">🗑️ </span></td>
      </tr>
    );
  }
}

export default connect(mapStoreToProps)(AdminItem);