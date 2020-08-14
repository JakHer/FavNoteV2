import React, { Component } from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <GridTemplate>
        {articles
          .map(
            ({
              title,
              content,
              articleUrl,
              created,
              _id: id,
            }) => (
              <Card
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
                id={id}
              />
            ),
          )
          .reverse()}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
  fetchArticles: PropTypes.func.isRequired,
};

Articles.defaultProps = {
  articles: [],
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () =>
    dispatch(fetchItems('articles')),
});

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
