import React from 'react';

import {
  withKnobs,
  select,
} from '@storybook/addon-knobs';
import Button from 'components/atoms/Button/Button';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Main', () => {
    const label = 'Colors';
    const options = {
      Note: 'hsl(49, 100%, 58%)',
      Twitter: 'hsl(196, 83%, 75%)',
      Article: 'hsl(106, 47%, 64%)',
    };

    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(
      label,
      options,
      defaultValue,
      groupId,
    );
    return <Button color={value}>Main</Button>;
  })
  .add('Secondary', () => (
    <Button secondary>Secondary</Button>
  ));
