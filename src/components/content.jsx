import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTemperature4, faCloud, faTint, faWind ,faCloudRain,faCloudSun,faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Button ,Typography} from '@mui/material';
import "../CSS/header.css";


function Content() {
  const [showHiddenDivs, setShowHiddenDivs] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(6.9271);
  const [lon, setLon] = useState(79.8612);
  const [messageLat, setMessageLat] = useState('');
  const [messageLon, setMessageLon] = useState('');
  const [weekData, sevenDayForecast] = useState([]);

  const changeLat = (event) => setMessageLat(event.target.value);
  const changeLon = (event) => setMessageLon(event.target.value);

  const handleRefesh=()=>{
    window.location.reload();
  }

  const handleClick = () => {
    messageLat ? setLat(messageLat) : setLat(6.9271);
    messageLon ? setLon(messageLon): setLon(79.8612);

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=9ee7bbb7a505d0b552d764c0ca29f708`)
    .then((res) => res.json())
    .then((data) => {

        const dailyForecast = data.daily.slice(1,7).map((cast) => {
            return {
              date: new Date(cast.dt * 1000).toDateString(),
              temp: cast.temp.day,
              humidity: cast.humidity,
              wind: cast.wind_speed,
              weather: cast.weather[0].main,
              description: cast.weather[0].description,
            };
          });
      sevenDayForecast(dailyForecast);
    });
  };

  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ee7bbb7a505d0b552d764c0ca29f708`)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });

  }, [lat, lon]);

  return (
    <div>
      <div className='container'>
        <div className='titleName'>
          <div>
            <div className='line'>
              <h1 className='text-light'>{weatherData ? weatherData.name : ''}  </h1>
              <p style={{fontSize:"16px"}}>{weatherData ? weatherData.sys.country : ''} 
              <span style={{fontSize:"12px",fontWeight:"none"}}> {weatherData ? weatherData.coord.lat : ''}°N  {weatherData ? weatherData.coord.lon : ''}°E  </span> 
              </p>
              <h2 className='text-light'>
                <span className='icons'>
                  <FontAwesomeIcon icon={faTemperature4} />{' '}
                </span>{' '}
                {weatherData ? (weatherData.main.temp - 273.15).toFixed(2) + '°C' : ''}
                <br></br><span style={{fontSize:"16px",color:"#b2f1ff"}}>{weatherData ? (new Date(weatherData.dt * 1000).toDateString()) : ''} </span>
              </h2>
            </div>
            <div className='row'>
              <div className='col-4 col-md'>
              <Typography variant="h6" className='details'>
  <span className='icons'>
  {weatherData && weatherData.weather[0].main === 'Clouds' ? (
  <FontAwesomeIcon icon={faCloud} style={{ color: '#007bff' }} />
) : weatherData && weatherData.weather[0].main === 'Rain' ? (
  <FontAwesomeIcon icon={faCloudRain}  style={{color:"#b2f1ff"}} />
) : (
  <FontAwesomeIcon icon={faCloudSun} />
)}

  </span>
  <br />
  {weatherData ? weatherData.weather[0].main : ''}
</Typography>

              </div>

              <div className='col-4 col-md'>
              <Typography variant="h6" className='details'>
                  <span className='icons'>
                    <FontAwesomeIcon icon={faTint} />
                  </span>
                  <br />
                  Humidity : {weatherData ? weatherData.main.humidity + '%' : ''}
                </Typography>
              </div>
              <div className='col-4 col-md'>
              <Typography variant="h6" className='details'>
                  <span className='icons'>
                    <FontAwesomeIcon icon={faWind} />
                  </span>
                  <br />
                  Wind : {weatherData ? weatherData.wind.speed + 'MPH' : ''}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='search'>
          <div className='searchcontainer'>
            <input type='number' placeholder='Latitude' onChange={changeLat}></input>
            <input type='number' placeholder='Longitude' onChange={changeLon}></input>
          </div>
          <div className='sbtn'>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
          <div className='sbtn'>
            <button onClick={handleRefesh}>
              <FontAwesomeIcon icon={faArrowRotateLeft}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>



<div className='forconatiner'>
  {weekData.slice(0, showHiddenDivs ? weekData.length : 3).map((forecast, index) => (
    <div key={index} className='forecastdays'>
      <div className='forecast'>
        <div>
          <Typography variant="subtitle1" style={{ color: "#b2f1ff", fontWeight: "bold" }}>{forecast.date}</Typography>
          <Typography variant="h5">{(forecast.temp - 273.15).toFixed(2)}°C</Typography>
        </div>
        <div>
          <Typography variant="h6">
            <span className='icons'>
              {forecast.weather === 'Rain' ? (
                <FontAwesomeIcon icon={faCloudRain} style={{ color: "#b2f1ff" }} />
              ) : forecast.weather === 'Clouds' ? (
                <FontAwesomeIcon icon={faCloud} style={{ color: "#007bff" }} />
              ) : (
                <FontAwesomeIcon icon={faCloudSun} style={{ color: "#ffaf3f" }} />
              )}
            </span>
            {forecast.weather}
          </Typography>
        </div>
        <div>
          <Typography variant='subtitle1'>Humidity: {forecast.humidity}%</Typography>
          <Typography variant='subtitle1'>Wind: {forecast.wind}MPH</Typography>
        </div>
      </div>
    </div>
  ))}
</div>
       <div className='buttonclick'> {showHiddenDivs} </div> 
      <div className='containerbtn'>
        <div className='clcbtn'>
          <Button variant='contained' style={{ alignItems: 'center' }} onClick={() => setShowHiddenDivs(!showHiddenDivs)}>
            {showHiddenDivs ? 'See Less' : 'See More'}
          </Button>
        </div>
      </div>

    </div>
  );
}

export default Content;
