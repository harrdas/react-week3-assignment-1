import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';


test('Input', () => {
  const handleClick = jest.fn();

  const { container } = render((
    <Input
    onClick={handleClick}
    />
  ));
});
