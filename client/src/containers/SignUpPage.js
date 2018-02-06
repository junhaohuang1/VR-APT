import React from 'react';
import SignUpForm from '../components/SignUpForm.js';
import { userActions } from '../actions';
import { connect } from 'react-redux';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = this.state.user.name;
    const email = this.state.user.email;
    const password = this.state.user.password;
    if (name && email && password) {
        this.props.signup(name,email,password);
    }
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}
function mapStateToProps(state) {
  return {
    registering: state.registering,
    registered: state.registered,
    error: state.error,
    successMessage: state.successMessage
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signup: (name,email,password) => {
      dispatch(userActions.signup(name, email,password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
