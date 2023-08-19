import React from 'react';
import { render } from '@testing-library/react';

import Header from '../components/head';

describe('Header component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
