import React from "react";
import utility from "./utilityFunctions";
class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { className: "mealContainer" };
  }
  render() {
    const meal = this.props.meal;
    return (
      <div>
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
                  ${utility.capitalizeFirst(ingredient.name)}
                  ${
                    ingredient.notes
                      ? utility.capitalizeFirst(ingredient.notes)
                      : ""
                  }`}
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