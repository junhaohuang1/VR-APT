import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router} from 'react-router-dom';
import { Redirect, Route } from 'react-router'
import LoginPage from './containers/LoginPage.js';
import HomePage from './containers/HomePage.js';
import SignUpPage from './containers/SignUpPage.js';
import NavBar from './containers/NavBar.js';
import Auth from './Auth';
import CardPage from './containers/CardPage'
import Footer from './components/Footer'


// remove tap delay, essential for MaterialUI to work properly
// <Router history={browserHistory} routes={routes} />
//
injectTapEventPlugin();
const App = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>
        <div>
          <NavBar/>
          <Route exact path = '/' component = {Auth.isUserAuthenticated()?
            CardPage : HomePage
          }/>
          {/* <Route exact path = '/' component = {Launch}/> */}
          <Route exact path = '/signup' component = {SignUpPage}/>
          <Route exact path = '/login' component = {LoginPage}/>
          <Route exact path="/logout"  render={() => (<Redirect to="/"/>)}/>
          <Footer className = 'footer'/>
        </div>
    </Router>
    </MuiThemeProvider>
  )
}

export default App;
