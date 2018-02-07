import React from 'react';
import NavBarForm from '../components/NavBarForm.js';
import { userActions } from '../actions';
import { connect } from 'react-redux';
        //
class NavBar extends React.Component{

  constructor(props) {
    super(props);


    // This binding is necessary to make `this` work in the callback
    this.logout = this.props.logout.bind(this);
  }


  render() {
      return (
        <NavBarForm
        onClick={this.logout}
        loggedIn={this.props.loggedIn}
      />
    )
  }

}

function mapStateToProps(state) {
  return {
    loggedIn: state.authentication.loggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout:() =>{
      dispatch(userActions.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
