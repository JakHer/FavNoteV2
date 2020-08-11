import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate>
        {twitters.map(
          ({
            title,
            content,
            created,
            twitterName,
            _id: id,
          }) => (
            <Card
              title={title}
              content={content}
              created={created}
              twitterName={twitterName}
              key={id}
              id={id}
            />
          ),
        )}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
  fetchTwitters: PropTypes.func.isRequired,
};

Twitters.defaultProps = {
  twitters: [],
};

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () =>
    dispatch(fetchItems('twitters')),
});

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
