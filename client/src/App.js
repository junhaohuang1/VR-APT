import React from 'react';
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router'
import { Redirect} from 'react-router-dom'
import LoginPage from './containers/LoginPage.js';
import HomePage from './containers/HomePage.js';
import SignUpPage from './containers/SignUpPage.js';
import NavBar from './containers/NavBar.js';
import CarouselPage from './components/Carousel';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';


// remove tap delay, essential for MaterialUI to work properly
const history = createHistory();
injectTapEventPlugin();
const App = (props) => (
  <ConnectedRouter history={history}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <NavBar/>
          <Switch>
            <Route exact path = '/' component = {props.loggedIn?
              CarouselPage : HomePage
            }/>
            <Route exact path = '/signup' component = {SignUpPage}/>
            <Route exact path = '/login' component = {LoginPage}/>
            <Route exact path="/logout"  render={() => (<Redirect to="/"/>)}/>
          </Switch>
      </div>
    </MuiThemeProvider>
  </ConnectedRouter>
)
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
