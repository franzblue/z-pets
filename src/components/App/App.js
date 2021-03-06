import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import PetSelectOne from '../PetSelectOne/PetSelectOne';
import PetSelectTwo from '../PetSelectTwo/PetSelectTwo';
import PetSelectThree from '../PetSelectThree/PetSelectThree';
import PetSelectFour from '../PetSelectFour/PetSelectFour';
import Admin from '../Admin/Admin';
import Nest from '../Nest/Nest';
import Joke from '../Joke/Joke';
import Walking from '../Walking/Walking';
import Death from '../Death/Death';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/user"
            />

            <ProtectedRoute 
              exact 
              path="/1" 
              component={PetSelectOne}
            />

            <ProtectedRoute 
              exact 
              path="/2" 
              component={PetSelectTwo}
            />

            <ProtectedRoute 
              exact 
              path="/3" 
              component={PetSelectThree}
            />

            <ProtectedRoute 
              exact 
              path="/4" 
              component={PetSelectFour}
            />

            <ProtectedRoute
              exact 
              path="/nest" 
              component={Nest} 
            />

            <ProtectedRoute
              exact 
              path="/admin" 
              component={Admin} 
            />

            <ProtectedRoute
              exact 
              path="/walking" 
              component={Walking} 
            />

            <ProtectedRoute
              exact 
              path="/joke" 
              component={Joke} 
            />

            <ProtectedRoute
              exact 
              path="/graveyard" 
              component={Death} 
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
