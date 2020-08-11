import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{
        username: ``,
        password: ``,
      }}
      onSubmit={({ username, password }) =>
        console.log(
          axios
            .post(
              `http://localhost:9000/api/user/login`,
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
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field
            name="password"
            type="password"
          />
          <button type="submit">sign in</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
