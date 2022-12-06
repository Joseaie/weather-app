import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('it displays the title', () => {
    render(<Header />);

    const header = screen.getByText('5-Day Forecast');
    expect(header).toBeInTheDocument();
  });
});
