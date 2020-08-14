import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({
  pageContext,
  isVisible,
  addItem,
  handleClose,
}) => (
  <StyledWrapper
    isVisible={isVisible}
    activeColor={pageContext}
  >
    <Heading big>Add new {pageContext}</Heading>
    <Formik
      initialValues={{
        title: '',
        content: '',
        articleUrl: '',
        twitterName: '',
        created: '',
      }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <Input
            type="text"
            name="title"
            placeholder="title"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' && (
            <StyledInputLink
              type="text"
              name="twitterName"
              placeholder="account name eg. kubahermyt"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInputLink
              type="text"
              name="articleUrl"
              placeholder="articleUrl"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledInputTextArea
            name="content"
            as="textarea"
            placeholder="description"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button
            type="submit"
            color={pageContext}
          >
            Add {pageContext}
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: `notes`,
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) =>
    dispatch(
      addItemAction(itemType, itemContent),
    ),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
