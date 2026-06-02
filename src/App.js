
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import CV from './components/CV.jsx';
import Publications from './components/Publications.jsx'
import Error from './components/Error.jsx';







function App() {
  return (
    <ThemeProvider>
      <div id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/cv' element={<CV />} />



          <Route path='*' element={<Error />} />




        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
