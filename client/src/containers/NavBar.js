import React from 'react';
import Auth from '../Auth';
import NavBarForm from '../components/NavBarForm.js';
        // onClick={this.logout()}
class NavBar extends React.Component{

  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.logout = this.logout.bind(this);
  }

  logout() {
    Auth.deauthenticateUser();
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
  }

  render() {
    return (
      <NavBarForm

      />
    )
  }

}

export default NavBar;
