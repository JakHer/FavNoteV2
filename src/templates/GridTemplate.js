import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledPageWrapper = styled.div`
  padding: 20px;
  position: relative;
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: ${({ activeColor, theme }) =>
    theme[activeColor]};
  border-radius: 50%;
  cursor: pointer;
  background-size: 40%;
  z-index: 100000;
  transition: 0.4s ease transform;

  :hover {
    transform: rotate(72deg);
  }
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleItemBarVisibility = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { pageContext, children } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledPageWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              6 {pageContext}
            </StyledParagraph>
          </StyledPageHeader>
          <GridWrapper>{children}</GridWrapper>
          <StyledButtonIcon
            icon={plusIcon}
            activeColor={pageContext}
            onClick={this.handleItemBarVisibility}
          />
          <NewItemBar
            isVisible={isNewItemBarVisible}
          />
        </StyledPageWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};
export default withContext(GridTemplate);
