import "./App.css";

function App() {
  return (
    <form action='/register'>
      <div class="form-group">
        <label for="name">Email address:</label>
        <input type="text" class="form-control" id="name" />
      </div>

      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email" />
      </div>

      <div class="form-group">
        <label for="number">Password:</label>
        <input type="number" class="form-control" id="number" />
      </div>
      <div class="password-container">

      </div>

      <button type="submit" class="btn btn-default">
        Submit
      </button>
    </form>
  );
}

export default App;
