import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button/Button';

test('renders Button component with given text', () => {
  render(<Button text="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button text="Click Me" onClick={handleClick} />);
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders count when count prop is provided', () => {
  render(<Button text="Items" count={5} />);
  const countElement = screen.getByText(/5/i);
  expect(countElement).toBeInTheDocument();
});