import React from 'react';
import RecipeList from './recipeList';

const Favorites = ({ state, toggleFavorite }) => (
  <div className="px4">
    <h1 className="h2">Favorites</h1>
    <RecipeList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorites={state.favorites}
      onFavorited={toggleFavorite}
    />
  </div>
);

export default Favorites;
