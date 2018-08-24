import React from 'react';

const ReipeDetail = (props) => {

    if (!props.recipe) {
        return (
            <p>
                Please choose recipe
            </p>
        );
    }

    return (

        <div style={props.style}>
            <h2> {props.recipe.name} </h2>
            <img src={props.recipe.image} alt=""/>

            <div>
                <span>{props.recipe.category}</span>
                <span>{props.recipe.calories}</span>
            </div>

            <h3>Ingredients</h3>
            <ul>
                {props.recipe.ingredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}
            </ul>

            <h3>Steps</h3>
            <ol>
                {props.recipe.steps.map(step => (
                    <li key={step}>
                        {step}
                    </li>
                ))}
            </ol>

        </div>
    );
};


export default ReipeDetail;