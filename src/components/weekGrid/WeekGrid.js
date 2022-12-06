import './WeekGrid.css';
import DayCard from '../dayCard/DayCard';

function WeekGrid({ location, days }) {
  return (
    <div className='week-grid'>
      <p className='location grey-text'>{location}</p>
      <div className='days-container'>
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
      </div>
    </div>
  );
}

export default WeekGrid;
