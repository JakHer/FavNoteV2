import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => (
          <Component
            /* eslint-disable react/jsx-props-no-spreading */
            {...props}
            /* eslint-enable */
            context={context}
          />
        )}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
