import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';



class Test extends Component {

    // DELETE request to delete Z-Pet
    // sweetalert to verify with user
    // targets Pet id value
    delete = () => {
      if(this.props.store.user.admin === true) {
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
      } else {
        swal("WARNING!", "You are not authorized to delete data.", "warning");
      }
    }

    makeAdmin = () => {
      console.log('clicked makeAdmin');
      if(this.props.store.user.admin === true) {
        swal({
          title: `Make ${this.props.item.username} an admin?`,
          text: `Once approved, ${this.props.item.username} will have full admin authority.`,
          icon: "info",
          buttons: true,
          dangerMode: true,
        })
        .then((willPromote) => {
          if (willPromote) {
              console.log('clicked approve', this.props.item.id);     
              this.props.dispatch( {type: 'MAKE_ADMIN', payload: this.props.item.id} );
                  swal(`${this.props.item.username} has been promoted!`, {
                      icon: "success",
                  });
      }
      else {
        swal(`${this.props.item.username} was not promoted.`);
      }
    });
     }else {
        swal("WARNING!", "You are not authorized to promote users.", "warning");
  }
}

  render() {
    return (
      <tr>
            <td>{this.props.item.id}</td>
            <td>{this.props.item.username}</td>
            <td>{this.props.item.last_logged.substring(0, 16)}</td>
            {this.props.item.admin === true ?
            <td className="admin">{this.props.item.admin.toString()}</td>
            :
            <td className="notAdmin" onClick={this.makeAdmin}>{this.props.item.admin.toString()}</td>
            }  
            <td className="trash" onClick={this.delete}><span role="img" aria-labelledby="trash bin">🗑️ </span></td>
      </tr>
    );
  }
}

export default connect(mapStoreToProps)(Test);