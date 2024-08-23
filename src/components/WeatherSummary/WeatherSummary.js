import styles from './WeatherSummary.module.scss';

const WeatherSummary = (props) => {
  const roundedTemp = Math.round(props.data.temp * 10) / 10;
  console.log('props:', props);
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt="????"
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${props.data.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{props.data.city}<span className={styles.description}>- {props.data.description}</span></h2>
        <p>
          <strong>Temp:</strong> {roundedTemp}°C
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;