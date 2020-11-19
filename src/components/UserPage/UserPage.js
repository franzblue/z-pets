import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/1');
  }

  // not sure why I need to get pet here
  // componentDidMount = () => {
  //   this.getPet();
  // }

  // getPet = () => {
  //   console.log('get pet');
  //   this.props.dispatch( {type:'GET_PET'} );
  // }
  
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <div className="description">
                <p>This describes the whole app.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra
              lacus ut ex molestie blandit. Etiam et turpis sit amet risus
              mollis interdum. Suspendisse et justo vitae metus bibendum
              fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
              vitae consequat odio elementum eget. Praesent efficitur eros vitae
              nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac
              dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum
              fringilla nibh a luctus. Duis a sapien metus.
            </p>

            <p>
              Praesent consectetur orci dui, id elementum eros facilisis id. Sed
              id dolor in augue porttitor faucibus eget sit amet ante. Nunc
              consectetur placerat pharetra. Aenean gravida ex ut erat commodo,
              ut finibus metus facilisis. Nullam eget lectus non urna rhoncus
              accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
              euismod, augue at condimentum rhoncus, massa lorem semper lacus,
              sed lobortis augue mi vel felis. Duis ultrices sapien at est
              convallis congue.
            </p>

            <p>
              Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
              Suspendisse posuere dapibus maximus. Aliquam vitae felis libero.
              In vehicula sapien at semper ultrices. Vivamus sed feugiat libero.
              Sed sagittis neque id diam euismod, ut egestas felis ultricies.
              Nullam non fermentum mauris. Sed in enim ac turpis faucibus
              pretium in sit amet nisi.
            </p>
          </div>
        <button onClick={this.nextPage}>Ready to Choose Pet!</button>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
