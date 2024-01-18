import React, { useState } from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipeSort from './RecipeSort';

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [newRecipe, setNewRecipe] = useState({ title: '', id: 0, cookTime: 0 });

  const addRecipe = () => {
    // Validate the new recipe data, and add it to the recipes list
    if (newRecipe.title.trim() !== '') {
      setRecipes([...recipes, newRecipe]);
      // Clear the new recipe form after adding it
      setNewRecipe({ title: '', id: 0, cookTime: 0 });
    }
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
      <RecipeForm
        addRecipe={addRecipe}
        newRecipe={newRecipe}
        setNewRecipe={setNewRecipe}
      />
      <RecipeSort setSortBy={setSortBy} />
      <RecipeList recipes={sortedRecipes} />
      <button onClick={addRecipe}>Add Recipe</button>
    </div>
  );
}

export default Recipe;
