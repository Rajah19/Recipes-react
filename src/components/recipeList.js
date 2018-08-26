import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
    return (
        <div style={props.style}>
            <h1> Recipes List</h1>
            <ul className="list-reset">
                {props.recipes.map(recipe => (
                    <li
                        key={recipe.id}
                        className="py2 border-bottom border-bottom-dashed pointer"
                        onClick={() => props.onClick(recipe.id)}
                    >
                        <span>{recipe.name}</span>
                        <span>{recipe.catergory}</span>
                    </li>
                ))}

            </ul>

        </div>
    );
};

RecipeList.propsTypes = {
    recipes: PropTypes.object,
    style: PropTypes.object,
};

export default RecipeList;
