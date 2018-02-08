import React from 'react';
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router'
import { Redirect, Router} from 'react-router-dom'
import LoginPage from './containers/LoginPage.js';
import HomePage from './containers/HomePage.js';
import SignUpPage from './containers/SignUpPage.js';
import NavBar from './containers/NavBar.js';
import CarouselPage from './components/Carousel';
import createHistory from 'history/createBrowserHistory';
const history = createHistory()

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
const App = (props) => {
  return(
  <Router history={history}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path = '/' component = {props.loggedIn?
            CarouselPage : HomePage
          }/>
          <Route path = '/signup' component = {SignUpPage}/>
          <Route path = '/login' component = {LoginPage}/>
          <Route path="/logout"  render={() => (<Redirect to="/"/>)}/>
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
  )
}
function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
