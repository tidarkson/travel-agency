import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>      
    </>
  );
}

export default App;
