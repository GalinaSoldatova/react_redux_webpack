import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (props.isAuthorized) {
    return <Redirect to='/profile'/>;
  }

  const { error } = props;

  function changeUsername(event) {
    const { target: { value } } = event;
    setUsername(value);
  }

  function changePassword(event) {
    const { target: { value } } = event;
    setPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.logIn(username, password);
  }

  return (
    <div id='login' className='wrapper'>
      <form id='login-form' onSubmit={ handleSubmit }>
        <label>Имя пользователя</label>
        <input required type='text' name='username' value={ username } onChange={ changeUsername }/>
        <label>Пароль</label>
        <input required type='password' name='password' value={ password } onChange={ changePassword }/>
        <button type="submit">Войти</button>
        <div className='error-message' hidden={ !error }>
          { error }
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  isAuthorized: PropTypes.bool,
  logIn: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = (state) => (
  {
    isAuthorized: Boolean(state.username),
    error: state.errorMessage
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logIn: (username, password) => dispatch({
      type: 'LOG_IN',
      payload: { username, password }
    }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
