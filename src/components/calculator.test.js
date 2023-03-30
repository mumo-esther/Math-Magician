import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

test('renders correctly', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});

test('handles multiple decimal points', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('.'));
  expect(getByText('1.')).toBeInTheDocument();
});

test('handles consecutive operations', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('-'));
  expect(getByText('-')).toBeInTheDocument();
});
