import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.title}</strong>
            {/* Display other recipe details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;