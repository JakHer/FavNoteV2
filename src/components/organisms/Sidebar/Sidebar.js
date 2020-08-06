import React from 'react';
import styled, {
  keyframes,
} from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const changeBackgroundColor = keyframes`
from{
    background-color: rgba(0,0,0, .1);
}

to {
  background-color: ${({ theme, activeColor }) =>
    theme[activeColor]}
}
`;

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
  animation: ${changeBackgroundColor} 2s;
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
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
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