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
               
                // this.props.disptach( {type:'DELETE_PET'});

                // need to dispatch this delete request
 
                // axios.delete(`/feedback/${this.props.item.id}`).then((response) => {
                //     console.log('DELETE back from server', response);
                //     this.props.getDB();
                //     }).catch((error) => {
                //         console.log('DELETE error', error);
                //     })
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




{/* <td>{this.props.store.pet.id}</td>
<td>{this.props.store.pet.name}</td>
<td>{this.props.store.pet.birthday}</td>
<td>{this.props.store.pet.temperament}</td>
<td>{this.props.store.pet.health}</td>
<td>{this.props.store.pet.energy}</td>
<td>{this.props.store.pet.user_id}</td> */}


// <td>{this.props.store.admin.id}</td>
// <td>{this.props.store.admin.name}</td>
// <td>{this.props.store.admin.birthday}</td>
// <td>{this.props.store.admin.temperament}</td>
// <td>{this.props.store.admin.health}</td>
// <td>{this.props.store.admin.energy}</td>
// <td>{this.props.store.admin.user_id}</td>