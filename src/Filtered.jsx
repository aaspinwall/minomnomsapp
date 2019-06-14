import React from "react";
import { recipes, myMeals } from "./data";
import Meal from "./Meal";

class Filtered extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: "", filterVisibility: true };
    this.meals = myMeals;
  }
  handleChange = event => {
    this.setState({ filtered: event.target.value });
    this.meals = myMeals.filter(
      mealObj =>
        mealObj.ingredients.some(
          ingredient =>
            this.find(event.target.value, ingredient.name) ||
            this.find(event.target.value, ingredient.notes)
        ) || this.find(event.target.value, mealObj.name)
    );
  };

  find(query, obj) {
    let reg = new RegExp(query, "i");
    console.log(reg);
    return reg.test(obj);
  }

  render() {
    return (
      <div className={"mainContainer"}>
        <form
          className={this.state.filterVisibility ? "searchBox" : "hide"}
          onSubmit={e => e.preventDefault()}
        >
          <h3>Filtrar por</h3>
          <label>Ingrediente: </label>
          <input type='text' onChange={this.handleChange} />
          <div>
            <button
              onClick={() => {
                this.setState({
                  filterVisibility: !this.state.filterVisibility,
                });
              }}
              className='searchBoxX'
            >
              X
            </button>
            <button
              onClick={() => {
                this.meals = recipes.breakfast;
                this.setState({ filter: "" });
              }}
            >
              Desayunos
            </button>
            <button
              onClick={() => {
                this.meals = recipes.lunch;
                this.setState({ filter: "" });
              }}
            >
              Comidas
            </button>
            <button
              onClick={() => {
                this.meals = recipes.dinner;
                this.setState({ filter: "" });
              }}
            >
              Cenas
            </button>
            <button
              onClick={() => {
                this.meals = recipes.smoothies;
                this.setState({ filter: "" });
              }}
            >
              Smoothies
            </button>
            <button
              onClick={() => {
                this.meals = recipes.breakfast
                  .concat(recipes.dinner)
                  .concat(recipes.smoothies);
                this.setState({ filter: "" });
              }}
            >
              Clear
            </button>
          </div>
        </form>
        {this.meals.map(meal => (
          <Meal meal={meal} key={"meal-" + meal.name} />
        ))}
      </div>
    );
  }
}

export default Filtered;
