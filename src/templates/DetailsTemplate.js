import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Lorem mollit voluptate est est eu Lorem
      deserunt non ea ipsum sit nisi occaecat
      quis. Aliqua exercitation non mollit dolore
      irure aute. Aliqua eiusmod duis sit pariatur
      occaecat incididunt pariatur anim
      adipisicing sit amet officia. Excepteur
      occaecat commodo labore ullamco pariatur
      dolore magna eu anim Lorem esse ut. Ullamco
      non ea dolore in pariatur et quis aute nisi
      veniam commodo. Commodo officia magna eu
      dolor et eu irure ea tempor magna irure
      aliqua minim voluptate.
    </p>
    <Link to="/"> go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
