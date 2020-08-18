import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
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
import * as Yup from 'yup';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 30px 30px;
  height: 40px;
  max-width: 300px;
  outline: none;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #000;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledErrorMessage = styled.p`
  position: absolute;
  position: absolute;
  bottom: 70%;
  left: 50%;

  font-size: ${({ theme }) => theme.fontSize.xs};

  transform: translate(-50%, -50%);
  display: block;

  color: red;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledHeading = styled(Heading)`
  display: block;
  margin-bottom: 40px;
  max-width: 200px;
  text-align: center;
`;

const StyledErrorModal = styled(StyledHeading)`
  color: red;
`;

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'user1')
    .max(5, 'Too Long!')
    .required('Login is Required'),
  password: Yup.string()
    .min(9, 'password1')
    .max(9, 'Too Long!')
    .required('Password is Required'),
});

const LoginPage = ({
  authenticate,
  userID,
  loggedIn,
  error,
}) => (
  <AuthTemplate>
    <Formik
      initialValues={{
        username: ``,
        password: ``,
      }}
      onSubmit={({ username, password }) =>
        authenticate(username, password)
      }
      validationSchema={SignupSchema}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting,
      }) => {
        localStorage.clear();
        if (loggedIn) {
          localStorage.setItem(
            `userID`,
            `${userID}`,
          );
          return <Redirect to={routes.notes} />;
        }

        return (
          <>
            {error ? (
              <StyledErrorModal>
                {error}
              </StyledErrorModal>
            ) : (
              <StyledHeading>
                Log in
              </StyledHeading>
            )}

            <StyledForm>
              <StyledInputWrapper>
                <StyledInput
                  autoComplete="off"
                  name="username"
                  type="text"
                  placeholder="Login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />

                {errors.username ? (
                  <StyledErrorMessage>
                    {errors.username}
                  </StyledErrorMessage>
                ) : null}
              </StyledInputWrapper>

              <StyledInputWrapper>
                <StyledInput
                  autoComplete="off"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.password ? (
                  <StyledErrorMessage>
                    {errors.password}
                  </StyledErrorMessage>
                ) : null}
              </StyledInputWrapper>
              <Button
                color="notes"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                  />
                ) : (
                  `sign in`
                )}
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
  loggedIn: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

LoginPage.defaultProps = {
  userID: '',
  error: null,
};

const mapStateToProps = ({
  userID = null,
  loggedIn = false,
  error = null,
}) => ({
  userID,
  loggedIn,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password, error) =>
    dispatch(
      authenticateAction(
        username,
        password,
        error,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
