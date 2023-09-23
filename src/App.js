// This is setting up front end routes for conditional rendering of components

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume';
import {BrowserRouter, Routes, Route}from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* Path end points that conditionally render components */}
          <Route path="/" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
