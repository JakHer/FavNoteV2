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
  bottom: 70%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(-50%, -50%);
  display: block;

  color: red;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'user1')
    .max(5, 'Too Long!')
    .required('required'),
  password: Yup.string()
    .min(9, 'password1')
    .max(9, 'Too Long!')
    .required('required'),
});

const LoginPage = ({
  authenticate,
  userID,
  loggedIn,
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
            <StyledHeading>Log in</StyledHeading>
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
  loggedIn: PropTypes.bool.isRequired,
};

LoginPage.defaultProps = {
  userID: '',
};

const mapStateToProps = ({
  userID = null,
  loggedIn = false,
}) => ({
  userID,
  loggedIn,
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
