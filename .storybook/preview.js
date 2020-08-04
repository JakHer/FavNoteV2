import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/GlobalStyle';

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
