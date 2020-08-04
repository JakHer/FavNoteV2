import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const theme = {
  primary: 'black',
};

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button width="300px">Close/Save</Button>
        <Button width="500px" secondary>
          Remove
        </Button>
        <h1>Hello Kuba!</h1>
      </>
    </ThemeProvider>
  </>
);

export default Root;
