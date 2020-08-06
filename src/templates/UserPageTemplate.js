import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledPageWrapper = styled.div`
  padding: 20px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
`;

const UserPageTemplate = ({
  children,
  pageType,
}) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledPageWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageType}s
        </StyledHeading>
        <StyledParagraph>
          6 {pageType}s
        </StyledParagraph>
      </StyledPageHeader>
      <GridWrapper>{children}</GridWrapper>
    </StyledPageWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf([
    'note',
    'twitter',
    'article',
  ]),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default UserPageTemplate;
