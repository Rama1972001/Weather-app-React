import "./current-weather.css";

const Weather = ({ data }) => {
    return (
        <div className="weather app__main">

            <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            <div className="top">

                <div>

                    <p className="weather-desc">{data.weather[0].description}</p>
                </div>

            </div>
            <div className="bottom">
                <p className="temperature"><h4>Temperature</h4>{Math.round(data.main.temp)}°C</p>
            </div>
            <div className="details">

                <div className="par-row">
                    <span className="par-l">Humidity</span>
                    <span className="par-v">{data.main.humidity}%</span>
                    <span className="par-l">Pressure</span>
                    <span className="par-v">{data.main.pressure} hPa</span>
                </div>

            </div>
        </div>
    )
}

export default Weather;