import React from 'react';

import Input from 'components/atoms/Input/Input';
import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
  .add('Input', () => (
    <Input placeholder="Input" />
  ))
  .add('Search', () => (
    <Input search placeholder="search" />
  ));
