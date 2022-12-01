import { render, screen } from '@testing-library/react';
import WeekGrid from './WeekGrid';

describe('WeekGrid', () => {
  test('it renders the day of the week', () => {
    render(<WeekGrid />);
    const dayOfTheWeek = screen.getByText('Saturday');
    expect(dayOfTheWeek).toBeInTheDocument();
  });
});
