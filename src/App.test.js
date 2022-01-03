import { render, screen } from '@testing-library/react';
import app1 from './App';

test('renders learn react link', () => {
  render(<app1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
