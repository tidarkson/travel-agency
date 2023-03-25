import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightListings from "./components/FlightListing/FlightListings";
import Footer from "./components/HomePage/Footer";
import LandingPage from "./components/HomePage/LandingPage";
import HotelListings from "./components/HotelListings/HotelListings";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/flight-listings" element={<FlightListings/>}/>
            <Route path="/hotel-listings" element={<HotelListings/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>      
    </>
  );
}

export default App;
