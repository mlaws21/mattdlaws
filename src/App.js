import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import CV from './components/CV.jsx';
import Error from './components/Error.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Home | Laws Portfolio</title>
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About | Laws Portfolio</title>
                </Helmet>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact | Laws Portfolio</title>
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Helmet>
                  <title>Projects | Laws Portfolio</title>
                </Helmet>
                <Projects />
              </>
            }
          />
          <Route
            path="/resume"
            element={
              <>
                <Helmet>
                  <title>Resume | Laws Portfolio</title>
                </Helmet>
                <Resume />
              </>
            }
          />
          <Route
            path="/cv"
            element={
              <>
                <Helmet>
                  <title>CV | Laws Portfolio</title>
                </Helmet>
                <CV />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>404 | Laws Portfolio</title>
                </Helmet>
                <Error />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
