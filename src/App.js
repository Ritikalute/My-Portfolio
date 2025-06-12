import logo from './logo.svg';
import './App.css';
import Navber from './Navber/Navber';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';


function App() {
  return (
    
    <Router>

    <div className="App">
      <Navber />
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/contact" element={<Contact/>} />






        </Routes>
      </div>
    </Router>
      
    
    // </div>
  );
}

export default App;
