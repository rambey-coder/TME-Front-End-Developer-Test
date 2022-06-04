import './App.css';
// import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <div className="logo">
          <h1>Dev<span>Hire</span></h1>
        </div>

        <div className="navigation">
          <div className="nav-container active">
            <span>
              <i class='bx bx-search'></i>
              <li>Home</li>
            </span>
          </div>

          <div className="nav-container">
            <span>
              <i class='bx bx-heart' ></i>
              <li>Favorites</li>
            </span>
          </div>
        </div>
      </div>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
