import React from "react";
import { recipes, myMeals } from "./data";
import Meal from "./Components/Meal";
import styled from "styled-components";

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

class Filtered extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: "", filterVisibility: true };
    this.meals = myMeals;
  }

  handleChange = (event) => {
    this.setState({ filtered: event.target.value });
    this.meals = myMeals.filter(
      (mealObj) =>
        mealObj.ingredients.some(
          (ingredient) =>
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
        <div>
          <FilterBox>
            <FilterButton
              id='breakfast'
              onClick={(e) => {
                const id = e.target.id;
                this.meals = recipes[id];
                this.setState({ filter: "" });
              }}
            >
              Desayunos
            </FilterButton>
            <FilterButton
              onClick={(e) => {
                this.meals = recipes.lunch;
                this.setState({ filter: "" });
              }}
            >
              Comidas
            </FilterButton>
            <FilterButton
              onClick={(e) => {
                this.meals = recipes.dinner;
                this.setState({ filter: "" });
              }}
            >
              Cenas
            </FilterButton>
            <FilterButton
              onClick={(e) => {
                this.meals = recipes.smoothies;
                this.setState({ filter: "" });
              }}
            >
              Smoothies
            </FilterButton>
            <FilterButton
              onClick={(e) => {
                this.meals = recipes.breakfast
                  .concat(recipes.dinner)
                  .concat(recipes.smoothies);
                this.setState({ filter: "" });
              }}
            >
              Todo
            </FilterButton>
          </FilterBox>
        </div>
        <MealWrapper>
          {this.meals.map((meal) => (
            <Meal meal={meal} key={"meal-" + meal.name} />
          ))}
        </MealWrapper>
      </div>
    );
  }
}

export default Filtered;
