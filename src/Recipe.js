

import React from 'react';

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <a href={recipe.link}>View Recipe</a>
    </div>
  );
}

export default Recipe;
