import React from 'react';
import './Home.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <img src="food_logo.png" alt="Food Logo" />
        <h1>Sabrina's Favorite Recipes</h1>
      </header>
      <div className="content">
        <section className="recent-recipe">
          <h2>Recent Recipe</h2>
          <a href="link_to_recent_recipe">
            <img src="recent_recipe_image.png" alt="Recent Recipe" />
          </a>
        </section>
        <section className="featured-recipes">
          <h2>Featured Recipes</h2>
          {/* Add featured recipe components here */}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
