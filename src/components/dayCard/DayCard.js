import './DayCard.css';

function DayCard({ date, day, description, imgAltText, imgSrc, temperature }) {
  const altText = imgAltText
    ? imgAltText
    : imgSrc?.substring(0, imgSrc.indexOf('.'));

  return (
    <div className='day-card'>
      <h2>{day}</h2>
      <p className='grey-text'>{date}</p>
      <img className='weather-icon' src={imgSrc} alt={altText} />
      <p className='temperature'>{temperature} &deg;C</p>
      <p>{description}</p>
    </div>
  );
}

export default DayCard;
