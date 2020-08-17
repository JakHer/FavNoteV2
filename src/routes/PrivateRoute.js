import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  loggedIn,
  userID,
  ...props
}) =>
  userID ? (
    /* eslint-disable react/jsx-props-no-spreading */
    <Route {...props} />
  ) : (
    /* eslint-enable */
    <Redirect to="/login" />
  );

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userID: PropTypes.string,
};

PrivateRoute.defaultProps = {
  userID: null,
};

const mapStateToProps = ({
  userID,
  loggedIn,
}) => ({
  loggedIn,
  userID,
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRoute);
