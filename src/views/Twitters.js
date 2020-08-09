import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(
      ({
        title,
        content,
        created,
        twitterName,
        id,
      }) => (
        <Card
          cardType="twitters"
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

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
};

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
