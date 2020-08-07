import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1000px) {
    max-width: 90vw;
  }
`;

const StyledHeaderWrapper = styled.div`
  margin: 25px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #111;
  text-transform: uppercase;
  margin: 20px 0 40px;
  padding: 10px 30px;
  border: 1px solid
    ${({ theme }) => theme.articles};
  max-width: 165px;
`;

const StyledImageLink = styled.a`
  border: 0;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  border-radius: 50%;
  height: 100px;
  width: 100px;

  @media (max-width: 1000px) {
    right: 0;
    top: 20px;
    height: 50px;
    width: 50px;
  }
`;

const StyledButton = styled(Button)`
  display: block;
  padding: 10px 30px;
  margin-top: 50px;
  height: auto;
  max-width: 165px;
  color: #777;
`;

const DetailsTemplate = ({
  pageType,
  title,
  created,
  content,
  articleUrl,
  twitterName,
}) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledHeaderWrapper>
        <StyledHeading as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>
          {created}
        </StyledParagraph>
      </StyledHeaderWrapper>
      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && (
        <StyledLink
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          alt={title}
        >
          Open article
        </StyledLink>
      )}
      {pageType === 'twitters' && (
        <StyledImageLink
          href={`https://twitter.com/${twitterName}`}
          alt={twitterName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImage
            src={`https://twitter-avatar.now.sh/${twitterName}`}
          />
        </StyledImageLink>
      )}
      <StyledButton
        as={Link}
        to={`/${pageType}`}
        color={pageType}
      >
        save/close
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetailsTemplate;
