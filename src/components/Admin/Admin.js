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

    sortById = () => {
      console.log('clicked sort ID');
      this.props.dispatch( {type:'SORT_USER_ID'} );
    }

    sortByUser = () => {
    console.log('clicked sort user');
    this.props.dispatch( {type:'SORT_USER_USER'} );
    }

    sortByLastLog = () => {
        console.log('clicked sort last log in');
        this.props.dispatch( {type:'SORT_USER_LOG'} );
    }

    sortByAdmin = () => {
        console.log('clicked sort admin');
        this.props.dispatch( {type:'SORT_USER_ADMIN'} );
    }

  render() {
    return (
        <div>
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
                        <td className="foot" colSpan="10"></td>
                    </tr>
                </tfoot>
            </table>
            <h2>User Table</h2>
            <table>
                <thead>
                    <tr>
                        <th onClick={this.sortById}>Id</th>
                        <th onClick={this.sortByUser}>Username</th>
                        <th onClick={this.sortByLastLog}>Last Logged</th>
                        <th onClick={this.sortByAdmin}>Admin</th>
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Admin);