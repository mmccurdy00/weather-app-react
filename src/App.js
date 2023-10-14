import "./App.css";

function App() {
  return (
    <div className="App">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">
          ?
        </button>
      </form>
      <h1>PARIS</h1>
      <h2>Tuesday 2:34 PM</h2>
      <img src="#" alt="weather icon" />
      <h1>8°C</h1>
      <hr />
      <div class="container text-center">
        <div class="row">
          <div class="col">Humidity: <br/> 28%</div>
          <div class="col">Feels Like: <br/> 19°C</div>
          <div class="col">Wind: <br/> 12 mph</div>
        </div>
      </div>
    </div>
  );
}

export default App;
