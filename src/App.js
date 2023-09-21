import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
