import React from 'react';
import Header from './header.js';
import RecipeList from './recipeList.js';
import RecipeDetail from './reipeDetal.js';

fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(json => console.log(json));

const App = () => (
    <div>
        <Header />
        <main style={{display: 'flex'}}>
            <RecipeList style={{flex: 3}} />
            <RecipeDetail style={{flex: 5}} />
        </main>
    </div>
);


export default App;