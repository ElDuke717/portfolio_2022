import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


//import app elements
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import UnhandledError from './components/UnhandledError';

// App provides routing around the Portfolio site
const App = () => (
  <Router>
      <div className='route-container'> 
      
      <Header />
      
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path='/error' element={<UnhandledError/>} />
          <Route  element={<NotFound/>} />
        </Routes>
      
      <Footer />
      
      </div>
    
    </Router>
);

export default App;
