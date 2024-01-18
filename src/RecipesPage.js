// RecipesPage.js
import React from 'react';
import Recipe from './Recipe';
import RecipeSort from './RecipeSort';
import RecipeForm from './RecipeForm';

function RecipesPage({ recipes, addRecipe, sortBy, setSortBy }) {
  return (
    <div>
      <h1>Recipes Page</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeSort setSortBy={setSortBy} />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}  addRecipe={addRecipe}/>
        ))}
      </div>
    </div>
  );
}

export default RecipesPage;
