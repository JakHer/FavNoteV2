import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <Button width="300px">Close/Save</Button>
    <Button width="500px" secondary>
      Remove
    </Button>
    <h1>Hello Kuba!</h1>
  </div>
);

export default Root;
