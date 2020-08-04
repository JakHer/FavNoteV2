import styled, { css } from 'styled-components';

const Button = styled.button`
  width: ${({ width }) => width || `220px`};
  height: 48px;
  background: hsl(49, 100%, 58%);
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-size: 1.6rem;
  font-family: 'Montserrat';
  font-weight: 500;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
  width: 105px
  height: 30px;
  background: hsl(0, 0%, 90%);
  font-size: 1rem;
  `}
`;

export default Button;
