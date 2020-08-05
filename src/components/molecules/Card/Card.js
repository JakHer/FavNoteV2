import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

// const CARD_TYPE = {
//   note: 'NOTE',
//   twitter: 'TWITTER',
//   article: 'ARTICLE',
// };

const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  :first-of-type {
    z-index: 9999;
  }
  background-color: ${({ theme, activeColor }) =>
    activeColor ? theme[activeColor] : '#fff'};

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

const StyledAvatar = styled.img`
  height: 86px;
  width: 86px;
  border: 5px solid
    ${({ theme }) => theme.twitter};
  position: absolute;
  border-radius: 50%;
  right: 20px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
  display: block;
  height: 86px;
  width: 86px;
  border: 5px solid
    ${({ theme }) => theme.article};
  border-radius: 50%;
  background: #fff url(${LinkIcon});
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Card = ({ cardType }) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Siema Kuba</StyledHeading>
      <DateInfo>3 days ago</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://twitter-avatar.now.sh/kubahermyt" />
      )}
      {cardType === 'article' && (
        <StyledLinkButton href="https://twitter.com/kubahermyt" />
      )}
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

Card.propTypes = {
  cardType: PropTypes.oneOf([
    'note',
    'twitter',
    'article',
  ]),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
