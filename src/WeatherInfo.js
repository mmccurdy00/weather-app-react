import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" aria-label="Search" />
        <button class="btn btn-outline-dark" data-bs-theme="dark" type="submit">
          ?
        </button>
      </form>
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <WeatherIcon code={props.data.icon} size={52} />
      <WeatherTemperature celsius={props.data.temperature} />
      <hr />
      <div class="container text-center">
        <div class="row">
          <div class="col break-line">
            Humidity: <br /> {props.data.humidity}%
          </div>
          <div class="col">
            Wind: <br /> {props.data.wind} km/h
          </div>
        </div>
      </div>
      <a href="https://github.com/mmccurdy00/weather-app-react"><i class="fa-brands fa-square-github fa-xl"></i></a>
    </div>
  );
}

export default WeatherInfo;
