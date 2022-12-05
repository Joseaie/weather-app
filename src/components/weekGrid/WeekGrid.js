import './WeekGrid.css';
import DayCard from '../dayCard/DayCard';

function WeekGrid({ location, days }) {
  return (
    <>
      <p>{location}</p>
      {days.map((day, index) => {
        return (
          <DayCard
            key={index}
            date={day.date}
            day={day.day}
            description={day.description}
            imgSrc={day.imgSrc}
            temperature={day.temperature}
          />
        );
      })}
    </>
  );
}

export default WeekGrid;
