import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


//import app elements
import Header from './components/Header';
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
      <div> 
      <Header />
      
      <Routes>
        <Route exact path="/" component={()=><Main/>} />
        <Route path="/main" component={()=><Main/>} />
        <Route path="/about" component={()=><About/>} />
        <Route path="/contact" component={()=><Contact/>} />
        <Route path="/portfolio" component={()=><Portfolio/>} />
        <Route path="/resume" component={()=><Resume/>} />
        <Route path="/blog" component={()=><Blog/>} />
        <Route path='/error' component={UnhandledError} />
        <Route  component={NotFound} />
      </Routes>  
      </div>
    </Router>
);

export default App;
