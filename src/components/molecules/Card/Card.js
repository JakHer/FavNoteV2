import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ theme, yellow }) =>
    yellow ? theme.primary : '#fff'};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 5px;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = () => (
  <Wrapper>
    <InnerWrapper yellow>
      <StyledHeading>Siema Kuba</StyledHeading>
      <DateInfo>3 days ago</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Ex do aliqua dolore do esse et consectetur
        do eu id reprehenderit eiusmod pariatur.
        Magna excepteur do mollit non. Aliqua sit
        voluptate ex magna anim proident
        adipisicing non ipsum occaecat ullamco
      </Paragraph>
      <Button secondary>remove</Button>
    </InnerWrapper>
  </Wrapper>
);

export default Card;
