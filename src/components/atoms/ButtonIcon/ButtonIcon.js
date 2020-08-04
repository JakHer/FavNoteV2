import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 200px;
  height: 30px;
  background: ${({ theme }) => theme.primary};
  border: none;
  outline: none;
  border-radius: 20px;
`;

export default ButtonIcon;
