import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Auth from '../Auth';


const NavBarForm = props => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">React App</NavLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout" onClick={localStorage.removeItem("token")}>Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>
  </div>
);


export default NavBarForm;
