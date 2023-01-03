import { render, screen } from '@testing-library/react';
import DayCard from './DayCard';
import Wind from '../../assets/icons/wind.svg';

describe('DayCard', () => {
  beforeEach(() => {
    render(
      <DayCard
        date='March 2nd'
        day='Saturday'
        description='light rain'
        imgAltText='wind icon'
        imgSrc={Wind}
        temperature='36'
      />
    );
  });

  test('it renders the day of the week', () => {
    const dayOfTheWeek = screen.getByText('Saturday');
    expect(dayOfTheWeek).toBeInTheDocument();
  });

  test('it renders the date', () => {
    const dayOfTheWeek = screen.getByText('March 2nd');
    expect(dayOfTheWeek).toBeInTheDocument();
  });

  test('it renders the icon', () => {
    const image = document.querySelector('img');
    expect(image.alt).toContain('wind icon');
  });

  test('it provides alt text for the icon by default', () => {
    const image = document.querySelector('img');
    expect(image.alt).toContain('wind');
  });

  test('it displays the temperature in celsius', () => {
    const temperature = screen.getByText('36 °C');
    expect(temperature).toBeInTheDocument();
  });

  test('it displays the weather description', () => {
    const weatherDescription = screen.getByText('light rain');
    expect(weatherDescription).toBeInTheDocument();
  });
});
