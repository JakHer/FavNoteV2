import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    item: {
      _id: '',
      title: '',
      content: '',
      created: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    const { activeItem } = this.props;
    if (activeItem) {
      this.setState({ item: activeItem });
    } else {
      /* eslint-disable react/destructuring-assignment */
      const {
        match: {
          params: { id },
        },
      } = this.props;

      axios
        .get(
          `https://fav-note-2.herokuapp.com/api/note/${id}`,
        )
        .then(({ data }) => {
          this.setState({
            item: data,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { item } = this.state;
    return (
      <DetailsTemplate
        title={item.title}
        created={item.created}
        content={item.content}
        twitterName={item.twitterName}
        articleUrl={item.articleUrl}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      item: state[ownProps.pageContext].filter(
        (item) =>
          /* eslint no-underscore-dangle: 0 */
          item._id === ownProps.match.params.id,
        /* eslint-enable */
      ),
    };
  }
  return {};
};

DetailsPage.propTypes = {
  activeItem: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

DetailsPage.defaultProps = {
  activeItem: '',
};

export default withContext(
  connect(mapStateToProps)(DetailsPage),
);
