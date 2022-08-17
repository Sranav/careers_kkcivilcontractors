import "./App.css";
import ApplyJob from "./components/ApplyJob";
import BannerSection from "./components/BannerSection";
import CurrentOpening from "./components/CurrentOpening";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerSection />
      
        <CurrentOpening />
      <Footer/>

    </div>
  );
}

export default App;
