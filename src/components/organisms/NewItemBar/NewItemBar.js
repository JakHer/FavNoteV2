import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';

const StyledInputTextArea = styled(Input)`
  resize: none;
  border-radius: 15px;
  min-height: 25vh;
  margin: 30px 0 100px;
`;

const StyledWrapper = styled.div`
  z-index: 99999;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: 60vw;
  padding: 100px 50px;
  background-color: #fff;
  border-left: 10px solid
    ${({ theme, activeColor }) =>
      theme[activeColor]};
  box-shadow: -5px 0 15px
    ${({ theme, activeColor }) =>
      theme[activeColor]};

  transition: 0.4s ease transform;

  transform: translateX(
    ${({ isVisible }) =>
      isVisible ? `0` : `100%`}
  );

  @media (max-width: 1000px) {
    width: 100vw;
    padding: 50px 20px;
  }
`;

const StyledInputLink = styled(Input)`
  margin: 30px 0 0;
`;

const NewItemBar = ({
  pageContext,
  isVisible,
}) => (
  <StyledWrapper
    isVisible={isVisible}
    activeColor={pageContext}
  >
    <Heading big>Add new {pageContext}</Heading>
    <Input
      placeholder={
        pageContext === 'twitters'
          ? `account name eg. kubahermyt`
          : `title`
      }
    />
    {pageContext === 'articles' && (
      <StyledInputLink placeholder="link" />
    )}
    <StyledInputTextArea
      as="textarea"
      placeholder="title"
    />
    <Button color={pageContext}>
      Add {pageContext}
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  pageContext: `notes`,
  isVisible: false,
};

export default withContext(NewItemBar);
