import { render, screen } from '@testing-library/react';
import WeekGrid from './WeekGrid';
import Wind from '../../assets/icons/wind.svg';
import HeavyRain from '../../assets/icons/cloud-showers-heavy.svg';

describe('WeekGrid', () => {
  const mockDays = [
    {
      date: 'March 2nd',
      day: 'Monday',
      description: 'light rain',
      imgSrc: Wind,
      temperature: '36',
    },
    {
      date: 'March 3rd',
      day: 'Tueseday',
      description: 'heavy rain',
      imgSrc: HeavyRain,
      temperature: '20',
    },
  ];

  test('it renders the location', () => {
    render(<WeekGrid location='London, UK' days={mockDays} />);
    const location = screen.getByText('London, UK');
    expect(location).toBeInTheDocument();
  });

  test('it renders day cards', () => {
    render(<WeekGrid location='London, UK' days={mockDays} />);
    screen.getByText('Monday');
    screen.getByText('Tueseday');
  });
});
