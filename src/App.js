import React from 'react';
import './appp.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import RecipesPage from './RecipesPage';
import AboutMePage from './AboutMePage';
import BlogPostForm from './BlogPostForm';

function App() {
  const [recipes, setRecipes] = useState([]); 
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/recipes"
            element={<RecipesPage recipes={recipes} />} 
          />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/write-blog" element={<BlogPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
