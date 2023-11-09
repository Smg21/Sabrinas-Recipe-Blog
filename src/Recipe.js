import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipeSort from './RecipeSort';

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'date') {
      return b.id - a.id;
    } else if (sortBy === 'cookTime') {
      return a.cookTime - b.cookTime;
    }
  });

  return (
    <div>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeSort setSortBy={setSortBy} />
      <RecipeList recipes={sortedRecipes} />
    </div>
  );
}

export default Recipe;
