import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

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
  height: 60px;
  width: 60px;
  border: 5px solid
    ${({ theme }) => theme.article};
  border-radius: 50%;
  background: #fff url(${LinkIcon});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Card = ({
  cardType,
  title,
  created,
  twitterName,
  articleUrl,
  content,
}) => (
  <Wrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar
          src={`https://twitter-avatar.now.sh/${twitterName}`}
        />
      )}
      {cardType === 'article' && (
        <StyledLinkButton href={articleUrl} />
      )}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
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
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
