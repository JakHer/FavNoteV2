import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button>Close/Save</Button>
        <ButtonIcon>XDD</ButtonIcon>
        <Button secondary>Remove</Button>
        <h1>Hello Kuba!</h1>
      </>
    </ThemeProvider>
  </>
);

export default Root;
