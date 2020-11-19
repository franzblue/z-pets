import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminItem from '../AdminItem/AdminItem';


class Admin extends Component {

    state = {
        object: ''
    }

  componentDidMount = () => {
    this.adminGet();
    this.setup();
  }

  setup = () => {
    this.setState( {
        object: this.props.store.admin
        });
    console.log(this.state.object);
  }

  adminGet = () => {
    console.log('admin GET');
    this.props.dispatch( {type:'GET_ADMIN'} );
  }

  render() {
    return (
      <div>
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Temperament</th>
                        <th>Health</th>
                        <th>Energy</th>
                        <th>User_Id</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.store.admin.map( (item, index) => {
                    return(
                        <AdminItem item={item} key={index}/>
                    )
                })}
                </tbody>
                <tfoot>
                    <tr id="foot">
                        <td colSpan="8"></td>
                    </tr>
                </tfoot>
            </table>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);