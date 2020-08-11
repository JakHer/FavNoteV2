import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DetailsPage = ({ activeItem }) => {
  const [item] = activeItem;
  return (
    <DetailsTemplate
      title={item.title}
      created={item.created}
      content={item.content}
      twitterName={item.twitterName}
      articleUrl={item.articleUrl}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    activeItem: state[
      ownProps.pageContext
    ].filter(
      (item) =>
        item._id === ownProps.match.params.id,
    ),
  };
};

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      twitterName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withContext(
  connect(mapStateToProps)(DetailsPage),
);
