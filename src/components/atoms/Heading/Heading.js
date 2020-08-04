import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) =>
        theme.fontSize.xl};
    `}
`;

export default Heading;
