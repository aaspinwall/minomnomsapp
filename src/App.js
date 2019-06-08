import React from "react";
import "./App.css";
import recipes from "./data";

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <a href='./'>
          <img src='imgs/paw.png' alt='paw' />
        </a>
      </nav>
    );
  }
}

let myMeals = recipes.breakfast
  .concat(recipes.dinner)
  .concat(recipes.smoothies);

/* class MyDay extends React.Component {
  render() {
    return (
      <div className={"mainContainer"}>
        {myMeals.map(meal => (
          <Meal meal={meal} key={"meal-" + meal.name} />
        ))}
      </div>
    );
  }
} */
class Filtered extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filtered: "" };
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
  componentDidMount() {
    console.log("Mounted");
  }
  render() {
    return (
      <div className={"mainContainer"}>
        <form className={"searchBox"} onSubmit={e => e.preventDefault()}>
          <h3>Filtrar por</h3>
          <label>Ingrediente: </label>
          <input type='text' onChange={this.handleChange} />
        </form>
        {this.meals.map(meal => (
          <Meal meal={meal} key={"meal-" + meal.name} />
        ))}
      </div>
    );
  }
}

class Meal extends React.Component {
  render() {
    const meal = this.props.meal;
    /*     const styled = {
      objectFit: "cover",
      height: "15rem",
      width: "10rem",
      borderRadius: "30px",
      padding: "1rem",
    }; */
    return (
      <div className='mealContainer'>
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

function App() {
  return (
    <div>
      <Nav />
      <Filtered />
    </div>
  );
}

export default App;
