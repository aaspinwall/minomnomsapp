import React from "react";
import { recipes, myMeals } from "./data";
import Meal from "./Meal";
import styled from "styled-components";
import { connect } from "react-redux";

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
      <div>
        <Search
          type='text'
          onChange={this.handleChange}
          value={this.state.filtered}
        />
        <form>
          <FilterBox>
            <FilterButton
              onClick={e => {
                e.preventDefault();
                this.meals = recipes.breakfast;
                this.setState({ filter: "" });
              }}
            >
              Desayunos
            </FilterButton>
            <FilterButton
              onClick={e => {
                e.preventDefault();
                this.meals = recipes.lunch;
                this.setState({ filter: "" });
              }}
            >
              Comidas
            </FilterButton>
            <FilterButton
              onClick={e => {
                e.preventDefault();
                this.meals = recipes.dinner;
                this.setState({ filter: "" });
              }}
            >
              Cenas
            </FilterButton>
            <FilterButton
              onClick={e => {
                e.preventDefault();
                this.meals = recipes.smoothies;
                this.setState({ filter: "" });
              }}
            >
              Smoothies
            </FilterButton>
            <FilterButton
              onClick={e => {
                e.preventDefault();
                this.meals = recipes.breakfast
                  .concat(recipes.dinner)
                  .concat(recipes.smoothies);
                this.setState({ filter: "" });
              }}
            >
              Clear
            </FilterButton>
          </FilterBox>
        </form>
        <MealWrapper>
          {this.meals.map(meal => (
            <Meal meal={meal} key={"meal-" + meal.name} />
          ))}
        </MealWrapper>
      </div>
    );
  }
}

const MealWrapper = styled.div`
  margin: 4rem 0 6rem 0;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 765px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Search = styled.input`
  position: fixed;
  width: 83%;
  margin: 1rem 60px;
  left: 0;
  top: 0;
  height: 22px;

  background: transparent;
  z-index: 999;

  /*   @media screen and (min-width: 1024px) {
    width: 100%;
  } */
  @media screen and (min-width: 765px) {
    width: 88%;
  }
  @media screen and (max-width: 362px) {
    width: 72%;
  }
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 999;

  @media screen and (max-width: 362px) {
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  border-radius: 10px;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

//export default Filtered;

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
