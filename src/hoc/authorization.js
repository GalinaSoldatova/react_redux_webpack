import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Authorization = (WrappedComponent) => {
  function WithAuthorization(props) {
    if (!props.isAuthorized) {
      return <Redirect to='/login'/>;
    }
    return <WrappedComponent {...props}/>;
  }

  WithAuthorization.propTypes = {
    isAuthorized: PropTypes.bool
  };

  const mapStateToProps = (state) => ({
    isAuthorized: Boolean(state.username)
  });

  return connect(mapStateToProps)(WithAuthorization);
};

export default Authorization;
