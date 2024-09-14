import React from 'react';

const RecipeSort = ({ setSortBy }) => {
  return (
    <div>
      <h2>Sort Recipes</h2>
      <button onClick={() => setSortBy('title')}>A-Z</button>
      <button onClick={() => setSortBy('date')}>Date</button>
      <button onClick={() => setSortBy('cookTime')}>Cook Time</button>
      {/* Add other sorting options */}
    </div>
  );
};

export default RecipeSort;