import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './recipeList';
import RecipeDetail from './reipeDetal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
      error: null,
    };
    // this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick = id => {
    try {
      fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then(currentRecipe => {
          this.setState({ currentRecipe });
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { recipes, favorites } = this.props.state;
    const { currentRecipe } = this.state;

    return (
      <div>
        <main className="px4 flex">

          <div style={{ flex: 3 }}>
            <h1> Recipes List</h1>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              style={{ flex: 3 }}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
            />
          </div>
          <RecipeDetail
            className="ml4"
            recipe={currentRecipe}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Home;
