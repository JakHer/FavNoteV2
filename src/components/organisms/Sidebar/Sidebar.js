import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  height: 100vh;
  width: 150px;
  background-color: ${({ theme, activeColor }) =>
    activeColor
      ? theme[activeColor]
      : theme.note};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100vw;
    height: 100px;
    z-index: 10000;
    flex-direction: row;
  }
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75%;
  border: none;
  margin-bottom: 10vh;

  @media (max-width: 1000px) {
    margin: 0 0 0 10px;
    width: 50px;
    height: 50px;
  }
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 0;
  }
`;

const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLink to="/" />
    <StyledLinkList>
      <ButtonIcon
        as={NavLink}
        to="/"
        icon={penIcon}
        activeclass="active"
        exact
      />
      <ButtonIcon
        as={NavLink}
        to="/twitters"
        icon={twitterIcon}
        activeclass="active"
      />
      <ButtonIcon
        as={NavLink}
        to="/articles"
        icon={bulbIcon}
        activeclass="active"
      />
    </StyledLinkList>
    <StyledLogoutButton
      as={NavLink}
      to="/login"
      icon={logoutIcon}
    />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf([
    'note',
    'twitter',
    'article',
  ]),
};

Sidebar.defaultProps = {
  pageType: 'note',
};

export default Sidebar;
