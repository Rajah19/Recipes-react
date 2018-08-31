import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({
  recipe,
  favorited,
  onClick,
  onFavorited,
}) => (
  <li
    key={recipe.id}
    className="py2 border-bottom border-bottom-dashed pointer"
    onClick={() => onClick(recipe.id)}
  >
    <span
      className="mr1 red"
      role="img"
      aria-label="favorited"
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
    >
      {favorited ? '✅' : '⬜' }
    </span>
    <span>{recipe.name}</span>
    <span>{recipe.catergory}</span>
  </li>
);

RecipeListItem.propsTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

export default RecipeListItem;
