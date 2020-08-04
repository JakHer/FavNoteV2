import React from 'react';
import Button from 'components/Button/Button';

import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Main', () => <Button>Main</Button>)
  .add('Secondary', () => (
    <Button secondary>Secondary</Button>
  ));
