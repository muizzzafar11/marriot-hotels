import logo from './logo.svg';
import homeImg from './assets/home-image.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={homeImg} className="App-logo" alt="logo" />
      </header>
      <body>
        <img className="App-logo" src={logo} alt="logo" />
      </body>
    </div>
  );
}

export default App;
