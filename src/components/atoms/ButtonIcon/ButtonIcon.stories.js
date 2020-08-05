import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator((story) => (
    <Wrapper>{story()}</Wrapper>
  ))
  .add('Bulb', () => (
    <ButtonIcon icon={bulbIcon} />
  ))
  .add('Bulb Active', () => (
    <ButtonIcon active icon={bulbIcon} />
  ))
  .add('Logout', () => (
    <ButtonIcon icon={logoutIcon} />
  ))
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => (
    <ButtonIcon icon={plusIcon} />
  ))
  .add('Twitter', () => (
    <ButtonIcon icon={twitterIcon} />
  ));
