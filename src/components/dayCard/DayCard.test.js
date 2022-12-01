import { render, screen } from '@testing-library/react';
import DayCard from './DayCard';
import Wind from '../../assets/icons/wind.svg';

describe('DayCard', () => {
  test('it renders the day of the week', () => {
    render(<DayCard day='Saturday' />);
    const dayOfTheWeek = screen.getByText('Saturday');
    expect(dayOfTheWeek).toBeInTheDocument();
  });

  test('it renders the date', () => {
    render(<DayCard day='Saturday' date='March 2nd' />);
    const dayOfTheWeek = screen.getByText('March 2nd');
    expect(dayOfTheWeek).toBeInTheDocument();
  });

  test('it renders the icon', () => {
    render(
      <DayCard
        day='Saturday'
        date='March 2nd'
        imgSrc={Wind}
        imgAltText='wind icon'
      />
    );

    const image = document.querySelector('img');
    expect(image.alt).toContain('wind icon');
  });

  test('it provides alt text for the icon by default', () => {
    render(<DayCard day='Saturday' date='March 2nd' imgSrc={Wind} />);

    const image = document.querySelector('img');
    expect(image.alt).toContain('wind');
  });

  test('it displays the temperature in celsius', () => {
    render(<DayCard temperature='36' />);

    const temperature = screen.getByText('36 °C');
    expect(temperature).toBeInTheDocument();
  });

  test('it displays the weather description', () => {
    render(<DayCard description='light rain' />);

    const weatherDescription = screen.getByText('light rain');
    expect(weatherDescription).toBeInTheDocument();
  });
});
