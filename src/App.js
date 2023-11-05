
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Error from './components/Error.jsx';




function App() {
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />

        <Route path='*' element={<Error />} />




      </Routes>
    </div>
  );
}

export default App;
