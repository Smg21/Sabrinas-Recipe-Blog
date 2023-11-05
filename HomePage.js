import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <img src="food_logo.png" alt="Food Logo" />
      <h1>Sabrina's Favorite Recipes</h1>
      <a href="link_to_recent_recipe">
        <img src="recent_recipe_image.png" alt="Recent Recipe" />
      </a>
    </div>
  );
}

export default HomePage;