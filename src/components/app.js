import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Favorites from './favorites';
import Contact from './contact';
import NotFound from './notFound';
import Recipe from './recipe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
      error: null,
    };
    // this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    try {
      fetch(`${API_URL}/v1/recipes`)
        .then(res => res.json())
        .then(recipes => {
          this.setState({ recipes });
        });
    } catch (error) {
      this.setState({ error });
    }
  }

  toggleFavorite = id => {
    try {
      this.setState(({ favorites, ...state }) => {
        const idx = favorites.indexOf(id);

        if (idx !== -1) {
          return { ...state, favorites: favorites.filter(f => f !== id) };
        }
        return { ...state, favorites: [...favorites, id] };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />

          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  state={this.state}
                  toggleFavorite={this.toggleFavorite}
                />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  state={this.state}
                  toggleFavorite={this.toggleFavorite}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
