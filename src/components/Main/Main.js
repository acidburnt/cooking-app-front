import React from 'react';
import api from './../../services/Api';

class Main extends React.Component {
  state = {
    recipes: [],
    error: null,
  }
  componentDidMount() {
    api().get('/recipes')
      .then((response) => {
        console.log(response.data);
        this.setState({ recipes: [...response.data.recipes] });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
  render() {
    const { recipes, error } = this.state;
    return (
      <div className="Main">
        {error && <div>Coś poszło nie tak.</div>}
        <CardList recipes={recipes} />
      </div>
    );
  }
}

export default Main;
