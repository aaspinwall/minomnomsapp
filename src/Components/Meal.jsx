import React from "react";
let selectedMeals = [];
class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "mealContainer", selected: false };
  }
  select = event => {
    this.setState(
      {
        selected: !this.state.selected,
      },
      () => {
        this.setState({
          className: this.state.selected
            ? "mealContainer selected"
            : "mealContainer",
        });
      }
    );
    selectedMeals.push(this.props.meal);
  };
  render() {
    const meal = this.props.meal;
    return (
      <div className={this.state.className} onClick={this.select}>
        <img src={meal.img ? meal.img : ""} alt={"whatever"} />
        <div>
          <h3>{meal.name.toUpperCase()}</h3>
          <ul>
            {meal.ingredients.map((ingredient, i) => {
              return (
                <li key={"ingredients-" + ingredient.name + i}>
                  <b>
                    {`
                  ${ingredient.quantity > 0 ? ingredient.quantity : ""} 
                  ${ingredient.unit ? ingredient.unit : ""} `}
                  </b>
                  {`
                  ${ingredient.name}
                  ${ingredient.notes ? ingredient.notes : ""}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Meal;
