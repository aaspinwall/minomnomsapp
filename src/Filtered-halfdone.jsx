import React from "react";
import { recipes, myMeals } from "./data";
import Meal from "./Meal";
import { connect } from "react-redux";

class Filtered extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: "",
      filterVisibility: true,
      filteredMeals: myMeals,
    };
    this.meals = myMeals;
  }
  componentDidMount() {
    console.log(this.props);
  }
  handleChange = event => {
    let filteredMeals = myMeals.filter(
      mealObj =>
        mealObj.ingredients.some(
          ingredient =>
            this.find(event.target.value, ingredient.name) ||
            this.find(event.target.value, ingredient.notes)
        ) || this.find(event.target.value, mealObj.name)
    );
    this.setState({
      filtered: event.target.value,
      filteredMeals: filteredMeals,
    });
    this.props.handleFilter();
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
        {this.state.filteredMeals.map(meal => (
          <Meal meal={meal} key={"meal-" + meal.name} />
        ))}
      </div>
    );
  }
}

let mapStateToProps = st => {
  return {
    counter: st.counter,
    meals: st.meals,
  };
};

const mapDispatchToProps = dispatch => ({
  handleFilter: evt =>
    dispatch({ type: "DISPLAYED_MEALS", meals: this.state.filteredMeals }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtered);
