import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

storiesOf(
  'Organisms/Sidebar',
  module,
).add('Sidebar', () => <Sidebar />);
