
import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
