import React from 'react';
import Header from './header.js';
import RecipeList from './recipeList.js';
import RecipeDetail from './reipeDetal.js';



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            recipes: [],
            currentRecipe: null,
            error:null,
        };

        // this.onRecipeClick = this.onRecipeClick.bind(this);
    }

    componentDidMount(){
        try{

            fetch(`${API_URL}/v1/recipes`)
                .then(res => res.json())
                .then(recipes => {
                    this.setState({ recipes });
                });
        } catch (error){
            this.setState({error});
        }
    }

    onRecipeClick = (id) => {
        try{

            fetch(`${API_URL}/v1/recipes/${id}`)
                .then(res => res.json())
                .then(currentRecipe => {
                    this.setState({ currentRecipe });
                });

        } catch (error){
            this.setState({error});
        }
    }

    render(){
        const { recipes, currentRecipe } = this.state;

        return(
            <div>
                <Header />
                <main className="px4 flex">
                    <RecipeList
                        recipes={recipes}
                        style={{flex: 3}}
                        onClick={this.onRecipeClick}
                    />
                    <RecipeDetail
                        className="ml4"
                        recipe={currentRecipe}
                        style={{flex: 5}}
                    />
                </main>
            </div>
        );
    }
}


export default App;