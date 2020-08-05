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

  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
    `}
`;

export default ButtonIcon;
