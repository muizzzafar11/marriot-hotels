import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavTabs from './components/Tabs';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import Reviews from './screens/ReviewScreen';
import Booking from './screens/BookingScreen';
import Receipt from './screens/ReceiptScreen';

function App() {
  return (
    <div className="App">
        <NavTabs/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Reviews" element={<Reviews/>}/>
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="/Receipt" element={<Receipt/>}/>
        </Routes>
    </div>
  );
}

export default App;
