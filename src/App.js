import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavTabs from './components/Tabs';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import Reviews from './screens/ReviewScreen';
import Booking from './screens/BookingScreen';
import RoomsBooking from './screens/RoomsBookingScreen'
import Receipt from './screens/ReceiptScreen';
import FAQScreen from './screens/FAQScreen';

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
          <Route path="/Bookings" element={<RoomsBooking/>}/>
          <Route path="/FAQ" element={<FAQScreen/>}/>
        </Routes>
    </div>
  );
}

export default App;
