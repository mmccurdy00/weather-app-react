import "./App.css";

function App() {
  return (
    <div className="App">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" aria-label="Search" />
        <button class="btn btn-outline-dark" data-bs-theme="dark" type="submit">
          ?
        </button>
      </form>
      <h1>PARIS</h1>
      <h2>Tuesday 2:34 PM</h2>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
        alt="weather icon"
      />
      <h1 class="temp">8°C</h1>
      <hr />
      <div class="container text-center">
        <div class="row">
          <div class="col break-line">
            Humidity: <br /> 28%
          </div>
          <div class="col break-line">
            Feels Like: <br /> 19°C
          </div>
          <div class="col">
            Wind: <br /> 12 mph
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
