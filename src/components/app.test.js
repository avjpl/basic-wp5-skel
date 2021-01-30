import React from 'react';
import { render } from 'test-utils';

import App from './app';

test('renders', () => {
  const props = { message: 'skeleton' };
  const { getByText } = render(<App {...props} />);
  expect(getByText('skeleton')).toBeInTheDocument();
});
