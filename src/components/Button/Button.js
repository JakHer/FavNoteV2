import styled from 'styled-components';

const Button = styled.button`
  width: ${({ secondary }) =>
    secondary ? `105px` : `220px`};
  height: ${({ secondary }) =>
    secondary ? `30px` : `48px`};
  background: ${({ secondary }) =>
    secondary
      ? `hsl(0, 0%, 90%)`
      : `hsl(49, 100%, 58%)`};
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-size: ${({ secondary }) =>
    secondary ? `10px` : `16px`};
  font-family: 'Montserrat';
  font-weight: 500;
  text-transform: uppercase;
`;

export default Button;
