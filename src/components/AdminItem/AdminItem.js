import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';



class AdminItem extends Component {

    // DELETE request to delete Z-Pet
    // sweetalert to verify with user
    // targets Pet id value
    delete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, this Z-Pet will be lost forever.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                console.log('clicked delete', this.props.item.id);     
                this.props.dispatch( {type:'DELETE_PET', payload: this.props.item.id} );
                    swal("This feedback has been deleted!", {
                        icon: "success",
                    });
            }
            else {
                swal("This feedback was not deleted.");
              }
        });
    } 

  render() {
    return (
      <tr>
            <td>{this.props.item.id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.birthday}</td>
            <td>{this.props.item.temperament}</td>
            <td>{this.props.item.health}</td>
            <td>{this.props.item.energy}</td>
            <td>{this.props.item.user_id}</td>
            <td onClick={this.delete}><span role="img" aria-labelledby="trash bin">🗑️ </span></td>
      </tr>
    );
  }
}

export default connect(mapStoreToProps)(AdminItem);