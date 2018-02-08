import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Redirect, Route } from 'react-router'
import LoginPage from './containers/LoginPage.js';
import HomePage from './containers/HomePage.js';
import SignUpPage from './containers/SignUpPage.js';
import NavBar from './containers/NavBar.js';
import Auth from './Auth';
import CarouselPage from './components/Carousel';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { userActions } from './actions';
import { connect } from 'react-redux';

// remove tap delay, essential for MaterialUI to work properly
const history = createHistory();
injectTapEventPlugin();
const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <ConnectedRouter history={history}>
        <div>
          <NavBar/>
          <Route exact path = '/' component = {Auth.isUserAuthenticated()?
            CarouselPage : HomePage
          }/>
          <Route exact path = '/signup' component = {SignUpPage}/>
          <Route exact path = '/login' component = {LoginPage}/>
          <Route exact path="/logout"  render={() => (<Redirect to="/"/>)}/>
        </div>
    </ConnectedRouter>
    </MuiThemeProvider>
  )
}
function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email,password) => {
      dispatch(userActions.login(email,password))
    },
    updateSignInForm:(key, value) =>{
      dispatch(userActions.updateSignInForm(key, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
