import React from 'react';

const RecipeList = (props) => (
    <div style={props.style}>
        <h1> Recipes List</h1>
        <ul>
            <li>
                <span>Creepy Halloween Skull Cupcakes</span>
                <span>Desert</span>
            </li>
            <li>
                <span>Blueberry Sour  Cream Coffee Cakes</span>
                <span>Desert</span>
            </li>
            <li>
                <span>Amazing Pork Tenderloin in the Slow  Cooker</span>
                <span>Meat</span>
            </li>
        </ul>

    </div>
);

export default RecipeList;