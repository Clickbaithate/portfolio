import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project'; // Import Project

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:index' element={<Project />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
