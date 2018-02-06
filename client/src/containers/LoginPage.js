import React from 'react';
import LoginForm from '../components/LoginForm.js';
import { userActions } from '../actions';
import { connect } from 'react-redux';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      submitted: false,
      errorMessage:{},
      successMessage,
      user: {
        email: '',
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
    const email = this.state.user.email;
    const password = this.state.user.password;
    this.setState({
      submitted:true
    })
     if (email && password) {
         this.props.login(email,password);
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
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errorMessage}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.loggingIn,
    errorMessage: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email,password) => {
      dispatch(userActions.login(email,password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
