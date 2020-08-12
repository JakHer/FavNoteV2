import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';
import PropTypes from 'prop-types';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #000;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ authenticate, userID }) => (
  <AuthTemplate loginPage>
    <Formik
      initialValues={{
        username: ``,
        password: ``,
      }}
      onSubmit={({ username, password }) =>
        authenticate(username, password)
      }
    >
      {({ handleChange, handleBlur, values }) => {
        if (userID) {
          localStorage.setItem(
            `userID`,
            `${userID}`,
          );
          return <Redirect to={routes.home} />;
        }

        return (
          <>
            <Heading>Log in</Heading>
            <StyledForm>
              <StyledInput
                autoComplete="off"
                name="username"
                type="text"
                placeholder="Login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Button color="notes" type="submit">
                sign in
              </Button>
            </StyledForm>
            <StyledLink to={routes.register}>
              Create new account
            </StyledLink>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

LoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

LoginPage.defaultProps = {
  userID: '',
};

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) =>
    dispatch(
      authenticateAction(username, password),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
