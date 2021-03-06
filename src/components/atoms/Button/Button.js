import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 48px;
  background-color: ${({ theme, color }) =>
    theme[color]};
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-size: 1.6rem;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      background: ${({ theme }) => theme.grey200};
      font-size: 1rem;
      z-index: 1000;
    `}
`;

// ${({ color }) =>
//     color || `hsl(49, 100%, 58%)`};

export default Button;
