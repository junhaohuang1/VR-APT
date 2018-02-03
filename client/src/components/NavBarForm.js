import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../Auth';
//onClick={props.logout()}

const NavBarForm = props => (
  <nav className="navbar navbar-default">
    <div className="navbar-header">
        <a className="navbar-brand" href="/">React App</a>
      {Auth.isUserAuthenticated() ? (
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a href="/logout" onClick={Auth.deauthenticateUser} >Log out</a>
          </li>
        </ul>
      ) : (
        <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/login">Log in</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign up</Link>
        </li>
        </ul>
      )}
    </div>
  </nav>
);


export default NavBarForm;
