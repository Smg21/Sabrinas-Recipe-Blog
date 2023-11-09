import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import fakeRecipes from './FakeRecipe';

function HomePage() {
  const location = useLocation();
  const [startIndex, setStartIndex] = useState(0);

  // Calculate the end index based on the start index
  const endIndex = startIndex + 2;

  // Get the three recipes to display
  const recipesToDisplay = fakeRecipes.slice(startIndex, endIndex + 1);

  // Function to handle changing the start index
  const nextRecipes = () => {
    if (endIndex + 1 >= fakeRecipes.length) {
      // If we have reached the end, reset to the beginning
      setStartIndex(0);
    } else {
      // Otherwise, move to the next set of recipes
      setStartIndex(startIndex + 3);
    }
  };

  useEffect(() => {
    // If the location changes, reset the start index to 0
    setStartIndex(0);
  }, [location]);

  return (
    <div className="homepage">
      <header className="header">
        <img src="food_logo.png" alt="Food Logo" />
        <h1>Sabrina's Favorite Recipes</h1>
      </header>
      <div className="content">
        <section className="featured-recipes">
          <h2>Featured Recipes</h2>
          <div className="recipe-list">
            {recipesToDisplay.map((recipe) => (
              <div key={recipe.id} className="recipe">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button onClick={nextRecipes}>Show Next Recipes</button>
        </section>
      </div>
    </div>
  );
}

export default HomePage;







