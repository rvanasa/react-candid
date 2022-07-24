import React from 'react';
import { Candid } from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import failOnConsole from 'jest-fail-on-console';

failOnConsole();

test('renders without errors', async () => {
  render(<Candid principal="mwrha-maaaa-aaaab-qabqq-cai" />);

  expect(screen).toHaveTextContent('PLACEHOLDER');
});
