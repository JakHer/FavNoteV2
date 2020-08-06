import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  background-color: transparent;

  &.active {
    background-color: #fff;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
    `}

  @media (max-width: 1000px) {
    width: 35px;
    height: 35px;
    margin: 0 20px 0;
  }
`;

export default ButtonIcon;
