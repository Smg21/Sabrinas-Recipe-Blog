// import React from 'react';

// function BlogPostForm() {
//   return (
//     <div className="blog-post-form">
//       {/* Create the form to write a blog post and upload a recipe */}
//     </div>
//   );
// }

// export default BlogPostForm;

import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    image: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = () => {
    if (recipe.title.trim() !== '' && recipe.description.trim() !== '') {
      addRecipe({ ...recipe, id: new Date().getTime() });
      setRecipe({
        title: '',
        description: '',
        ingredients: '',
        image: '',
        link: '',
      });
    }
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={recipe.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={recipe.description} onChange={handleChange} />
        </label>
        <label>
          Ingredients:
          <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="text" name="image" value={recipe.image} onChange={handleChange} />
        </label>
        <label>
          Link:
          <input type="text" name="link" value={recipe.link} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSubmit}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
