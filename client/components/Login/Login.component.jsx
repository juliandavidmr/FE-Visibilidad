import React, { Component } from 'react';
import Formous from 'formous';

class ErrorText extends Component {
  render() {
    return (
      <div style={{ color: '#f00' }}>
        {this.props.errorText}
      </div>
    );
  }
}

class LoginComponent extends Component {

  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(nextProps) {
    // Set default form values (might be appropriate in a different method
    this.props.setDefaultValues({
      password: 33,
      email: 'Sir Fluffalot',
    });
  }

  handleSubmit(formStatus, fields) {
    if (!formStatus.touched) {
      alert('Please fill out the form.');
      return;
    }

    if (!formStatus.valid) {
      alert('Please address the errors in the form.');
      return;
    }

    // All good! Do something with fields.email.value and fields.password.value
    console.log(formStatus, fields);
  }

  render() {
    const {
      fields: { password, email },
      formSubmit,
    } = this.props;

    return <div>
      <form onSubmit={formSubmit(this.handleSubmit) }>
        <div>
          <input
            placeholder="email"
            type="text"
            value={ email.value }
            { ...email.events }
            />
          <ErrorText { ...email.failProps } />
        </div>
        <div>
          <input
            placeholder="password"
            type="text"
            value={password.value}
            { ...password.events }
            />
          <ErrorText { ...password.failProps } />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  }
}

const formousOptions = {
  fields: {
    email: {
      tests: [
        {
          critical: true,
          failProps: {
            errorText: 'email is required.'
          },
          test(value) {
            return value !== '';
          }
        }
      ]
    },

    password: {
      tests: [
        {
          critical: true,
          failProps: {
            errorText: 'password should be a number.'
          },
          test(value) {
            return /^\d*$/.test(value);
          }
        },
        {
          critical: false,
          failProps: {
            errorText: 'Are you sure you\'re that old? :o'
          },
          test(value) {
            return +value < 120;
          }
        }
      ]
    }
  }
};

export default Formous(formousOptions)(LoginComponent)