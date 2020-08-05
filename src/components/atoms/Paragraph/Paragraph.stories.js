import React from 'react';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { storiesOf } from '@storybook/react';

storiesOf(
  'Atoms/Paragraph',
  module,
).add('Paragraph', () => (
  <Paragraph>Paragraph</Paragraph>
));
