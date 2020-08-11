import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const RegisterPage = () => (
  <AuthTemplate>
    <Formik
      initialValues={{
        username: ``,
        password: ``,
      }}
      onSubmit={({ username, password }) =>
        console.log(
          axios
            .post(
              `localhost:9000/api/user/register`,
              {
                username,
                password,
              },
            )
            .then(() =>
              console.log(`Login succesfull`),
            )
            .catch((e) => console.log(e)),
        )
      }
    >
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Sign in</Heading>
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
          <StyledLink to={routes.login}>
            I have account, let me login
          </StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
