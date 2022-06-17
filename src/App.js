// import logo from './logo.svg';
import homeImg from './assets/home-image.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={homeImg} alt="logo" />
      </header>
      <body>
        <img className="home-image" src={homeImg} alt="logo" />
      </body>
    </div>
  );
}

export default App;
