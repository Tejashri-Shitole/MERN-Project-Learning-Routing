// import logo from './logo.svg';
import './App.css';
import AppNavbar from './Components/Navbar'; 
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Html from './Pages/Html';
import Css from './Pages/Css';
import JavaScript from './Pages/JavaScript';
import Angular from './Pages/Angular';
import ReactJs from './Pages/ReactJs';
import Footer from './Components/Footer';
import Courses from './Components/Courses';

function App() {
  return (
    <>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/html" element={<Html />} />
      <Route path="/css" element={<Css />} />
      <Route path="/javascript" element={<JavaScript />} />
      <Route path="/angular" element={<Angular />} />
      <Route path="/react" element={<ReactJs />} />
      <Route path="/courses" element={<Courses />} />

    </Routes>
    <Footer />
    
    </>
  );
}

export default App;
