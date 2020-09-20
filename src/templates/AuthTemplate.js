import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import logoImg from 'assets/icons/logo.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

const StyledAuthCard = styled.div`
  max-width: 400px;
  max-height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  max-width: 250px;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={logoImg} />
    <StyledHeading>Fav Notes App</StyledHeading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default AuthTemplate;
