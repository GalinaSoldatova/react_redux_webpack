import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';

class Profile extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='wrapper profile'>
        <div className='header'>
          <h1>Профиль</h1>
        </div>
        <div className='profile-info'>
          <div className='group'>
            <label>Имя пользователя:</label>
            <span>{this.props.username}</span>
          </div>
          <button onClick={this.signOut}>Выйти</button>
        </div>
      </div>
    );
  }

  signOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = (state) => (
  {
    username: state.username
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
