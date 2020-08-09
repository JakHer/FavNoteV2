import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(
      ({ title, content, created, id }) => (
        <Card
          cardType="notes"
          title={title}
          content={content}
          created={created}
          key={id}
          id={id}
        />
      ),
    )}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
    .isRequired,
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
