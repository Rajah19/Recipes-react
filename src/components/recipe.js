import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from './reipeDetal';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    try {
      fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => {
          this.setState({ recipe });
        });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { recipe } = this.state;
    return (
      <div className="px4">
        <RecipeDetails recipe={recipe} />
      </div>
    );
  }
}

Recipe.propType = { match: PropTypes.object };

export default Recipe;
