import React from 'react';
import './styles/app.css';
import './styles/theme.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import NavigationBar from './components/common/NavigationBar';
import HomePage from './components/home/HomePage';
import RecipesPage from './components/recipe/RecipesPage';
import AboutMePage from './components/about/AboutMePage';
import BlogPostForm from './components/blogpost/BlogPostForm';

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
