import React from 'react';
import { Link } from 'react-router-dom';

const wrongPath = ({ location }) => (
  <>
    <h1>404</h1>
    <p>{location.pathname}page doesnt exist</p>
    <Link to="/">
      Go back to homepage or login
    </Link>
  </>
);

export default wrongPath;
