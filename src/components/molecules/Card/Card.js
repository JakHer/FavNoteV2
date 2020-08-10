import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  cursor: pointer;
  transition: 0.4s ease box-shadow;

  :hover {
    box-shadow: 0 10px 30px -10px ${({ theme, activeColor }) => theme[activeColor]};
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  :first-of-type {
    z-index: 99;
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
    ${({ theme }) => theme.twitters};
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
    ${({ theme }) => theme.articles};
  border-radius: 50%;
  background: #fff url(${LinkIcon});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  top: 40px;
  right: 20px;
`;

class Card extends Component {
  state = { redirect: false };

  handleCardClick = () =>
    this.setState({ redirect: true });

  render() {
    const {
      id,
      pageContext,
      title,
      created,
      twitterName,
      articleUrl,
      content,
      removeItem,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to={`${pageContext}/${id}`} />
      );
    }

    return (
      <Wrapper
        activeColor={pageContext}
        onClick={this.handleCardClick}
      >
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {pageContext === 'twitters' && (
            <StyledAvatar
              src={`https://twitter-avatar.now.sh/${twitterName}`}
            />
          )}
          {pageContext === 'articles' && (
            <StyledLinkButton
              target="_blank"
              rel="noopener noreferrer"
              href={articleUrl}
              alt={twitterName}
            />
          )}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button
            secondary
            onClick={() =>
              removeItem(pageContext, id)
            }
          >
            remove
          </Button>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  pageContext: PropTypes.oneOf([
    'notes',
    'twitters',
    'articles',
  ]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) =>
    dispatch(removeItemAction(itemType, id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(Card));
