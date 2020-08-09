import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(
      ({
        title,
        content,
        articleUrl,
        created,
        id,
      }) => (
        <Card
          cardType="articles"
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
          id={id}
        />
      ),
    )}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
};

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
