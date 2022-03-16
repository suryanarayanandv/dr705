import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div class="container p-7 align-center">
      <form action="/register">
        <div class="form-group">
          <label for="name">Name</label>
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
        <div class="password-container"></div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
