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
import CarouselPage from './components/Carousel'
// import Footer from './components/Footer'


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
            CarouselPage : HomePage
          }/>
          <Route exact path = '/signup' component = {SignUpPage}/>
          <Route exact path = '/login' component = {LoginPage}/>
          <Route exact path="/logout"  render={() => (<Redirect to="/"/>)}/>
<<<<<<< 4e1657d354e868ca2aceaf4720a2b6c80ee3f07b
          {/* <Footer /> */}
=======

>>>>>>> added in nav bar and fixed out log
        </div>
    </Router>
    </MuiThemeProvider>
  )
}
export default App;
