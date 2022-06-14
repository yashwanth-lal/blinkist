import { render, screen } from '@testing-library/react';
import ProgressBar from './progressbarA';

it('Unit Test - Progress Bar', () => {
  render(<ProgressBar progress={20} />);
  const bar = screen.getAllByTestId('progressBar');
  expect(bar.length).toBe(2);
});