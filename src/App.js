import './App.css';

function App() {
  return (
    <div class="container-fluid">
      <label >Name</label>
      <input type="text" name="name"/><br/>
      <label>Email</label>
      <input type="text" name="email"/><br/>
      <label>Mobile Numeber</label>
      <input type="number" name="number"/><br/>

      <div class="password-container">

      </div>

      <input type="submit" class="btn-primary"/>

    </div>
  );
}

export default App;
