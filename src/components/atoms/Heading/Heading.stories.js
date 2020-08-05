import React from 'react';

import Heading from 'components/atoms/Heading/Heading';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms/Heading', module)
  .add('Big', () => <Heading big>Big</Heading>)
  .add('Normal', () => <Heading>Normal</Heading>);
