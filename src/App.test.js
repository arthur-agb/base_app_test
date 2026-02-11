import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Base Application Test/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders verification status', () => {
  render(<App />);
  const statusElement = screen.getByText(/Verification Status/i);
  expect(statusElement).toBeInTheDocument();
});

test('renders all verification items', () => {
  render(<App />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toBeGreaterThanOrEqual(4);
});

test('renders app container', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});
