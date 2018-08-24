import React from 'react';

const RecipeList = (props) => {
    return (
        <div style={props.style}>
            <h1> Recipes List</h1>
            <ul>
                {props.recipes.map(recipe => (
                    <li
                        key={recipe.id}
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

export default RecipeList;