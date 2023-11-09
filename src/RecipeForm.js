import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    photo: '',
    title: '',
    source: '',
    directions: '',
    ingredients: '',
    cookTime: '',
    prepTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = () => {
    addRecipe({ ...recipe, id: new Date() });
    setRecipe({
      photo: '',
      title: '',
      source: '',
      directions: '',
      ingredients: '',
      cookTime: '',
      prepTime: '',
    });
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <form>
        {/* Input fields for recipe details */}
        {/* Add appropriate input fields with name attributes */}
        <button type="button" onClick={handleSubmit}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;