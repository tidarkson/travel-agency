import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightListings from "./components/FlightListing/FlightListings";
import Footer from "./components/HomePage/Footer";
import LandingPage from "./components/HomePage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/flight-listings" element={<FlightListings/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>      
    </>
  );
}

export default App;
