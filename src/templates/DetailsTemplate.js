import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';

const DetailsTemplate = ({
  children,
  pageType,
}) => (
  <UserPageTemplate pageType={pageType}>
    {children}
    <Link to="/"> go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailsTemplate;
