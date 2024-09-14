import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className="navbar">
      <Link to="/subscribe">Subscribe</Link>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/about">About Me</Link>
    </div>
  );
}

export default NavigationBar;