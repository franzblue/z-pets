import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminItem from '../AdminItem/AdminItem';
import AdminUser from '../AdminUser/AdminUser';


class Admin extends Component {

  componentDidMount = () => {
    this.adminGetPet();
    this.adminGetUser();
  }

  adminGetPet = () => {
    console.log('admin GET pet');
    this.props.dispatch( {type:'GET_ADMIN_PET'} );
  }
  
  adminGetUser = () => {
    console.log('admin GET pet');
    this.props.dispatch( {type:'GET_ADMIN_USER'} );
  }

  render() {
    return (
        <div>
                                    <p>current z-pet: {JSON.stringify(this.props.store.pet)}</p>
                                    <p>all z-pets: {JSON.stringify(this.props.store.admin)}</p>
            <h2>Z-Pet Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Temperament</th>
                        <th>Health</th>
                        <th>Energy</th>
                        <th>Age</th>
                        <th>Weight</th>
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
                    <tr>
                        <td className="foot" colSpan="9"></td>
                    </tr>
                </tfoot>
            </table>
                                    <p>current user: {JSON.stringify(this.props.store.user)}</p>
                                    <p>all users: {JSON.stringify(this.props.store.adminUser)}</p>
            <h2>User Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Last Logged</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.store.adminUser.map( (item, index) => {
                    return(
                        <AdminUser item={item} key={index}/>
                    )
                })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="foot" colSpan="5"></td>
                    </tr>
                </tfoot>
            </table>
            <p>*Small disclaimer: User's Z-Pet must be deleted first, before the User will be able to be deleted.</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);