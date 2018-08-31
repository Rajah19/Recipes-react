import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './recipeListInfo';

const RecipeList = ({
  recipes,
  favorites,
  ...props
}) => {
  return (
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          favorited={favorites.includes(recipe.id)}
          {...props}
        />
      ))}
    </ul>
  );
};

RecipeList.propsTypes = {
  recipes: PropTypes.object,
  favorites: PropTypes.object,
};

export default RecipeList;
