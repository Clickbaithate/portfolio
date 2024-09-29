import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/project';
import ScrollToTop from './components/scroll_to_top';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:index' element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
